import { CONFIG as C } from "@/lib/siteConfig";
import { card, grid3, section, wrap } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";

export default function Testimonials() {
  const t = C.testimonials;
  return (
    <section className={`${section} bg-soft`} id="reviews">
      <div className={wrap}>
        <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        {t.videos.length > 0 && (
          <div className="grid grid-flow-col auto-cols-[minmax(220px,260px)] gap-4 overflow-x-auto snap-x snap-mandatory pb-2.5 mb-6">
            {t.videos.map((v) => (
              <div key={v} className="snap-start relative rounded-[16px] overflow-hidden aspect-[9/16] bg-black">
                <iframe loading="lazy" src={v} allowFullScreen title="Patient story" className="absolute inset-0 w-full h-full border-0" />
              </div>
            ))}
          </div>
        )}
        <div className={grid3}>
          {t.reviews.map((r) => (
            <div key={r.name} className={card}>
              <div className="text-[#f59e0b] tracking-[2px]">★★★★★</div>
              <p className="italic text-ink text-[15px] mt-1.5">“{r.text}”</p>
              <div className="mt-3 text-[14px] text-muted">
                <b>{r.name}</b> • {r.meta}
              </div>
            </div>
          ))}
        </div>
        <CenterCta text={t.cta} />
      </div>
    </section>
  );
}
