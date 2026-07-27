import { inquiryValues } from "../src/config/inquiryOptions.js";
import { formEndpoints } from "../config/formEndpoints.js";

const ALLOWED_INQUIRIES = new Set(inquiryValues);
const GOOGLE_REQUEST_TIMEOUT_MS = 25000;

const clean = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const normalizePhone = (value) => {
  const rawPhone = clean(value, 30);
  const phoneDigits = rawPhone.replace(/\D/g, "").slice(0, 15);

  return rawPhone.startsWith("+") ? `+${phoneDigits}` : phoneDigits;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const body =
    typeof request.body === "string"
      ? Object.fromEntries(new URLSearchParams(request.body))
      : request.body || {};

  const submission = {
    name: clean(body.name, 100),
    email: clean(body.email, 254),
    phone: normalizePhone(body.phone),
    inquiry: clean(body.inquiry, 100),
    comment: clean(body.comment, 2000),
  };

  if (
    !submission.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) ||
    !/^\+?\d{7,15}$/.test(submission.phone) ||
    !ALLOWED_INQUIRIES.has(submission.inquiry) ||
    !submission.comment
  ) {
    return response.status(400).json({ ok: false, error: "Invalid form submission." });
  }

  try {
    const googleResponse = await fetch(formEndpoints.productInquiry, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(submission),
      signal: AbortSignal.timeout(GOOGLE_REQUEST_TIMEOUT_MS),
      redirect: "follow",
    });

    if (!googleResponse.ok) {
      throw new Error(`Google Apps Script returned ${googleResponse.status}.`);
    }

    const result = await googleResponse.json();
    if (!result.ok) {
      throw new Error(result.error || "Google Apps Script rejected the submission.");
    }

    return response.status(200).json({
      ok: true,
      sheet: result.sheet,
      row: result.row,
    });
  } catch (error) {
    console.error("Inquiry submission error:", {
      name: error?.name,
      message: error?.message,
      cause: error?.cause?.message,
    });
    return response.status(502).json({ ok: false, error: "Unable to save inquiry." });
  }
}
