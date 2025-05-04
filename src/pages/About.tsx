
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bot, Target, Users, Lightbulb, BadgeCheck, ExternalLink, BrainCircuit } from "lucide-react";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBookCall = () => {
    window.open("https://cal.com/aigrowthpartners", "_blank");
  };
  
  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & AI Strategist",
      bio: "With over 15 years in AI development and business strategy, Alex founded AI Growth Partners to help businesses harness the power of artificial intelligence."
    },
    {
      name: "Morgan Chen",
      role: "AI Solutions Architect",
      bio: "Morgan specializes in designing custom AI agents that integrate seamlessly with existing business processes and infrastructure."
    },
    {
      name: "Taylor Rodriguez",
      role: "Client Success Manager",
      bio: "Taylor ensures smooth implementation of AI solutions and provides ongoing support to maximize the value of our AI systems for your business."
    }
  ];
  
  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                  About AI Growth Partners
                </h1>
                <p className="text-lg text-muted-foreground">
                  We're a team of AI specialists dedicated to transforming businesses through custom AI agent solutions that drive growth and efficiency.
                </p>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white font-medium"
                  onClick={handleBookCall}
                >
                  Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="relative z-10 animate-float">
                  <div className="w-full h-64 rounded-lg bg-gradient-to-br from-primary to-primary-light/50 p-1">
                    <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                      <BrainCircuit size={80} className="text-primary animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full animate-float-delayed z-0"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-muted rounded-full animate-float-reverse z-0"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="container mx-auto px-4 md:px-6 py-16 animate-fade-in" style={{animationDelay: '300ms'}}>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We exist to make advanced AI technology accessible and practical for businesses of all sizes, empowering them to achieve more with less.
            </p>
          </div>
          
          <Card className="bg-gradient-to-r from-accent to-muted p-8 rounded-xl shadow-lg border-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Precision</h3>
                <p className="text-muted-foreground">
                  We develop AI solutions precisely tailored to your unique business challenges
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the cutting edge of AI development to provide innovative solutions
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Partnership</h3>
                <p className="text-muted-foreground">
                  We work alongside you as a true partner in your AI transformation journey
                </p>
              </div>
            </div>
          </Card>
        </section>
        
        {/* Our Team */}
        <section className="container mx-auto px-4 md:px-6 py-16 animate-fade-in" style={{animationDelay: '400ms'}}>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts behind AI Growth Partners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="bg-muted py-16 animate-fade-in" style={{animationDelay: '500ms'}}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Approach</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery & Analysis</h3>
                    <p className="text-muted-foreground">
                      We begin by thoroughly understanding your business, processes, and the specific challenges you want to address with AI solutions.
                    </p>
                  </div>
                </div>
                
                <div className="w-0.5 h-8 bg-primary/30 mx-auto md:ml-6 md:pl-0"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                    <p className="text-muted-foreground">
                      Our team designs custom AI agents specifically tailored to your needs, ensuring they integrate with your existing systems.
                    </p>
                  </div>
                </div>
                
                <div className="w-0.5 h-8 bg-primary/30 mx-auto md:ml-6 md:pl-0"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementation & Training</h3>
                    <p className="text-muted-foreground">
                      We deploy your custom AI solution and train your team to maximize its benefits and capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="w-0.5 h-8 bg-primary/30 mx-auto md:ml-6 md:pl-0"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-muted-foreground">
                      We provide ongoing support and optimization to ensure your AI solutions evolve with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-lg mb-8">
              Book your discovery call today and see how AI Growth Partners can help your business thrive
            </p>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-6 text-lg animate-pulse"
              onClick={handleBookCall}
            >
              Schedule Your Free Consultation <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
