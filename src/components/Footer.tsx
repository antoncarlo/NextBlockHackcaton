import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">NB</span>
            </div>
            <span className="text-foreground font-semibold">
              Next<span className="text-primary">Block</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termini
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contatti
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 NextBlock. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
