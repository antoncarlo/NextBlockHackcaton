import { motion } from "framer-motion";
import { Lock, Code, Globe, Eye } from "lucide-react";

const benefits = [
  { icon: Lock, label: "Permissionless" },
  { icon: Code, label: "Open-Source" },
  { icon: Globe, label: "On-Chain" },
  { icon: Eye, label: "Transparent" },
];

const KeyBenefitsSection = () => {
  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                {benefit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
