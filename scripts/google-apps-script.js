/**
 * Google Apps Script receiver for the AHPL "Get in Touch" form.
 *
 * Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1gmsnFDBd1_oCiBsi4AzCJn9FqIUAXHDi6c-0qQVwCPE/edit
 *
 * Required first-row headers in the "Product Inquery" tab:
 * Name | Email | Phone | Inquiry | Comment
 */
/* global ContentService, LockService, SpreadsheetApp */
const SPREADSHEET_ID = "1gmsnFDBd1_oCiBsi4AzCJn9FqIUAXHDi6c-0qQVwCPE";
const SHEET_NAME = "Product Inquery";
const REQUIRED_HEADERS = ["Name", "Email", "Phone", "Inquiry", "Comment"];
const ALLOWED_INQUIRIES = [
  "Handicraft",
  "Metal Table Decor",
  "Metal Wall Decor",
  "Polyresin Decor",
  "Marble Decor",
  "Lifestyle & Utility",
  "Wooden Decor",
  "Industrial V-Belts",
  "Saffron",
];

// Google Apps Script invokes this function when the Web App receives a POST.
// eslint-disable-next-line no-unused-vars
function doPost(event) {
  try {
    const data = event && event.parameter ? event.parameter : {};

    // Never report a skipped honeypot submission as successfully written.
    if (data.website) {
      throw new Error("Submission rejected by spam protection.");
    }

    const submission = {
      Name: clean(data.name, 100),
      Email: clean(data.email, 254),
      Phone: clean(data.phone, 20),
      Inquiry: clean(data.inquiry, 100),
      Comment: clean(data.comment, 2000),
    };

    validateSubmission(submission);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheets = spreadsheet.getSheets();
      const sheet =
        spreadsheet.getSheetByName(SHEET_NAME) ||
        (sheets.length === 1 ? sheets[0] : null);

      if (!sheet) {
        throw new Error(
          `Sheet tab "${SHEET_NAME}" was not found. Available tabs: ${sheets
            .map((item) => item.getName())
            .join(", ")}`,
        );
      }

      const lastColumn = sheet.getLastColumn();
      const headers = lastColumn
        ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0].map(String)
        : [];

      const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header));
      if (missingHeaders.length) {
        throw new Error(`Missing sheet headers: ${missingHeaders.join(", ")}`);
      }

      const row = headers.map((header) => safeSheetValue(submission[header] || ""));
      const rowNumber = sheet.getLastRow() + 1;
      sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);

      SpreadsheetApp.flush();

      return jsonResponse({
        ok: true,
        sheet: sheet.getName(),
        row: rowNumber,
      });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: String(error.message || error) });
  }
}

function validateSubmission(submission) {
  REQUIRED_HEADERS.forEach((header) => {
    if (!submission[header]) {
      throw new Error(`${header} is required.`);
    }
  });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.Email)) {
    throw new Error("A valid email address is required.");
  }

  if (!/^[+()\d\s.-]{7,20}$/.test(submission.Phone)) {
    throw new Error("A valid phone number is required.");
  }

  if (!ALLOWED_INQUIRIES.includes(submission.Inquiry)) {
    throw new Error("The selected inquiry is not allowed.");
  }
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function safeSheetValue(value) {
  // Prevent spreadsheet formulas from being injected through form fields.
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
