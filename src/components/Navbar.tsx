
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Bot } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations after mount
    setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleButtonClick = () => {
    window.open("https://cal.com/aigrowthpartners", "_blank");
  };

  // Check if the path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className={`flex items-center transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <Link to="/" className="text-2xl font-bold text-primary flex items-center group">
            <Bot className="h-8 w-8 mr-2 text-primary transition-transform duration-500 group-hover:rotate-12" />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              AI Growth Partners
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-primary' : 'text-secondary'} hover:text-primary font-medium transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} 
            style={{transitionDelay: '200ms'}}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`${isActive('/services') ? 'text-primary' : 'text-secondary'} hover:text-primary font-medium transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{transitionDelay: '300ms'}}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-primary' : 'text-secondary'} hover:text-primary font-medium transition-all duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{transitionDelay: '400ms'}}
          >
            Contact
          </Link>
          <div className={`transition-all duration-500 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{transitionDelay: '500ms'}}>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-medium relative overflow-hidden group"
              onClick={handleButtonClick}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">Book Discovery</span>
              <span className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-primary transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 px-6 fixed top-[60px] left-0 right-0 z-40 animate-slide-down">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary border-primary' : 'text-secondary border-transparent'} hover:text-primary font-medium py-2 transition-colors pl-2 border-l-2 hover:border-primary`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${isActive('/services') ? 'text-primary border-primary' : 'text-secondary border-transparent'} hover:text-primary font-medium py-2 transition-colors pl-2 border-l-2 hover:border-primary`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-primary border-primary' : 'text-secondary border-transparent'} hover:text-primary font-medium py-2 transition-colors pl-2 border-l-2 hover:border-primary`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white font-medium w-full overflow-hidden relative group"
              onClick={() => {
                window.open("https://cal.com/aigrowthpartners", "_blank");
                setMobileMenuOpen(false);
              }}
            >
              <span className="relative z-10">Book Discovery</span>
              <span className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
