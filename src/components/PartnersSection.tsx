import { motion } from "framer-motion";

const partners = [
  "TechCorp",
  "Innovate",
  "FutureHub",
  "DataFlow",
  "CloudSphere",
  "NextGen",
  "SmartScale",
  "MetaVerse",
];

const PartnersSection = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest"
        >
          Supportato da leader del settore
        </motion.p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-4"
            >
              <span className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
