import { motion } from "framer-motion";
import veniceImage from "@/assets/our-vision-venice.png";

const OurVisionSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#0A0E1A',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '120px 40px',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        style={{ maxWidth: '1200px' }}
      >
        {/* Left Column - Text (55% on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 order-1"
        >
          {/* Label */}
          <span
            style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '16px',
            }}
          >
            Our Vision
          </span>

          {/* Heading */}
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: '#F0F0F5',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            From Venice to the Blockchain
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '24px',
            }}
          >
            The modern insurance market was born in the coffeehouses and trading houses of Venice, where merchants pooled capital to share maritime risk. Centuries later, NextBlock brings this foundational principle on-chain — permissionless, transparent, and composable. We are building the infrastructure for a new era of insurance-linked capital markets.
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-1 transition-all hover:underline"
            style={{
              fontSize: '14px',
              color: '#4A6CF7',
            }}
          >
            Read our thesis →
          </a>
        </motion.div>

        {/* Right Column - Image (45% on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 order-2"
        >
          <div
            className="relative overflow-hidden transition-all duration-300"
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(74, 108, 247, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            <img
              src={veniceImage}
              alt="Venetian merchant at desk with Grand Canal view"
              style={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVisionSection;