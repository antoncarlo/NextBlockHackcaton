import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.svg";
import footerBg from "@/assets/footer-bg.svg";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-border relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center">
            <img src={logoBlack} alt="NextBlock" className="h-20 md:h-24" />
          </a>

          <div className="flex items-center gap-6 text-sm text-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-foreground">
            © 2025 NextBlock. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
