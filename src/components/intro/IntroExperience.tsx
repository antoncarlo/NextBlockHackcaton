import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoLeftWhite from "@/assets/logo-left.svg";
import logoRightWhite from "@/assets/logo-right.svg";

interface IntroExperienceProps {
  onComplete: () => void;
}

const IntroExperience = ({ onComplete }: IntroExperienceProps) => {
  const [phase, setPhase] = useState<"initial" | "split" | "reveal">("initial");

  useEffect(() => {
    // Start split animation after showing logo clearly
    const splitTimer = setTimeout(() => setPhase("split"), 2500);
    
    return () => clearTimeout(splitTimer);
  }, []);

  useEffect(() => {
    if (phase === "split") {
      // Complete and show landing page
      const revealTimer = setTimeout(() => {
        setPhase("reveal");
        setTimeout(onComplete, 800);
      }, 2000);
      
      return () => clearTimeout(revealTimer);
    }
  }, [phase, onComplete]);

  // Generate stars with various sizes and twinkling delays
  const stars = [...Array(150)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    twinkleDelay: Math.random() * 3,
    twinkleDuration: Math.random() * 1.5 + 0.5,
  }));

  return (
    <AnimatePresence>
      {phase !== "reveal" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Background color transition */}
          <motion.div
            className="absolute inset-0"
            initial={{ backgroundColor: "hsl(222, 47%, 6%)" }}
            animate={{ 
              backgroundColor: phase === "split" ? "#eeebe3" : "hsl(222, 47%, 6%)" 
            }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Enhanced twinkling star field */}
          <div className="absolute inset-0">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                }}
                initial={{ 
                  opacity: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6), 0 0 ${star.size * 4}px rgba(14, 165, 233, 0.3)`,
                }}
                animate={{
                  opacity: phase === "split" ? 0 : [0.2, 1, 0.2],
                  scale: phase === "split" ? 0 : [0.8, 1.2, 0.8],
                  backgroundColor: phase === "split" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.9)",
                  boxShadow: phase === "split" 
                    ? "none" 
                    : `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6), 0 0 ${star.size * 4}px rgba(14, 165, 233, 0.3)`,
                  x: phase === "split" ? (star.id % 2 === 0 ? -150 : 150) : 0,
                }}
                transition={{
                  opacity: {
                    duration: star.twinkleDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: star.twinkleDelay,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: star.twinkleDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: star.twinkleDelay,
                    ease: "easeInOut",
                  },
                  backgroundColor: {
                    duration: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  boxShadow: {
                    duration: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                  x: {
                    duration: 1.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
              />
            ))}
          </div>

          {/* Center content - Split Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Left half - NEXT */}
              <motion.div
                className="flex items-center justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: phase === "split" ? "-50vw" : 0,
                }}
                transition={{
                  opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  x: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <img
                  src={logoLeftWhite}
                  alt="Next"
                  className="h-48 md:h-64 lg:h-96 w-auto"
                  style={{
                    filter: phase === "split" ? "none" : "invert(1)",
                  }}
                />
              </motion.div>

              {/* Right half - BLOCK */}
              <motion.div
                className="flex items-center justify-start -ml-12 md:-ml-16 lg:-ml-24"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: phase === "split" ? "50vw" : 0,
                }}
                transition={{
                  opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  x: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
                }}
              >
                <img
                  src={logoRightWhite}
                  alt="Block"
                  className="h-48 md:h-64 lg:h-96 w-auto"
                  style={{
                    filter: phase === "split" ? "none" : "invert(1)",
                  }}
                />
              </motion.div>

              {/* Arrow tracks that appear during split */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-l from-transparent via-primary to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: phase === "split" ? "80vw" : 0,
                  opacity: phase === "split" ? 1 : 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />

              {/* Left arrow - elegant design */}
              <motion.div
                className="absolute"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: phase === "split" ? "-40vw" : 0,
                  opacity: phase === "split" ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" className="drop-shadow-lg">
                  <defs>
                    <linearGradient id="arrowGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M44 8 L16 32 L44 56"
                    fill="none"
                    stroke="url(#arrowGradientLeft)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 8 L16 32 L44 56"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                    transform="translate(-4, 0)"
                  />
                </svg>
              </motion.div>

              {/* Right arrow - elegant design */}
              <motion.div
                className="absolute"
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: phase === "split" ? "40vw" : 0,
                  opacity: phase === "split" ? 1 : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" className="drop-shadow-lg">
                  <defs>
                    <linearGradient id="arrowGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 8 L48 32 L20 56"
                    fill="none"
                    stroke="url(#arrowGradientRight)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8 L48 32 L20 56"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                    transform="translate(4, 0)"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm md:text-base tracking-widest uppercase font-heading text-center w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase === "split" ? 0 : 1,
              y: phase === "split" ? -20 : 0,
              color: phase === "split" ? "#1a1a1a" : "hsl(215, 20%, 65%)",
            }}
            transition={{ 
              duration: 0.6, 
              delay: phase === "initial" ? 1 : 0,
              ease: "easeOut"
            }}
          >
            The future of insurance finance
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroExperience;
