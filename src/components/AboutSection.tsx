import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
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
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <motion.path
          d="M 10% 50% Q 30% 30%, 50% 50% T 90% 50%"
          stroke="hsl(var(--primary) / 0.15)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 20% 20% Q 50% 40%, 80% 20%"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M 15% 80% Q 50% 60%, 85% 80%"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
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
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Market
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            An Untapped
            <br />
            <span className="text-gradient">Financial Primitive</span>
          </h2>
        </motion.div>

        {/* Stats in organic layout */}
        <div className="relative">
          {/* Vertical connection line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Connection node */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Stat content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} text-center`}>
                <motion.div 
                  className="text-5xl md:text-7xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
                  {stat.description}
                </p>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
