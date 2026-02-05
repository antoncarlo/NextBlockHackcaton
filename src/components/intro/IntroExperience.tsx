import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/logo-white.svg";
import logoBlack from "@/assets/logo-black.svg";

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

  // Generate stars with various sizes
  const stars = [...Array(150)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 2,
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

          {/* Enhanced star field background */}
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
                  backgroundColor: phase === "split" ? "rgba(0,0,0,0.15)" : "rgba(255, 255, 255, 0.8)",
                  boxShadow: phase === "split" 
                    ? "none" 
                    : `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5), 0 0 ${star.size * 4}px rgba(14, 165, 233, 0.3)`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase === "split" ? 0 : [0.4, 1, 0.4],
                  scale: phase === "split" ? 0 : [1, 1.2, 1],
                  x: phase === "split" 
                    ? (star.id % 2 === 0 ? -200 : 200)
                    : 0,
                }}
                transition={{
                  opacity: {
                    duration: star.duration,
                    repeat: phase === "split" ? 0 : Infinity,
                    delay: star.delay,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: star.duration,
                    repeat: phase === "split" ? 0 : Infinity,
                    delay: star.delay,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 1.8,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
              />
            ))}
          </div>

          {/* Center content - Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Full centered logo that splits */}
            <div className="relative flex items-center justify-center">
              {/* Left half container */}
              <motion.div
                className="overflow-hidden"
                animate={{
                  x: phase === "split" ? "-50vw" : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <img
                    src={phase === "split" ? logoBlack : logoWhite}
                    alt="NextBlock"
                    className="h-28 md:h-40 lg:h-48 w-auto transition-all duration-500"
                    style={{ 
                      clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Right half container */}
              <motion.div
                className="overflow-hidden absolute left-1/2"
                animate={{
                  x: phase === "split" ? "50vw" : 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <img
                    src={phase === "split" ? logoBlack : logoWhite}
                    alt="NextBlock"
                    className="h-28 md:h-40 lg:h-48 w-auto transition-all duration-500"
                    style={{ 
                      clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                      transform: "translateX(-50%)",
                    }}
                  />
                </motion.div>
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

              {/* Left arrow */}
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
                <svg width="48" height="48" viewBox="0 0 48 48" className="text-primary">
                  <path
                    d="M30 12 L12 24 L30 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Right arrow */}
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
                <svg width="48" height="48" viewBox="0 0 48 48" className="text-primary">
                  <path
                    d="M18 12 L36 24 L18 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Center divider glow */}
            <motion.div
              className="absolute w-[2px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: phase === "initial" ? 0.8 : 0,
                scaleY: phase === "initial" ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm md:text-base tracking-widest uppercase font-heading"
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
            Il futuro della finanza
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroExperience;
