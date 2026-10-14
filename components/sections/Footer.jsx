import { CONFIG as C } from "@/lib/siteConfig";
import { wrap } from "@/components/ui/classes";

export default function Footer() {
  const h4 = "font-bold text-white mb-2.5";
  return (
    <footer className="bg-[#0b1220] text-[#cbd5e1] pt-10 pb-6 text-[14px]">
      <div className={wrap}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-7 mb-6">
          <div>
            <h4 className={h4}>{C.clinic.name}</h4>
            <p>{C.footer.about}</p>
            <p className="mt-2.5">📍 {C.clinic.address}</p>
          </div>
          <div>
            <h4 className={h4}>Contact</h4>
            <p>
              <a className="hover:text-white" href={`tel:${C.clinic.phone}`}>
                {C.clinic.phoneDisplay}
              </a>
            </p>
            {C.clinic.email && <p>{C.clinic.email}</p>}
            <p>{C.clinic.hours}</p>
          </div>
          <div>
            <h4 className={h4}>Legal</h4>
            {C.footer.links.map(([label, href]) => (
              <p key={label}>
                <a className="hover:text-white" href={href}>
                  {label}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="border-t border-[#1e293b] pt-4 text-[12px] text-[#94a3b8]">
          <p>{C.footer.legal}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {C.clinic.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
