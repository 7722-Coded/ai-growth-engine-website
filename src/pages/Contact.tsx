
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import RobotGuide from "@/components/RobotGuide";
import { Sparkles, Bot, MessageSquare, Star, Database, BrainCircuit, Zap, Orbit } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show futuristic loading animation
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Set visibility for animations
    setIsVisible(true);
    
    // Add a smooth entrance animation to the page
    document.body.classList.add('fade-enter');
    setTimeout(() => {
      document.body.classList.remove('fade-enter');
      document.body.classList.add('fade-entered');
    }, 500);
    
    // Create dynamic connection lines
    createConnectionLines();

    return () => {
      document.body.classList.remove('fade-entered');
      document.body.classList.add('fade-exit');
      
      // Clean up connection lines
      const lines = document.querySelectorAll('.connection-line');
      lines.forEach(line => line.remove());
    };
  }, []);
  
  const createConnectionLines = () => {
    // Only run on non-mobile devices
    if (window.innerWidth < 768) return;
    
    const linesContainer = document.createElement('div');
    linesContainer.className = 'fixed inset-0 pointer-events-none z-0';
    document.body.appendChild(linesContainer);
    
    // Create multiple lines
    for (let i = 0; i < 15; i++) {
      const line = document.createElement('div');
      line.className = 'connection-line';
      
      // Random position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = startX + (Math.random() * 40 - 20);
      const endY = startY + (Math.random() * 40 - 20);
      
      // Calculate length and angle
      const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
      
      // Set styles
      line.style.position = 'absolute';
      line.style.left = `${startX}%`;
      line.style.top = `${startY}%`;
      line.style.width = `${length}px`;
      line.style.height = '1px';
      line.style.backgroundColor = 'rgba(155, 135, 245, 0.15)';
      line.style.transform = `rotate(${angle}deg)`;
      line.style.transformOrigin = 'left center';
      
      // Set animation
      const pulseDelay = Math.random() * 5;
      line.style.animation = `pulse 3s ease-in-out ${pulseDelay}s infinite`;
      
      // Append to container
      linesContainer.appendChild(line);
      
      // Add node points at start and end
      const startNode = document.createElement('div');
      startNode.className = 'connection-node';
      startNode.style.position = 'absolute';
      startNode.style.left = `${startX}%`;
      startNode.style.top = `${startY}%`;
      startNode.style.width = '4px';
      startNode.style.height = '4px';
      startNode.style.backgroundColor = 'rgba(155, 135, 245, 0.5)';
      startNode.style.borderRadius = '50%';
      startNode.style.transform = 'translate(-50%, -50%)';
      startNode.style.animation = `pulse 3s ease-in-out ${pulseDelay}s infinite`;
      linesContainer.appendChild(startNode);
      
      const endNode = document.createElement('div');
      endNode.className = 'connection-node';
      endNode.style.position = 'absolute';
      endNode.style.left = `${endX}%`;
      endNode.style.top = `${endY}%`;
      endNode.style.width = '4px';
      endNode.style.height = '4px';
      endNode.style.backgroundColor = 'rgba(155, 135, 245, 0.5)';
      endNode.style.borderRadius = '50%';
      endNode.style.transform = 'translate(-50%, -50%)';
      endNode.style.animation = `pulse 3s ease-in-out ${pulseDelay}s infinite`;
      linesContainer.appendChild(endNode);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-accent/30 relative overflow-hidden">
      {/* Futuristic loading animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <MessageSquare className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-primary animate-pulse" />
          </div>
        </div>
      )}
    
      <RobotGuide />
      
      <Navbar />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Digital particles */}
        <div className="absolute inset-0 ai-circuit-pattern opacity-10"></div>
        
        {/* Holographic data visualization elements */}
        <div className="hidden lg:block absolute top-20 left-1/3 animate-hologram-rotate opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(155, 135, 245, 0.3)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(155, 135, 245, 0.5)" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(155, 135, 245, 0.7)" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Floating icons with futuristic styling */}
        <div className={`absolute top-40 left-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.5s'}}>
          <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20 animate-levitate">
            <Bot className="h-16 w-16 text-primary/30 animate-neon-pulse" />
          </div>
        </div>
        <div className={`absolute top-60 right-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.7s'}}>
          <div className="backdrop-blur-sm bg-white/10 p-3 rounded-lg border border-white/20 animate-float-delayed">
            <MessageSquare className="h-14 w-14 text-primary-light/30 animate-holographic" />
          </div>
        </div>
        <div className={`absolute bottom-40 left-1/4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.9s'}}>
          <div className="backdrop-blur-sm bg-white/10 p-2 rounded-lg border border-white/20 animate-float-reverse">
            <Sparkles className="h-10 w-10 text-primary/30 animate-neon-pulse" />
          </div>
        </div>
        <div className={`absolute bottom-60 right-1/4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '1.1s'}}>
          <div className="backdrop-blur-sm bg-white/10 p-2 rounded-lg border border-white/20 animate-float">
            <Star className="h-12 w-12 text-primary-light/30 animate-holographic" />
          </div>
        </div>
        <div className={`absolute top-1/3 right-1/3 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '1.3s'}}>
          <div className="backdrop-blur-sm bg-white/10 p-2 rounded-lg border border-white/20 animate-levitate">
            <BrainCircuit className="h-12 w-12 text-primary/30 animate-neon-pulse" />
          </div>
        </div>
        
        {/* Data flow lines */}
        <div className="absolute inset-0 animate-data-flow"></div>
        
        {/* Animated paths/lines connecting floating icons */}
        <svg className="absolute inset-0 w-full h-full animate-holographic" style={{ opacity: 0.1, zIndex: 0 }}>
          <path 
            d="M100,200 Q400,100 700,300" 
            stroke="#6E59A5" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="10,10" 
            className="animate-pulse"
          />
          <path 
            d="M300,500 Q500,300 800,400" 
            stroke="#9b87f5" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="10,10" 
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M200,100 Q400,400 600,200" 
            stroke="#9b87f5" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="10,10" 
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <circle cx="100" cy="200" r="5" fill="#6E59A5" className="animate-pulse" />
          <circle cx="700" cy="300" r="5" fill="#6E59A5" className="animate-pulse" />
          <circle cx="300" cy="500" r="5" fill="#9b87f5" className="animate-pulse" />
          <circle cx="800" cy="400" r="5" fill="#9b87f5" className="animate-pulse" />
          <circle cx="200" cy="100" r="5" fill="#9b87f5" className="animate-pulse" />
          <circle cx="600" cy="200" r="5" fill="#9b87f5" className="animate-pulse" />
        </svg>
        
        {/* Digital rain effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={`matrix-${i}`}
              className="absolute animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                width: '1px',
                height: '30%',
                background: 'linear-gradient(to bottom, rgba(155, 135, 245, 0), rgba(155, 135, 245, 0.5), rgba(155, 135, 245, 0))',
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className={`pt-32 animate-fade-in relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 mx-auto animate-float futuristic-ui-border">
              <Sparkles className="h-5 w-5 text-primary mr-2 animate-neon-pulse" />
              <span className="text-sm font-medium text-primary holographic-text">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative cyberpunk-glow">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-holographic">Contact Us</span>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 animation-delay-300 animate-neon-pulse"></div>
            </h1>
            <p className="text-xl text-gray-600">
              Reach out to discuss how our AI solutions can transform your business operations.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </div>
      
      {/* Scanline effect overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary-light animate-scan-line"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
