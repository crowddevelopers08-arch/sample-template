import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnLg, btnPrimary, h2, section, wrap } from "@/components/ui/classes";
import Ticks from "@/components/ui/Ticks";

export default function Offer() {
  const o = C.offer;
  return (
    <section className={section}>
      <div className={wrap}>
        <div className="bg-[linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))] text-white rounded-3xl p-[26px] md:p-9 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6 items-center">
          <div>
            <span className="inline-block bg-accent text-[#1a1200] font-bold text-[12px] px-3 py-1 rounded-full mb-2.5">{o.tag}</span>
            <h2 className={h2}>{o.title}</h2>
            <Ticks items={o.bullets} />
          </div>
          <div className="text-center">
            <div className="font-head text-[48px] font-extrabold text-accent">
              <s className="text-[22px] text-[#cbd5e1] mr-2.5 font-medium">{o.oldPrice}</s>
              {o.price}
            </div>
            <a href="#book" data-cta="" className={`${btn} ${btnLg} ${btnPrimary} mt-3`}>
              {`${o.cta} →`}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
