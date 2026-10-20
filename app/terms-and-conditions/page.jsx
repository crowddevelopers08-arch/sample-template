import { CONFIG as C } from "@/lib/siteConfig";
import SimplePage, { LegalBody } from "@/components/legal/SimplePage";

export const metadata = { title: `Terms & Conditions | ${C.clinic.name}` };

export default function Terms() {
  const c = C.clinic;
  return (
    <SimplePage>
      <LegalBody title="Terms & Conditions" updated="October 20, 2026">
        <p>
          By using this website, you agree to these Terms &amp; Conditions. If you do not agree, please do not use the
          website.
        </p>

        <h2>1. Website Information Is Not Medical Advice</h2>
        <p>
          The information on this website is intended for general awareness and does not replace professional medical
          advice, diagnosis, or treatment. Consult a qualified healthcare professional for advice about your condition.
          Do not ignore or delay professional advice because of something you read on this website.
        </p>

        <h2>2. Appointments &amp; Consultations</h2>
        <ul>
          <li>Submitting a form on this website is an enquiry and does not by itself confirm an appointment.</li>
          <li>Appointments are confirmed by our team, subject to availability.</li>
          <li>Please contact the clinic in advance if you need to reschedule or cancel.</li>
          <li>Any free consultation offer is subject to availability and may be changed or withdrawn at any time.</li>
        </ul>

        <h2>3. Treatment &amp; Outcomes</h2>
        <p>
          Treatment recommendations are made after an assessment of your condition. Treatment recommendations and
          outcomes vary according to individual circumstances, and no specific result is guaranteed. Patient
          testimonials on this website reflect individual experiences.
        </p>

        <h2>4. Online Consultations</h2>
        <p>
          Online sessions depend on a stable internet connection and your ability to follow instructions safely at
          home. Your physiotherapist may recommend an in-clinic visit where an online session is not suitable.
        </p>

        <h2>5. Your Responsibilities</h2>
        <p>
          Please provide accurate information about yourself and your health, and inform your physiotherapist of any
          change in your condition, medication, or symptoms during treatment.
        </p>

        <h2>6. Ratings &amp; Feedback</h2>
        <p>
          Ratings and feedback you submit through this website are shared privately with our team to help us improve.
          Reviews you choose to post on Google are public and are governed by Google&apos;s own terms.
        </p>

        <h2>7. Fees &amp; Payments</h2>
        <p>Fees for consultations and treatment sessions will be informed by the clinic before treatment begins.</p>

        <h2>8. Intellectual Property</h2>
        <p>
          The content, text, images, and logos on this website belong to {c.name} or are used with permission, and may
          not be copied or reused without written consent.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the extent permitted by law, {c.name} is not liable for any loss arising from the use of this website or
          reliance on its general information.
        </p>

        <h2>10. Privacy</h2>
        <p>
          Your use of this website is also governed by our <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts in
          Chennai, Tamil Nadu.
        </p>

        <h2>12. Changes to These Terms</h2>
        <p>We may update these terms from time to time. The latest version will always be available on this page.</p>

        <h2>13. Contact Us</h2>
        <p>
          {c.name}, {c.address}
          <br />
          Phone: <a href={`tel:${c.phone}`}>{c.phoneDisplay}</a>
          <br />
          Email: <a href={`mailto:${c.email}`}>{c.email}</a>
        </p>
      </LegalBody>
    </SimplePage>
  );
}
