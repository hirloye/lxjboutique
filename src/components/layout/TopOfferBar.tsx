"use client";
import { motion } from "framer-motion";

export function TopOfferBar() {
  return (
    <div className="h-[100px] bg-primary flex items-center justify-center overflow-hidden whitespace-nowrap relative z-50">
      <motion.div
        className="flex gap-16 font-heading text-3xl md:text-4xl tracking-widest text-[#FFF9EE] opacity-90"
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <span>🔥 LIMITED OFFERS SOON 🔥</span>
        <span>✨ NEW ARRIVALS ✨</span>
        <span>🔥 LIMITED OFFERS SOON 🔥</span>
        <span>✨ NEW ARRIVALS ✨</span>
        <span>🔥 LIMITED OFFERS SOON 🔥</span>
      </motion.div>
    </div>
  );
}
