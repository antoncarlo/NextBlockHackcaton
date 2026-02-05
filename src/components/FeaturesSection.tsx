import { motion } from "framer-motion";
import problemSolutionDivider from "@/assets/problem-solution-divider.svg";

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Silos to a Liquid Marketplace
          </h2>
        </motion.div>

        {/* Diagonal Layout with Image Divider */}
        <div className="relative mb-24">
          {/* The Problem - Top Left */}
          <div className="grid md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl liquid-glass liquid-glass-hover md:mr-8 mb-8 md:mb-0"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">
                The Problem
              </h3>
              <p className="text-lg font-semibold text-primary mb-3 relative z-10">
                Trapped Capital, Opaque Risk
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                The traditional reinsurance market is capital-intensive, illiquid, and inaccessible. For reinsurers, billions in capital are trapped in inefficient structures. For investors, access to this stable, uncorrelated asset class is restricted to a select few.
              </p>
            </motion.div>
            <div className="hidden md:block" />
          </div>

          {/* Image Divider - Full Width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-8 md:my-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[60%] z-10"
          >
            <img 
              src={problemSolutionDivider} 
              alt="Problem to Solution transition" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* The Solution - Bottom Right */}
          <div className="grid md:grid-cols-2 gap-0 md:mt-8">
            <div className="hidden md:block" />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl liquid-glass liquid-glass-hover md:ml-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">
                The Solution
              </h3>
              <p className="text-lg font-semibold text-primary mb-3 relative z-10">
                Permissionless Vaults, Composable Risk
              </p>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.
              </p>
            </motion.div>
          </div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Insurance-Linked
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Protocol",
              subtitle: "NextBlock Core: The Foundational Layer",
              description: "A simple, immutable, and open-source set of smart contracts on Base. The core protocol allows for the permissionless creation of tokenized insurance risk vaults, setting the standard for this new asset class.",
            },
            {
              title: "The Curators",
              subtitle: "Curators: The Architects of Risk",
              description: "Reinsurers, asset managers, and specialized funds act as Curators. They source insurance risk (from partners like Klapton Re or on-chain protocols), define the strategy, and launch their own unique vaults on the NextBlock protocol.",
            },
            {
              title: "The Investors",
              subtitle: "Investors: Access to Curated Yield",
              description: "Institutional and accredited investors can now access a diverse marketplace of insurance-linked vaults. They can choose the strategy that fits their risk/return profile, gaining exposure to a stable, real-world yield source, entirely on-chain.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl liquid-glass liquid-glass-hover"
            >
              <div className="text-sm font-medium text-primary mb-2 relative z-10">
                {item.title}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 relative z-10">
                {item.subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
