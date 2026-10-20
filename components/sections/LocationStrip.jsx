import { Clock, MapPin, Phone, Stethoscope } from "lucide-react";
import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnPrimary } from "@/components/ui/classes";

export default function LocationStrip() {
  const item = "flex items-center gap-3 text-[14px] leading-[1.4] w-full lg:w-auto";
  const label = "block text-[12px] opacity-80 font-semibold uppercase tracking-[.05em]";
  const ico = "h-[22px] w-7 shrink-0";
  const ctaBtn = `${btn} px-5 py-[11px] text-[14px] flex-1 lg:flex-none`;
  return (
    <div className="mt-6 bg-brand text-white rounded-[16px] px-[22px] py-[18px] flex flex-col items-start lg:flex-row lg:flex-wrap lg:items-center lg:justify-center gap-x-10 gap-y-4">
      <div className={item}>
        <MapPin className={ico} aria-hidden="true" />
        <div>
          <b className={label}>Address</b>
          <a className="text-white" href="#form2" data-cta="">
            {C.clinic.address}
          </a>
        </div>
      </div>
      <div className={item}>
        <Phone className={ico} aria-hidden="true" />
        <div>
          <b className={label}>Phone</b>
          <a className="text-white" href={`tel:${C.clinic.phone}`} data-call="1">
            {C.clinic.phoneDisplay}
          </a>
        </div>
      </div>
      <div className={item}>
        <Clock className={ico} aria-hidden="true" />
        <div>
          <b className={label}>Clinic Hours</b>
          {C.clinic.hours}
        </div>
      </div>
      <div className={item}>
        <Stethoscope className={ico} aria-hidden="true" />
        <div>
          <b className={label}>Consulting Hours</b>
          {C.clinic.consultingHours}
        </div>
      </div>
      <div className="flex gap-2.5 flex-wrap justify-center w-full">
        <a href={`tel:${C.clinic.phone}`} data-call="1" className={`${ctaBtn} ${btnPrimary}`}>
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now&nbsp;→
        </a>
        <a href="#form2" data-cta="" className={`${ctaBtn} bg-transparent text-white border-2 border-white`}>
          Book Now&nbsp;→
        </a>
      </div>
    </div>
  );
}
