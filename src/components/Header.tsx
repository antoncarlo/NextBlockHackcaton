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
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: isScrolled ? 'rgba(250, 250, 248, 0.95)' : 'rgba(250, 250, 248, 0.9)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div 
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1280px',
          padding: '16px 40px',
        }}
      >
        {/* Left: Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logoBlack} 
            alt="NextBlock" 
            style={{ height: '28px', width: 'auto' }}
          />
        </a>
        
        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="transition-colors duration-200"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#4A4A4A',
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
              fontSize: '14px',
              fontWeight: 400,
              color: '#4A4A4A',
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
              fontSize: '14px',
              fontWeight: 400,
              color: '#4A4A4A',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F1218'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}
          >
            Protocol
          </a>
        </nav>

        {/* Right: CTA Button */}
        <a 
          href="#waitlist"
          className="hidden md:inline-flex transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: '#1B3A6B',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: '6px',
            fontWeight: 500,
            fontSize: '14px',
          }}
        >
          Request Access
        </a>
      </div>
    </motion.header>
  );
};

export default Header;