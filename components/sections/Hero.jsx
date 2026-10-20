import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnGhost, btnLg, btnPrimary, eyebrow, wrap } from "@/components/ui/classes";
import { Phone } from "lucide-react";
import Ticks from "@/components/ui/Ticks";
import LeadForm from "@/components/ui/LeadForm";
import Banner from "./Banner";

export default function Hero() {
  const h = C.hero;
  return (
    <>
      <Banner />
      <section className="bg-[linear-gradient(135deg,var(--color-soft),#fff_60%)] pt-10 pb-14">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-9 items-center`}>
          <div>
            {h.eyebrow && (
              <span
                className={`${eyebrow} block [&_b]:text-[17px] sm:[&_b]:text-[20px] [&_b]:font-extrabold [&_b]:text-brand-dark [&_b]:whitespace-nowrap`}
                dangerouslySetInnerHTML={{ __html: h.eyebrow }}
              />
            )}
            {h.badge && (
              <span
                className="inline-block bg-white border border-line px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-brand mb-3.5"
                dangerouslySetInnerHTML={{ __html: h.badge }}
              />
            )}
            <h1
              className="font-head font-bold leading-[1.2] text-[clamp(28px,5vw,46px)]"
              dangerouslySetInnerHTML={{ __html: h.headline }}
            />
            <p className="text-muted text-[18px] mt-3.5 mb-[18px]">{h.sub}</p>
            <Ticks items={h.bullets} />
            <div className="flex gap-3 flex-wrap">
              <a href="#book" data-cta="" className={`${btn} ${btnLg} ${btnPrimary} w-full xs:w-auto`}>
                {`${h.primaryCta} →`}
              </a>
              <a href={`tel:${C.clinic.phone}`} data-call="1" className={`${btn} ${btnLg} ${btnGhost} w-full xs:w-auto`}>
                <Phone className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                {h.secondaryCta}
              </a>
            </div>
            {h.image && (
              <img
                className="mt-[22px] rounded-[16px] aspect-video object-cover w-full bg-soft"
                src={h.image}
                alt={C.clinic.name}
                fetchPriority="high"
              />
            )}
          </div>
          <div id="book">
            <LeadForm id="form1" />
          </div>
        </div>
      </section>
    </>
  );
}
