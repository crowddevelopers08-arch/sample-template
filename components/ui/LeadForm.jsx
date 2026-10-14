"use client";

import { useState } from "react";
import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnLg, btnPrimary } from "./classes";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const field =
  "w-full px-3.5 py-[13px] border border-[#cbd5e1] rounded-[10px] bg-white placeholder:text-[#757575] focus:outline-2 focus:outline-brand focus:border-transparent";

export default function LeadForm({ id, title, kicker, modal = false }) {
  const [msg, setMsg] = useState({ text: "", color: "" });
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = Object.fromEntries(new FormData(f));
    if (d.company) return; // honeypot
    if (!d.name?.trim() || !/^[6-9]\d{9}$/.test(d.phone || "") || !d.concern) {
      setMsg({ color: "#b91c1c", text: "Please enter your name, a valid 10-digit mobile number and concern." });
      return;
    }
    delete d.company;
    const p = new URLSearchParams(location.search);
    UTM_KEYS.forEach((k) => {
      if (p.get(k)) d[k] = p.get(k);
    });
    Object.assign(d, { page: location.href, clinic: C.clinic.name, time: new Date().toISOString() });

    setBusy(true);
    try {
      if (C.tracking.webhookUrl) {
        await fetch(C.tracking.webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(d),
          mode: "no-cors",
        });
      }
      try { window.fbq && window.fbq("track", C.tracking.metaPixelEvent); } catch (_) {}
      try { window.gtag && window.gtag("event", "generate_lead"); } catch (_) {}
      setMsg({ color: "#15803d", text: "✅ Thank you! Our team will call you shortly." });
      window.__leadDone = 1;
      try { sessionStorage.setItem("lead_done", "1"); } catch (_) {}
      window.dispatchEvent(new Event("lead:done")); // closes the popup after 2.2s
      f.reset();
      if (C.tracking.thankYouUrl) {
        location.href = C.tracking.thankYouUrl;
        return;
      }
      if (!C.tracking.webhookUrl) {
        window.open(
          `https://wa.me/${C.clinic.whatsapp}?text=${encodeURIComponent(`Hi, I'm ${d.name}. Concern: ${d.concern}. Phone: ${d.phone}`)}`,
          "_blank"
        );
      }
    } catch (_) {
      setMsg({ color: "#b91c1c", text: "Something went wrong. Please call us directly." });
    }
    setBusy(false);
  }

  return (
    <form
      id={id}
      noValidate
      onSubmit={onSubmit}
      className={`bg-white rounded-[16px] p-[26px] border-t-[5px] border-accent ${
        modal ? "shadow-[0_24px_70px_rgba(0,0,0,.4)]" : "shadow-[0_18px_50px_rgba(15,23,42,.15)]"
      }`}
    >
      {kicker && (
        <span className="inline-block bg-accent text-[#1a1200] font-bold text-[12px] px-3 py-[3px] rounded-full mb-2">
          {kicker}
        </span>
      )}
      <h3 className="font-head font-bold leading-[1.2] text-[21px] mb-1">{title || C.form.title}</h3>
      <p className="text-[13px] text-muted mb-3.5">{C.form.note}</p>
      <input className="absolute left-[-9999px]" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="mb-3">
        <input className={field} name="name" placeholder="Full Name *" required autoComplete="name" />
      </div>
      <div className="mb-3">
        <input
          className={field}
          name="phone"
          type="tel"
          inputMode="numeric"
          placeholder="Mobile Number *"
          required
          pattern="[6-9][0-9]{9}"
          maxLength={10}
          autoComplete="tel-national"
        />
      </div>
      <div className="mb-3">
        <select className={field} name="concern" required defaultValue="">
          <option value="">{C.form.concernLabel} *</option>
          {C.form.concerns.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      {C.form.askCity && (
        <div className="mb-3">
          <input className={field} name="city" placeholder="City / Pincode" />
        </div>
      )}
      {C.form.askMessage && (
        <div className="mb-3">
          <textarea className={field} name="message" rows={3} placeholder="Describe your problem (optional)" />
        </div>
      )}
      <button className={`${btn} ${btnLg} ${btnPrimary} w-full disabled:cursor-default`} type="submit" disabled={busy}>
        {busy ? "Submitting…" : C.form.button}
      </button>
      <p className="text-[12px] text-muted mt-2.5 text-center">{C.form.privacyText}</p>
      <p className="mt-2.5 text-[14px] font-semibold text-center" role="status" style={{ color: msg.color }}>
        {msg.text}
      </p>
    </form>
  );
}
