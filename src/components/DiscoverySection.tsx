
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { BrainCircuit, Sparkles, ArrowUpRight } from "lucide-react";

const DiscoverySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [dataPoints, setDataPoints] = useState([]);
  
  useEffect(() => {
    if (inView) {
      // Create data flow points
      const points = [];
      const pointCount = 30;
      
      for (let i = 0; i < pointCount; i++) {
        points.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          animationDuration: Math.random() * 15 + 10
        });
      }
      
      setDataPoints(points);
    }
  }, [inView]);
  
  const handleBookCall = () => {
    window.open("https://calendly.com/khushnaj7722/30min", "_blank");
  };

  return (
    <section id="discovery" className="section-spacing bg-primary text-white relative overflow-hidden" ref={ref}>
      {/* Digital data flow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated data points */}
        {dataPoints.map(point => (
          <div
            key={`data-point-${point.id}`}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
              animationDuration: `${point.animationDuration}s`
            }}
          />
        ))}
        
        {/* Horizontal flowing data lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={`data-line-h-${i}`}
            className="absolute h-[1px] bg-white/10 animate-data-flow"
            style={{
              top: `${10 + (i * 8)}%`,
              left: '0',
              width: '100%',
              animationDuration: `${10 + i}s`
            }}
          />
        ))}
        
        {/* Vertical flowing data lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={`data-line-v-${i}`}
            className="absolute w-[1px] bg-white/10 animate-data-flow"
            style={{
              left: `${10 + (i * 8)}%`,
              top: '0',
              height: '100%',
              animationDuration: `${10 + i}s`
            }}
          />
        ))}
        
        {/* Scan line effect */}
        <div className="absolute top-0 left-0 w-full h-full animate-scan-line opacity-30"></div>
      </div>
      
      {/* Brain circuit icon with ripple effect */}
      <div className="absolute top-10 right-10 hidden md:block">
        <div className="relative">
          <BrainCircuit className="h-16 w-16 text-white/20" />
          <div className="absolute inset-0 rounded-full animate-ripple"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20 animate-float-delayed">
              <Sparkles className="h-5 w-5 text-white mr-2 animate-neon-pulse" />
              <span className="text-sm font-medium">Discover the Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 cyberpunk-glow">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl opacity-90">
              Book a no-obligation discovery session to see how custom AI agents can help your business grow.
            </p>
          </div>

          <Card className="bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/30 glassmorphism animate-card-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`space-y-6 transition-all duration-700 delay-200 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-2xl font-bold text-white">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    "45-minute video call with our AI solutions experts",
                    "Discussion of your business challenges and opportunities",
                    "Initial ideas for potential AI agent implementations",
                    "Clear next steps and recommended action plan"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div 
                        className="mr-4 bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {index + 1}
                      </div>
                      <div className="relative group">
                        <p className="font-medium text-white group-hover:text-white/80 transition-colors duration-300">
                          {item}
                        </p>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300"></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`flex flex-col justify-center transition-all duration-700 delay-400 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="bg-white/10 p-6 rounded-lg mb-6 backdrop-blur-sm border border-white/20 relative overflow-hidden group">
                  {/* Interactive data visualization effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={`viz-dot-${i}`}
                        className="absolute rounded-full bg-white/20"
                        style={{
                          width: '4px',
                          height: '4px',
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animation: `float ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite alternate`
                        }}
                      />
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 relative z-10">No Obligation, High Value</h4>
                  <p className="text-white/90 relative z-10">
                    Even if you decide not to move forward with us, you'll walk away with valuable insights about how AI can benefit your specific business.
                  </p>
                </div>
                <Button 
                  className="bg-white hover:bg-white/90 text-primary text-lg py-6 group relative overflow-hidden"
                  onClick={handleBookCall}
                >
                  <span className="relative z-10 flex items-center">
                    Schedule Your Discovery Session
                    <ArrowUpRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Button>
                
                {/* Digital circuit traces under the button */}
                <div className="mt-4 relative h-6 opacity-30">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={`circuit-trace-${i}`}
                      className="absolute bg-white/50"
                      style={{
                        height: '1px',
                        left: `${20 * i}%`,
                        width: `${10 + i * 5}%`,
                        top: '50%',
                        transform: i % 2 === 0 ? 'translateY(-3px)' : 'translateY(3px)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
