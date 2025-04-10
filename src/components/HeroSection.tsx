
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, MessageSquare, CheckCircle, Star, Sparkles, Database, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating icons animation
    const floatingIcons = floatingIconsRef.current;
    if (floatingIcons) {
      const icons = floatingIcons.querySelectorAll('.floating-icon');
      icons.forEach((icon, index) => {
        const delay = index * 0.3;
        (icon as HTMLElement).style.animationDelay = `${delay}s`;
      });
    }
  }, []);

  const handleBookCall = () => {
    window.open("https://calendly.com/khushnaj7722/30min", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-accent pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl transform transition-all duration-1000 animate-pulse shape-blob"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl transform transition-all duration-1000 delay-500 animate-pulse shape-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl transform transition-all duration-1000 delay-700 animate-pulse shape-blob"></div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/4 right-1/4 animate-orbit opacity-70 hidden md:block">
          <div className="bg-primary/30 p-3 rounded-full shadow-lg">
            <Star className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-orbit opacity-70 hidden md:block" style={{ animationDelay: '2s' }}>
          <div className="bg-primary-light/30 p-3 rounded-full shadow-lg">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className={`max-w-xl space-y-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 animate-float-delayed">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">AI-Powered Growth Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Deploy <span className="gradient-text bg-gradient-to-r from-primary-light to-primary inline-block bg-clip-text text-transparent">Custom AI Agents</span> to Grow Your Business
              </h1>
              <p className="text-xl text-gray-600 transition-all duration-700 delay-300 transform" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
                Our AI agency specializes in creating tailored digital employees that streamline operations, enhance customer experience, and drive growth for local businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 transform" style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg transform transition-transform hover:scale-105 animate-ripple"
                  onClick={handleBookCall}
                >
                  <span className="relative z-10">Book a Discovery Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-lg transform transition-transform hover:scale-105"
                  onClick={() => window.location.href = '#/services'}
                >
                  Explore Our Services
                </Button>
              </div>
              
              {/* Floating stats */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg shadow-md px-4 py-2 animate-float" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg shadow-md px-4 py-2 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Instant Responses</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg shadow-md px-4 py-2 animate-float" style={{ animationDelay: '0.8s' }}>
                  <Database className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Smart Insights</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Floating icons */}
            <div ref={floatingIconsRef} className="absolute inset-0 overflow-hidden">
              <div className="floating-icon absolute top-10 left-10 animate-float-delayed">
                <Bot className="h-10 w-10 text-primary opacity-30" />
              </div>
              <div className="floating-icon absolute top-40 right-20 animate-float">
                <MessageSquare className="h-8 w-8 text-primary-light opacity-30" />
              </div>
              <div className="floating-icon absolute bottom-20 left-20 animate-float-reverse">
                <Code className="h-12 w-12 text-primary opacity-30" />
              </div>
              <div className="floating-icon absolute bottom-40 right-10 animate-float-delayed">
                <Database className="h-10 w-10 text-primary-light opacity-30" />
              </div>
            </div>
            
            {/* Main image card with enhanced effects */}
            <div className={`card-3d glass-card p-4 rounded-xl transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="card-3d-inner relative">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-primary rounded-xl gradient-border"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="AI Growth Partners - Custom AI Solutions" 
                  className="rounded-lg w-full max-w-md shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="bg-primary text-white p-3 rounded-lg transform transition-transform hover:scale-105 animate-pulse">
                    <p className="font-bold">24/7 AI Support</p>
                    <p className="text-sm">Handles tasks while you focus on growth</p>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-5 -right-5 bg-white p-2 rounded-full shadow-lg animate-float-reverse glassmorphism">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-6 w-6 text-primary animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 delay-1000" style={{
        opacity: isVisible ? 1 : 0
      }}>
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Learn More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-center justify-center group animate-bounce">
            <div className="w-1.5 h-3 bg-current rounded-full group-hover:animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
