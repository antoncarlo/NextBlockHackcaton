import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SectionNode {
  id: string;
  sectionId: string;
  branches?: Array<{
    direction: "left" | "right";
    width: string;
  }>;
  isDark?: boolean;
}

const sectionNodes: SectionNode[] = [
  { 
    id: "silos-marketplace", 
    sectionId: "how-it-works",
    branches: [
      { direction: "left", width: "25%" },
      { direction: "right", width: "25%" },
    ]
  },
  { 
    id: "stats", 
    sectionId: "stats-section",
    branches: [
      { direction: "left", width: "28%" },
      { direction: "right", width: "28%" },
    ]
  },
  { 
    id: "protocol-stack", 
    sectionId: "protocol-stack",
    isDark: true,
    branches: [
      { direction: "left", width: "22%" },
    ]
  },
  { 
    id: "vision", 
    sectionId: "our-vision",
    branches: [
      { direction: "right", width: "30%" },
    ]
  },
  { 
    id: "waitlist", 
    sectionId: "waitlist",
    isDark: true,
  },
];

// Node dot component with animation
const NodeDot = ({ 
  isDark = false, 
  animate = false,
  delay = 0 
}: { 
  isDark?: boolean;
  animate?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={animate ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      className="absolute left-1/2 -translate-x-1/2 z-[2] rounded-full"
      style={{
        width: 8,
        height: 8,
        border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(27, 58, 107, 0.15)'}`,
        backgroundColor: isDark ? '#0F1218' : '#FAFAF8',
      }}
    />
  );
};

// Small end dot for branch lines
const EndDot = ({ 
  direction, 
  animate = false,
  delay = 0 
}: { 
  direction: "left" | "right";
  animate?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`absolute top-1/2 -translate-y-1/2 rounded-full ${
        direction === "left" ? "left-0" : "right-0"
      }`}
      style={{
        width: 4,
        height: 4,
        backgroundColor: 'rgba(27, 58, 107, 0.12)',
      }}
    />
  );
};

// Branch line component with animation
const BranchLine = ({ 
  direction, 
  width,
  isDark = false,
  animate = false,
}: { 
  direction: "left" | "right";
  width: string;
  isDark?: boolean;
  animate?: boolean;
}) => {
  const lineColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(27, 58, 107, 0.08)';
  const lineFade = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(27, 58, 107, 0.04)';
  
  const gradient = direction === "left"
    ? `linear-gradient(to left, ${lineColor} 0%, ${lineFade} 70%, transparent 100%)`
    : `linear-gradient(to right, ${lineColor} 0%, ${lineFade} 70%, transparent 100%)`;

  return (
    <motion.div
      initial={animate ? { width: 0 } : { width }}
      animate={{ width }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`absolute top-1/2 -translate-y-1/2 h-[1px] ${
        direction === "left" ? "right-1/2" : "left-1/2"
      }`}
      style={{
        background: gradient,
        transformOrigin: direction === "left" ? "right" : "left",
      }}
    >
      <EndDot direction={direction} animate={animate} delay={0.6} />
    </motion.div>
  );
};

// Cross marker at each node
const CrossMarker = ({ isDark = false }: { isDark?: boolean }) => {
  const lineColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(27, 58, 107, 0.08)';
  
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[1px]"
      style={{
        width: 60,
        backgroundColor: lineColor,
      }}
    />
  );
};

// Section marker component combining node, cross, and branches
const SectionMarker = ({ 
  node,
  isInView,
}: { 
  node: SectionNode;
  isInView: boolean;
}) => {
  return (
    <div className="relative h-0">
      {/* Cross marker */}
      <CrossMarker isDark={node.isDark} />
      
      {/* Branch lines */}
      {node.branches?.map((branch, index) => (
        <BranchLine
          key={index}
          direction={branch.direction}
          width={branch.width}
          isDark={node.isDark}
          animate={isInView}
        />
      ))}
      
      {/* Node dot (on top) */}
      <NodeDot isDark={node.isDark} animate={isInView} delay={0.2} />
    </div>
  );
};

// Individual section observer
const ObservedMarker = ({ node }: { node: SectionNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div 
      ref={ref}
      className="absolute left-0 right-0"
      style={{ top: 0 }}
    >
      <SectionMarker node={node} isInView={isInView} />
    </div>
  );
};

const FlowchartLines = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Main vertical line - Desktop */}
      <div 
        className="fixed top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] z-0 pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(27, 58, 107, 0.08) 15%, rgba(27, 58, 107, 0.08) 85%, transparent 100%)',
        }}
      />
      
      {/* Main vertical line - Mobile (left side) */}
      <div 
        className="fixed top-0 bottom-0 left-5 w-[1px] z-0 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(27, 58, 107, 0.1) 15%, rgba(27, 58, 107, 0.1) 85%, transparent 100%)',
        }}
      />
    </>
  );
};

// Export a portal component for section markers
export const FlowchartMarker = ({ 
  sectionId, 
  isDark = false,
  branches,
}: { 
  sectionId: string;
  isDark?: boolean;
  branches?: Array<{ direction: "left" | "right"; width: string }>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const lineColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(27, 58, 107, 0.08)';
  const lineFade = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(27, 58, 107, 0.04)';

  return (
    <div 
      ref={ref}
      className="absolute left-0 right-0 top-0 h-0 pointer-events-none hidden md:block"
      style={{ zIndex: 2 }}
    >
      {/* Cross marker */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[1px]"
        style={{
          width: 60,
          backgroundColor: lineColor,
          top: 0,
        }}
      />
      
      {/* Branch lines */}
      {branches?.map((branch, index) => {
        const gradient = branch.direction === "left"
          ? `linear-gradient(to left, ${lineColor} 0%, ${lineFade} 70%, transparent 100%)`
          : `linear-gradient(to right, ${lineColor} 0%, ${lineFade} 70%, transparent 100%)`;
        
        return (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={isInView ? { width: branch.width } : { width: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
            className={`absolute h-[1px] ${
              branch.direction === "left" ? "right-1/2" : "left-1/2"
            }`}
            style={{
              background: gradient,
              top: 0,
              transformOrigin: branch.direction === "left" ? "right" : "left",
            }}
          >
            {/* End dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className={`absolute top-1/2 -translate-y-1/2 rounded-full ${
                branch.direction === "left" ? "left-0" : "right-0"
              }`}
              style={{
                width: 4,
                height: 4,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(27, 58, 107, 0.12)',
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Node dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 8,
          height: 8,
          top: -4,
          border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(27, 58, 107, 0.15)'}`,
          backgroundColor: isDark ? '#0F1218' : '#FAFAF8',
          zIndex: 3,
        }}
      />
    </div>
  );
};

// Mobile node marker (simpler, left-aligned)
export const FlowchartMobileMarker = ({ isDark = false }: { isDark?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div 
      ref={ref}
      className="absolute left-5 top-0 h-0 pointer-events-none md:hidden"
      style={{ zIndex: 2 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute -translate-x-1/2 rounded-full"
        style={{
          width: 8,
          height: 8,
          top: -4,
          border: `1.5px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(27, 58, 107, 0.15)'}`,
          backgroundColor: isDark ? '#0F1218' : '#FAFAF8',
        }}
      />
    </div>
  );
};

export default FlowchartLines;
