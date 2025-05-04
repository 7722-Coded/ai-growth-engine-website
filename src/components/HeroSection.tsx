import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, MessageSquare, CheckCircle, Star, Sparkles, Database, Zap, BrainCircuit, Orbit, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

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
    
    // Custom cursor effect (desktop only)
    if (window.innerWidth > 768) {
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        
        if (cursorDotRef.current) {
          cursorDotRef.current.style.left = `${e.clientX}px`;
          cursorDotRef.current.style.top = `${e.clientY}px`;
        }
        
        if (cursorOutlineRef.current) {
          // Create trailing effect
          setTimeout(() => {
            if (cursorOutlineRef.current) {
              cursorOutlineRef.current.style.left = `${e.clientX}px`;
              cursorOutlineRef.current.style.top = `${e.clientY}px`;
            }
          }, 100);
        }
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const handleBookCall = () => {
    window.open("https://cal.com/aigrowthpartners", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-accent pt-20 futuristic-cursor">
      {/* Custom cursor (desktop only) */}
      {window.innerWidth > 768 && (
        <>
          <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
          <div ref={cursorOutlineRef} className="cursor-outline hidden md:block"></div>
        </>
      )}
      
      {/* Digital circuit background pattern */}
      <div className="absolute inset-0 ai-circuit-pattern opacity-5"></div>
      
      {/* Animated background blobs with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl transform transition-all duration-1000 animate-pulse shape-blob animate-holographic"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl transform transition-all duration-1000 delay-500 animate-pulse shape-blob animate-holographic" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl transform transition-all duration-1000 delay-700 animate-pulse shape-blob"></div>
        
        {/* Data flow lines */}
        <div className="absolute inset-0 animate-data-flow opacity-10"></div>
        
        {/* Digital particle system */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`digital-particle-${i}`} 
              className="absolute rounded-full animate-float"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: Math.random() > 0.5 ? '#6E59A5' : '#9b87f5',
                boxShadow: '0 0 5px rgba(155, 135, 245, 0.5)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Orbiting elements with holographic effects */}
        <div className="absolute top-1/4 right-1/4 animate-orbit opacity-70 hidden md:block">
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-full border border-primary/20 shadow-lg animate-holographic">
            <Star className="h-5 w-5 text-white/70" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-orbit opacity-70 hidden md:block" style={{ animationDelay: '2s' }}>
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-full border border-primary-light/20 shadow-lg animate-holographic">
            <CheckCircle className="h-5 w-5 text-white/70" />
          </div>
        </div>
        <div className="absolute top-1/3 left-2/3 animate-orbit opacity-70 hidden md:block" style={{ animationDelay: '4s', animationDirection: 'reverse' }}>
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-full border border-primary/20 shadow-lg animate-holographic">
            <BrainCircuit className="h-5 w-5 text-white/70" />
          </div>
        </div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 animate-scan-line"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className={`max-w-xl space-y-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 animate-float-delayed backdrop-blur-sm border border-primary/20 futuristic-ui-border">
                <Sparkles className="h-5 w-5 text-primary mr-2 animate-neon-pulse" />
                <span className="text-sm font-medium text-primary">AI-Powered Growth Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Deploy <span className="gradient-text bg-gradient-to-r from-primary-light to-primary inline-block bg-clip-text text-transparent animate-holographic cyberpunk-glow">Custom AI Agents</span> to Grow Your Business
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
                  className="futuristic-button group overflow-hidden relative"
                  onClick={handleBookCall}
                >
                  <span className="relative z-10 flex items-center text-lg py-6 px-8">Book a Discovery Call
                    <ArrowUpRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-sm glassmorphism hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
                  onClick={() => window.location.href = '#/services'}
                >
                  <span className="relative z-10">Explore Our Services</span>
                </Button>
              </div>
              
              {/* Floating stats with enhanced futuristic styling */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center backdrop-blur-sm bg-white/70 rounded-lg border border-white/50 shadow-lg px-4 py-2 animate-float futuristic-ui-border" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="h-5 w-5 text-primary mr-2 animate-neon-pulse" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center backdrop-blur-sm bg-white/70 rounded-lg border border-white/50 shadow-lg px-4 py-2 animate-float futuristic-ui-border" style={{ animationDelay: '0.5s' }}>
                  <Zap className="h-5 w-5 text-primary mr-2 animate-neon-pulse" />
                  <span className="text-sm font-medium">Instant Responses</span>
                </div>
                <div className="flex items-center backdrop-blur-sm bg-white/70 rounded-lg border border-white/50 shadow-lg px-4 py-2 animate-float futuristic-ui-border" style={{ animationDelay: '0.8s' }}>
                  <Database className="h-5 w-5 text-primary mr-2 animate-neon-pulse" />
                  <span className="text-sm font-medium">Smart Insights</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Floating icons with enhanced animations */}
            <div ref={floatingIconsRef} className="absolute inset-0 overflow-hidden">
              <div className="floating-icon absolute top-10 left-10 animate-float-delayed">
                <Bot className="h-10 w-10 text-primary opacity-30 animate-neon-pulse" />
              </div>
              <div className="floating-icon absolute top-40 right-20 animate-float">
                <MessageSquare className="h-8 w-8 text-primary-light opacity-30 animate-neon-pulse" />
              </div>
              <div className="floating-icon absolute bottom-20 left-20 animate-float-reverse">
                <Code className="h-12 w-12 text-primary opacity-30 animate-neon-pulse" />
              </div>
              <div className="floating-icon absolute bottom-40 right-10 animate-float-delayed">
                <Database className="h-10 w-10 text-primary-light opacity-30 animate-neon-pulse" />
              </div>
              <div className="floating-icon absolute top-20 right-40 animate-levitate">
                <BrainCircuit className="h-10 w-10 text-primary opacity-30 animate-neon-pulse" />
              </div>
              <div className="floating-icon absolute bottom-10 left-40 animate-float-reverse">
                <Orbit className="h-8 w-8 text-primary-light opacity-30 animate-neon-pulse" />
              </div>
            </div>
            
            {/* Main image card with enhanced holographic effects */}
            <div className={`card-3d glassmorphism p-4 rounded-xl transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="card-3d-inner relative">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-primary/40 rounded-xl animate-neon-pulse"></div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer rounded-lg"></div>
                
                {/* Main image */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="AI Growth Partners - Custom AI Solutions" 
                    className="rounded-lg w-full max-w-md shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] animate-holographic"
                  />
                  
                  {/* Digital scan effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-primary-light/50 animate-scan-line"></div>
                  </div>
                  
                  {/* Data points on the image */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="absolute -bottom-5 -right-5 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg animate-float border border-white/50">
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-3 rounded-lg transform transition-transform hover:scale-105 animate-neon-pulse futuristic-ui-border">
                    <p className="font-bold">24/7 AI Support</p>
                    <p className="text-sm">Handles tasks while you focus on growth</p>
                  </div>
                </div>
                
                {/* Floating badge with holographic effect */}
                <div className="absolute -top-5 -right-5 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg animate-float-reverse border border-white/50">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-6 w-6 text-primary animate-neon-pulse" />
                  </div>
                </div>
                
                {/* Floating data points */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`data-point-${i}`}
                      className="absolute w-1 h-1 bg-primary-light rounded-full animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 2 + 1}s`
                      }}
                    ></div>
                  ))}
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
          <span className="text-sm mb-2 animate-neon-pulse">Learn More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-center justify-center group animate-bounce futuristic-ui-border">
            <div className="w-1.5 h-3 bg-current rounded-full group-hover:animate-pulse animate-neon-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
