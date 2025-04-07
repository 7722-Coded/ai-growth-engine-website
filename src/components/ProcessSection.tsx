
import { Check } from "lucide-react";

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
  return (
    <section id="process" className="section-spacing bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Our proven methodology ensures we deliver AI solutions that truly address your business needs and integrate seamlessly with your operations.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <div className={`p-1 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                  <div className={`h-1 w-16 bg-primary mb-6 ${index % 2 === 0 ? '' : 'ml-auto'}`}></div>
                  <div className="flex items-center mb-4">
                    <span className="text-5xl font-bold text-primary/20 mr-4">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="mr-2 mt-1 bg-primary rounded-full p-1">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <div className={`glass-card p-6 ${index % 2 === 0 ? '' : 'md:ml-auto'} max-w-md`}>
                  <div className="bg-gradient-to-br from-primary/10 to-primary-light/10 p-4 rounded-lg h-60 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                      <div className="bg-primary/10 h-40 w-60 rounded flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">Step {step.number}</span>
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
