import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnBrand, btnLg, h2 } from "@/components/ui/classes";
import Ticks from "@/components/ui/Ticks";

export default function NoMapPanel() {
  return (
    <div className="self-center">
      <h2 className={h2}>{C.finalCta.title}</h2>
      <p className="text-muted mb-4">{C.finalCta.text}</p>
      <Ticks items={["Free first consultation", "Expert, caring therapists", "Call back within 30 minutes"]} />
      <a href={`tel:${C.clinic.phone}`} data-call="1" className={`${btn} ${btnLg} ${btnBrand}`}>
        📞 Call Now
      </a>
    </div>
  );
}
