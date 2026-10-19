// Shared Tailwind class strings — the 1:1 equivalents of the original template's CSS classes.

export const wrap = "max-w-[1140px] mx-auto px-[18px]";
export const section = "py-10 sm:py-14";

export const h2 = "font-head font-bold leading-[1.2] text-[clamp(24px,3.6vw,34px)] mb-2.5";
export const h3 = "font-head font-bold leading-[1.2] text-[18px]";

export const eyebrow = "inline-block text-brand font-bold text-[13px] tracking-[.08em] uppercase mb-2";

export const card =
  "bg-white border border-line rounded-[16px] p-[22px] shadow-[0_10px_30px_rgba(15,23,42,.08)]";
export const cardText = "text-muted text-[15px] mt-1.5";
export const icon = "w-[46px] h-[46px] rounded-xl bg-soft grid place-items-center text-[22px] mb-3";

export const grid3 = "grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
export const grid4 = "grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

// buttons: base + size + variant (kept separate so sizes never conflict)
export const btn =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold cursor-pointer transition-all duration-200 text-center leading-[1.3] max-w-full";
// smaller on phones so long CTA labels fit on one or two balanced lines
export const btnLg = "px-5 py-3 text-[15px] sm:px-[26px] sm:py-[14px] sm:text-[16px] [text-wrap:balance]";
export const btnPrimary =
  "bg-accent text-[#1a1200] shadow-[0_4px_14px_rgba(255,210,31,.45)] hover:bg-accent-dark hover:text-black hover:-translate-y-px";
export const btnBrand = "bg-brand text-white hover:bg-brand-dark";
export const btnGhost = "bg-white text-brand border-2 border-brand";
