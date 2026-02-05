import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const waitlistSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100),
  company: z.string().trim().min(1, { message: "Company is required" }).max(200),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  interest: z.enum(["curator", "investor", "partner"], { message: "Please select your interest" }),
  message: z.string().trim().max(1000, { message: "Message must be under 1000 characters" }).optional(),
});

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = waitlistSchema.safeParse({
      ...formData,
      interest: formData.interest || undefined,
      message: formData.message || undefined,
    });
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
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
      title: "Request Submitted!",
      description: "We'll be in touch soon with exclusive updates.",
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
          You're on the list!
        </h3>
        <p className="text-muted-foreground">
          Thank you for your interest. We'll keep you updated.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-destructive">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company / Organization *
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Your Company"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
        />
        {errors.company && (
          <p className="mt-2 text-sm text-destructive">{errors.company}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
          I am interested as a... *
        </label>
        <select
          id="interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:border-primary transition-colors"
        >
          <option value="">Select your role</option>
          <option value="curator">Curator</option>
          <option value="investor">Investor</option>
          <option value="partner">Partner</option>
        </select>
        {errors.interest && (
          <p className="mt-2 text-sm text-destructive">{errors.interest}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your interest in NextBlock..."
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-primary transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-2 text-sm text-destructive">{errors.message}</p>
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
            Submit
          </>
        )}
      </motion.button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting, you agree to our terms of service and privacy policy.
      </p>
    </form>
  );
};

export default WaitlistForm;
