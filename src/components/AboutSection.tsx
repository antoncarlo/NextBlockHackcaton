import { motion } from "framer-motion";
import { SectionConnector } from "./FlowchartLines";
import DecorativeGrid from "./DecorativeGrid";

const AboutSection = () => {
  const stats = [
    { 
      value: "$16T", 
      label: "Global Insurance Market",
    },
    { 
      value: "$700B+", 
      label: "Annual Reinsurance Capital",
    },
    { 
      value: "<1%", 
      label: "Currently Tokenized",
    },
  ];

  return (
    <section 
      id="about" 
      className="relative px-6 overflow-hidden"
      style={{ 
        padding: '100px 24px',
        backgroundColor: '#F2F1EE',
        zIndex: 1,
      }}
    >
      {/* Section connector */}
      <SectionConnector fromSide="left" />
      
      {/* Decorative grid at bottom */}
      <DecorativeGrid variant="light" position="bottom" />

      <div className="mx-auto relative z-10" style={{ maxWidth: '1100px' }}>
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '64px' }}
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
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: '#0F1218' }}
          >
            The Largest RWA Opportunity
            <br />
            <span style={{ color: '#1B3A6B' }}>Still Untouched</span>
          </h2>
        </motion.div>

        {/* Stats in horizontal layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center"
          style={{ marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <motion.div 
                className="text-5xl md:text-6xl lg:text-7xl stat-number mb-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div 
                className="text-sm md:text-base font-medium"
                style={{ color: '#1A1F2E' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center text-lg md:text-xl"
          style={{ color: '#5A5A5A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Treasuries have protocols. Credit has protocols. Insurance doesn't.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
