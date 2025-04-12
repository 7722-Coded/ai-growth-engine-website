
import { Check } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Session",
    description: "We start with a deep dive into your business, understanding your workflows, tools, and where you're losing time or money on repetitive tasks.",
    features: [
      "Comprehensive business analysis",
      "Workflow documentation",
      "Pain point identification",
      "Opportunity mapping"
    ]
  },
  {
    number: "02",
    title: "System Design",
    description: "Based on our discovery findings, we design AI agents that integrate with your existing systems and address your specific needs.",
    features: [
      "Custom AI agent architecture",
      "Integration planning",
      "Implementation roadmap",
      "ROI projection"
    ]
  },
  {
    number: "03",
    title: "Development & Training",
    description: "We build your custom AI agents and train them on your specific data, business rules, and brand voice.",
    features: [
      "Custom development",
      "Data training & fine-tuning",
      "Brand voice calibration",
      "Extensive testing"
    ]
  },
  {
    number: "04",
    title: "Deployment & Optimization",
    description: "We deploy your AI agents and continuously monitor their performance, making adjustments to improve results over time.",
    features: [
      "Seamless integration",
      "Staff training",
      "Performance monitoring",
      "Ongoing optimization"
    ]
  }
];

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [activeLine, setActiveLine] = useState(0);
  const [hyperdriveStars, setHyperdriveStars] = useState([]);
  
  useEffect(() => {
    // Progress through timeline when in view
    if (inView) {
      const interval = setInterval(() => {
        setActiveLine(prev => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);
  
  // Generate hyperdrive star field
  useEffect(() => {
    if (inView) {
      const stars = [];
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1;
        const speed = Math.random() * 15 + 5;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.7 + 0.3;
        
        stars.push({
          id: i,
          size,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `hyperdrive-star ${speed}s linear ${delay}s infinite`,
          opacity
        });
      }
      
      setHyperdriveStars(stars);
    }
  }, [inView]);
  
  return (
    <section id="process" className="section-spacing bg-muted relative overflow-hidden" ref={ref}>
      {/* Hyperdrive star field */}
      <div className="hyperdrive-bg">
        {hyperdriveStars.map(star => (
          <div
            key={`hyperdrive-star-${star.id}`}
            className="hyperdrive-star"
            style={{
              width: `${star.size}px`,
              height: `${star.size * 5}px`,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              animation: star.animation
            }}
          />
        ))}
      </div>
      
      {/* Quantum tunnel effect */}
      <div className="absolute inset-0 quantum-tunnel pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`quantum-ring-${i}`}
            className="quantum-ring animate-pulse"
            style={{
              width: `${(i + 1) * 12}%`,
              height: `${(i + 1) * 12}%`,
              opacity: 0.05 - (i * 0.005),
              animationDuration: `${7 + i}s`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="holographic-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our proven methodology ensures we deliver AI solutions that truly address your business needs and integrate seamlessly with your operations.
          </p>
          
          {/* Timeline connector with active progress */}
          <div className="mt-10 relative h-2 bg-gray-200 rounded-full max-w-md mx-auto">
            <div 
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000" 
              style={{ width: `${(activeLine + 1) / steps.length * 100}%` }}
            />
            
            {steps.map((_, index) => (
              <div
                key={`step-dot-${index}`}
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${index <= activeLine ? 'bg-primary border-primary' : 'bg-white border-gray-300'}`}
                style={{ left: `${index / (steps.length - 1) * 100}%`, marginLeft: '-8px' }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="w-full md:w-1/2">
                <div className={`p-1 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                  <div className={`h-1 w-16 bg-primary mb-6 ${index % 2 === 0 ? '' : 'ml-auto'} transition-all duration-1000 ${inView ? 'w-16' : 'w-0'}`} />
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-primary/20 mr-4 animate-pulse">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold relative">
                      {step.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start group">
                        <span 
                          className="mr-2 mt-1 bg-primary rounded-full p-1 transform transition-all duration-300 group-hover:scale-125"
                          style={{transitionDelay: `${fIndex * 100}ms`}}
                        >
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span 
                          className="text-gray-700 transition-all duration-300 group-hover:text-primary"
                          style={{transitionDelay: `${fIndex * 100}ms`}}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className={`glass-card p-6 ${index % 2 === 0 ? '' : 'md:ml-auto'} max-w-md overflow-hidden`}>
                  <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 p-4 rounded-lg h-60 flex items-center justify-center relative">
                    {/* Digital circuit traces */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={`circuit-${index}-${i}`}
                          className={`absolute h-[1px] bg-primary-light/30 animate-data-flow`}
                          style={{
                            top: `${20 + i * 15}%`,
                            left: '0',
                            width: '100%',
                            animationDuration: `${5 + i}s`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={`circuit-v-${index}-${i}`}
                          className={`absolute w-[1px] bg-primary-light/30 animate-data-flow`}
                          style={{
                            left: `${20 + i * 15}%`,
                            top: '0',
                            height: '100%',
                            animationDuration: `${5 + i}s`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <div 
                      className={`bg-white p-4 rounded-lg shadow-lg transform ${index === activeLine ? 'scale-110' : 'scale-100'} hover:scale-110 transition-transform duration-700 animate-card-glow relative z-10`}
                    >
                      <div className="bg-primary/10 h-40 w-60 rounded flex items-center justify-center relative overflow-hidden">
                        {/* Digital data particles */}
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div 
                            key={`data-particle-${index}-${i}`}
                            className="absolute rounded-full bg-primary-light/40 animate-float"
                            style={{
                              width: `${Math.random() * 4 + 2}px`,
                              height: `${Math.random() * 4 + 2}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDuration: `${Math.random() * 3 + 2}s`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                        
                        <span className="text-primary font-bold text-xl relative">
                          Step {step.number}
                          <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-700 ${index === activeLine ? 'w-full' : 'w-0'}`} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
