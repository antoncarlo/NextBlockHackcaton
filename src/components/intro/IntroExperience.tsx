import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import ParticleGlobe from "./ParticleGlobe";
import BackgroundStars from "./BackgroundStars";

interface IntroExperienceProps {
  onComplete: () => void;
}

const IntroExperience = ({ onComplete }: IntroExperienceProps) => {
  const [phase, setPhase] = useState<"intro" | "reveal" | "exit">("intro");
  const [showText, setShowText] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Show text after globe appears
    const textTimer = setTimeout(() => setShowText(true), 800);
    // Show CTA button
    const ctaTimer = setTimeout(() => setShowCTA(true), 2000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  const handleEnter = () => {
    setPhase("exit");
    setTimeout(onComplete, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-background"
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        className="absolute inset-0"
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <BackgroundStars />
          <ParticleGlobe isExiting={phase === "exit"} />
        </Suspense>
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 px-6"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="text-foreground">The Future is</span>
                <br />
                <span className="text-gradient">Now</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto"
              >
                Entra a far parte della rivoluzione
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCTA && phase !== "exit" && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="pointer-events-auto px-8 py-4 rounded-full bg-gradient-cta text-primary-foreground font-semibold text-sm transition-all shadow-glow border border-primary/30"
            >
              Entra nel futuro
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scroll hint */}
        <AnimatePresence>
          {showCTA && phase !== "exit" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-xs text-muted-foreground tracking-widest uppercase"
              >
                Clicca per esplorare
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">W</span>
        </div>
        <span className="text-foreground font-semibold text-xl">Waitlist</span>
      </div>
    </motion.div>
  );
};

export default IntroExperience;
