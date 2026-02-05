import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.svg";
import footerBg from "@/assets/footer-bg.svg";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      {/* Background image - defines footer size */}
      <img 
        src={footerBg} 
        alt="" 
        className="w-full h-auto block"
      />
      
      {/* Content overlaid on the image */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center">
              <img src={logoBlack} alt="NextBlock" className="h-16 md:h-20" />
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
      </div>
    </motion.footer>
  );
};

export default Footer;
