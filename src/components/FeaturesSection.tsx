import { motion } from "framer-motion";
import curatorsImage from "@/assets/curators-building.png";
import investorsImage from "@/assets/investors-ship.png";
import protocolImage from "@/assets/protocol-treasury.png";

const FeaturesSection = () => {
  const features = [
    {
      title: "The Protocol",
      subtitle: "NextBlock Core: The Foundational Layer",
      description: "A simple, immutable, and open-source set of smart contracts on Base. The core protocol allows for the permissionless creation of tokenized insurance risk vaults, setting the standard for this new asset class.",
      icon: "⬡",
      image: protocolImage,
      imagePosition: 'right' as const,
    },
    {
      title: "The Curators",
      subtitle: "Curators: The Architects of Risk",
      description: "Reinsurers, asset managers, and specialized funds act as Curators. They source insurance risk (from partners like Klapton Re or on-chain protocols), define the strategy, and launch their own unique vaults on the NextBlock protocol.",
      icon: "◈",
      image: curatorsImage,
      imagePosition: 'right' as const,
    },
    {
      title: "The Investors",
      subtitle: "Investors: Access to Curated Yield",
      description: "Institutional and accredited investors can now access a diverse marketplace of insurance-linked vaults. They can choose the strategy that fits their risk/return profile, gaining exposure to a stable, real-world yield source, entirely on-chain.",
      icon: "◇",
      image: investorsImage,
      imagePosition: 'left' as const,
    },
  ];

  return (
    <section id="how-it-works" className="relative">
      {/* Problem & Solution Section */}
      <div 
        className="relative px-6 bg-[#0D1221]"
        style={{ padding: '100px 24px' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              From Silos to a Liquid Marketplace
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2" style={{ gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl liquid-glass liquid-glass-hover"
            >
              <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">
                The Problem
              </h3>
              <p className="text-lg font-medium text-[#4A6CF7] mb-3 relative z-10">
                Trapped Capital, Opaque Risk
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                The traditional reinsurance market is capital-intensive, illiquid, and inaccessible. For reinsurers, billions in capital are trapped in inefficient structures. For investors, access to this stable, uncorrelated asset class is restricted to a select few.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl liquid-glass liquid-glass-hover"
            >
              <h3 className="text-xl font-medium text-foreground mb-4 relative z-10">
                The Solution
              </h3>
              <p className="text-lg font-medium text-[#4A6CF7] mb-3 relative z-10">
                Permissionless Vaults, Composable Risk
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Insurance-Linked Section */}
      <div 
        className="relative px-6 overflow-hidden"
        style={{ padding: '100px 24px' }}
      >
        {/* Minimal decorative dots - only 4, very subtle */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
            style={{ left: '10%', top: '20%' }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
            style={{ right: '15%', top: '40%' }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
            style={{ left: '20%', bottom: '30%' }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
            style={{ right: '10%', bottom: '20%' }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, delay: 3 }}
          />
        </div>

        <div className="mx-auto relative z-10" style={{ maxWidth: '1100px' }}>
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ marginBottom: '48px' }}
          >
            <motion.span 
              className="section-label mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How It Works
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
              The Insurance-Linked
              <br />
              <span className="text-gradient">Protocol Stack</span>
            </h2>
          </motion.div>

          {/* Features with vertical timeline connector */}
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div 
              className="absolute left-8 md:left-12 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(74,108,247,0.3) 10%, rgba(74,108,247,0.3) 90%, transparent)' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 md:gap-8"
                >
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0 hidden md:flex flex-col items-center">
                    <motion.div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ 
                        background: 'rgba(74,108,247,0.15)',
                        border: '2px solid rgba(74,108,247,0.4)'
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#4A6CF7]" />
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative">
                      <span className="text-4xl md:text-5xl text-[#4A6CF7]">
                        {feature.icon}
                      </span>
                      <div className="absolute inset-0 blur-xl bg-[rgba(74,108,247,0.2)] rounded-full" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 pt-2 flex flex-col lg:flex-row items-start gap-6 ${feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Left-positioned image (for Investors) */}
                    {feature.image && feature.imagePosition === 'left' && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-shrink-0 hidden lg:block"
                        style={{ maxWidth: '280px' }}
                      >
                        <div
                          className="relative overflow-hidden"
                          style={{
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <img
                            src={feature.image}
                            alt="Ship illustration"
                            style={{
                              width: '100%',
                              display: 'block',
                              filter: 'brightness(0.85)',
                            }}
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(10, 14, 26, 0.15) 0%, rgba(10, 14, 26, 0.35) 100%)',
                            }}
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="flex-1">
                      <motion.span 
                        className="inline-block text-sm font-medium mb-2 px-3 py-1 rounded-md badge-institutional"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {feature.title}
                      </motion.span>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                        {feature.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: '600px' }}>
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Right-positioned image (for Curators) */}
                    {feature.image && feature.imagePosition === 'right' && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-shrink-0 hidden lg:block"
                        style={{ maxWidth: '280px' }}
                      >
                        <div
                          className="relative overflow-hidden"
                          style={{
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <img
                            src={feature.image}
                            alt="Classical building illustration"
                            style={{
                              width: '100%',
                              display: 'block',
                              filter: 'brightness(0.85)',
                            }}
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(10, 14, 26, 0.15) 0%, rgba(10, 14, 26, 0.35) 100%)',
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
