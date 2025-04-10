
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-accent/30">
      <Navbar />
      
      <div className="pt-32 animate-fade-in">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
