"use client";

import { useEffect, useState } from "react";
import { CONFIG as C } from "@/lib/siteConfig";

// schema.org MedicalClinic + FAQPage
export default function JsonLd() {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(location.href), []);

  const data = {
    "@context": "https://schema.org",
    "@type": C.meta.schemaType,
    name: C.clinic.name,
    telephone: C.clinic.phone,
    address: C.clinic.address,
    openingHours: C.clinic.hours,
    url,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: C.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
