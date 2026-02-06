import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ChevronLeft, ChevronRight } from "lucide-react";
import ProtocolStackCards from "./ProtocolStackCards";
import { FlowchartMarker, FlowchartMobileMarker } from "./FlowchartLines";

interface SolutionCardData {
  id: string;
  label: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const solutionCards: SolutionCardData[] = [
  {
    id: "problem",
    label: "The Problem",
    title: "Trapped Capital, Opaque Risk",
    content: "The traditional reinsurance market is capital-intensive, illiquid, and inaccessible. For reinsurers, billions in capital are trapped in inefficient structures. For investors, access to this stable, uncorrelated asset class is restricted to a select few.",
    icon: <Lock />,
  },
  {
    id: "solution",
    label: "The Solution",
    title: "Permissionless Vaults, Composable Risk",
    content: "NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.",
    icon: <Unlock />,
  },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? solutionCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === solutionCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative" style={{ zIndex: 1 }}>
      {/* From Silos to Liquid Marketplace Section */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          backgroundColor: '#0F1218',
          minHeight: '500px',
        }}
      >
        {/* Flowchart markers */}
        <FlowchartMarker 
          sectionId="silos-marketplace" 
          isDark={true}
          branches={[
            { direction: "left", width: "25%" },
            { direction: "right", width: "25%" },
          ]}
        />
        <FlowchartMobileMarker isDark={true} />

        {/* Subtle gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(27, 58, 107, 0.15) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-24 md:py-32">
          <div className="mx-auto" style={{ maxWidth: '1100px' }}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <span 
                className="block mb-4"
                style={{ 
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                The Opportunity
              </span>
              <h2 
                style={{ 
                  fontSize: 'clamp(28px, 5vw, 42px)',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                }}
              >
                From Silos to a
                <br />
                Liquid Marketplace
              </h2>
            </motion.div>

            {/* Desktop Cards */}
            <div className="hidden md:flex gap-4" style={{ height: '280px' }}>
              {solutionCards.map((card, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => handleCardClick(index)}
                    className="relative cursor-pointer overflow-hidden"
                    style={{
                      borderRadius: '16px',
                      backdropFilter: isActive ? 'none' : 'blur(8px)',
                    }}
                    initial={false}
                    animate={{
                      flex: isActive ? 2 : 1,
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                      opacity: isActive ? 1 : 0.85,
                    }}
                    whileHover={{
                      opacity: 1,
                      borderColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.2)',
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <div 
                      className="absolute inset-0 border"
                      style={{
                        borderRadius: '16px',
                        borderColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isActive ? '0 8px 32px rgba(0, 0, 0, 0.12)' : 'none',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    
                    <div className="relative h-full p-7 flex flex-col">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          color: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.6)',
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ 
                          width: isActive ? '32px' : '28px',
                          height: isActive ? '32px' : '28px',
                        }}
                      >
                        <div style={{ width: '100%', height: '100%' }}>
                          {card.icon}
                        </div>
                      </motion.div>

                      {/* Spacer */}
                      <div className="flex-1" />

                      {/* Label */}
                      <motion.span
                        animate={{
                          color: isActive ? '#8A8A8A' : 'rgba(255, 255, 255, 0.4)',
                        }}
                        style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                        }}
                      >
                        {card.label}
                      </motion.span>

                      {/* Separator Line */}
                      <motion.div
                        animate={{
                          width: isActive ? '48px' : '40px',
                          backgroundColor: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.15)',
                        }}
                        transition={{ duration: 0.4 }}
                        style={{
                          height: '1px',
                          marginBottom: '12px',
                        }}
                      />

                      {/* Title */}
                      <motion.h3
                        animate={{
                          color: isActive ? '#0F1218' : 'rgba(255, 255, 255, 0.8)',
                          fontSize: isActive ? '20px' : '16px',
                          fontWeight: isActive ? 600 : 500,
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ lineHeight: 1.3 }}
                      >
                        {card.title}
                      </motion.h3>

                      {/* Expanded Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          maxHeight: isActive ? '200px' : '0px',
                          marginTop: isActive ? '16px' : '0px',
                        }}
                        transition={{
                          opacity: { duration: 0.4, delay: isActive ? 0.15 : 0 },
                          maxHeight: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                          marginTop: { duration: 0.4 },
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontSize: '15px',
                            lineHeight: 1.65,
                            color: '#4A4A4A',
                          }}
                        >
                          {card.content}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows (Desktop) */}
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <ChevronLeft size={18} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center transition-all duration-300"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <ChevronRight size={18} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </button>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden flex flex-col gap-2">
              {solutionCards.map((card, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => handleCardClick(index)}
                    className="cursor-pointer overflow-hidden"
                    style={{
                      borderRadius: '12px',
                      border: '1px solid',
                      borderColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: isActive ? 'none' : 'blur(8px)',
                    }}
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Header Row */}
                    <div 
                      className="flex items-center gap-4 p-4"
                      style={{ minHeight: '64px' }}
                    >
                      <motion.div
                        animate={{
                          color: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.6)',
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '24px', height: '24px', flexShrink: 0 }}
                      >
                        {card.icon}
                      </motion.div>
                      <div className="flex-1">
                        <motion.span
                          animate={{
                            color: isActive ? '#8A8A8A' : 'rgba(255, 255, 255, 0.4)',
                          }}
                          style={{
                            fontSize: '11px',
                            fontWeight: 500,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '2px',
                          }}
                        >
                          {card.label}
                        </motion.span>
                        <motion.h3
                          animate={{
                            color: isActive ? '#0F1218' : 'rgba(255, 255, 255, 0.8)',
                          }}
                          style={{
                            fontSize: '15px',
                            fontWeight: 500,
                            lineHeight: 1.3,
                          }}
                        >
                          {card.title}
                        </motion.h3>
                      </div>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight 
                          size={18} 
                          style={{ 
                            color: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.4)',
                            transform: 'rotate(90deg)',
                          }} 
                        />
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? 'auto' : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.3, delay: isActive ? 0.1 : 0 },
                      }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-4 pb-4 pt-0">
                        <div 
                          style={{ 
                            width: '40px', 
                            height: '1px', 
                            backgroundColor: '#1B3A6B',
                            marginBottom: '12px',
                          }} 
                        />
                        <p
                          style={{
                            fontSize: '14px',
                            lineHeight: 1.6,
                            color: '#4A4A4A',
                          }}
                        >
                          {card.content}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Stack Cards */}
      <ProtocolStackCards />
    </section>
  );
};

export default FeaturesSection;
