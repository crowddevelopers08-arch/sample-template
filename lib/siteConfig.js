/* =====================================================================
   CONFIG — the only part you edit for each client / treatment page
   Set a section to enabled:false to hide it.
   Colours live in app/globals.css (@theme).
   ===================================================================== */
export const CONFIG = {
  meta: {
    title: "Personalized Physiotherapy in OMR, Chennai | The Physiora",
    description:
      "Get personalised physiotherapy care for back pain, joint pain, sports injuries, and neurological conditions at The Physiora, OMR, Chennai.",
    schemaType: "MedicalClinic",
  },
  clinic: {
    name: "The Physiora",
    logo: "https://www.thephysiora.in/static/media/Brain%20&%20Spine%20PNG.fae8d9eafbe553c29044.png",
    phone: "+918925449512",
    phoneDisplay: "+91 89254 49512",
    whatsapp: "918925449512",
    whatsappMsg: "Hi, I'd like to book a consultation at The Physiora.",
    address: "OMR, Egattur, Chennai",
    mapLink: "https://maps.app.goo.gl/ShjiB2UsqonNPmAp6",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14776.86542977911!2d80.1540219!3d13.06632165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a5267892cd699f5%3A0x8771a3895d68025e!2sTHE%20PHYSIORA%20_%20A%20MULTI%20SPECIALITY%20PHYSIOTHERAPY%20CENTRE%2C%2082%2C%20First%20Floor%2C%20Sterling%20Road%2C%20Nungambakkam%20Near%20Loyola%20College%20Bus%20Stop%20%26%2C%20above%20Harley%20Davidson%20showroom%20Building%2C%20Chennai%2C%20Tamil%20Nadu%20600034!3m2!1d13.0650251!2d80.23496399999999!5e1!3m2!1sen!2sin!4v1792396070726!5m2!1sen!2sin",
    hours: "Daily, 7 AM⁠–⁠9 PM", // non-breaking space + word joiners keep each time range on one line
    consultingHours: "Monday–Saturday, 10 AM⁠–⁠2 PM and 6 PM⁠–⁠9 PM",
    email: "thephysioraclinic@gmail.com",
    homeUrl: "/with-map", // where the logo / "Back to Home" on the legal & thank-you pages go
  },
  popup: {
    enabled: true,
    delaySeconds: 20,
    timerTitle: "Book Your Free Consultation",
    timerKicker: "",
    exitTitle: "Discuss Your Condition With Our Team",
    exitKicker: "",
  },
  // Leads post to /api/lead → Google Sheet; set GOOGLE_SHEETS_WEBHOOK_URL in .env.local / hosting env vars
  tracking: { thankYouUrl: "/thank-you", metaPixelEvent: "Lead" },

  hero: {
    enabled: true,
    banner: { enabled: false },
    eyebrow: "Personalized Physiotherapy in OMR, Chennai",
    badge: "★ 5.0 Patient Rating | 5,000+ Patients Served",
    headline: "Is Pain Holding You Back? Let's Work Towards <u>Moving Better</u>.",
    sub: "Get personalised physiotherapy care for back pain, joint pain, sports injuries, and neurological conditions at The Physiora, OMR, Chennai.",
    bullets: [
      "Find the cause of pain.",
      "Get a treatment plan tailored to your condition and goals.",
      "Work towards better mobility.",
    ],
    image: "",
    primaryCta: "Book Your Free Consultation",
    secondaryCta: "Call Us Now",
  },

  form: {
    title: "Book Your Free Consultation",
    note: "",
    button: "Book Your Free Consultation →",
    concernLabel: "Select your concern",
    concerns: [
      "Orthopedic Rehabilitation",
      "Neurological Rehabilitation",
      "Sports Physiotherapy",
      "Back & Neck Pain Management",
      "Pain Management Therapy",
      "Strength, Mobility & Fitness",
    ],
    privacyText: "",
  },

  stats: {
    enabled: true,
    items: [
      { value: "5,000+", label: "Happy patients" },
      { value: "5+", label: "Years of experience" },
      { value: "5.0★", label: "Patient rating" },
      { value: "100%", label: "Surgeries avoided" },
    ],
  },

  treatments: {
    enabled: true,
    eyebrow: "",
    title: "What We Treat?",
    sub: "",
    cta: "Find the Right Care for Your Condition",
    items: [
      { icon: "🦴", title: "Orthopedic Rehabilitation", text: "Support your recovery after fractures, injuries, and orthopedic surgeries" },
      { icon: "🧠", title: "Neurological Rehabilitation", text: "Personalised rehabilitation for stroke-related impairments, Parkinson's disease, and spinal cord injuries" },
      { icon: "🏃", title: "Sports Physiotherapy", text: "Sports-related injuries, rebuilding strength, and returning to physical activity" },
      { icon: "💆", title: "Back & Neck Pain Management", text: "Back pain, neck pain, sciatica, and disc-related conditions." },
      { icon: "⚡", title: "Pain Management Therapy", text: "Electrotherapy, manual therapy, and acupuncture." },
      { icon: "🏋️", title: "Strength, Mobility & Fitness", text: "Build strength, improve mobility, and support better movement." },
    ],
  },

  why: {
    enabled: true,
    eyebrow: "",
    title: "Why Choose The Physiora?",
    cta: "Discuss Your Condition With Our Team",
    items: [
      { icon: "🎯", title: "01. Understand Your Concerns", text: "We begin by listening to your symptoms and goals" },
      { icon: "🔍", title: "02. Assess Your Condition", text: "Identifying contributing factors for pain" },
      { icon: "🩺", title: "03. Treatment Just for You", text: "We treat the cause through a customised plan, not just symptoms." },
      { icon: "📈", title: "04. Track Your Progress", text: "We review your response to treatment and adjust your plan as needed." },
      { icon: "🔁", title: "05. Review", text: "Regular progress checks." },
      { icon: "💬", title: "06. Online Option", text: "Offline and online sessions available." },
    ],
  },

  beforeAfter: { enabled: false, eyebrow: "", title: "", items: [], disclaimer: "" },

  process: {
    enabled: true,
    eyebrow: "How It Works",
    title: "From Your First Consultation to a Clearer Recovery Plan",
    sub: "Getting started with physiotherapy should feel straightforward. Here's what you can expect at The Physiora.",
    cta: "Take the First Step. Book a Consultation",
    steps: [
      { title: "Book Your Consultation" },
      { title: "Get Your Condition Assessed" },
      { title: "Understand Your Treatment Plan" },
      { title: "Work Towards Better Movement" },
    ],
  },

  doctor: {
    enabled: true,
    eyebrow: "Meet Your Physiotherapist",
    name: "Meet Dr. Aravinda",
    role: "Chief Physiotherapist | The Physiora",
    image: "https://www.thephysiora.in/static/media/Achievements%20Mam.ad27da6bd8f69120893f.jpg",
    imageAlt: "Dr. Aravinda",
    quote:
      "Good physiotherapy begins with understanding your condition, identifying what may be contributing to it, and creating a plan that works towards your individual recovery goals.",
    pointsTitle: "Credentials & Recognition",
    points: [
      "South's Best Young Physio, Parul University",
      "Experience treating 3,000+ patients through offline and online care",
      "Best Start-Up Entrepreneur, SHE Awards",
      "Guest Speaker, Physio Summit 2024",
    ],
    cta: "Book a Consultation With Dr. Aravinda",
  },

  offer: { enabled: false, tag: "", title: "", oldPrice: "", price: "", bullets: [], cta: "" },

  testimonials: {
    enabled: true,
    eyebrow: "Patient Testimonials",
    title: "Real Experiences. Personal Recovery Journeys.",
    cta: "Start Your Physiotherapy Journey",
    videos: [],
    reviews: [
      { name: "Ranjitha S.", meta: "Chronic Back Pain", text: "After 21 days of therapy, I'm completely pain free. The therapist was kind and motivating." },
      { name: "Senthil Prasanna", meta: "Disc Bulge", text: "28 days of physio and my condition is now manageable and controllable. Excellent care." },
      { name: "Parvathi B.", meta: "Leg Pain", text: "Had pain for 2 years. Dr. Aravinda explained my problem clearly and I'm now nearly pain free." },
    ],
  },

  trustLogos: { enabled: false, title: "", items: [] },

  faq: {
    enabled: true,
    eyebrow: "",
    title: "Frequently Asked Questions",
    cta: "Have More Questions? Contact Our Team",
    items: [
      {
        q: "What are The Physiora's clinic timings?",
        a: "The clinic is open daily from 7 AM to 9 PM. Consulting hours are Monday to Saturday, from 10 AM to 2 PM and 6 PM to 9 PM. Please contact the clinic to confirm appointment availability.",
      },
      {
        q: "How many physiotherapy sessions will I need?",
        a: "The number of sessions depends on your condition, its severity, your functional goals, and how you respond to treatment.",
      },
      {
        q: "Is physiotherapy painful?",
        a: "Some exercises or techniques may cause temporary discomfort, but your physiotherapist can modify the approach based on your response.",
      },
      { q: "Do you offer online physiotherapy consultations?", a: "Yes, both offline and online consultations are available." },
      { q: "Where is The Physiora located?", a: "OMR, Egattur, Chennai. Tap the address below for directions." },
    ],
  },

  finalCta: { enabled: true, eyebrow: "Contact & Location", title: "Visit The Physiora" },

  footer: {
    about: "Personalized physiotherapy care focused on movement, function, and recovery.",
    quickLinks: [
      ["Treatments", "#treatments"],
      ["Our Approach", "#why"],
      ["Meet the Physiotherapist", "#doctor"],
      ["Patient Reviews", "#reviews"],
      ["FAQs", "#faq"],
    ],
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms-and-conditions"],
    ],
    legal:
      "Medical Disclaimer: The information on this website is intended for general awareness and does not replace professional medical advice, diagnosis, or treatment. Treatment recommendations and outcomes vary according to individual circumstances. Consult a qualified healthcare professional for advice about your condition.",
  },
};
