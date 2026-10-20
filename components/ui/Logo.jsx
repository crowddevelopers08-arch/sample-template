import { CONFIG as C } from "@/lib/siteConfig";

// Logo icon + wordmark: each letter fades in one by one, coloured pink → coral like the brand logo
export default function Logo({ href = "#top", animated = true, large = false }) {
  const word = C.clinic.name.toUpperCase();
  const from = [230, 23, 143];
  const to = [245, 100, 90];
  const letterColor = (i) =>
    `rgb(${from.map((c, k) => Math.round(c + ((to[k] - c) * i) / Math.max(word.length - 1, 1))).join(",")})`;

  return (
    <a
      href={href}
      aria-label={C.clinic.name}
      className={`font-head font-semibold flex items-center ${
        large ? "text-[24px] sm:text-[30px] gap-2.5" : "text-[17px] sm:text-[22px] gap-2"
      }`}
    >
      {C.clinic.logo && <img src={C.clinic.logo} alt="" className={large ? "h-14 sm:h-16 w-auto" : "h-10 w-auto"} />}
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
