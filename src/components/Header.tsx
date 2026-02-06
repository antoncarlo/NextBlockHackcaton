import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
        backgroundColor: isScrolled ? 'rgba(10, 14, 26, 0.95)' : 'rgba(10, 14, 26, 0.8)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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
          <span className="logo-text text-foreground">
            NEXTBLOCK
          </span>
        </a>
        
        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a 
            href="#about" 
            className="transition-colors duration-200"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            Market
          </a>
          <a 
            href="#how-it-works" 
            className="transition-colors duration-200"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            How It Works
          </a>
          <a 
            href="#protocol" 
            className="transition-colors duration-200"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            Protocol
          </a>
        </nav>

        {/* Right: CTA Button */}
        <a 
          href="#waitlist"
          className="hidden md:inline-flex transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: '#4A6CF7',
            borderRadius: '6px',
            padding: '10px 24px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#fff',
          }}
        >
          Request Access
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
