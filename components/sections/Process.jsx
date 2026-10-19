import { CONFIG as C } from "@/lib/siteConfig";
import { grid4, h3, section, wrap } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";

export default function Process() {
  const p = C.process;
  return (
    <section className={section}>
      <div className={wrap}>
        <SectionHead eyebrow={p.eyebrow} title={p.title} sub={p.sub} />
        <div className={grid4}>
          {p.steps.map((s, i) => (
            // mobile: number and title side by side in one row; sm+: number above title
            <div key={s.title} className="relative pt-2 flex items-center gap-3.5 sm:block">
              <div className="shrink-0 w-[42px] h-[42px] rounded-full bg-brand text-white grid place-items-center font-extrabold sm:mb-3">
                {i + 1}
              </div>
              <div>
                <h3 className={h3}>{s.title}</h3>
                {s.text && <p className="text-muted text-[15px]">{s.text}</p>}
              </div>
            </div>
          ))}
        </div>
        <CenterCta text={p.cta} />
      </div>
    </section>
  );
}
