import { motion } from "framer-motion";
import veniceImage from "@/assets/our-vision-venice.png";
import { SectionConnector } from "./FlowchartLines";
import DecorativeGrid from "./DecorativeGrid";

const OurVisionSection = () => {
  return (
    <section
      className="relative"
      style={{
        backgroundColor: '#FAFAF8',
        borderTop: '1px solid rgba(0,0,0,0.04)',
        padding: '120px 40px',
        zIndex: 1,
      }}
    >
      {/* Section connector */}
      <SectionConnector fromSide="right" />
      
      {/* Decorative grid */}
      <DecorativeGrid variant="light" position="bottom" />
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
              color: '#9A9A9A',
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
              color: '#0F1218',
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
              color: '#4A4A4A',
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
              color: '#1B3A6B',
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
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(27, 58, 107, 0.15)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
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