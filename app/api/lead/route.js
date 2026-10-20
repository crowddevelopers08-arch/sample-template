import { CONFIG as C } from "@/lib/siteConfig";
import { istNow, postToSheet } from "@/lib/sheets";

// Booking form → Google Apps Script web app (google-apps-script/Code.gs) → "Physiora LP Leads" tab.

export async function POST(req) {
  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    return Response.json({ error: "Lead capture is not configured" }, { status: 500 });
  }

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

  try {
    await postToSheet({ action: "lead", timestamp: istNow(), name, phone: `+91${phone}`, concern });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return Response.json({ error: "Could not submit right now. Please call us directly." }, { status: 502 });
  }
}
