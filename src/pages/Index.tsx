
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import DiscoverySection from "@/components/DiscoverySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add a smooth entrance animation to the page
    document.body.classList.add('fade-enter');
    setTimeout(() => {
      document.body.classList.remove('fade-enter');
      document.body.classList.add('fade-entered');
    }, 500);

    return () => {
      document.body.classList.remove('fade-entered');
      document.body.classList.add('fade-exit');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <DiscoverySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
