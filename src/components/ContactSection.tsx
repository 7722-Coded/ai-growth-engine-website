
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight, Send } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    business: false,
    message: false,
  });
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description: "Thank you for contacting us. We'll be in touch within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        business: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-spacing bg-muted" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className={`max-w-xl transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Contact Us</span>
              <div className={`h-1 w-20 bg-primary mt-4 transition-all duration-1000 delay-300 ${inView ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to explore how AI can transform your business? Get in touch with our team to schedule your discovery session or ask any questions.
            </p>
            
            <div className={`space-y-6 transition-all duration-700 delay-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-start group">
                <div className="mr-4 bg-primary/10 p-3 rounded-full transition-all duration-300 group-hover:bg-primary/20 transform group-hover:scale-110">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                  <p className="text-gray-600">khushnaj@aigrowthpartners.in</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-2'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Get Started</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium transition-all duration-300 ${isFocused.name || formData.name ? 'text-primary' : 'text-gray-700'} mb-1`}
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      required
                      placeholder="Your name"
                      className={`w-full transition-all duration-300 ${isFocused.name ? 'border-primary shadow-sm' : ''}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isFocused.name ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium transition-all duration-300 ${isFocused.email || formData.email ? 'text-primary' : 'text-gray-700'} mb-1`}
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      required
                      placeholder="Your email"
                      className={`w-full transition-all duration-300 ${isFocused.email ? 'border-primary shadow-sm' : ''}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isFocused.email ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="business" 
                      className={`block text-sm font-medium transition-all duration-300 ${isFocused.business || formData.business ? 'text-primary' : 'text-gray-700'} mb-1`}
                    >
                      Business Name
                    </label>
                    <Input
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      onFocus={() => handleFocus('business')}
                      onBlur={() => handleBlur('business')}
                      placeholder="Your business name"
                      className={`w-full transition-all duration-300 ${isFocused.business ? 'border-primary shadow-sm' : ''}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isFocused.business ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium transition-all duration-300 ${isFocused.message || formData.message ? 'text-primary' : 'text-gray-700'} mb-1`}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell us about your business and what you're looking to achieve with AI"
                      className={`w-full h-32 transition-all duration-300 ${isFocused.message ? 'border-primary shadow-sm' : ''}`}
                    />
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isFocused.message ? 'w-full' : 'w-0'}`}></div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 group overflow-hidden relative"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-[-1px]" />}
                    </span>
                    <span className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
