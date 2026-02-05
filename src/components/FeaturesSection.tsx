import { motion } from "framer-motion";
import featuresDivider from "@/assets/features-divider.svg";

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="relative">
      {/* Title Section */}
      <div className="py-24 px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Silos to a Liquid Marketplace
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Divider Image with Gradient */}
      <div className="relative h-[500px] md:h-[700px]">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${featuresDivider})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Top gradient overlay - fades from background to transparent */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-transparent to-transparent h-1/3" />
        
        {/* Bottom gradient overlay - fades from transparent to background */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" style={{ top: '50%' }} />
      </div>

      {/* How It Works Section */}
      <div className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
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
      </div>
    </section>
  );
};

export default FeaturesSection;
