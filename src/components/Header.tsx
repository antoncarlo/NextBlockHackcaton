import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logoWhite from "@/assets/logo-white.svg";

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
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5" 
          : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={logoWhite} 
            alt="NextBlock" 
            className={`transition-all duration-300 ${isScrolled ? "h-16 md:h-20" : "h-24 md:h-28"}`} 
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Market
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            How It Works
          </a>
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Request Access
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
