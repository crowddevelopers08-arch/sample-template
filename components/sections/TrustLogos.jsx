import { CONFIG as C } from "@/lib/siteConfig";
import { section, wrap } from "@/components/ui/classes";

export default function TrustLogos() {
  const item =
    "bg-white border border-line rounded-[10px] px-[18px] py-2.5 font-semibold text-[14px] text-muted h-12 grid place-items-center";
  return (
    <section className={section}>
      <div className={wrap}>
        <div className="text-center max-w-[700px] mx-auto mb-[34px]">
          <h2 className="font-head font-bold leading-[1.2] text-[24px] mb-2.5">{C.trustLogos.title}</h2>
        </div>
        <div className="flex flex-wrap gap-3.5 justify-center">
          {C.trustLogos.items.map((i) =>
            /^https?:/.test(i) ? (
              <img key={i} src={i} alt="partner" loading="lazy" className={item} />
            ) : (
              <span key={i} className={item}>
                {i}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
