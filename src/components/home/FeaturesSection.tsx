"use client";
import { motion } from "framer-motion";
import { Gem, Scissors, Sparkles, Heart } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Gem,
    title: "Premium Fabrics",
    description: "Sourced from the finest weavers, ensuring long-lasting luxury and unmatched comfort. Experience the touch of pure elegance.",
    className: "lg:col-span-2"
  },
  {
    icon: Heart,
    title: "Handpicked",
    description: "Carefully selected to reflect modern grace.",
    className: "lg:col-span-1"
  },
  {
    icon: Scissors,
    title: "Tailored",
    description: "Customization for your unique style.",
    className: "lg:col-span-1"
  },
  {
    icon: Sparkles,
    title: "Affordable Luxury",
    description: "Experience premium boutique fashion without compromising on value and elegance. High-end fashion is now accessible to all who seek perfection.",
    className: "lg:col-span-2"
  }
];

export function FeaturesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-16 relative bg-secondary/20 overflow-hidden">
      {/* Magical Background Effect */}
      <ButterflyField count={4} lowProfile={true} />
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Promise</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
            Why Choose LXJ
          </h2>
          <FloralUnderline />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mt-4">
            Excellence in every stitch, magic in every design. Discover the craftsmanship that defines our boutique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={isMobile ? {} : { 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              className={`group relative p-8 rounded-[2.5rem] bg-background/40 backdrop-blur-md border border-border/50 transition-all ${isMobile ? "duration-200" : "duration-300"} hover:shadow-[0_20px_50px_rgba(112,22,45,0.15)] hover:border-primary/30 overflow-hidden ${feature.className}`}
            >
              {/* Dynamic Spotlight Glow Background */}
              <div className="absolute -inset-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-16 h-16 rounded-2xl bg-secondary/80 backdrop-blur-sm text-primary flex items-center justify-center mb-6 shadow-sm border border-primary/10"
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Animated Border Beam Effect */}
              <div className="absolute inset-0 rounded-[2.5rem] p-[1.5px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <motion.div 
                  animate={isMobile ? {} : { rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,theme(colors.primary)_360deg)]"
                />
                {/* Mask to keep border thin */}
                <div className="absolute inset-[1.5px] bg-background/95 rounded-[2.4rem] z-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
