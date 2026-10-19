import { CONFIG as C } from "@/lib/siteConfig";

// Booking form → Google Apps Script web app (google-apps-script/Code.gs) → "Physiora LP Leads" tab.
// The /exec URL lives in GOOGLE_SHEETS_WEBHOOK_URL (.env.local / hosting env vars), never in the browser.

export async function POST(req) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return Response.json({ error: "Lead capture is not configured" }, { status: 500 });

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const phone = String(body.phone || "").replace(/\D/g, "");
  const concern = String(body.concern || "");

  if (body.company) return Response.json({ success: true }); // honeypot: pretend success, store nothing
  if (!name || !/^[6-9]\d{9}$/.test(phone) || !C.form.concerns.includes(concern)) {
    return Response.json({ error: "Please enter your name, a valid 10-digit mobile number and concern." }, { status: 400 });
  }

  const payload = {
    action: "lead",
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    name,
    phone: `+91${phone}`,
    concern,
  };

  try {
    // Apps Script answers with a 302 to googleusercontent.com; fetch follows it and returns the JSON.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.success) throw new Error(json.error || `Sheets HTTP ${res.status}`);
    return Response.json({ success: true });
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return Response.json({ error: "Could not submit right now. Please call us directly." }, { status: 502 });
  }
}
