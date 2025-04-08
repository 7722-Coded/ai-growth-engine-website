
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, User, Calendar, Search, Globe, BrainCircuit, Bot } from "lucide-react";

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const Services = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/khushnaj7722/30min", "_blank");
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our AI Services</h1>
            <p className="text-xl text-gray-600">
              We deploy custom-built AI agents that work as digital employees, handling specific tasks to make your business more efficient and responsive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="opacity-0 animate-slide-up" style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards'}}>
                <Card className="h-full border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="pt-2">
                      <p className="font-bold text-primary text-lg">{service.price}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-white mt-4"
                      onClick={handleBookCall}
                    >
                      Book a Call
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
