export default function Ticks({ items }) {
  return (
    <ul className="grid gap-2 mb-[22px]">
      {items.map((t) => (
        <li
          key={t}
          className="before:content-['✓'] before:text-white before:bg-brand before:rounded-full before:w-5 before:h-5 before:inline-grid before:place-items-center before:text-[12px] before:mr-2.5"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
