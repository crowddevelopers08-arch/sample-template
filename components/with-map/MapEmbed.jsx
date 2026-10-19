import { CONFIG as C } from "@/lib/siteConfig";

export default function MapEmbed() {
  const src =
    C.clinic.mapEmbed ||
    `https://maps.google.com/maps?q=${encodeURIComponent(`${C.clinic.name} ${C.clinic.address}`)}&z=15&output=embed`;
  return (
    <div className="relative rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,.08)] border border-line min-h-[320px] lg:min-h-[420px] bg-[#e5e7eb] order-2 lg:order-none">
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="Clinic location map"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
