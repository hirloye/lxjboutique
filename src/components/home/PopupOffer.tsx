"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export function PopupOffer() {
  const [isOpen, setIsOpen] = useState(false);
  const [offer, setOffer] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const fetchOffer = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("products")
        .select("title, description")
        .eq("category", "offer")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data && !error) {
        setOffer(data);
        const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
        if (!hasSeenPopup) {
          timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem("hasSeenPopup", "true");
          }, 3000); // 3 seconds after page load
        }
      }
    };

    fetchOffer();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleClaim = () => {
    if (!offer) return;
    const text = encodeURIComponent(`Hi LXJ Boutique, I would like to claim the special offer: ${offer.title} - ${offer.description}`);
    window.open(`https://wa.me/8838562616?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && offer && (
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
              <div className="mb-6">
                <span className="font-bold text-primary text-3xl block mb-2">{offer.title}</span>
                <span className="font-sans text-lg text-muted-foreground block">{offer.description}</span>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleClaim}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg"
                >
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
