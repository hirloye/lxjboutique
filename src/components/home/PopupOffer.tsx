"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopupOffer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenPopup", "true");
    }, 3000); // 3 seconds after page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-md bg-background rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="relative h-48 bg-secondary flex items-center justify-center p-6 text-center">
               {/* Decorative elements */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
               <h3 className="relative z-10 font-heading text-4xl text-primary font-bold drop-shadow-sm">
                 Special Offer
               </h3>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="absolute top-4 right-4 z-20 p-2 bg-background/50 backdrop-blur-md rounded-full hover:bg-background transition-colors text-foreground"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>
            <div className="p-8 text-center text-foreground">
              <p className="font-sans text-lg mb-6">
                Get <span className="font-bold text-primary text-2xl">20% OFF</span> your first order when you sign up for our magical newsletter.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg">
                   Claim Offer
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
