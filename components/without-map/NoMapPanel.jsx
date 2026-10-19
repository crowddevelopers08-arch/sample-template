import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnBrand, btnLg, h2 } from "@/components/ui/classes";
import Ticks from "@/components/ui/Ticks";

export default function NoMapPanel() {
  return (
    <div className="self-center">
      <h2 className={h2}>{C.finalCta.title}</h2>
      <p className="text-muted mb-4">{C.clinic.address}</p>
      <Ticks
        items={[
          ["Phone", C.clinic.phoneDisplay],
          ["Email", C.clinic.email],
          ["Clinic Hours", C.clinic.hours],
          ["Consulting Hours", C.clinic.consultingHours],
        ]}
      />
      <a href={`tel:${C.clinic.phone}`} data-call="1" className={`${btn} ${btnLg} ${btnBrand} w-full xs:w-auto`}>
        📞 Call Now&nbsp;→
      </a>
    </div>
  );
}
