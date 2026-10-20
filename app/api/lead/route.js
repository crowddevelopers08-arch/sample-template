import { CONFIG as C } from "@/lib/siteConfig";
import { istNow, postToSheet } from "@/lib/sheets";
import { normalizeIndianPhone, sendToTeleCRM } from "@/lib/telecrm";

// Booking form → in parallel:
//  - Google Apps Script web app (google-apps-script/Code.gs) → "Physiora LP Leads" tab
//  - TeleCRM (Lead Request Type "consultation")
// The visitor sees success if at least one of the two saved the lead.

const SOURCE = "The Physiora LP";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const phone = normalizeIndianPhone(body.phone);
  const concern = String(body.concern || "");
  const pageUrl = String(body.pageUrl || "").slice(0, 300);

  if (body.company) return Response.json({ success: true }); // honeypot: pretend success, store nothing
  if (!name || !/^[6-9]\d{9}$/.test(phone) || !C.form.concerns.includes(concern)) {
    return Response.json({ error: "Please enter your name, a valid 10-digit mobile number and concern." }, { status: 400 });
  }

  const [sheet, crm] = await Promise.allSettled([
    postToSheet({ action: "lead", timestamp: istNow(), name, phone: `+91${phone}`, concern }),
    sendToTeleCRM({
      name,
      phone,
      message: `Consultation enquiry - ${concern} at ${C.clinic.name}`,
      requestType: "consultation",
      pageName: "physiora-lp",
      notes: [
        `Lead Source: ${SOURCE}`,
        `Live URL: ${pageUrl || "Not provided"}`,
        `Concern: ${concern}`,
      ],
    }),
  ]);

  if (sheet.status === "rejected") console.error("[Google Sheets - Lead]", sheet.reason);
  if (crm.status === "rejected") console.error("[TeleCRM - Lead]", crm.reason);

  if (sheet.status === "rejected" && crm.status === "rejected") {
    return Response.json({ error: "Could not submit right now. Please call us directly." }, { status: 502 });
  }
  return Response.json({
    success: true,
    sheet: sheet.status === "fulfilled" ? "ok" : "failed",
    crm: crm.status === "fulfilled" ? "ok" : "failed",
  });
}
