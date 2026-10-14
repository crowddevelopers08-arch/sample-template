import { CONFIG as C } from "@/lib/siteConfig";

// Mobile/tablet bottom bar (hidden from 861px up)
export default function StickyBar() {
  const link = "py-3.5 px-1.5 text-center font-bold text-[14px]";
  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] grid grid-cols-3 bg-white border-t border-line shadow-[0_-6px_20px_rgba(0,0,0,.08)] lg:hidden">
      <a className={`${link} text-brand`} href={`tel:${C.clinic.phone}`} data-call="1">
        📞 Call
      </a>
      <a
        className={`${link} text-[#16a34a]`}
        href={`https://wa.me/${C.clinic.whatsapp}?text=${encodeURIComponent(C.clinic.whatsappMsg)}`}
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>
      <a className={`${link} bg-accent text-[#1a1200]`} href="#book" data-cta="">
        Book Free
      </a>
    </div>
  );
}
