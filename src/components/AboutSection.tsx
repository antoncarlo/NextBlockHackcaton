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
    <section 
      id="about" 
      className="relative px-6 overflow-hidden"
      style={{ padding: '100px 24px' }}
    >
      {/* Minimal decorative dots - only 3, very subtle */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
          style={{ left: '5%', top: '30%' }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
          style={{ right: '8%', top: '50%' }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(74,108,247,0.1)]"
          style={{ left: '15%', bottom: '25%' }}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="mx-auto relative z-10" style={{ maxWidth: '1100px' }}>
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          <motion.span 
            className="section-label mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Market
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
            An Untapped
            <br />
            <span className="text-gradient">Financial Primitive</span>
          </h2>
        </motion.div>

        {/* Stats in organic layout */}
        <div className="relative">
          {/* Vertical connection line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(74,108,247,0.3) 10%, rgba(74,108,247,0.3) 90%, transparent)' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ gap: '32px' }}
              >
                {/* Connection node */}
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ 
                      background: 'rgba(74,108,247,0.15)',
                      border: '2px solid rgba(74,108,247,0.4)'
                    }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A6CF7]" />
                    </div>
                  </div>
                </motion.div>

                {/* Stat content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-center`}>
                  <motion.div 
                    className="text-4xl md:text-6xl stat-number text-[#4A6CF7] mb-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-lg font-medium text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
                    {stat.description}
                  </p>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
