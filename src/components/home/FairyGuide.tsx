"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FairyGuide() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate position based on scroll percentage
  const y = useTransform(smoothProgress, [0, 1], ["0vh", "80vh"]);
  const x = useTransform(smoothProgress, [0, 0.5, 1], ["0vw", "-10vw", "10vw"]);
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -10, 10]);

  if (!mounted) return null;

  return (
    <div className="fixed top-20 right-10 bottom-20 z-40 w-32 pointer-events-none hidden lg:block">
      <motion.div
        style={{ y, x, rotate }}
        className="relative"
      >
        <motion.div
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           className="relative w-32 h-32"
        >
          {/* Subtle trail particle simulation */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-xl pointer-events-none"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <Image 
            src="/images/fairy_mascot.png" 
            alt="Fairy Guide" 
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(206,104,146,0.6)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
