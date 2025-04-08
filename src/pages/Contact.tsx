
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
