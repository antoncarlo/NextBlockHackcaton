import { motion } from "framer-motion";
import ProtocolStackCards from "./ProtocolStackCards";

const FeaturesSection = () => {
  return (
    <section className="relative">
      {/* Problem & Solution Section */}
      <div 
        className="relative px-6"
        style={{ 
          padding: '100px 24px',
          backgroundColor: '#FAFAF8',
        }}
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
            <h2 
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ color: '#0F1218' }}
            >
              From Silos to a Liquid Marketplace
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2" style={{ gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 card-institutional"
            >
              <h3 
                className="text-xl font-medium mb-4"
                style={{ color: '#1A1F2E' }}
              >
                The Problem
              </h3>
              <p 
                className="text-lg font-medium mb-3"
                style={{ color: '#1B3A6B' }}
              >
                Trapped Capital, Opaque Risk
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                The traditional reinsurance market is capital-intensive, illiquid, and inaccessible. For reinsurers, billions in capital are trapped in inefficient structures. For investors, access to this stable, uncorrelated asset class is restricted to a select few.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 card-institutional"
            >
              <h3 
                className="text-xl font-medium mb-4"
                style={{ color: '#1A1F2E' }}
              >
                The Solution
              </h3>
              <p 
                className="text-lg font-medium mb-3"
                style={{ color: '#1B3A6B' }}
              >
                Permissionless Vaults, Composable Risk
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                NextBlock provides the open-source infrastructure to change this. We enable any entity—from established reinsurers to specialized asset managers—to curate and launch their own tokenized risk vaults. This transforms illiquid reinsurance risk into a liquid, transparent, and composable on-chain asset.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Protocol Stack Cards */}
      <ProtocolStackCards />
    </section>
  );
};

export default FeaturesSection;