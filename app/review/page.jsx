import { CONFIG as C } from "@/lib/siteConfig";
import ReviewShell from "@/components/review/ReviewShell";
import RatingPicker from "@/components/review/RatingPicker";

export const metadata = {
  title: `Share Your Review | ${C.clinic.name}`,
  description: `Tell us about your experience at ${C.clinic.name}.`,
  robots: { index: false, follow: false },
};

export default function ReviewPage() {
  return (
    <ReviewShell>
      <RatingPicker />
    </ReviewShell>
  );
}
