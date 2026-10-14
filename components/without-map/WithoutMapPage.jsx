import { CONFIG as C } from "@/lib/siteConfig";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Treatments from "@/components/sections/Treatments";
import WhyUs from "@/components/sections/WhyUs";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Doctor from "@/components/sections/Doctor";
import Offer from "@/components/sections/Offer";
import Testimonials from "@/components/sections/Testimonials";
import TrustLogos from "@/components/sections/TrustLogos";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/widgets/StickyBar";
import ScrollToTop from "@/components/widgets/ScrollToTop";
import LeadPopup from "@/components/widgets/LeadPopup";
import ClickTracking from "@/components/widgets/ClickTracking";
import JsonLd from "@/components/widgets/JsonLd";
import FinalCtaWithoutMap from "./FinalCtaWithoutMap";

export default function WithoutMapPage() {
  return (
    <>
      <Header />
      <main id="top">
        {C.hero.enabled && <Hero />}
        {C.stats.enabled && <Stats />}
        {C.treatments.enabled && <Treatments />}
        {C.why.enabled && <WhyUs />}
        {C.beforeAfter.enabled && <BeforeAfter />}
        {C.process.enabled && <Process />}
        {C.doctor.enabled && <Doctor />}
        {C.offer.enabled && <Offer />}
        {C.testimonials.enabled && <Testimonials />}
        {C.trustLogos.enabled && <TrustLogos />}
        {C.faq.enabled && <Faq />}
        {C.finalCta.enabled && <FinalCtaWithoutMap />}
        <Footer />
      </main>
      <StickyBar />
      <ScrollToTop />
      <LeadPopup />
      <ClickTracking />
      <JsonLd />
    </>
  );
}
