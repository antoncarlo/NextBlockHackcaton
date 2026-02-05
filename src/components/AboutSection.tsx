import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-foreground mb-6">
            La nostra missione
          </h2>
          <p className="text-lg text-cream-foreground/70 leading-relaxed mb-8">
            Stiamo costruendo il futuro, un passo alla volta. Il nostro team 
            è composto da esperti del settore che condividono una visione comune: 
            creare tecnologie che migliorino la vita delle persone.
          </p>
          <p className="text-lg text-cream-foreground/70 leading-relaxed">
            Con anni di esperienza alle spalle e una passione per l'innovazione, 
            stiamo sviluppando soluzioni che trasformeranno il modo in cui 
            interagiamo con la tecnologia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Utenti in attesa" },
            { value: "50+", label: "Paesi raggiunti" },
            { value: "99%", label: "Soddisfazione" },
            { value: "24/7", label: "Supporto" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-cream-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
