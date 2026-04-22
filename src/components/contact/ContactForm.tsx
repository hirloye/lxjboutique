"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "Inquiry", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative inner glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground">Send a Message</h3>
            <p className="font-sans text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/80 ml-4">Full Name</label>
              <div className="relative group">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full pl-14 pr-6 py-4 bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl outline-none transition-all font-sans"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/80 ml-4">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full pl-14 pr-6 py-4 bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl outline-none transition-all font-sans"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground/80 ml-4">Message</label>
            <div className="relative group">
              <MessageSquare className="absolute left-5 top-6 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <textarea
                required
                rows={5}
                placeholder="How can we help you magical soul?"
                className="w-full pl-14 pr-6 py-4 bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-[2rem] outline-none transition-all font-sans resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-lg transition-all active:scale-[0.98] flex gap-3"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            ) : isSuccess ? (
              "Message Sent! ✨"
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Meaningful Message
              </>
            )}
          </Button>

          {isSuccess && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-primary font-sans font-bold"
            >
              Thank you! Your magical inquiry has been received.
            </motion.p>
          )}
        </form>
      </div>
    </div>
  );
}
