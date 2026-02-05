import { motion } from "framer-motion";
import heroImage from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center md:text-left md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-gradient">Welcome to</span>
            <br />
            <span className="text-foreground">the Future</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            Stiamo costruendo qualcosa di straordinario. Unisciti alla waitlist 
            per essere tra i primi a scoprire il nostro prodotto innovativo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-cta text-primary-foreground font-semibold text-sm transition-all hover:opacity-90 hover:scale-105 shadow-glow"
            >
              Unisciti alla Waitlist
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium text-sm transition-all hover:bg-secondary"
            >
              Scopri di più
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
