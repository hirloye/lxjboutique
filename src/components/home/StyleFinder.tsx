"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Sparkles, ChevronRight, MoonStar, Heart, Briefcase } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { useState, useEffect } from "react";

const styles = [
  {
    id: "bridal",
    name: "Royal Bridal",
    description: "Intricate lehengas and majestic sarees for your big day.",
    icon: Sparkles,
    color: "from-pink-500/20 to-primary/20",
  },
  {
    id: "party",
    name: "Evening Gala",
    description: "Shimmering silhouettes and modern cuts for night events.",
    icon: MoonStar,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: "casual",
    name: "Graceful Daily",
    description: "Elegant breathable fabrics for contemporary comfort.",
    icon: Heart,
    color: "from-amber-400/20 to-orange-500/20",
  },
  {
    id: "work",
    name: "Modern Professional",
    description: "Sharp ethnic wear that commands respect and poise.",
    icon: Briefcase,
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

export function StyleFinder() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-background">
      {/* Magical Background Effect */}
      <ButterflyField count={3} lowProfile={true} />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mt-48 pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <motion.div 
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <Search className="w-5 h-5 text-primary" />
              <span className="text-primary font-sans font-bold uppercase tracking-[0.3em] text-xs">Aesthetic Quiz</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
              Find Your Perfect Style
            </h2>
            <div className="flex justify-center lg:justify-start -ml-4 mb-6">
              <div className="w-48">
                <FloralUnderline />
              </div>
            </div>
            <p className="text-muted-foreground font-sans text-lg">
              Not sure which collection fits the occasion? Let our curated style guide help you discover the perfect attire that resonates with your unique personality.
            </p>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/new-arrivals">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Start Style Guide
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, idx) => (
            <motion.div
              key={style.id}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={isMobile ? {} : { y: -8 }}
              className={`group relative p-8 rounded-[2.5rem] bg-secondary/10 border border-primary/5 hover:bg-white/60 transition-all ${isMobile ? "duration-200" : "duration-500"} cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm border border-primary/5 flex items-center justify-center mb-6 ${isMobile ? "" : "group-hover:scale-110"} transition-transform duration-500`}>
                  <style.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{style.name}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                  {style.description}
                </p>
                <div className="flex items-center text-primary font-bold text-sm tracking-wide group/btn">
                  Explore Now
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
