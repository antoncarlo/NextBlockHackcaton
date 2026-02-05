import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

          {/* Particle background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: phase === "split" ? "rgba(0,0,0,0.2)" : "rgba(14, 165, 233, 0.3)" }}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: phase === "split" 
                    ? (i % 2 === 0 ? -100 : window.innerWidth + 100)
                    : Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: phase === "split" ? 0 : [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: phase === "split" ? 1.5 : 3,
                  repeat: phase === "split" ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left panel - NEXT */}
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

              {/* NEXT text */}
              <motion.span
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter pr-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: phase === "split" ? -100 : 0,
                  color: phase === "split" ? "#1a1a1a" : "hsl(210, 40%, 98%)",
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
                  color: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                }}
              >
                NEXT
              </motion.span>
            </motion.div>

            {/* Right panel - BLOCK */}
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

              {/* BLOCK text */}
              <motion.span
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter pl-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: phase === "split" ? 100 : 0,
                  color: phase === "split" ? "#1a1a1a" : "hsl(210, 40%, 98%)",
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
                  color: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                }}
              >
                BLOCK
              </motion.span>
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
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm md:text-base tracking-widest uppercase"
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

          {/* Corner logo hint */}
          <motion.div
            className="absolute top-6 left-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="text-primary font-bold text-sm">NB</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroExperience;
