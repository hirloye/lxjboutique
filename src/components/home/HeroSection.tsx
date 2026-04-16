"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background pt-20">
      {/* Background Particles/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] opacity-60 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#CE6892] rounded-full blur-[150px] opacity-20 z-0 pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-sm flex flex-col gap-2">
            <span className="italic text-primary font-serif font-light">Timeless Sarees.</span>
            <span>Modern Grace.</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl font-sans mb-10">
            A magical luxury fashion journey. Unveil our breathtaking new collection of handcrafted styles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(112,22,45,0.4)] transition-all hover:scale-105">
              Visit Store
            </Button>
            <Button size="lg" variant="outline" className="bg-background/30 backdrop-blur-md border-border/50 text-foreground hover:bg-background/50 rounded-full px-8 py-6 text-lg transition-all hover:scale-105">
              Explore Collection
            </Button>
          </div>
        </motion.div>

        {/* 3D Fairy Character */}
        <motion.div
          style={{ y, opacity }}
          className="relative w-full max-w-lg mt-12 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
             <Image
                src="/images/fairy_mascot.png"
                alt="LXJ Fairy Mascot"
                width={500}
                height={500}
                className="drop-shadow-[0_0_30px_rgba(206,104,146,0.3)] object-contain"
                priority
             />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
