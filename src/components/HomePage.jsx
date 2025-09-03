import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import TestimonialsSection from "./TestimonialsSection";
import CookieBanner from "./CookieBanner";

const HomePage = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Check if cookies have been accepted before
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      {showCookieBanner && (
        <CookieBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </Layout>
  );
};

export default HomePage;