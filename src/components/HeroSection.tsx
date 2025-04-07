
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-accent pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Deploy <span className="gradient-text">Custom AI Agents</span> to Grow Your Business
              </h1>
              <p className="text-xl text-gray-600">
                Our AI agency specializes in creating tailored digital employees that streamline operations, enhance customer experience, and drive growth for local businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 rounded-lg"
                  onClick={() => document.getElementById('discovery')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="glass-card p-4 rounded-xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              <div className="relative">
                <div className="w-full h-full absolute -top-3 -left-3 border-2 border-primary rounded-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="AI Growth Partners - Custom AI Solutions" 
                  className="rounded-lg w-full max-w-md shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg animate-float">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <p className="font-bold">24/7 AI Support</p>
                    <p className="text-sm">Handles tasks while you focus on growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
          className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Learn More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-center justify-center">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
