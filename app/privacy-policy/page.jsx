import { CONFIG as C } from "@/lib/siteConfig";
import SimplePage, { LegalBody } from "@/components/legal/SimplePage";

export const metadata = { title: `Privacy Policy | ${C.clinic.name}` };

export default function PrivacyPolicy() {
  const c = C.clinic;
  return (
    <SimplePage>
      <LegalBody title="Privacy Policy" updated="October 20, 2026">
        <p>
          {c.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what
          personal information we collect through this website, how we use it, and the choices you have.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you fill in a form on this website or contact us, we may collect:</p>
        <ul>
          <li>Your name and mobile number</li>
          <li>The health concern or condition you select or describe</li>
          <li>
            If you rate your visit or share feedback: your rating, email address, and the suggestions you write
          </li>
          <li>Any other details you choose to share with us by phone, WhatsApp, or email</li>
        </ul>
        <p>
          We may also collect basic technical information automatically, such as the page you visited, the website or
          advertisement that referred you (for example, campaign/UTM parameters), your browser type, and the date and
          time of your visit.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To contact you about your enquiry and schedule a consultation</li>
          <li>To understand your condition before your appointment</li>
          <li>To send appointment-related reminders or updates</li>
          <li>To review your feedback, follow up with you about it, and improve our care</li>
          <li>To measure and improve our website and advertising</li>
          <li>To comply with applicable legal obligations</li>
        </ul>

        <h2>3. Health Information</h2>
        <p>
          Information about your health is sensitive. We use it only to respond to your enquiry and to provide care, and
          we limit access to our clinical and front-desk team who need it for that purpose.
        </p>

        <h2>4. Cookies &amp; Analytics</h2>
        <p>
          This website may use cookies and similar tools from third parties (such as Google and Meta) to understand
          visits and measure the performance of our advertisements. You can block or delete cookies through your browser
          settings.
        </p>
        <p>
          If you submit a consultation request, we may share your mobile number and name with Meta (Facebook and
          Instagram) in an encrypted (hashed) form, so that our advertisements can reach similar audiences and avoid
          showing you ads you no longer need. Feedback and ratings are not used for advertising.
        </p>

        <h2>5. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share it only:</p>
        <ul>
          <li>
            With service providers who help us operate this website, store and manage enquiries (such as Google
            Workspace and our customer relationship management system), communication tools, or appointment scheduling
          </li>
          <li>With advertising platforms in hashed form, as described in Section 4</li>
          <li>When required by law, regulation, or a valid legal request</li>
          <li>With your consent</li>
        </ul>

        <h2>6. Data Retention &amp; Security</h2>
        <p>
          We keep your information only as long as needed for the purposes above or as required by law, and we take
          reasonable steps to protect it against unauthorised access, loss, or misuse. No method of transmission over
          the internet is completely secure.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023, you may request
          access to, correction of, or deletion of your personal information, or withdraw your consent to being
          contacted. To make a request, contact us using the details below.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. The latest version will always be available on this page.</p>

        <h2>9. Contact Us</h2>
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
