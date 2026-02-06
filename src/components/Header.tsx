import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoBlack from "@/assets/logo-black.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'transparent',
        padding: '20px 40px',
      }}
    >
      <div 
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1280px',
        }}
      >
        {/* Left: Logo - Outside container */}
        <a href="#" className="flex items-center">
          <img 
            src={logoBlack} 
            alt="NextBlock" 
            style={{ height: '60px', width: 'auto' }}
          />
        </a>
        
        {/* Right: Navigation container */}
        <div
          className="hidden md:flex items-center gap-10"
          style={{
            padding: '12px 32px',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '50px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: isScrolled ? '0 4px 24px rgba(0, 0, 0, 0.08)' : '0 2px 12px rgba(0, 0, 0, 0.04)',
          }}
        >
          <a 
            href="#about" 
            className="transition-colors duration-200"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '15px',
              fontWeight: 400,
              color: '#4A4A4A',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F1218'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
          >
            Market
          </a>
          <a 
            href="#how-it-works" 
            className="transition-colors duration-200"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '15px',
              fontWeight: 400,
              color: '#4A4A4A',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F1218'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
          >
            How It Works
          </a>
          <a 
            href="#protocol" 
            className="transition-colors duration-200"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '15px',
              fontWeight: 400,
              color: '#4A4A4A',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F1218'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
          >
            Protocol
          </a>

          {/* CTA Button inside container */}
          <a 
            href="#waitlist"
            className="transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#1B3A6B',
              color: '#fff',
              padding: '10px 24px',
              borderRadius: '50px',
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            Request Access
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
