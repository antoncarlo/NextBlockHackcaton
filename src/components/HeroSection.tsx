import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          ref={(el) => {
            if (el) {
              el.playbackRate = 0.5;
            }
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Darker overlay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 14, 26, 0.6) 0%, rgba(10, 14, 26, 0.85) 60%, #0A0E1A 100%)'
          }}
        />
        {/* Darker overlay gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 14, 26, 0.6) 0%, rgba(10, 14, 26, 0.85) 60%, #0A0E1A 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 mx-auto max-w-7xl px-6 text-center md:text-left"
        style={{ paddingTop: '160px', paddingBottom: '120px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#F0F0F5',
            }}
          >
            The Universal Marketplace for Insurance-Linked Assets.
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: '24px',
              maxWidth: '560px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            NextBlock is the permissionless, open-source protocol for curators to launch, and for investors to access, tokenized reinsurance vaults. We are building the foundational liquidity layer for a multi-trillion dollar global market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row"
            style={{ marginTop: '32px', gap: '16px' }}
          >
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center transition-all hover:opacity-90"
              style={{
                backgroundColor: '#4A6CF7',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '15px',
              }}
            >
              Request Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center transition-all"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.7)',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '15px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
