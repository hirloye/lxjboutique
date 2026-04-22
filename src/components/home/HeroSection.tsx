"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Butterfly } from "@/components/ui/Butterfly";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-36 sm:pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/homebanner.mp4" type="video/mp4" />
      </video>
      {/* Dark/Light overlay for text contrast */}
      <div className="absolute inset-0 bg-background/50 z-0 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none" />

      {/* Background Particles/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] opacity-40 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#CE6892] rounded-full blur-[150px] opacity-20 z-0 pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-3 mb-6 lg:mb-8 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-4 drop-shadow-sm flex flex-col gap-0 sm:gap-2">
            <span className="italic text-primary font-serif font-light">Timeless Sarees.</span>
            <span>Modern Grace.</span>
          </h1>
          <p className="text-white max-w-xl mx-auto lg:mx-0 text-lg md:text-xl font-sans mb-10">
            A magical luxury fashion journey. Unveil our breathtaking new collection of handcrafted styles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://www.google.com/maps/place/LXJ+Boutique+%26+Fashion/@13.1082018,80.1082927,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5263ec883ebdeb:0x3ff47e6740ca0183!8m2!3d13.1082018!4d80.1082927!16s%2Fg%2F11z2rsg1v3?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-lg font-medium text-primary-foreground shadow-[0_0_20px_rgba(112,22,45,0.4)] transition-all hover:bg-primary/90 hover:scale-105"
            >
              Visit Store
            </a>
            <Link href="/collections">
              <Button size="lg" variant="outline" className="bg-background/30 backdrop-blur-md border-border/50 text-foreground hover:bg-background/50 rounded-full px-8 py-6 text-lg transition-all hover:scale-105">
                Explore Collection
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="relative w-full max-w-lg mx-auto mt-10 lg:mt-0 flex items-center justify-center pointer-events-none lg:col-span-2"
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 3.5, delay: 1.0 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <Image
                src="/images/fairy.png"
                alt="LXJ Fairy Mascot"
                width={500}
                height={500}
                className="drop-shadow-[0_0_30px_rgba(206,104,146,0.3)] object-contain"
                priority
              />

              {/* Magical Butterflies */}
              <Butterfly className="-top-10 -left-10" delay={0.5} size={45} color="#CE6892" />
              <Butterfly className="top-20 -right-20" delay={1.2} size={30} color="#70162D" />
              <Butterfly className="-bottom-10 right-10" delay={2.5} size={40} color="#CE6892" />
              <Butterfly className="top-1/2 -left-24" delay={3.8} size={25} color="#DEB887" />
              <Butterfly className="bottom-0 -right-12" delay={1.8} size={35} color="#70162D" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
