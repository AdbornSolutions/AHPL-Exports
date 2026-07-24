/* global process */

const ALLOWED_INQUIRIES = new Set([
  "Handicraft",
  "Metal Table Decor",
  "Metal Wall Decor",
  "Polyresin Decor",
  "Marble Decor",
  "Lifestyle & Utility",
  "Wooden Decor",
  "Industrial V-Belts",
  "Saffron",
]);

const clean = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  if (!endpoint) {
    console.error("GOOGLE_SHEETS_WEB_APP_URL is not configured.");
    return response.status(503).json({ ok: false, error: "Form service is unavailable." });
  }

  const body =
    typeof request.body === "string"
      ? Object.fromEntries(new URLSearchParams(request.body))
      : request.body || {};

  const submission = {
    name: clean(body.name, 100),
    email: clean(body.email, 254),
    phone: clean(body.phone, 20),
    inquiry: clean(body.inquiry, 100),
    comment: clean(body.comment, 2000),
  };

  if (
    !submission.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) ||
    !/^[+()\d\s.-]{7,20}$/.test(submission.phone) ||
    !ALLOWED_INQUIRIES.has(submission.inquiry) ||
    !submission.comment
  ) {
    return response.status(400).json({ ok: false, error: "Invalid form submission." });
  }

  try {
    const googleResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(submission),
      signal: AbortSignal.timeout(10000),
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
    console.error("Inquiry submission error:", error);
    return response.status(502).json({ ok: false, error: "Unable to save inquiry." });
  }
}
