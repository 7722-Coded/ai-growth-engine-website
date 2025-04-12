
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import DiscoverySection from "@/components/DiscoverySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RobotGuide from "@/components/RobotGuide";
import { Sparkles, Star, Bot, Code, Zap, BrainCircuit, BarChart, Database } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const animationsEnabled = useRef(window.innerWidth >= 768);
  
  useEffect(() => {
    // Show futuristic loading animation
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Add a smooth entrance animation to the page
    document.body.classList.add('fade-enter');
    setTimeout(() => {
      document.body.classList.remove('fade-enter');
      document.body.classList.add('fade-entered');
    }, 500);

    // Only initialize heavy background effects when not on mobile
    if (animationsEnabled.current) {
      // Throttle particle creation for better performance
      requestAnimationFrame(() => {
        createParticles(15); // Reduced number of particles
        createCosmicStars(30); // Reduced number of stars
        createDigitalGrid();
      });
    }
    
    // Add scroll listener to disable some animations on scroll
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.body.classList.remove('fade-entered');
      document.body.classList.add('fade-exit');
      window.removeEventListener('scroll', handleScroll);
      
      // Clean up particles and effects
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
      
      const stars = document.querySelectorAll('.cosmic-star');
      stars.forEach(star => star.remove());
      
      const gridLines = document.querySelectorAll('.grid-line');
      gridLines.forEach(line => line.remove());
    };
  }, [hasScrolled]);

  const createParticles = (count) => {
    // Skip on mobile devices
    if (!animationsEnabled.current) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(particleContainer);
    
    // Create reduced number of particles with hardware-accelerated properties
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size (small)
      const size = Math.random() * 6 + 2;
      
      // Random opacity and color
      const opacity = Math.random() * 0.15 + 0.1;
      const colors = ['#6E59A5', '#9b87f5', '#E5DEFF', '#4A3D70'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Set styles with transform instead of position where possible
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.opacity = `${opacity}`;
      particle.style.willChange = 'transform'; // Performance optimization
      
      // Set animation with lower duration
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      
      // Add holographic effect to fewer particles
      if (Math.random() > 0.8) {
        particle.classList.add('animate-holographic');
      }
      
      // Append to container
      particleContainer.appendChild(particle);
    }
  };
  
  const createCosmicStars = (count) => {
    // Skip on mobile devices
    if (!animationsEnabled.current) return;
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(starsContainer);
    
    // Create reduced number of stars
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'cosmic-star';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size (small)
      const size = Math.random() * 2 + 1;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.3;
      
      // Set styles
      star.style.position = 'absolute';
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = '#fff';
      star.style.borderRadius = '50%';
      star.style.opacity = `${opacity}`;
      star.style.boxShadow = '0 0 3px rgba(255, 255, 255, 0.5)';
      star.style.willChange = 'opacity'; // Performance optimization
      
      // Set animation with variable duration for staggered effect
      const duration = Math.random() * 3 + 1;
      star.style.animation = `blink ${duration}s infinite`;
      
      // Append to container
      starsContainer.appendChild(star);
    }
  };
  
  const createDigitalGrid = () => {
    // Skip on mobile devices
    if (!animationsEnabled.current) return;
    
    const gridContainer = document.createElement('div');
    gridContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(gridContainer);
    
    // Create fewer horizontal lines
    for (let i = 0; i < 10; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line';
      
      const posY = i * 10;
      
      // Set styles
      line.style.position = 'absolute';
      line.style.left = '0';
      line.style.right = '0';
      line.style.top = `${posY}%`;
      line.style.height = '1px';
      line.style.backgroundColor = 'rgba(155, 135, 245, 0.03)';
      
      // Append to container
      gridContainer.appendChild(line);
    }
    
    // Create fewer vertical lines
    for (let i = 0; i < 10; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line';
      
      const posX = i * 10;
      
      // Set styles
      line.style.position = 'absolute';
      line.style.top = '0';
      line.style.bottom = '0';
      line.style.left = `${posX}%`;
      line.style.width = '1px';
      line.style.backgroundColor = 'rgba(155, 135, 245, 0.03)';
      
      // Append to container
      gridContainer.appendChild(line);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Futuristic loading animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-t-primary border-l-primary border-b-transparent border-r-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BrainCircuit className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      )}
      
      {/* Robot Guide */}
      <RobotGuide />
      
      {/* Data streams in background - fewer and optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-5">
        {Array.from({ length: hasScrolled ? 8 : 12 }).map((_, i) => (
          <div 
            key={`data-stream-${i}`} 
            className="absolute bg-primary/30 will-change-transform w-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20%',
              height: `${Math.random() * 30 + 20}%`,
              opacity: Math.random() * 0.5 + 0.5,
              animationName: 'matrix-rain',
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          ></div>
        ))}
      </div>
      
      {/* Optimized animated background elements - reduced number and opacity */}
      {!hasScrolled && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Reduced number of gradient blobs with lower opacity */}
          <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDuration: '12s'}}></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary-light/3 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDuration: '15s', animationDelay: '1s'}}></div>
          
          {/* Limited holographic icons */}
          {animationsEnabled.current && (
            <>
              <div className="hidden md:block absolute top-40 left-10 animate-levitate" style={{animationDuration: '8s'}}>
                <div className="p-4 backdrop-blur-md bg-white/5 rounded-lg border border-white/10 animate-holographic">
                  <Bot className="h-16 w-16 text-primary/30" />
                </div>
              </div>
              <div className="hidden md:block absolute bottom-1/3 right-10 animate-float-delayed" style={{animationDuration: '10s'}}>
                <div className="p-3 backdrop-blur-md bg-white/5 rounded-lg border border-white/10">
                  <Code className="h-14 w-14 text-primary-light/30 animate-neon-pulse" style={{animationDuration: '3s'}} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <DiscoverySection />
      <ContactSection />
      <Footer />
      
      {/* New quantum particle effect at lower half of page */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`quantum-particle-${i}`}
              className="absolute rounded-full bg-primary-light/30 animate-quantum-float will-change-transform"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                bottom: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 2}px)`,
                boxShadow: '0 0 8px rgba(155, 135, 245, 0.8)',
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* New digital energy waves in lower sections */}
      <div className="absolute bottom-0 left-0 right-0 h-[70vh] overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary/5 to-transparent"></div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={`energy-wave-${i}`}
            className="absolute bottom-0 left-0 right-0 h-[200px] animate-energy-wave will-change-transform"
            style={{
              borderRadius: '50% 50% 0 0',
              border: '1px solid rgba(155, 135, 245, 0.1)',
              animationDuration: `${15 + i * 5}s`,
              animationDelay: `${i * 2}s`,
              backgroundColor: 'rgba(155, 135, 245, 0.03)',
              transform: 'scaleX(2)',
              height: `${100 + i * 30}px`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Index;
