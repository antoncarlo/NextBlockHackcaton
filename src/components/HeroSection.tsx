import { motion } from "framer-motion";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted playsInline className="w-full h-full object-cover" ref={el => {
        if (el) {
          el.playbackRate = 0.5;
        }
      }}>
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Very subtle overlay for text readability */}
        <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(250, 250, 248, 0.1) 0%, rgba(250, 250, 248, 0.2) 50%, rgba(250, 250, 248, 0.4) 100%)'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:text-left" style={{
      paddingTop: '160px',
      paddingBottom: '120px'
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl" style={{
          fontWeight: 500,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#0F1218'
        }}>The Universal Marketplace for Insurance-Linked Assets.

        </h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} style={{
          marginTop: '24px',
          maxWidth: '560px',
          fontSize: '17px',
          lineHeight: 1.7,
          color: '#4A4A4A'
        }}>
        </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row" style={{
          marginTop: '32px',
          gap: '16px'
        }}>
            <a href="#waitlist" className="inline-flex items-center justify-center transition-all hover:opacity-90" style={{
            backgroundColor: '#1B3A6B',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '6px',
            fontWeight: 500,
            fontSize: '15px'
          }}>
              Request Early Access
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center transition-all" style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(0,0,0,0.15)',
            color: '#1A1F2E',
            padding: '14px 32px',
            borderRadius: '6px',
            fontWeight: 500,
            fontSize: '15px'
          }} onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.3)';
            e.currentTarget.style.color = '#0F1218';
          }} onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
            e.currentTarget.style.color = '#1A1F2E';
          }}>
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.2
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 rounded-full flex items-start justify-center p-2" style={{
        border: '2px solid rgba(0,0,0,0.2)'
      }}>
          <div className="w-1 h-2 rounded-full" style={{
          backgroundColor: '#1B3A6B'
        }} />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;