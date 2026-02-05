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
    // Start split animation after a brief pause
    const splitTimer = setTimeout(() => setPhase("split"), 1500);
    
    return () => clearTimeout(splitTimer);
  }, []);

  useEffect(() => {
    if (phase === "split") {
      // Complete and show landing page
      const revealTimer = setTimeout(() => {
        setPhase("reveal");
        setTimeout(onComplete, 600);
      }, 1800);
      
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
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Background color transition */}
          <motion.div
            className="absolute inset-0"
            initial={{ backgroundColor: "hsl(222, 47%, 6%)" }}
            animate={{ 
              backgroundColor: phase === "split" ? "#eeebe3" : "hsl(222, 47%, 6%)" 
            }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
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
                    duration: 1.5,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
              />
            ))}
          </div>

          {/* Shooting stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-white via-primary to-transparent"
              style={{
                width: 80 + Math.random() * 60,
                top: `${10 + Math.random() * 40}%`,
                left: "-100px",
                rotate: 25,
              }}
              animate={{
                x: phase === "split" ? 0 : [0, window.innerWidth + 200],
                opacity: phase === "split" ? 0 : [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 1.2 + 0.5,
                repeat: phase === "split" ? 0 : Infinity,
                repeatDelay: 4,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Center content - Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left panel - Left half of logo area */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-end overflow-hidden"
              animate={{
                x: phase === "split" ? "-100%" : 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Left arrow track */}
              <motion.div
                className="absolute right-0 h-[2px] bg-gradient-to-l from-primary to-transparent origin-right"
                initial={{ width: 0 }}
                animate={{
                  width: phase === "split" ? "100%" : "0%",
                }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
              
              {/* Arrow head left */}
              <motion.div
                className="absolute"
                initial={{ right: "50%", opacity: 0 }}
                animate={{
                  right: phase === "split" ? "100%" : "50%",
                  opacity: phase === "initial" ? 0 : 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" className="text-primary">
                  <path
                    d="M35 14 L14 28 L35 42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Left half of logo (clipped) */}
              <motion.div
                className="relative overflow-hidden pr-0"
                style={{ clipPath: "inset(0 0 0 0)" }}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: phase === "split" ? -100 : 0,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
                }}
              >
                <motion.img
                  src={phase === "split" ? logoBlack : logoWhite}
                  alt="NextBlock"
                  className="h-24 md:h-32 lg:h-40 w-auto"
                  style={{ 
                    clipPath: "inset(0 50% 0 0)",
                    marginRight: "-50%",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right panel - Right half of logo area */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-start overflow-hidden"
              animate={{
                x: phase === "split" ? "100%" : 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {/* Right arrow track */}
              <motion.div
                className="absolute left-0 h-[2px] bg-gradient-to-r from-primary to-transparent origin-left"
                initial={{ width: 0 }}
                animate={{
                  width: phase === "split" ? "100%" : "0%",
                }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />

              {/* Arrow head right */}
              <motion.div
                className="absolute"
                initial={{ left: "50%", opacity: 0 }}
                animate={{
                  left: phase === "split" ? "100%" : "50%",
                  opacity: phase === "initial" ? 0 : 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" className="text-primary">
                  <path
                    d="M21 14 L42 28 L21 42"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Right half of logo (clipped) */}
              <motion.div
                className="relative overflow-hidden pl-0"
                style={{ clipPath: "inset(0 0 0 0)" }}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: phase === "split" ? 100 : 0,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
                }}
              >
                <motion.img
                  src={phase === "split" ? logoBlack : logoWhite}
                  alt="NextBlock"
                  className="h-24 md:h-32 lg:h-40 w-auto"
                  style={{ 
                    clipPath: "inset(0 0 0 50%)",
                    marginLeft: "-50%",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Center divider glow */}
            <motion.div
              className="absolute w-[2px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{
                opacity: phase === "initial" ? 1 : 0,
                scaleY: phase === "initial" ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5, delay: phase === "initial" ? 0.8 : 0 }}
          >
            Il futuro della finanza
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroExperience;
