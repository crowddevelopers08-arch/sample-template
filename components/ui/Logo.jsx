import { CONFIG as C } from "@/lib/siteConfig";

// Logo icon + wordmark: each letter fades in one by one, coloured pink → coral like the brand logo
export default function Logo({ href = "#top" }) {
  const word = C.clinic.name.toUpperCase();
  const from = [230, 23, 143];
  const to = [245, 100, 90];
  const letterColor = (i) =>
    `rgb(${from.map((c, k) => Math.round(c + ((to[k] - c) * i) / Math.max(word.length - 1, 1))).join(",")})`;

  return (
    <a href={href} aria-label={C.clinic.name} className="font-head font-semibold text-[17px] sm:text-[22px] flex items-center gap-2">
      {C.clinic.logo && <img src={C.clinic.logo} alt="" className="h-10 w-auto" />}
      <span aria-hidden="true" className="whitespace-nowrap tracking-[.02em]">
        {[...word].map((ch, i) => (
          <span
            key={i}
            className="inline-block animate-letter"
            style={{ color: letterColor(i), animationDelay: `${i * 0.1}s` }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </a>
  );
}
