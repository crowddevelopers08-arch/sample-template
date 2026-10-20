import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnGhost, btnPrimary, wrap } from "@/components/ui/classes";
import { Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const nav = [
    ["treatments", "Treatments", C.treatments],
    ["why", "Why Us", C.why],
    ["results", "Results", C.beforeAfter],
    ["doctor", "Doctor", C.doctor],
    ["reviews", "Reviews", C.testimonials],
    ["faq", "FAQ", C.faq],
  ].filter(([id, , o]) => o.enabled && (id !== "results" || o.items.length));

  const navBtn = `${btn} whitespace-nowrap px-4 py-[9px] text-[14px] sm:px-5 sm:py-[11px] sm:text-[15px]`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className={`${wrap} flex items-center justify-between h-[72px] lg:h-[84px] gap-3`}>
        <Logo />
        {/* links only from 1024px — narrower screens don't fit them beside the larger logo */}
        <nav className="hidden min-[1024px]:flex gap-[22px] whitespace-nowrap font-semibold text-[15px] text-muted">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a className={`${navBtn} ${btnGhost} max-sm:hidden`} href={`tel:${C.clinic.phone}`} data-call="1">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
          <a className={`${navBtn} ${btnPrimary}`} href="#book" data-cta="">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
