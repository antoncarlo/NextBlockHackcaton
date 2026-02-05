import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.svg";
import footerBg from "@/assets/footer-bg.svg";
import WaitlistSection from "./WaitlistSection";

const Footer = () => {
  return (
    <div className="relative">
      {/* Background image spanning both sections */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Gradient overlay for readability on top section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-transparent" />
      
      {/* Waitlist Section */}
      <div className="relative z-10">
        <WaitlistSection />
      </div>
      
      {/* Footer content */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-8 px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center">
              <img src={logoBlack} alt="NextBlock" className="h-14 md:h-16" />
            </a>

            <div className="flex items-center gap-6 text-sm text-black font-medium">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Privacy
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Terms
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Contact
              </a>
            </div>

            <p className="text-sm text-black">
              © 2025 NextBlock. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
