/* =====================================================================
   CONFIG — the only part you edit for each client / treatment page
   Set a section to enabled:false to hide it.
   Colours live in app/globals.css (@theme).
   ===================================================================== */
export const CONFIG = {
  meta: {
    title: "Best Physiotherapy Clinic in OMR, Chennai | The Physiora",
    description:
      "Pain relief physiotherapy in OMR, Egattur, Chennai. Back pain, sciatica, disc bulge, sports & neuro rehab. Book a free consultation.",
    schemaType: "MedicalClinic",
  },
  clinic: {
    name: "The Physiora",
    logo: "https://www.thephysiora.in/static/media/Brain%20&%20Spine%20PNG.fae8d9eafbe553c29044.png",
    phone: "+918925449512",
    phoneDisplay: "+91 89254 49512",
    whatsapp: "918925449512",
    whatsappMsg: "Hi, I'd like to book a physiotherapy appointment at The Physiora.",
    address: "OMR, Egattur, Chennai",
    mapLink: "https://www.google.com/maps/place/THE+PHYSIORA+Physiotherapy+Clinic/@12.8286787,80.22752,17z",
    mapEmbed: "https://maps.google.com/maps?q=12.8286787,80.2300949&z=16&output=embed",
    hours: "Daily 7 AM – 9 PM • Consulting Mon–Sat 10 AM–2 PM, 6–9 PM",
    email: "thephysioraclinic@gmail.com",
  },
  popup: {
    enabled: true,
    delaySeconds: 20,
    timerTitle: "Book Your Free Consultation",
    timerKicker: "Limited slots today",
    exitTitle: "Wait! Get a Free Consultation",
    exitKicker: "Before you go",
  },
  tracking: { webhookUrl: "", thankYouUrl: "", metaPixelEvent: "Lead" },

  hero: {
    enabled: true,
    banner: {
      enabled: false,
      image: "banner.svg",
      title: "Pain-Free Movement Starts Here",
      sub: "The Physiora • Physiotherapy Clinic, OMR Egattur",
      side: "https://www.thephysiora.in/static/media/8443649.cb176dea7e88f4a3dc6c.jpg",
    },
    badge: "⭐ 5.0 rated • 5,000+ patients",
    headline: "Back or Joint Pain? Get <u>Real Relief</u>",
    sub: "Expert physiotherapy at OMR, Chennai.",
    bullets: ["Find the cause of pain", "Personalised treatment", "Free consultation"],
    image: "",
    primaryCta: "Book Free Consultation",
  },

  form: {
    title: "Book Free Consultation",
    note: "We'll call you in 30 mins",
    button: "Book Appointment →",
    concernLabel: "Select your concern",
    concerns: [
      "Back / Neck Pain",
      "Sciatica / Disc Bulge",
      "Knee / Joint Pain",
      "Sports Injury",
      "Stroke / Neuro Rehab",
      "Post-Surgery Rehab",
      "Other",
    ],
    askCity: false,
    askMessage: false,
    privacyText: "🔒 Your details are safe and never shared.",
  },

  stats: {
    enabled: true,
    items: [
      { value: "5,000+", label: "Happy patients" },
      { value: "5+", label: "Years of experience" },
      { value: "5.0★", label: "Patient rating" },
      { value: "100+", label: "Surgeries avoided" },
    ],
  },

  treatments: {
    enabled: true,
    eyebrow: "Treatments",
    title: "What We Treat",
    sub: "",
    cta: "Check Your Condition",
    items: [
      { icon: "🦴", title: "Orthopedic Rehab", text: "Recover from injuries, fractures and surgeries." },
      { icon: "🧠", title: "Neuro Rehab", text: "Care for stroke, Parkinson's and spinal cord injuries." },
      { icon: "🏃", title: "Sports Physio", text: "Heal faster and get back to performance." },
      { icon: "💆", title: "Back & Neck Pain", text: "Sciatica, disc bulge and chronic spine pain." },
      { icon: "⚡", title: "Pain Relief Therapy", text: "Electrotherapy, manual therapy and acupuncture." },
      { icon: "🏋️", title: "Fitness Programs", text: "Strength and mobility plans for all ages." },
    ],
  },

  why: {
    enabled: true,
    eyebrow: "Why Us",
    title: "Our 5-Step Approach",
    items: [
      { icon: "🎯", title: "Understand", text: "We learn your goal first." },
      { icon: "🔍", title: "Analyse", text: "We find the true cause of pain." },
      { icon: "🩺", title: "Treat", text: "We treat the cause, not just symptoms." },
      { icon: "📈", title: "Review", text: "Regular progress checks." },
      { icon: "⏱️", title: "Fast Relief", text: "Pain reduced in the fewest days possible." },
      { icon: "💬", title: "Online Option", text: "Offline and online sessions available." },
    ],
  },

  beforeAfter: {
    enabled: false,
    eyebrow: "Results",
    title: "Real Patients. Real Results.",
    items: [],
    disclaimer: "Results vary from person to person.",
  },

  process: {
    enabled: true,
    eyebrow: "How It Works",
    title: "Your Recovery in 4 Steps",
    steps: [
      { title: "Book", text: "Fill the form or call us." },
      { title: "Assessment", text: "Doctor finds the root cause." },
      { title: "Therapy Plan", text: "Clear plan, sessions and timeline." },
      { title: "Recovery", text: "Guided exercises and follow-ups." },
    ],
  },

  doctor: {
    enabled: true,
    eyebrow: "Doctor",
    name: "Dr. Aravinda",
    role: "Chief Physiotherapist • The Physiora",
    image: "https://www.thephysiora.in/static/media/Achievements%20Mam.ad27da6bd8f69120893f.jpg",
    quote: "We treat the cause of your pain, so you can move freely again.",
    points: [
      "South's Best Young Physio, Parul University",
      "Treated 3,000+ patients, offline & online",
      "Best Start-Up Entrepreneur, SHE Awards",
      "Guest speaker, Physio Summit 2024",
    ],
    cta: "Consult the Doctor",
  },

  offer: { enabled: false, tag: "", title: "", oldPrice: "", price: "", bullets: [], cta: "" },

  testimonials: {
    enabled: true,
    eyebrow: "Reviews",
    title: "What Patients Say",
    videos: [],
    reviews: [
      { name: "Ranjitha S.", meta: "Chronic back pain", text: "After 21 days of therapy, I'm completely pain free. The therapist was kind and motivating." },
      { name: "Senthil Prasanna", meta: "Disc bulge", text: "28 days of physio and my condition is now manageable and controllable. Excellent care." },
      { name: "Parvathi B.", meta: "Leg pain", text: "Had pain for 2 years. Dr. Aravinda explained my problem clearly and I'm now nearly pain free." },
    ],
  },

  trustLogos: { enabled: false, title: "", items: [] },

  faq: {
    enabled: true,
    eyebrow: "FAQ",
    title: "Common Questions",
    items: [
      { q: "What are your clinic timings?", a: "Open daily 7 AM to 9 PM. Consulting hours are Mon–Sat, 10 AM–2 PM and 6–9 PM. Sunday is by prior appointment." },
      { q: "How many sessions will I need?", a: "It depends on your condition. After assessment, the doctor will give you a clear plan. Many patients see relief in 3–4 weeks." },
      { q: "Is physiotherapy painful?", a: "Treatment is planned to be comfortable. Your therapist explains each step." },
      { q: "Do you offer online sessions?", a: "Yes, both offline and online consultations are available." },
      { q: "Where is the clinic?", a: "OMR, Egattur, Chennai. Tap the address below for directions." },
    ],
  },

  finalCta: { enabled: true, title: "Don't live with pain", text: "Book today. Our team will call you within 30 minutes." },

  footer: {
    about: "Compassionate care with tailored physiotherapy.",
    links: [
      ["Privacy Policy", "#"],
      ["Terms & Conditions", "#"],
    ],
    legal:
      "Disclaimer: Information on this page is for general awareness and is not a substitute for medical advice. Individual results may vary.",
  },
};
