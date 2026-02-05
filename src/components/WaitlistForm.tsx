import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Inserisci un'email valida" }).max(255),
  feedback: z.string().trim().max(1000, { message: "Il feedback deve essere inferiore a 1000 caratteri" }).optional(),
});

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; feedback?: string }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = waitlistSchema.safeParse({ email, feedback: feedback || undefined });
    
    if (!result.success) {
      const fieldErrors: { email?: string; feedback?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "feedback") fieldErrors.feedback = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    toast({
      title: "Iscrizione completata!",
      description: "Ti contatteremo presto con novità esclusive.",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Sei nella lista!
        </h3>
        <p className="text-muted-foreground">
          Grazie per esserti iscritto. Ti terremo aggiornato.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="la-tua-email@esempio.com"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
          required
        />
        {errors.email && (
          <p className="mt-2 text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="feedback" className="block text-sm font-medium text-foreground mb-2">
          Cosa ti aspetti dal nostro prodotto? (opzionale)
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Condividi le tue aspettative e suggerimenti..."
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors resize-none"
        />
        {errors.feedback && (
          <p className="mt-2 text-sm text-destructive">{errors.feedback}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-cta text-primary-foreground font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow"
      >
        {isLoading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
          />
        ) : (
          <>
            <Send className="w-5 h-5" />
            Unisciti alla Waitlist
          </>
        )}
      </motion.button>

      <p className="text-xs text-muted-foreground text-center">
        Iscrivendoti accetti i nostri termini di servizio e la privacy policy.
      </p>
    </form>
  );
};

export default WaitlistForm;
