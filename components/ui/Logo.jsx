import { CONFIG as C } from "@/lib/siteConfig";

// Logo icon + wordmark: each letter fades in one by one, coloured pink → coral like the brand logo
const SIZES = {
  md: { wrap: "text-[19px] sm:text-[26px] gap-2", img: "h-12 sm:h-14 w-auto" }, // site header
  lg: { wrap: "text-[24px] sm:text-[30px] gap-2.5", img: "h-14 sm:h-16 w-auto" }, // review pages
};

export default function Logo({ href = "#top", animated = true, size = "md" }) {
  const s = SIZES[size];
  const word = C.clinic.name.toUpperCase();
  const from = [230, 23, 143];
  const to = [245, 100, 90];
  const letterColor = (i) =>
    `rgb(${from.map((c, k) => Math.round(c + ((to[k] - c) * i) / Math.max(word.length - 1, 1))).join(",")})`;

  return (
    <a
      href={href}
      aria-label={C.clinic.name}
      className={`font-head font-semibold flex items-center shrink-0 ${s.wrap}`}
    >
      {C.clinic.logo && <img src={C.clinic.logo} alt="" className={s.img} />}
      <span aria-hidden="true" className="whitespace-nowrap tracking-[.02em]">
        {[...word].map((ch, i) => (
          <span
            key={i}
            className={`inline-block ${animated ? "animate-letter" : ""}`}
            style={{ color: letterColor(i), animationDelay: animated ? `${i * 0.1}s` : undefined }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </a>
  );
}
