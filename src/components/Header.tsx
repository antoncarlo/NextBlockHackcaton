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
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-[rgba(74,108,247,0.15)] shadow-lg shadow-[rgba(74,108,247,0.05)]" 
          : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="logo-text text-foreground">
            NEXTBLOCK
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Market
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Request Access
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
