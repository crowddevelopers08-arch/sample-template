"use client";

import { useState } from "react";
import { CONFIG as C } from "@/lib/siteConfig";
import { Star } from "./icons";

const FACES = ["😌", "😞", "😕", "😐", "🙂", "😍"]; // index = rating; 0 = nothing picked yet

// 4–5 stars → Google review page; 1–3 stars → private feedback form (/client-feedback)
export default function RatingPicker() {
  const [hover, setHover] = useState(0);
  const [picked, setPicked] = useState(0);
  const shown = picked || hover;
  const { positiveMin } = C.review;

  function pick(n) {
    if (picked) return;
    setPicked(n);
    setTimeout(() => {
      location.href = n >= positiveMin ? C.review.googleReviewUrl || C.clinic.mapLink : `/client-feedback?rating=${n}`;
    }, 450);
  }

  return (
    <div className="mt-7 flex flex-col items-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-[var(--r-line)] bg-[var(--r-canvas)] sm:h-20 sm:w-20">
        <span key={shown} aria-hidden="true" className="animate-scale-in text-[2.1rem] leading-none sm:text-[2.4rem]">
          {FACES[shown]}
        </span>
      </div>
      <h1 className="mt-6 text-center text-[clamp(1.65rem,5.6vw,2.1rem)] leading-tight text-[var(--r-brand-deep)]">
        How was your experience?
      </h1>
      <p className="mx-auto mt-2.5 max-w-[34ch] text-center text-[0.92rem] leading-relaxed text-[var(--r-muted)] sm:text-[0.98rem]">
        Please rate your visit. Your feedback helps us improve our care.
      </p>
      <div
        role="group"
        aria-label="Rate your experience out of 5"
        className="mt-7 flex items-center justify-center gap-2 sm:gap-2.5"
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((n) => {
          const on = n <= shown;
          return (
            <button
              key={n}
              type="button"
              disabled={!!picked}
              aria-label={`${n} star${n === 1 ? "" : "s"}`}
              onMouseEnter={() => setHover(n)}
              onFocus={() => setHover(n)}
              onBlur={() => setHover(0)}
              onClick={() => pick(n)}
              className={`flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-2xl border transition-all duration-200 focus-visible:outline-none disabled:cursor-default sm:h-14 sm:w-14 ${
                on
                  ? "-translate-y-0.5 border-[var(--r-star-line)] bg-[var(--r-star-soft)]"
                  : "border-[var(--r-line)] bg-[var(--r-canvas)] hover:border-[var(--r-star-line)]"
              }`}
            >
              <Star
                className={`h-5 w-5 transition-colors duration-200 sm:h-6 sm:w-6 ${
                  on ? "fill-[var(--r-star)] text-[var(--r-star)]" : "fill-[var(--r-line)] text-[var(--r-line)]"
                }`}
              />
            </button>
          );
        })}
      </div>
      <p
        aria-live="polite"
        className="mt-5 min-h-[1.1rem] text-center text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--r-brand-deep)]"
      >
        {!picked
          ? "Select your rating"
          : picked >= positiveMin
            ? "Thank you — taking you to Google"
            : "Thank you — one more step"}
      </p>
    </div>
  );
}
