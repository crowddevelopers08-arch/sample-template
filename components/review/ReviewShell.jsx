import { Lato } from "next/font/google";
import Logo from "@/components/ui/Logo";
import { CONFIG as C } from "@/lib/siteConfig";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-lato", display: "swap" });

// Dark full-screen backdrop + centred card shared by /review and /client-feedback (colours: .review in globals.css)
export default function ReviewShell({ wide = false, children }) {
  return (
    <div
      className={`review ${lato.variable} flex min-h-screen flex-col items-center justify-center p-4 sm:p-6`}
      style={{ backgroundColor: "var(--r-brand-deep)" }}
    >
      <div
        className={`mx-auto w-full rounded-[28px] bg-[var(--r-paper)] shadow-[0_40px_80px_-40px_rgba(30,10,35,0.75)] ${
          wide ? "my-6 max-w-[560px] p-5 sm:p-8" : "max-w-[460px] px-5 py-8 sm:px-9 sm:py-10"
        }`}
      >
        <div className={`flex justify-center ${wide ? "mb-5 sm:mb-7" : ""}`}>
          <Logo href={C.clinic.homeUrl} animated={false} large />
        </div>
        {children}
      </div>
    </div>
  );
}
