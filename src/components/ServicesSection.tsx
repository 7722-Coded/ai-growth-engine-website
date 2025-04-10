
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Calendar, Search, Globe } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Customer Service Agents",
    description: "24/7 customer support that can answer questions, resolve issues, and escalate complex matters to human staff when necessary."
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Appointment Scheduling",
    description: "Intelligent scheduling assistants that manage your calendar, reduce no-shows, and send personalized reminders."
  },
  {
    icon: <User className="h-12 w-12 text-primary" />,
    title: "Lead Qualification",
    description: "AI agents that engage with new leads, ask qualifying questions, and route hot prospects to your sales team."
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Data Analysis",
    description: "Automated analysis of business metrics, customer feedback, and market trends to provide actionable insights."
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Multi-platform Integration",
    description: "Seamless integration with your website, email, CRM, and communication tools like Slack."
  }
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-spacing bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Our AI Agent Services</span>
            <div className={`h-1 w-20 bg-primary mx-auto mt-4 transition-all duration-1000 delay-300 ${inView ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
          </h2>
          <p className="text-xl text-gray-600">
            We deploy custom-built AI agents that work as digital employees, handling specific tasks to make your business more efficient and responsive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
              style={{transitionDelay: `${index * 150}ms`}}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-light">{service.icon}</div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
