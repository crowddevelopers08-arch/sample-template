// Server-only: posts a payload to the Google Apps Script web app (google-apps-script/Code.gs).
// The /exec URL lives in GOOGLE_SHEETS_WEBHOOK_URL (.env.local / hosting env vars), never in the browser.

export const istNow = () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

export async function postToSheet(payload) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is not set");

  // Apps Script answers with a 302 to googleusercontent.com; fetch follows it and returns the JSON.
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.success) throw new Error(json.error || `Sheets HTTP ${res.status}`);
  return json;
}
