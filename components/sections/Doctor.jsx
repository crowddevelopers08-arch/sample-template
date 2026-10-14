import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnBrand, btnLg, card, eyebrow, h2, section, wrap } from "@/components/ui/classes";
import Ticks from "@/components/ui/Ticks";

export default function Doctor() {
  const d = C.doctor;
  return (
    <section className={`${section} bg-soft`} id="doctor">
      <div className={`${wrap} grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-9 items-center`}>
        <div>
          {d.image ? (
            <img
              loading="lazy"
              src={d.image}
              alt={d.name}
              className="rounded-[16px] w-full aspect-[4/5] object-cover bg-soft"
            />
          ) : (
            <div className={`${card} aspect-[4/5] grid place-items-center text-[64px]`}>👨‍⚕️</div>
          )}
        </div>
        <div>
          <span className={eyebrow}>{d.eyebrow}</span>
          <h2 className={h2}>{d.name}</h2>
          <p className="text-brand font-bold">{d.role}</p>
          <p className="border-l-4 border-accent pl-3.5 my-3.5 italic text-muted">“{d.quote}”</p>
          <Ticks items={d.points} />
          <a href="#book" data-cta="" className={`${btn} ${btnLg} ${btnBrand}`}>
            {d.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
