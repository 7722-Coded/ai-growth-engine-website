import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RobotGuide from "@/components/RobotGuide";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, Calendar, Search, Globe, BrainCircuit, Bot, ArrowRight, Sparkles, Star, Zap, CheckCircle } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Customer Service AI",
    description: "Custom AI agents that handle customer inquiries 24/7, resolve common issues, and escalate complex matters when necessary.",
    price: "Custom Pricing",
    features: [
      "24/7 customer support",
      "Personalized responses",
      "Integration with your knowledge base",
      "Seamless handoff to human agents",
      "Continuous learning & improvement"
    ],
    bgClass: "bg-gradient-to-br from-primary/5 to-accent/30"
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Appointment Scheduling",
    description: "Intelligent AI assistants that manage your calendar, reduce no-shows with automated reminders, and optimize your schedule.",
    price: "Custom Pricing",
    features: [
      "Smart calendar management",
      "Automated reminders & follow-ups",
      "Client self-scheduling options",
      "Integration with existing systems",
      "Custom booking rules & logic"
    ],
    bgClass: "bg-gradient-to-br from-accent/30 to-primary/5"
  },
  {
    icon: <User className="h-12 w-12 text-primary" />,
    title: "Lead Qualification",
    description: "AI agents that engage with new leads, ask qualifying questions, and route hot prospects directly to your sales team.",
    price: "Custom Pricing",
    features: [
      "24/7 lead engagement",
      "Custom qualification criteria",
      "Seamless CRM integration",
      "Lead scoring & prioritization",
      "Conversation analytics & insights"
    ],
    bgClass: "bg-gradient-to-br from-primary/5 to-accent/30"
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Data Analysis & Insights",
    description: "Advanced AI analytics that process your business data, customer feedback, and market trends to provide actionable insights.",
    price: "Custom Pricing",
    features: [
      "Automated reporting",
      "Customer feedback analysis",
      "Market trend identification",
      "Competitive intelligence",
      "Strategic recommendations"
    ],
    bgClass: "bg-gradient-to-br from-accent/30 to-primary/5"
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Multi-platform Integration",
    description: "Seamless AI integration across your website, email, CRM, and communication tools for unified business intelligence.",
    price: "Custom Pricing",
    features: [
      "Website & email integration",
      "CRM & sales tool connectivity",
      "Chat platform implementation",
      "Unified analytics dashboard",
      "Cross-platform consistency"
    ],
    bgClass: "bg-gradient-to-br from-primary/5 to-accent/30"
  },
  {
    icon: <BrainCircuit className="h-12 w-12 text-primary" />,
    title: "Custom AI Development",
    description: "Bespoke AI solutions designed specifically for your unique business challenges and opportunities.",
    price: "Custom Pricing",
    features: [
      "Tailored AI strategy",
      "Custom model development",
      "Proprietary data integration",
      "Workflow automation",
      "Ongoing optimization"
    ],
    bgClass: "bg-gradient-to-br from-accent/30 to-primary/5"
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true, 
    threshold: 0.1
  });

  useEffect(() => {
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

  const handleBookCall = () => {
    window.open("https://calendly.com/khushnaj7722/30min", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-accent/30 relative overflow-hidden">
      <RobotGuide />
      
      <Navbar />
      
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary-light/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating icons */}
        <div className="absolute top-40 left-10 animate-float-delayed hidden md:block">
          <Bot className="h-16 w-16 text-primary/10" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float hidden md:block">
          <BrainCircuit className="h-20 w-20 text-primary-light/10" />
        </div>
        <div className="absolute top-1/2 left-1/2 animate-spin-slow hidden lg:block" style={{ animationDuration: '30s' }}>
          <div className="w-80 h-80 border border-dashed border-primary/10 rounded-full"></div>
        </div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 animate-orbit hidden lg:block">
          <div className="bg-primary/10 p-2 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 animate-orbit hidden lg:block" style={{ animationDelay: '5s', animationDirection: 'reverse' }}>
          <div className="bg-primary-light/10 p-2 rounded-full">
            <Star className="h-4 w-4 text-primary-light" />
          </div>
        </div>
      </div>
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 mx-auto animate-float-delayed">
              <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
              <span className="text-sm font-medium text-primary">Expert AI Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Our AI Services</span>
              <div className={`h-1 w-20 bg-primary mx-auto mt-4 transition-all duration-1000 delay-300 ${headerInView ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
            </h1>
            <p className="text-xl text-gray-600">
              We deploy custom-built AI agents that work as digital employees, handling specific tasks to make your business more efficient and responsive.
            </p>
          </div>
          
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`transition-all duration-1000 transform ${cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
                style={{transitionDelay: `${index * 150}ms`}}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden card-3d">
                  <div className={`absolute inset-0 ${service.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white p-4 rounded-2xl shadow-md inline-block">
                      <div className="group-hover:text-primary-light transition-colors duration-500">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 relative z-10">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="pt-2">
                      <p className="font-bold text-primary text-lg">{service.price}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start group/item">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 transition-transform duration-300 group-hover/item:scale-125" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-4 group overflow-hidden relative glassmorphism bg-white hover:bg-primary border-primary/20"
                      onClick={handleBookCall}
                    >
                      <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:text-white group-hover:scale-110">
                        Book a Call
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
