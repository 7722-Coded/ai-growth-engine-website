
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import DiscoverySection from "@/components/DiscoverySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RobotGuide from "@/components/RobotGuide";
import { Sparkles, Star, Bot } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Add a smooth entrance animation to the page
    document.body.classList.add('fade-enter');
    setTimeout(() => {
      document.body.classList.remove('fade-enter');
      document.body.classList.add('fade-entered');
    }, 500);

    // Create background particles
    createParticles();

    return () => {
      document.body.classList.remove('fade-entered');
      document.body.classList.add('fade-exit');
      
      // Clean up particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  const createParticles = () => {
    // Only run on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(particleContainer);
    
    // Create multiple particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size (small)
      const size = Math.random() * 6 + 2;
      
      // Random opacity and color
      const opacity = Math.random() * 0.15 + 0.1;
      const colors = ['#6E59A5', '#9b87f5', '#E5DEFF'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Set styles
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${opacity}`;
      
      // Set animation 
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      // Append to container
      particleContainer.appendChild(particle);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Add Robot Guide */}
      <RobotGuide />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse shape-blob"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDelay: '2s'}}></div>
        
        {/* Static decorative elements visible on desktop */}
        <div className="hidden md:block absolute top-60 left-10 animate-float">
          <Bot className="h-16 w-16 text-primary/10" />
        </div>
        <div className="hidden md:block absolute bottom-1/3 right-10 animate-float-delayed">
          <Sparkles className="h-14 w-14 text-primary-light/10" />
        </div>
        <div className="hidden md:block absolute bottom-60 left-1/3 animate-float-reverse">
          <Star className="h-12 w-12 text-primary/10" />
        </div>
        
        {/* Orbit animation */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-dashed border-primary/5 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
        </div>
      </div>
      
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
