import React from "react";
import Header from "../components/header";
import ExpertiseSection from "../components/cards";
import HeroWithNeonEffect from "../components/HeroWithNeonEffect";
import PayoutServiceUI from "../components/PayoutServiceUI";
import NeonTagline from "../components/NeonTagline";
import SupportSection from "../components/SupportSection";
import PaymentSimplifySection from "../components/PaymentSimplifySection";
import PaymentHero from "../components/PaymentsHero";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Header />

      <main>
        <ExpertiseSection />
        <NeonTagline />

        {/* PayoutServiceUI with different background */}
        <div>
          <PayoutServiceUI />
        </div>

        <HeroWithNeonEffect />
        <SupportSection />
        <PaymentSimplifySection />
        <PaymentHero />
        <TestimonialsCarousel />
        <Footer />
      </main>
    </div>
  );
}
