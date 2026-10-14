import { CONFIG as C } from "@/lib/siteConfig";
import { section } from "@/components/ui/classes";
import SectionHead from "@/components/ui/SectionHead";
import CenterCta from "@/components/ui/CenterCta";

export default function Faq() {
  const f = C.faq;
  return (
    <section className={section} id="faq">
      <div className="max-w-[800px] mx-auto px-[18px]">
        <SectionHead eyebrow={f.eyebrow} title={f.title} sub={f.sub} />
        {f.items.map((i) => (
          <details key={i.q} className="group bg-white border border-line rounded-xl px-[18px] py-4 mb-2.5">
            <summary className="cursor-pointer font-bold list-none flex justify-between gap-3 [&::-webkit-details-marker]:hidden after:content-['+'] after:text-[22px] after:text-brand after:leading-none group-open:after:content-['–']">
              {i.q}
            </summary>
            <p className="mt-2.5 text-muted">{i.a}</p>
          </details>
        ))}
        <CenterCta />
      </div>
    </section>
  );
}
