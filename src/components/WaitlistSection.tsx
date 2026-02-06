import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Key, Handshake, ChevronRight } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import { FlowchartMarker, FlowchartMobileMarker } from "./FlowchartLines";

interface RoleCardData {
  id: string;
  label: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const roleCards: RoleCardData[] = [
  {
    id: "curator",
    label: "For Curators",
    title: "Build Your Strategy",
    content: "Are you a reinsurer looking to access DeFi liquidity? Or an asset manager with expertise in insurance-linked securities? NextBlock provides the tools to build, manage, and scale your on-chain strategy.",
    icon: <Compass />,
  },
  {
    id: "investor",
    label: "For Investors",
    title: "Diversify Your Portfolio",
    content: "Diversify your portfolio with a truly uncorrelated, real-world asset class. Insurance risk offers stable, predictable yields backed by centuries of actuarial data.",
    icon: <Key />,
  },
  {
    id: "partner",
    label: "For Partners",
    title: "Join the Ecosystem",
    content: "Whether you're a technology provider, distribution platform, or strategic partner, NextBlock offers integration opportunities to expand the insurance-linked asset ecosystem.",
    icon: <Handshake />,
  },
];

const WaitlistSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <section 
      id="waitlist" 
      className="relative overflow-hidden"
      style={{ 
        minHeight: '700px',
        backgroundColor: '#0F1218',
        zIndex: 1,
      }}
    >
      {/* Flowchart markers */}
      <FlowchartMarker 
        sectionId="waitlist" 
        isDark={true}
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
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
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
              Join the Waitlist
            </span>
            <h2 
              style={{ 
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 500,
                color: '#FFFFFF',
                lineHeight: 1.2,
              }}
            >
              Be Part of the New
              <br />
              Capital Market
            </h2>
            <p
              className="mt-6 mx-auto"
              style={{
                maxWidth: '600px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              We are currently in private beta, working with leading reinsurers and asset managers. 
              Request early access to join as a curator, investor, or partner.
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Role Cards */}
            <div className="flex flex-col gap-3">
              {roleCards.map((card, index) => {
                const isActive = activeCardIndex === index;
                
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
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: isActive ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
                    }}
                    whileHover={{
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
                    
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          animate={{
                            color: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.6)',
                          }}
                          transition={{ duration: 0.4 }}
                          className="flex-shrink-0"
                          style={{ width: '28px', height: '28px' }}
                        >
                          {card.icon}
                        </motion.div>

                        <div className="flex-1">
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
                              display: 'block',
                              marginBottom: '4px',
                            }}
                          >
                            {card.label}
                          </motion.span>

                          {/* Title */}
                          <motion.h3
                            animate={{
                              color: isActive ? '#0F1218' : 'rgba(255, 255, 255, 0.8)',
                            }}
                            transition={{ duration: 0.4 }}
                            style={{
                              fontSize: '18px',
                              fontWeight: 500,
                              lineHeight: 1.3,
                            }}
                          >
                            {card.title}
                          </motion.h3>

                          {/* Expanded Content */}
                          <motion.div
                            initial={false}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              maxHeight: isActive ? '150px' : '0px',
                              marginTop: isActive ? '12px' : '0px',
                            }}
                            transition={{
                              opacity: { duration: 0.4, delay: isActive ? 0.15 : 0 },
                              maxHeight: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                              marginTop: { duration: 0.4 },
                            }}
                            style={{ overflow: 'hidden' }}
                          >
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
                                lineHeight: 1.65,
                                color: '#4A4A4A',
                              }}
                            >
                              {card.content}
                            </p>
                          </motion.div>
                        </div>

                        {/* Arrow indicator */}
                        <motion.div
                          animate={{
                            color: isActive ? '#1B3A6B' : 'rgba(255, 255, 255, 0.3)',
                            rotate: isActive ? 90 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronRight size={20} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                padding: '32px',
              }}
            >
              <WaitlistForm />
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Role Cards (Accordion) */}
            {!showForm && (
              <div className="flex flex-col gap-2 mb-8">
                {roleCards.map((card, index) => {
                  const isActive = activeCardIndex === index;
                  
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
            )}

            {/* Mobile Form Toggle */}
            {!showForm ? (
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1B3A6B',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                }}
              >
                Request Early Access
                <ChevronRight size={18} />
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                  padding: '24px',
                }}
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="mb-4 flex items-center gap-2 text-sm"
                  style={{ color: '#8A8A8A' }}
                >
                  <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                  Back to options
                </button>
                <WaitlistForm />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
