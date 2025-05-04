
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Calendar, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
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
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How Custom AI Agents Are Transforming Customer Support",
      excerpt: "Explore how businesses are using AI-powered virtual agents to handle customer inquiries 24/7 while maintaining personalized experiences.",
      date: "May 1, 2025",
      readTime: "5 min read",
      category: "Customer Service",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "The ROI of Implementing AI in Your Business Operations",
      excerpt: "A detailed analysis of the return on investment businesses can expect when deploying custom AI solutions for operational efficiency.",
      date: "April 24, 2025",
      readTime: "7 min read",
      category: "Business Strategy",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "AI Integration: Best Practices for Small to Medium Businesses",
      excerpt: "Practical steps for smaller organizations to successfully implement AI solutions without disrupting existing workflows.",
      date: "April 15, 2025", 
      readTime: "6 min read",
      category: "Implementation",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Future Trends: Where AI Agents Are Heading in 2026",
      excerpt: "Our predictions on upcoming AI agent capabilities and how they'll continue to revolutionize business processes.",
      date: "April 8, 2025",
      readTime: "4 min read",
      category: "Industry Trends",
      imageUrl: "/placeholder.svg"
    }
  ];
  
  return (
    <div className={`min-h-screen flex flex-col ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
              AI Growth Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '100ms'}}>
              Stay updated with the latest AI business strategies, industry trends, and implementation insights
            </p>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card animate-fade-in" style={{animationDelay: `${(index + 1) * 100}ms`}}>
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/50">
                    <Book size={48} className="text-primary opacity-50" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm bg-primary/10 inline-block px-2 py-0.5 rounded">
                    {post.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary/80 mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto flex items-center text-primary hover:text-primary-dark"
                    onClick={() => window.open("https://cal.com/aigrowthpartners", "_blank")}
                  >
                    Read more <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Implement These AI Strategies in Your Business?
              </h2>
              <p className="text-lg mb-8">
                Schedule a discovery call to discuss how custom AI agents can transform your operations
              </p>
              <Button 
                className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-6 text-lg animate-pulse"
                onClick={handleBookCall}
              >
                Book Your Free Discovery Call <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
