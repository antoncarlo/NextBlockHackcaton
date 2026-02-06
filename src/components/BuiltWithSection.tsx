import { motion } from "framer-motion";

const BuiltWithSection = () => {
  const partners = [
    {
      name: "Base",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "Ethereum",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2L3 10L10 13L17 10L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10 13L3 10L10 18L17 10L10 13Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "Chainlink",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="py-16"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Label */}
          <span 
            className="mb-8"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            Building On
          </span>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 cursor-default transition-opacity duration-300"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                }}
                whileHover={{
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {partner.icon}
                <span
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '15px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltWithSection;
