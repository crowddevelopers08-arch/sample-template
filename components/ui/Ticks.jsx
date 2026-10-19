// items: strings, or [label, value] pairs — a pair puts the value on its own line on phones
export default function Ticks({ items }) {
  return (
    <ul className="grid gap-2 mb-[22px]">
      {items.map((t, i) => (
        <li
          key={i}
          className="flex items-start before:content-['✓'] before:shrink-0 before:mt-[3px] before:text-white before:bg-brand before:rounded-full before:w-5 before:h-5 before:inline-grid before:place-items-center before:text-[12px] before:mr-2.5"
        >
          {Array.isArray(t) ? (
            <span>
              <b className="font-semibold">{t[0]}:</b>
              <br className="sm:hidden" /> {t[1]}
            </span>
          ) : (
            <span>{t}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
