import { CONFIG as C } from "@/lib/siteConfig";
import { grid4, wrap } from "@/components/ui/classes";

export default function Stats() {
  return (
    <div className="bg-brand text-white py-[30px]">
      <div className={`${wrap} ${grid4} text-center`}>
        {C.stats.items.map((s) => (
          <div key={s.label}>
            <b className="block font-head text-[clamp(26px,4vw,38px)]">{s.value}</b>
            <span className="text-[14px] opacity-90">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
