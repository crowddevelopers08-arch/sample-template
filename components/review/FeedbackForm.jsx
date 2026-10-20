"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG as C } from "@/lib/siteConfig";
import { ArrowLeft, CircleCheck, Star } from "lucide-react";

const EMPTY = { name: "", email: "", phone: "", suggestions: "" };

const field =
  "w-full rounded-xl border border-[var(--r-line)] bg-[var(--r-canvas)] px-4 py-2.5 text-[0.95rem] text-[var(--r-ink)] transition-all duration-150 focus:border-[var(--r-brand)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--r-brand-soft)] disabled:cursor-not-allowed disabled:opacity-60";

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[var(--r-muted)]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

// Low-rating feedback → /api/feedback → Google Sheet "Physiora Feedback" tab (see google-apps-script/Code.gs)
export default function FeedbackForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const r = Number(new URLSearchParams(location.search).get("rating"));
    if (Number.isInteger(r) && r >= 1 && r <= 5) setRating(r);
  }, []);

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (msg) setMsg(null);
  };

  async function onSubmit(e) {
    e.preventDefault();
    const f = formRef.current;
    if (f && !f.checkValidity()) {
      f.reportValidity();
      return;
    }

    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, rating, pageUrl: location.href, company: f?.company?.value }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg({ type: "success", text: "Thank you — your feedback has reached our team." });
        setValues(EMPTY);
      } else {
        setMsg({ type: "error", text: json.error || "We couldn't submit that. Please try again." });
      }
    } catch {
      setMsg({ type: "error", text: "Network error. Please check your connection and try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="mb-6 text-center">
        <h1 className="text-[clamp(1.7rem,5.6vw,2.5rem)] leading-tight text-[var(--r-brand-deep)]">Help Us Improve</h1>
        <p className="mx-auto mt-2.5 max-w-[46ch] text-[0.9rem] leading-relaxed text-[var(--r-muted)] sm:text-[0.98rem]">
          Tell us what didn&apos;t meet your expectations. We genuinely value your feedback and will work on making
          things better.
        </p>
        {rating > 0 && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--r-star-soft)] px-3.5 py-1.5">
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`h-3.5 w-3.5 ${
                    n <= rating ? "fill-[var(--r-star)] text-[var(--r-star)]" : "fill-transparent text-[var(--r-star-line)]"
                  }`}
                />
              ))}
            </span>
            <span className="text-[0.78rem] font-semibold text-[var(--r-star-deep)]">You rated us {rating} out of 5</span>
          </p>
        )}
      </div>

      {msg && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-5 flex items-start gap-2.5 rounded-2xl border-l-4 p-4 text-[0.9rem] leading-relaxed ${
            msg.type === "success"
              ? "border-[var(--r-brand)] bg-[var(--r-brand-soft)] text-[var(--r-brand-deep)]"
              : "border-red-500 bg-red-50 text-red-800"
          }`}
        >
          {msg.type === "success" && <CircleCheck className="mt-0.5 h-4 w-4 flex-none" />}
          {msg.text}
        </div>
      )}

      <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-3.5">
        <input className="absolute left-[-9999px]" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <Field label="Full Name" htmlFor="fb-name">
          <input
            id="fb-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            disabled={busy}
            placeholder="Your full name"
            className={field}
          />
        </Field>
        <Field label="Email Address" htmlFor="fb-email">
          <input
            id="fb-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            disabled={busy}
            placeholder="you@example.com"
            className={field}
          />
        </Field>
        <Field label="Phone Number" htmlFor="fb-phone">
          <input
            id="fb-phone"
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            autoComplete="tel"
            value={values.phone}
            onChange={onChange}
            disabled={busy}
            placeholder="10-digit mobile number"
            className={field}
          />
        </Field>
        <Field label="Your Suggestions" htmlFor="fb-suggestions">
          <textarea
            id="fb-suggestions"
            name="suggestions"
            required
            rows={4}
            value={values.suggestions}
            onChange={onChange}
            disabled={busy}
            placeholder="Tell us what we could have done better..."
            className={`${field} resize-none`}
          />
        </Field>
        <button
          type="submit"
          disabled={busy}
          style={{ paddingTop: 13, paddingBottom: 13 }}
          className="r-btn r-btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {busy ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>

      <a href="/review" className="r-btn r-btn-ghost mt-3 w-full">
        <ArrowLeft className="h-4 w-4" />
        Back
      </a>

      <p className="mt-4 text-center text-[0.8rem] leading-relaxed text-[var(--r-muted)]">
        Prefer to talk?{" "}
        <a href={`tel:${C.clinic.phone}`} data-call="1" className="font-semibold text-[var(--r-brand-deep)]">
          {C.clinic.phoneDisplay}
        </a>
      </p>
    </>
  );
}
