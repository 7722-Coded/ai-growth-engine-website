
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Calendar, Search, Globe, Sparkles, ArrowRight, Star } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Customer Service Agents",
    description: "24/7 customer support that can answer questions, resolve issues, and escalate complex matters to human staff when necessary.",
    iconBg: "bg-primary/10",
    delay: 150
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Appointment Scheduling",
    description: "Intelligent scheduling assistants that manage your calendar, reduce no-shows, and send personalized reminders.",
    iconBg: "bg-primary-light/10",
    delay: 300
  },
  {
    icon: <User className="h-12 w-12 text-primary" />,
    title: "Lead Qualification",
    description: "AI agents that engage with new leads, ask qualifying questions, and route hot prospects to your sales team.",
    iconBg: "bg-accent",
    delay: 450
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Data Analysis",
    description: "Automated analysis of business metrics, customer feedback, and market trends to provide actionable insights.",
    iconBg: "bg-primary/10",
    delay: 600
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Multi-platform Integration",
    description: "Seamless integration with your website, email, CRM, and communication tools like Slack.",
    iconBg: "bg-primary-light/10",
    delay: 750
  }
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const handleBookCall = () => {
    window.open("https://calendly.com/khushnaj7722/30min", "_blank");
  };

  return (
    <section id="services" className="section-spacing bg-white relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 animate-float-delayed"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-primary-light/5 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 rounded-full bg-primary/20 animate-pulse"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 right-10 animate-float opacity-20">
          <Star className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute bottom-1/3 left-20 animate-float-delayed opacity-20">
          <Sparkles className="h-10 w-10 text-primary-light" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4 mx-auto">
            <Sparkles className="h-5 w-5 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Our AI Agent Services</span>
            <div className={`h-1 w-20 bg-primary mx-auto mt-4 transition-all duration-1000 delay-300 ${inView ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
          </h2>
          <p className="text-xl text-gray-600">
            We deploy custom-built AI agents that work as digital employees, handling specific tasks to make your business more efficient and responsive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
              style={{transitionDelay: `${service.delay}ms`}}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                
                <CardHeader className="relative z-10">
                  <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-light">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 flex items-center">
                    {service.title}
                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-3 group-hover:translate-x-2 ml-2" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all duration-300"
                      variant="ghost"
                      onClick={handleBookCall}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Extra floating elements appearing on scroll */}
        <div className={`absolute -bottom-10 right-10 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-primary/10 p-3 rounded-full animate-float-delayed">
            <Star className="h-8 w-8 text-primary animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
