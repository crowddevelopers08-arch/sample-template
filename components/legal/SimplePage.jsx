import { CONFIG as C } from "@/lib/siteConfig";
import { btn, btnPrimary, wrap } from "@/components/ui/classes";
import { Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Footer from "@/components/sections/Footer";

// Shared shell for the privacy, terms and thank-you pages: logo header + content + site footer
export default function SimplePage({ children }) {
  const home = C.clinic.homeUrl || "/";
  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-line">
        <div className={`${wrap} flex items-center justify-between h-[72px] lg:h-[84px] gap-3`}>
          <Logo href={home} />
          <a className={`${btn} ${btnPrimary} px-4 py-[9px] text-[14px]`} href={`tel:${C.clinic.phone}`} data-call="1">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
        </div>
      </header>
      <main id="top">{children}</main>
      <Footer base={home} />
    </>
  );
}

// Long-form legal text styling
export function LegalBody({ title, updated, children }) {
  return (
    <section className="py-10 sm:py-14 bg-soft">
      <div className="max-w-[800px] mx-auto px-[18px]">
        <h1 className="font-head font-bold leading-[1.2] text-[clamp(28px,4.5vw,40px)] mb-2">{title}</h1>
        <p className="text-muted text-[14px] mb-6">Last updated: {updated}</p>
        <div className="bg-white border border-line rounded-[16px] p-[22px] sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,.08)] text-[15px] text-ink [&_h2]:font-head [&_h2]:font-bold [&_h2]:text-[19px] [&_h2]:mt-7 [&_h2]:mb-2 [&_h2:first-child]:mt-0 [&_p]:mb-3 [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:text-muted [&_li]:mb-1 [&_a]:text-brand [&_a]:font-semibold">
          {children}
        </div>
      </div>
    </section>
  );
}
