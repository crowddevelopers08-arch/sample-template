import { CONFIG as C } from "@/lib/siteConfig";
import { card, cardText, grid3, h3, icon, section, wrap } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";
import Icon from "@/components/ui/Icon";

export default function WhyUs() {
  const w = C.why;
  return (
    <section className={section} id="why">
      <div className={wrap}>
        <SectionHead eyebrow={w.eyebrow} title={w.title} sub={w.sub} />
        <div className={grid3}>
          {w.items.map((i) => (
            <div key={i.title} className={card}>
              <div className={icon}>
                <Icon name={i.icon} />
              </div>
              <h3 className={h3}>{i.title}</h3>
              <p className={cardText}>{i.text}</p>
            </div>
          ))}
        </div>
        <CenterCta text={w.cta} />
      </div>
    </section>
  );
}
