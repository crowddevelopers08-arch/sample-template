import { istNow, postToSheet } from "@/lib/sheets";

// /client-feedback form → Google Apps Script web app (google-apps-script/Code.gs) → "Physiora Feedback" tab.

export async function POST(req) {
  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    return Response.json({ error: "Feedback is not configured yet. Please call us directly." }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(body.name || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 150);
  const phone = String(body.phone || "").replace(/\D/g, "");
  const suggestions = String(body.suggestions || "").trim().slice(0, 2000);
  const rating = Number(body.rating);
  const pageUrl = String(body.pageUrl || "").slice(0, 300);

  if (body.company) return Response.json({ success: true }); // honeypot: pretend success, store nothing
  if (!name) return Response.json({ error: "Please enter your full name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return Response.json({ error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
  }
  if (!suggestions) return Response.json({ error: "Please share your suggestions." }, { status: 400 });

  try {
    await postToSheet({
      action: "feedback",
      timestamp: istNow(),
      name,
      email,
      phone: `+91${phone}`,
      rating: Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : "",
      suggestions,
      pageUrl,
    });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Feedback webhook failed:", err);
    return Response.json({ error: "We couldn't submit that right now. Please call us directly." }, { status: 502 });
  }
}
