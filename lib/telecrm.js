// Server-only TeleCRM "autoupdatelead" client shared by /api/lead and /api/feedback.
//
// TeleCRM answers 200 {"result":"Accepted"} straight away and creates the lead later, so a field it can't map
// fails silently. `fields` therefore only carries the standard Grow Medico lead fields; everything page-specific
// (concern, rating, suggestions, URL) goes into SYSTEM_NOTE actions, which can't fail on a field mismatch.
// Endpoint + key live in TELECRM_API_URL / TELECRM_API_KEY (.env.local and the hosting env vars).

const CITY = "Chennai";
const STATE = "Tamil Nadu";
const CLIENT_ID = "the-physiora-website";

/** Ten-digit Indian mobile number, without +91 / 0 prefix. */
export function normalizeIndianPhone(raw) {
  return String(raw || "").replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
}

/**
 * @param {{ name: string, phone: string, email?: string, message: string,
 *           requestType: "consultation" | "feedback", pageName: string, notes: string[] }} lead
 */
export async function sendToTeleCRM(lead) {
  const endpoint = process.env.TELECRM_API_URL;
  const apiKey = process.env.TELECRM_API_KEY;
  if (!endpoint) throw new Error("TELECRM_API_URL is not set");
  if (!apiKey) throw new Error("TELECRM_API_KEY is not set");

  const createdOn = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const email = lead.email?.trim() || "";

  const payload = {
    fields: {
      name: lead.name.trim(),
      phone: normalizeIndianPhone(lead.phone),
      ...(email ? { email } : {}),
      city_1: CITY,
      message: lead.message,
      Country: "India",
      State: STATE,
      CreatedOn: createdOn,
      "Lead Status": "new",
      "Lead Request Type": lead.requestType,
      PageName: lead.pageName,
    },
    actions: lead.notes.map((text) => ({ type: "SYSTEM_NOTE", text })),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "X-Client-ID": CLIENT_ID,
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });

    if (res.status === 204) return { result: "Accepted" };

    const text = await res.text();
    if (text.trim().startsWith("<")) {
      throw new Error(`TeleCRM returned HTML (HTTP ${res.status}) - check TELECRM_API_URL`);
    }

    let json = {};
    try {
      json = text ? JSON.parse(text) : {};
    } catch {
      // non-JSON body
    }
    if (!res.ok || json.error) {
      throw new Error(`TeleCRM HTTP ${res.status}: ${json.error || json.message || text || "no body"}`);
    }
    return json;
  } finally {
    clearTimeout(timeout);
  }
}
