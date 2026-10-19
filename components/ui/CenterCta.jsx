import { btn, btnLg, btnPrimary } from "./classes";

export default function CenterCta({ text = "Book Your Free Consultation" }) {
  return (
    <div className="text-center mt-[30px]">
      <a href="#book" data-cta="" className={`${btn} ${btnLg} ${btnPrimary} w-full xs:w-auto`}>
        {`${text} →`}
      </a>
    </div>
  );
}
