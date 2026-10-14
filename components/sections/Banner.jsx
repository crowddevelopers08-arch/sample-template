import { CONFIG as C } from "@/lib/siteConfig";
import { wrap } from "@/components/ui/classes";

export default function Banner() {
  const b = C.hero.banner || {};
  if (!b.enabled) return null;
  return (
    <div
      className="relative bg-[#7fd6d6] bg-center bg-cover bg-no-repeat min-h-[140px] sm:min-h-[200px] flex items-center overflow-hidden"
      style={b.image ? { backgroundImage: `url('${b.image}')` } : undefined}
    >
      <div className={`${wrap} flex items-center justify-between gap-5 w-full py-[18px]`}>
        <div>
          {b.title && <h2 className="font-head font-bold leading-[1.2] text-[clamp(20px,3.4vw,32px)] text-ink">{b.title}</h2>}
          {b.sub && <p className="text-ink opacity-85 mt-1 font-medium">{b.sub}</p>}
        </div>
        {b.side && <img className="hidden sm:block h-[clamp(120px,18vw,200px)] w-auto rounded-xl" src={b.side} alt="" />}
      </div>
    </div>
  );
}
