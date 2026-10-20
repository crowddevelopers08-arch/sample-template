import { CONFIG as C } from "@/lib/siteConfig";
import ReviewShell from "@/components/review/ReviewShell";
import FeedbackForm from "@/components/review/FeedbackForm";

export const metadata = {
  title: `Help Us Improve | ${C.clinic.name}`,
  description: `Share your feedback with ${C.clinic.name}.`,
  robots: { index: false, follow: false },
};

export default function ClientFeedbackPage() {
  return (
    <ReviewShell wide>
      <FeedbackForm />
    </ReviewShell>
  );
}
