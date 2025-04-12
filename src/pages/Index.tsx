
import { useEffect, useState } from "react";
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

    // Create background particles
    createParticles();
    
    // Create cosmic stars
    createCosmicStars();
    
    // Create digital grid lines
    createDigitalGrid();

    return () => {
      document.body.classList.remove('fade-entered');
      document.body.classList.add('fade-exit');
      
      // Clean up particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
      
      // Clean up cosmic stars
      const stars = document.querySelectorAll('.cosmic-star');
      stars.forEach(star => star.remove());
      
      // Clean up grid lines
      const gridLines = document.querySelectorAll('.grid-line');
      gridLines.forEach(line => line.remove());
    };
  }, []);

  const createParticles = () => {
    // Only run on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(particleContainer);
    
    // Create multiple particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size (small)
      const size = Math.random() * 8 + 2;
      
      // Random opacity and color
      const opacity = Math.random() * 0.15 + 0.1;
      const colors = ['#6E59A5', '#9b87f5', '#E5DEFF', '#4A3D70'];
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
      
      // Add holographic effect to some particles
      if (Math.random() > 0.7) {
        particle.classList.add('animate-holographic');
      }
      
      // Append to container
      particleContainer.appendChild(particle);
    }
  };
  
  const createCosmicStars = () => {
    // Only run on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(starsContainer);
    
    // Create multiple stars
    for (let i = 0; i < 50; i++) {
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
      
      // Set animation
      const duration = Math.random() * 3 + 1;
      star.style.animation = `blink ${duration}s infinite`;
      
      // Append to container
      starsContainer.appendChild(star);
    }
  };
  
  const createDigitalGrid = () => {
    // Only run on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const gridContainer = document.createElement('div');
    gridContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(gridContainer);
    
    // Create horizontal lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line';
      
      const posY = i * 5;
      
      // Set styles
      line.style.position = 'absolute';
      line.style.left = '0';
      line.style.right = '0';
      line.style.top = `${posY}%`;
      line.style.height = '1px';
      line.style.backgroundColor = 'rgba(155, 135, 245, 0.05)';
      
      // Append to container
      gridContainer.appendChild(line);
    }
    
    // Create vertical lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line';
      
      const posX = i * 5;
      
      // Set styles
      line.style.position = 'absolute';
      line.style.top = '0';
      line.style.bottom = '0';
      line.style.left = `${posX}%`;
      line.style.width = '1px';
      line.style.backgroundColor = 'rgba(155, 135, 245, 0.05)';
      
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
      
      {/* Robot Guide - placed higher in the DOM for better visibility */}
      <RobotGuide />
      
      {/* Data streams in background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={`data-stream-${i}`} 
            className="absolute bg-primary/30 w-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20%',
              height: `${Math.random() * 40 + 20}%`,
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
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse shape-blob"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse shape-blob" style={{animationDelay: '2s'}}></div>
        
        {/* Holographic icons */}
        <div className="hidden md:block absolute top-40 left-10 animate-levitate">
          <div className="p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20 animate-holographic">
            <Bot className="h-16 w-16 text-primary/50" />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-1/3 right-10 animate-float-delayed">
          <div className="p-3 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
            <Code className="h-14 w-14 text-primary-light/50 animate-neon-pulse" />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-60 left-1/3 animate-float-reverse">
          <div className="p-2 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
            <BrainCircuit className="h-12 w-12 text-primary/50" />
          </div>
        </div>
        <div className="hidden md:block absolute top-1/4 right-1/4 animate-float">
          <div className="p-2 backdrop-blur-md bg-white/10 rounded-lg border border-white/20">
            <Database className="h-10 w-10 text-primary-light/50 animate-holographic" />
          </div>
        </div>
        
        {/* Orbiting elements with futuristic styling */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-dashed border-primary/10 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}>
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/20 rounded-full animate-pulse backdrop-blur-sm border border-primary/30"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary-light/20 rounded-full animate-pulse backdrop-blur-sm border border-primary-light/30"></div>
            <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 bg-accent/30 rounded-full animate-pulse backdrop-blur-sm border border-accent/40"></div>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-primary/20 rounded-full animate-pulse backdrop-blur-sm border border-primary/30"></div>
          </div>
        </div>
        
        {/* Digital particle system */}
        <div className="absolute inset-0 pointer-events-none z-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={`digital-particle-${i}`} 
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                backgroundColor: `rgba(155, 135, 245, ${Math.random() * 0.3 + 0.1})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Scan lines */}
        <div className="absolute inset-0 bg-transparent animate-scan-line pointer-events-none z-10 opacity-10"></div>
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
