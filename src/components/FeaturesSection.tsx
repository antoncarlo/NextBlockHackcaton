import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      title: "The Protocol",
      subtitle: "NextBlock Core: The Foundational Layer",
      description: "A simple, immutable, and open-source set of smart contracts on Base. The core protocol allows for the permissionless creation of tokenized insurance risk vaults, setting the standard for this new asset class.",
      icon: "⬡",
    },
    {
      title: "The Curators",
      subtitle: "Curators: The Architects of Risk",
      description: "Reinsurers, asset managers, and specialized funds act as Curators. They source insurance risk (from partners like Klapton Re or on-chain protocols), define the strategy, and launch their own unique vaults on the NextBlock protocol.",
      icon: "◈",
    },
    {
      title: "The Investors",
      subtitle: "Investors: Access to Curated Yield",
      description: "Institutional and accredited investors can now access a diverse marketplace of insurance-linked vaults. They can choose the strategy that fits their risk/return profile, gaining exposure to a stable, real-world yield source, entirely on-chain.",
      icon: "◇",
    },
  ];

  return (
    <section id="how-it-works" className="relative">
      {/* Problem & Solution Section */}
      <div className="relative py-24 px-6 bg-[#0D1221]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
              From Silos to a Liquid Marketplace
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              whileHover={{
                borderColor: 'rgba(74, 108, 247, 0.2)',
              }}
            >
              <h3 className="text-xl font-medium text-foreground mb-4">
                The Problem
              </h3>
              <p className="text-lg font-medium text-[#4A6CF7] mb-3">
                Trapped Capital, Opaque Risk
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The traditional reinsurance market is capital-intensive, illiquid, and inaccessible. For reinsurers, billions in capital are trapped in inefficient structures. For investors, access to this stable, uncorrelated asset class is restricted to a select few.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              whileHover={{
                borderColor: 'rgba(74, 108, 247, 0.2)',
              }}
            >
              <h3 className="text-xl font-medium text-foreground mb-4">
                The Solution
              </h3>
              <p className="text-lg font-medium text-[#4A6CF7] mb-3">
                Permissionless Vaults, Composable Risk
              </p>
              <p className="text-muted-foreground leading-relaxed">
                NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Insurance-Linked Section - Ondo Style */}
      <div className="relative py-32 px-6 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.4)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* Horizontal flowing lines */}
          <motion.path
            d="M 0 30% Q 25% 20%, 50% 30% T 100% 30%"
            stroke="rgba(74, 108, 247, 0.15)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 70% Q 25% 80%, 50% 70% T 100% 70%"
            stroke="rgba(74, 108, 247, 0.15)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
          />
          {/* Connecting vertical lines */}
          <motion.line
            x1="25%"
            y1="30%"
            x2="25%"
            y2="70%"
            stroke="rgba(74, 108, 247, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.line
            x1="50%"
            y1="30%"
            x2="50%"
            y2="70%"
            stroke="rgba(74, 108, 247, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          <motion.line
            x1="75%"
            y1="30%"
            x2="75%"
            y2="70%"
            stroke="rgba(74, 108, 247, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </svg>

        <div className="mx-auto max-w-5xl relative z-10">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight">
              The Insurance-Linked
              <br />
              <span className="text-gradient">Protocol Stack</span>
            </h2>
          </motion.div>

          {/* Features in flowing layout */}
          <div className="space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon/Symbol */}
                <motion.div 
                  className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="text-6xl text-[#4A6CF7]"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 blur-xl bg-[rgba(74,108,247,0.3)] rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"} text-center`}>
                <motion.span 
                  className="inline-block text-sm font-medium mb-2 px-3 py-1 rounded-md badge-institutional"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                >
                  {feature.title}
                </motion.span>
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                    {feature.subtitle}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating connection nodes */}
          <div className="absolute top-1/4 left-0 hidden lg:block">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#4A6CF7]"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div className="absolute top-1/2 right-0 hidden lg:block">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#4A6CF7]"
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </div>
          <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#4A6CF7]"
              animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
