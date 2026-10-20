import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnGhost, btnLg, btnPrimary, card } from "@/components/ui/classes";
import SimplePage from "@/components/legal/SimplePage";
import Ticks from "@/components/ui/Ticks";
import { WhatsAppIcon } from "@/components/ui/Icon";
import { Check, Phone } from "lucide-react";

export const metadata = {
  title: `Thank You | ${C.clinic.name}`,
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  const c = C.clinic;
  return (
    <SimplePage>
      <section className="bg-[linear-gradient(135deg,var(--color-soft),#fff_60%)] py-12 sm:py-16">
        <div className="max-w-[640px] mx-auto px-[18px]">
          <div className={`${card} text-center border-t-[5px] border-t-accent`}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand text-white grid place-items-center">
              <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <h1 className="font-head font-bold leading-[1.2] text-[clamp(26px,4.5vw,36px)] mb-2">Thank You!</h1>
            <p className="text-muted text-[17px] mb-6">
              We&apos;ve received your consultation request. Our team will contact you shortly to confirm your
              appointment.
            </p>
            <div className="text-left max-w-[420px] mx-auto">
              <Ticks
                items={[
                  ["Clinic Hours", c.hours],
                  ["Consulting Hours", c.consultingHours],
                  ["Address", c.address],
                ]}
              />
            </div>
            <p className="text-muted text-[15px] mb-4">Need to talk to us sooner?</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href={`tel:${c.phone}`} data-call="1" className={`${btn} ${btnLg} ${btnPrimary} w-full xs:w-auto`}>
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                Call Now&nbsp;→
              </a>
              <a
                href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(c.whatsappMsg)}`}
                target="_blank"
                rel="noopener"
                className={`${btn} ${btnLg} ${btnGhost} w-full xs:w-auto`}
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                WhatsApp
              </a>
            </div>
            <a href={c.homeUrl || "/"} className="inline-block mt-6 text-brand font-semibold text-[14px]">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}
