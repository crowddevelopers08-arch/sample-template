import { Phone } from "lucide-react";
import { CONFIG as C } from "@/lib/siteConfig";
import { WhatsAppIcon } from "@/components/ui/Icon";

// Mobile/tablet bottom bar (hidden from 861px up)
export default function StickyBar() {
  const link = "py-3.5 px-1.5 font-bold text-[14px] inline-flex items-center justify-center gap-1.5";
  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] grid grid-cols-3 bg-white border-t border-line shadow-[0_-6px_20px_rgba(0,0,0,.08)] lg:hidden">
      <a className={`${link} text-brand`} href={`tel:${C.clinic.phone}`} data-call="1">
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <a
        className={`${link} text-[#16a34a]`}
        href={`https://wa.me/${C.clinic.whatsapp}?text=${encodeURIComponent(C.clinic.whatsappMsg)}`}
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a className={`${link} bg-accent text-[#1a1200]`} href="#book" data-cta="">
        Book Free
      </a>
    </div>
  );
}
