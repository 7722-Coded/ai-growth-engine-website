import React, { useEffect, useState, useRef } from 'react';
import { Bot, Heart, Sparkles, Lightbulb, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const RobotGuide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isWaving, setIsWaving] = useState(true);
  const [emotion, setEmotion] = useState<'normal' | 'happy' | 'excited'>('happy');
  const [message, setMessage] = useState('Hi there! Welcome to our site!');
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const robotRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const messages = [
    { threshold: 0, text: "Hi there! I'm Robo. Welcome!" },
    { threshold: 0.1, text: "Scroll down to see our services!" },
    { threshold: 0.3, text: "Check out our amazing process!" },
    { threshold: 0.5, text: "Here are the benefits we offer!" },
    { threshold: 0.7, text: "Want to learn more? Book a discovery call!" },
    { threshold: 0.9, text: "Let's connect! Drop us a message!" }
  ];

  useEffect(() => {
    setIsWaving(true);
    setIsMessageVisible(true);
    setTimeout(() => {
      setIsWaving(false);
    }, 2000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(currentScrollY / maxScroll, 1);
      
      setScrollPosition(scrollPercentage);
      
      if (scrollPercentage > 0.7) {
        setEmotion('excited');
      } else if (scrollPercentage > 0.3) {
        setEmotion('happy');
      } else {
        setEmotion('normal');
      }
      
      if (Math.random() > 0.99) {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 2000);
      }
      
      const currentMessage = messages.reduce((acc, curr) => {
        return scrollPercentage >= curr.threshold ? curr : acc;
      }, messages[0]);
      
      if (message !== currentMessage.text) {
        setMessage(currentMessage.text);
        setIsMessageVisible(true);
        
        if (messageTimeoutRef.current) {
          clearTimeout(messageTimeoutRef.current);
        }
        
        messageTimeoutRef.current = setTimeout(() => {
          setIsMessageVisible(false);
        }, 5000);
      }
      
      lastScrollPosition.current = currentScrollY;
    };
    
    const animateRobot = () => {
      if (!robotRef.current) return;
      
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const now = Date.now() / 1000;
      const wiggle = Math.sin(now * 5) * 5;
      const sway = Math.sin(now * 2) * 20;
      
      const xPos = 10 + sway + (viewportWidth > 768 ? 0 : -5);
      const yPos = 30 + wiggle + (scrollPosition * 50);
      
      robotRef.current.style.left = `${Math.max(5, Math.min(xPos, 15))}%`;
      robotRef.current.style.top = `${Math.max(10, Math.min(yPos, 80))}%`;
      
      animationFrame.current = requestAnimationFrame(animateRobot);
    };
    
    animateRobot();
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    setIsMessageVisible(true);
    messageTimeoutRef.current = setTimeout(() => {
      setIsMessageVisible(false);
    }, 7000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    };
  }, [message]);
  
  const handleRobotClick = () => {
    setIsWaving(true);
    setIsMessageVisible(true);
    setTimeout(() => setIsWaving(false), 2000);
    
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    
    messageTimeoutRef.current = setTimeout(() => {
      setIsMessageVisible(false);
    }, 5000);
  };
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <>
      <button 
        onClick={toggleVisibility}
        className="fixed z-50 bottom-6 right-6 bg-primary/90 text-white p-3 rounded-full shadow-lg hover:bg-primary transition-all duration-300"
        aria-label={isVisible ? "Hide robot guide" : "Show robot guide"}
      >
        {isVisible ? <HelpCircle size={24} /> : <Bot size={24} />}
      </button>
      
      {isVisible && (
        <div 
          ref={robotRef}
          onClick={handleRobotClick}
          className={cn(
            "fixed z-40 transition-all duration-300 cursor-pointer",
            "animate-bounce-gentle scale-125"
          )}
        >
          <div className="relative">
            <div className="relative bg-gradient-to-b from-primary-light to-primary w-16 h-14 rounded-t-full flex items-center justify-center shadow-lg group-hover:from-primary-dark">
              <div className="absolute top-3 left-0 w-full flex justify-center items-center">
                {emotion === 'excited' ? (
                  <div className="flex space-x-1">
                    <Sparkles 
                      className="text-white animate-pulse" 
                      size={16} 
                    />
                    <Sparkles 
                      className="text-white animate-pulse" 
                      size={16}
                    />
                  </div>
                ) : (
                  <div className="flex space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-white ${emotion === 'happy' ? 'animate-wink' : ''}`}></div>
                    <div className={`w-2 h-2 rounded-full bg-white ${emotion === 'happy' ? 'animate-wink-delayed' : ''}`}></div>
                  </div>
                )}
              </div>
              
              <div className="absolute top-7 left-0 w-full flex justify-center">
                {emotion === 'excited' ? (
                  <div className="w-4 h-2 bg-white rounded-full animate-pulse"></div>
                ) : emotion === 'happy' ? (
                  <div className="w-4 h-1 bg-white rounded-full"></div>
                ) : (
                  <div className="w-3 h-1 bg-white rounded-full"></div>
                )}
              </div>
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-3 bg-primary-dark rounded-full"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-light rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-primary-dark w-14 h-10 mx-auto rounded-b-lg relative flex items-center justify-center">
              <Heart 
                className={`text-red-400 animate-pulse absolute top-1 ${emotion === 'excited' ? 'animate-ping' : ''}`} 
                size={12}
                fill={emotion !== 'normal' ? 'rgba(248, 113, 113, 0.8)' : 'none'}
              />
              
              <div 
                className={cn(
                  "absolute -left-4 top-0 w-4 h-1 bg-primary-dark rounded-full origin-right",
                  isWaving ? "animate-wave" : "rotate-0"
                )}
              ></div>
              <div className="absolute -right-4 top-0 w-4 h-1 bg-primary-dark rounded-full"></div>
              
              <div className="flex space-x-2 absolute bottom-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-3 bg-primary-dark rounded-b-md"></div>
              <div className="w-2 h-3 bg-primary-dark rounded-b-md"></div>
            </div>
            
            <div 
              className={cn(
                "absolute -right-4 -top-16 bg-white px-4 py-3 rounded-lg shadow-lg min-w-[150px] max-w-[200px] transition-opacity duration-300",
                isMessageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <div className="text-xs font-medium text-gray-800">{message}</div>
              <div className="absolute bottom-0 right-4 transform translate-y-2 rotate-45 w-4 h-4 bg-white"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RobotGuide;
