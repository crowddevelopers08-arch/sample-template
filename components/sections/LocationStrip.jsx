import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnPrimary } from "@/components/ui/classes";

export default function LocationStrip() {
  const item = "flex items-center gap-3 text-[14px] leading-[1.4] w-full lg:w-auto";
  const label = "block text-[12px] opacity-80 font-semibold uppercase tracking-[.05em]";
  const ctaBtn = `${btn} px-5 py-[11px] text-[14px] flex-1 lg:flex-none`;
  return (
    <div className="mt-6 bg-brand text-white rounded-[16px] px-[22px] py-[18px] flex flex-col items-start lg:flex-row lg:flex-wrap lg:items-center lg:justify-center gap-x-10 gap-y-4">
      <div className={item}>
        <span className="text-[22px] w-7 shrink-0 text-center">📍</span>
        <div>
          <b className={label}>Visit Us</b>
          <a className="text-white" href={C.clinic.mapLink} target="_blank" rel="noopener">
            {C.clinic.address}
          </a>
        </div>
      </div>
      <div className={item}>
        <span className="text-[22px] w-7 shrink-0 text-center">📞</span>
        <div>
          <b className={label}>Call</b>
          <a className="text-white" href={`tel:${C.clinic.phone}`} data-call="1">
            {C.clinic.phoneDisplay}
          </a>
        </div>
      </div>
      <div className={item}>
        <span className="text-[22px] w-7 shrink-0 text-center">🕒</span>
        <div>
          <b className={label}>Hours</b>
          {C.clinic.hours}
        </div>
      </div>
      <div className="flex gap-2.5 flex-wrap justify-center w-full">
        <a href={`tel:${C.clinic.phone}`} data-call="1" className={`${ctaBtn} ${btnPrimary}`}>
          📞 Call Now
        </a>
        <a
          href={C.clinic.mapLink}
          target="_blank"
          rel="noopener"
          className={`${ctaBtn} bg-transparent text-white border-2 border-white`}
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
