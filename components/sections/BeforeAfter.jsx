import { CONFIG as C } from "@/lib/siteConfig";
import { grid3, section, wrap } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";

export default function BeforeAfter() {
  const ba = C.beforeAfter;
  if (!ba.items.length) return null;
  const img = "aspect-square object-cover w-full bg-soft";
  const cap = "absolute left-2 bottom-2 bg-[rgba(0,0,0,.65)] text-white text-[12px] px-2.5 py-[3px] rounded-full";
  return (
    <section className={`${section} bg-soft`} id="results">
      <div className={wrap}>
        <SectionHead eyebrow={ba.eyebrow} title={ba.title} sub={ba.sub} />
        <div className={grid3}>
          {ba.items.map((i, n) => (
            <div key={n} className="relative rounded-[16px] overflow-hidden border border-line bg-white">
              <div className="grid grid-cols-2">
                <figure className="relative">
                  <img loading="lazy" className={img} src={i.before} alt="Before" />
                  <figcaption className={cap}>Before</figcaption>
                </figure>
                <figure className="relative">
                  <img loading="lazy" className={img} src={i.after} alt="After" />
                  <figcaption className={cap}>After</figcaption>
                </figure>
              </div>
              <div className="px-4 py-3 text-[14px] text-muted">{i.caption || ""}</div>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-muted text-center mt-[18px]">{ba.disclaimer}</p>
        <CenterCta />
      </div>
    </section>
  );
}
