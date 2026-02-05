import { motion } from "framer-motion";

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

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              The Problem
            </h3>
            <p className="text-lg font-semibold text-primary mb-3">
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
            className="p-8 rounded-2xl bg-gradient-card border border-primary/30"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              The Solution
            </h3>
            <p className="text-lg font-semibold text-primary mb-3">
              Permissionless Vaults, Composable Risk
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.
            </p>
          </motion.div>
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
            The Insurance-Linked Morpho Model
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
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all shadow-card"
            >
              <div className="text-sm font-medium text-primary mb-2">
                {item.title}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.subtitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
