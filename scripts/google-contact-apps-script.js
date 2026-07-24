/**
 * Google Apps Script receiver for the Contact Us "Send Us an Inquiry" form.
 *
 * Required first-row headers:
 * Name | Phone | Email | Service | Message
 */
/* global ContentService, LockService, SpreadsheetApp */

const SPREADSHEET_ID = "10eWdZBq3apYxzqjYhdVjacjDdmBxLqUZs695-gUocsY";
const SHEET_NAME = "Contact us Inquery";
const REQUIRED_HEADERS = ["Name", "Phone", "Email", "Service", "Message"];

// Google Apps Script invokes this function for Web App POST requests.
// eslint-disable-next-line no-unused-vars
function doPost(event) {
  try {
    const data = event && event.parameter ? event.parameter : {};
    const submission = {
      Name: clean(data.name, 100),
      Phone: clean(data.phone, 20),
      Email: clean(data.email, 254),
      Service: clean(data.service, 150),
      Message: clean(data.message, 2000),
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
        ? sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0].map((header) => header.trim())
        : [];
      const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header));

      if (missingHeaders.length) {
        throw new Error(`Missing sheet headers: ${missingHeaders.join(", ")}`);
      }

      const row = headers.map((header) => safeSheetValue(submission[header] || ""));
      const rowNumber = sheet.getLastRow() + 1;
      sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);
      SpreadsheetApp.flush();

      return jsonResponse({ ok: true, sheet: sheet.getName(), row: rowNumber });
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

  if (!/^[+()\d\s.-]{7,20}$/.test(submission.Phone)) {
    throw new Error("A valid phone number is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.Email)) {
    throw new Error("A valid email address is required.");
  }
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function safeSheetValue(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
