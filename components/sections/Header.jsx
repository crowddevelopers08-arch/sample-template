import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnGhost, btnPrimary, wrap } from "@/components/ui/classes";
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

  const navBtn = `${btn} px-4 py-[9px] text-[14px]`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className={`${wrap} flex items-center justify-between h-[62px] gap-3`}>
        <Logo />
        <nav className="hidden lg:flex gap-[22px] font-semibold text-[14px] text-muted">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="flex gap-2">
          <a className={`${navBtn} ${btnGhost} hidden xs:inline-flex`} href={`tel:${C.clinic.phone}`} data-call="1">
            📞 Call
          </a>
          <a className={`${navBtn} ${btnPrimary}`} href="#book" data-cta="">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
