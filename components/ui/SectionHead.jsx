import { eyebrow, h2 } from "./classes";

export default function SectionHead({ eyebrow: eb, title, sub }) {
  return (
    <div className="text-center max-w-[700px] mx-auto mb-[34px]">
      {eb && <span className={eyebrow}>{eb}</span>}
      <h2 className={h2}>{title}</h2>
      {sub && <p className="text-muted">{sub}</p>}
    </div>
  );
}
