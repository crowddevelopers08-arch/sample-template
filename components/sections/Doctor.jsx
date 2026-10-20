import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnBrand, btnLg, card, eyebrow, h2, h3, section, wrap } from "@/components/ui/classes";
import { UserRound } from "lucide-react";
import Ticks from "@/components/ui/Ticks";

export default function Doctor() {
  const d = C.doctor;
  const photo = d.image ? (
    <img
      loading="lazy"
      src={d.image}
      alt={d.imageAlt || d.name}
      className="rounded-[16px] w-full aspect-[4/5] object-cover bg-soft"
    />
  ) : (
    <div className={`${card} aspect-[4/5] grid place-items-center text-brand`}>
      <UserRound className="h-16 w-16" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
  return (
    <section className={`${section} bg-soft`} id="doctor">
      <div className={`${wrap} grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-9 items-center`}>
        {/* desktop: photo in its own column */}
        <div className="hidden md:block">{photo}</div>
        <div>
          <span className={eyebrow}>{d.eyebrow}</span>
          <h2 className={h2}>{d.name}</h2>
          {/* mobile: photo between the heading and the role/quote */}
          <div className="md:hidden mb-4">{photo}</div>
          <p className="text-brand font-bold">{d.role}</p>
          <p className="border-l-4 border-accent pl-3.5 my-3.5 italic text-muted">“{d.quote}”</p>
          {d.pointsTitle && <h3 className={`${h3} mb-3`}>{d.pointsTitle}</h3>}
          <Ticks items={d.points} />
          <a href="#book" data-cta="" className={`${btn} ${btnLg} ${btnBrand} w-full xs:w-auto`}>
            {`${d.cta} →`}
          </a>
        </div>
      </div>
    </section>
  );
}
