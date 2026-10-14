import { section, wrap } from "@/components/ui/classes";
import LeadForm from "@/components/ui/LeadForm";
import LocationStrip from "@/components/sections/LocationStrip";
import MapEmbed from "./MapEmbed";

export default function FinalCtaWithMap() {
  return (
    <section className={`${section} bg-soft`} id="location">
      <div className={wrap}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-7 items-stretch">
          <MapEmbed />
          <div>
            <LeadForm id="form2" />
          </div>
        </div>
        <LocationStrip />
      </div>
    </section>
  );
}
