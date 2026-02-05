import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">W</span>
          </div>
          <span className="text-foreground font-semibold text-xl">Waitlist</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Features
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            About
          </a>
          <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Join Waitlist
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
