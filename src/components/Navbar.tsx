
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            AI Growth Partners
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-secondary hover:text-primary font-medium transition-colors">Services</a>
          <a href="#process" className="text-secondary hover:text-primary font-medium transition-colors">How It Works</a>
          <a href="#benefits" className="text-secondary hover:text-primary font-medium transition-colors">Benefits</a>
          <a href="#contact" className="text-secondary hover:text-primary font-medium transition-colors">Contact</a>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white font-medium"
            onClick={() => document.getElementById('discovery')?.scrollIntoView({behavior: 'smooth'})}
          >
            Book Discovery
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 fixed top-[60px] left-0 right-0 z-40 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#process" 
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#contact" 
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-medium w-full"
              onClick={() => {
                document.getElementById('discovery')?.scrollIntoView({behavior: 'smooth'});
                setMobileMenuOpen(false);
              }}
            >
              Book Discovery
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
