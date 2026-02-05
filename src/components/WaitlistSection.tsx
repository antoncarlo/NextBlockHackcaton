import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unisciti alla
              <br />
              <span className="text-gradient">Rivoluzione</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entra a far parte della nostra community esclusiva. Riceverai 
              accesso anticipato, aggiornamenti esclusivi e la possibilità 
              di influenzare lo sviluppo del prodotto.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Accesso anticipato garantito</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Aggiornamenti settimanali esclusivi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Nessuno spam, solo contenuti di valore</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-card border border-border shadow-card"
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
