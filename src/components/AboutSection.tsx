import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            An Untapped Financial Primitive
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              value: "$30T", 
              label: "Global Insurance AUM",
              description: "Global insurance assets under management, one of the largest capital pools in the world."
            },
            { 
              value: "$700B+", 
              label: "Reinsurance Capital",
              description: "The total capital base of the global reinsurance industry, foundational to global financial stability."
            },
            { 
              value: "<1%", 
              label: "On-Chain",
              description: "The fraction of insurance-linked assets currently accessible on-chain. A massive opportunity awaits."
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-card border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
