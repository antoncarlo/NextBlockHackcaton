import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const WaitlistSection = () => {
  return (
    <section 
      id="waitlist" 
      className="py-24 px-6"
      style={{ backgroundColor: '#F2F1EE' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6"
              style={{ color: '#0F1218' }}
            >
              Be Part of the New Capital Market
            </h2>
            <p 
              className="text-lg mb-8 leading-relaxed"
              style={{ color: '#4A4A4A' }}
            >
              We are currently in private beta, working with leading reinsurers and asset managers. Request early access to join the waitlist as a curator or investor.
            </p>
            
            <div className="space-y-6">
              <div 
                className="p-6 rounded-xl card-institutional"
              >
                <h3 
                  className="text-xl font-medium mb-3"
                  style={{ color: '#1A1F2E' }}
                >
                  For Curators
                </h3>
                <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                  Are you a reinsurer looking to access DeFi liquidity? Or an asset manager with expertise in insurance-linked securities? NextBlock provides the tools to build, manage, and scale your on-chain strategy.
                </p>
              </div>
              
              <div 
                className="p-6 rounded-xl card-institutional"
              >
                <h3 
                  className="text-xl font-medium mb-3"
                  style={{ color: '#1A1F2E' }}
                >
                  For Investors
                </h3>
                <p style={{ color: '#4A4A4A', lineHeight: 1.7 }}>
                  Diversify your portfolio with a truly uncorrelated, real-world asset class. Insurance risk offers stable, predictable yields backed by centuries of actuarial data.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl card-institutional"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;