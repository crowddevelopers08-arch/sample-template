import Link from "next/link";

export const metadata = { title: "Landing Pages" };

export default function Home() {
  const link =
    "block bg-white border border-line rounded-[16px] p-[22px] shadow-[0_10px_30px_rgba(15,23,42,.08)] font-bold text-brand hover:border-brand";
  return (
    <main className="min-h-screen grid place-items-center bg-soft px-[18px]">
      <div className="w-full max-w-[420px] grid gap-4">
        <h1 className="font-head font-bold text-[28px] text-center">Landing Pages</h1>
        <Link href="/with-map" className={link}>With Map →</Link>
        <Link href="/without-map" className={link}>Without Map →</Link>
      </div>
    </main>
  );
}
