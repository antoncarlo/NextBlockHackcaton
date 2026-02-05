import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Velocità Incredibile",
    description: "Performance ottimizzate per garantire la migliore esperienza utente possibile.",
  },
  {
    icon: Shield,
    title: "Sicurezza Avanzata",
    description: "Protezione di livello enterprise per i tuoi dati più sensibili.",
  },
  {
    icon: Globe,
    title: "Accesso Globale",
    description: "Disponibile ovunque nel mondo con infrastruttura distribuita.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-foreground mb-4">
            Perché scegliere noi
          </h2>
          <p className="text-cream-foreground/70 max-w-2xl mx-auto">
            Stiamo ridefinendo gli standard del settore con tecnologie all'avanguardia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-cream-foreground/10 hover:border-primary/50 transition-all shadow-[var(--shadow-card-cream)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-cream-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-cream-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
