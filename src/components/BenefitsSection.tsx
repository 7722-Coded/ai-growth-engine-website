
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const benefits = [
  {
    title: "24/7 Availability",
    description: "AI agents work around the clock, never taking breaks or vacations, ensuring your business is always responsive."
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs by automating repetitive tasks that would otherwise require multiple human employees."
  },
  {
    title: "Scalability",
    description: "Easily scale your operations up or down without the typical hiring and training challenges."
  },
  {
    title: "Consistent Quality",
    description: "AI agents deliver consistent service quality without the variability that comes with human performance."
  },
  {
    title: "Data-Driven Insights",
    description: "Gain valuable insights from all interactions, helping you make better business decisions."
  },
  {
    title: "Human Staff Empowerment",
    description: "Free your human staff from repetitive tasks so they can focus on higher-value activities that grow your business."
  }
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const networkRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  
  useEffect(() => {
    // Create neural network animation when section is in view
    if (inView && networkRef.current) {
      const createNeuralNetwork = () => {
        const container = networkRef.current;
        const containerRect = container.getBoundingClientRect();
        
        // Create nodes
        const nodeCount = Math.min(12, Math.floor(containerRect.width / 100));
        const newNodes = [];
        
        for (let i = 0; i < nodeCount; i++) {
          const x = Math.random() * 80 + 10; // 10-90% of width
          const y = Math.random() * 80 + 10; // 10-90% of height
          
          newNodes.push({
            id: i,
            x: `${x}%`,
            y: `${y}%`,
            size: Math.random() * 6 + 4,
            pulseSpeed: Math.random() * 3 + 2
          });
        }
        
        setNodes(newNodes);
        
        // Create connections between nodes
        const newConnections = [];
        
        for (let i = 0; i < newNodes.length; i++) {
          const node1 = newNodes[i];
          
          // Connect to 1-3 other nodes
          const connectionsCount = Math.floor(Math.random() * 3) + 1;
          
          for (let j = 0; j < connectionsCount; j++) {
            // Find a random node to connect to
            const nodeIndex = Math.floor(Math.random() * newNodes.length);
            if (nodeIndex !== i) {
              const node2 = newNodes[nodeIndex];
              
              // Calculate angle and distance for CSS transforms
              const x1 = parseFloat(node1.x);
              const y1 = parseFloat(node1.y);
              const x2 = parseFloat(node2.x);
              const y2 = parseFloat(node2.y);
              
              // Calculate distance using percentages
              const deltaX = x2 - x1;
              const deltaY = y2 - y1;
              const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
              
              // Calculate rotation angle
              const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
              
              newConnections.push({
                id: `${i}-${nodeIndex}`,
                x: node1.x,
                y: node1.y,
                width: `${distance}%`,
                transform: `rotate(${angle}deg)`,
                animationDuration: `${Math.random() * 3 + 3}s`
              });
            }
          }
        }
        
        setConnections(newConnections);
      };
      
      // Create initial network
      createNeuralNetwork();
      
      // Recreate on resize
      const handleResize = () => {
        createNeuralNetwork();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [inView]);
  
  // Create quantum particles for the section
  const createQuantumParticles = () => {
    const particles = [];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <div 
          key={`quantum-particle-benefit-${i}`}
          className="absolute rounded-full bg-primary/20 animate-quantum-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: `blur(${Math.random()}px)`,
            opacity: Math.random() * 0.5 + 0.1,
            animationDuration: `${Math.random() * 10 + 15}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      );
    }
    
    return particles;
  };
  
  return (
    <section id="benefits" className="section-spacing bg-white relative overflow-hidden" ref={ref}>
      {/* Neural network background */}
      <div ref={networkRef} className="absolute inset-0 neural-network pointer-events-none overflow-hidden">
        {connections.map(connection => (
          <div
            key={connection.id}
            className="neural-connection animate-data-flow"
            style={{
              left: connection.x,
              top: connection.y,
              width: connection.width,
              transform: connection.transform,
              animationDuration: connection.animationDuration
            }}
          />
        ))}
        
        {nodes.map(node => (
          <div
            key={node.id}
            className="neural-node animate-pulse"
            style={{
              left: node.x,
              top: node.y,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animationDuration: `${node.pulseSpeed}s`
            }}
          />
        ))}
      </div>
      
      {/* Quantum particles */}
      <div className="absolute inset-0 pointer-events-none">
        {createQuantumParticles()}
      </div>
      
      {/* Digital energy waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={`energy-ring-${i}`}
            className="absolute top-1/2 left-1/2 border border-primary/10 rounded-full animate-digital-ripple"
            style={{
              width: '10px',
              height: '10px',
              marginLeft: '-5px',
              marginTop: '-5px',
              animationDelay: `${i * 1}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="relative inline-block">
              Why Choose AI Growth Partners
              <div className={`absolute -bottom-2 left-0 h-1 bg-primary transition-all duration-1000 delay-300 ${inView ? 'w-full' : 'w-0'}`} />
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our AI agents deliver tangible benefits that help your business operate more efficiently and grow faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`opacity-0 transform transition-all ${inView ? 'animate-slide-up' : ''}`} 
              style={{
                animationDelay: `${0.1 * index}s`, 
                animationFillMode: 'forwards'
              }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-500 future-tech-card animate-card-glow hover:shadow-lg group">
                <CardHeader>
                  <CardTitle className="text-xl font-bold relative">
                    <div className="flex items-center">
                      <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="relative">
                        {benefit.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </div>
                    
                    {/* Laser beam effect on hover */}
                    <div className="absolute -top-5 left-1/2 w-1 h-20 bg-primary/30 -translate-x-1/2 scale-y-0 opacity-0 group-hover:animate-laser-beam" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base relative z-10">
                    {benefit.description}
                  </CardDescription>
                  
                  {/* Animated orb in cards */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-opacity animate-spin-slow" style={{ animationDuration: '10s' }} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* DNA spiral animations at bottom of section */}
        <div className="mt-20 flex justify-center relative h-20 overflow-hidden">
          {Array.from({ length: 16 }).map((_, i) => (
            <div 
              key={`dna-node-${i}`} 
              className="absolute bottom-0"
              style={{
                left: `${(100 / 16) * i}%`,
                animation: `dna-spiral ${8 + i % 4}s linear infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className={`w-3 h-3 rounded-full bg-primary/30 shadow-lg animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
