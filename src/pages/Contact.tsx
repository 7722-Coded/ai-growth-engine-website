
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import RobotGuide from "@/components/RobotGuide";
import { Sparkles, Bot, MessageSquare, Star } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility for animations
    setIsVisible(true);
    
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
    <div className="min-h-screen bg-gradient-to-br from-white to-accent/30 relative overflow-hidden">
      <Navbar />
      <RobotGuide />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating icons */}
        <div className={`absolute top-40 left-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.5s'}}>
          <Bot className="h-16 w-16 text-primary/10 animate-float" />
        </div>
        <div className={`absolute top-60 right-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.7s'}}>
          <MessageSquare className="h-14 w-14 text-primary-light/10 animate-float-delayed" />
        </div>
        <div className={`absolute bottom-40 left-1/4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '0.9s'}}>
          <Sparkles className="h-10 w-10 text-primary/10 animate-float-reverse" />
        </div>
        <div className={`absolute bottom-60 right-1/4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{transitionDelay: '1.1s'}}>
          <Star className="h-12 w-12 text-primary-light/10 animate-float" />
        </div>
        
        {/* Animated paths/lines connecting floating icons */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1, zIndex: 0 }}>
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
        </svg>
      </div>
      
      <div className={`pt-32 animate-fade-in relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 mx-auto animate-float">
              <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Contact Us</span>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 animation-delay-300"></div>
            </h1>
            <p className="text-xl text-gray-600">
              Reach out to discuss how our AI solutions can transform your business operations.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
