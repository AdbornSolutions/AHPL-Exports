/* global process */

const clean = (value, maxLength) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const endpoint = process.env.GOOGLE_CONTACT_SHEETS_WEB_APP_URL;
  if (!endpoint) {
    console.error("GOOGLE_CONTACT_SHEETS_WEB_APP_URL is not configured.");
    return response.status(503).json({ ok: false, error: "Contact form service is unavailable." });
  }

  const body =
    typeof request.body === "string"
      ? Object.fromEntries(new URLSearchParams(request.body))
      : request.body || {};

  const submission = {
    name: clean(body.name, 100),
    phone: clean(body.phone, 20),
    email: clean(body.email, 254),
    service: clean(body.service, 150),
    message: clean(body.message, 2000),
  };

  if (
    !submission.name ||
    !/^[+()\d\s.-]{7,20}$/.test(submission.phone) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) ||
    !submission.service ||
    !submission.message
  ) {
    return response.status(400).json({ ok: false, error: "Invalid contact form submission." });
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
      throw new Error(result.error || "Google Apps Script rejected the contact submission.");
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact inquiry submission error:", error);
    return response.status(502).json({ ok: false, error: "Unable to save contact inquiry." });
  }
}
