import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Be Part of the New Capital Market
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are currently in private beta, working with leading reinsurers and asset managers. Request early access to join the waitlist as a curator or investor.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  For Curators
                </h3>
                <p className="text-muted-foreground">
                  Are you a reinsurer looking to access DeFi liquidity? Or an asset manager with expertise in insurance-linked securities? NextBlock provides the tools to build, manage, and scale your on-chain strategy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  For Investors
                </h3>
                <p className="text-muted-foreground">
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
            className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
