import { CONFIG as C } from "@/lib/siteConfig";
import { card, cardText, grid3, h3, icon, section, wrap } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";

export default function Treatments() {
  const t = C.treatments;
  return (
    <section className={`${section} bg-soft`} id="treatments">
      <div className={wrap}>
        <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        <div className={grid3}>
          {t.items.map((i) => (
            <div key={i.title} className={card}>
              {i.image ? (
                <img
                  className="rounded-xl mb-3.5 aspect-[4/3] object-cover w-full bg-soft"
                  loading="lazy"
                  src={i.image}
                  alt={i.title}
                />
              ) : (
                <div className={icon}>{i.icon || "✚"}</div>
              )}
              <h3 className={h3}>{i.title}</h3>
              <p className={cardText}>{i.text}</p>
            </div>
          ))}
        </div>
        <CenterCta text={t.cta} />
      </div>
    </section>
  );
}
