"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Wand2, ShoppingBag, Stars, Feather, Gem } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";

const galleryImages = [
  { id: 1, src: "/images/gallery/1.jpg", alt: "Fairy Frocks", title: "Fairy Frocks", subtitle: "Magical Attire", collectionLabel: "Kids", icon: Wand2 },
  { id: 2, src: "/images/gallery/2.jpg", alt: "Luxury Handbags", title: "Luxury Handbags", subtitle: "Premium Accessories", collectionLabel: "Bags", icon: ShoppingBag },
  { id: 3, src: "/images/gallery/3.jpg", alt: "Bridal Lehengas", title: "Bridal Lehengas", subtitle: "Shimmering Elegance", collectionLabel: "Bridal", icon: Stars },
  { id: 4, src: "/images/gallery/4.jpg", alt: "Designer Kurtis", title: "Designer Kurtis", subtitle: "Comfort Meets Style", collectionLabel: "Kurtis", icon: Feather },
  { id: 5, src: "/images/gallery/5.jpg", alt: "Traditional Sarees", title: "Traditional Sarees", subtitle: "Timeless Grace", collectionLabel: "Sarees", icon: Gem },
];

export function GallerySection() {
  const [active, setActive] = useState<number>(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="new-arrivals" className="py-12 md:py-16 relative bg-background overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Magical Background Effect */}
      <ButterflyField count={3} lowProfile={true} />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">LXJ Creations</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
            Recent Masterpieces
          </h2>
          <FloralUnderline />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mt-4">
            Discover our latest arrivals, where every thread tells a story of passion and precision.
          </p>
        </motion.div>

        <div className={`flex flex-col md:flex-row h-[70vh] min-h-[500px] max-h-[700px] w-full gap-4 max-w-6xl mx-auto transition-none md:transition-all`}>
          {galleryImages.map((img) => {
            const isActive = active === img.id;
            return (
              <div
                key={img.id}
                onClick={() => setActive(img.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all ${isMobile ? "duration-300" : "duration-700"} ease-[cubic-bezier(0.25,1,0.5,1)] flex group bg-neutral-900 ${
                  isActive ? "flex-[10] md:flex-[8]" : "flex-[2] md:flex-[1]"
                }`}
              >
                {/* Background Image (Cover for slit view) */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover transition-all ${isMobile ? "duration-300" : "duration-700"} ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? "opacity-30 blur-xl scale-110" : "opacity-100 scale-100"
                  }`}
                />

                {/* Foreground Image (Contain for full centered view) */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-contain transition-opacity ${isMobile ? "duration-300" : "duration-700"} ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                
                {/* Dark Overlay when inactive for focus */}
                <div 
                  className={`absolute inset-0 bg-black/40 transition-opacity ${isMobile ? "duration-300" : "duration-500"} mix-blend-multiply ${
                    isActive ? "opacity-0" : "opacity-100 group-hover:opacity-60"
                  }`} 
                />

                {/* Inactive Collection Badge (Now visible on Mobile when collapsed) */}
                <div 
                  className={`absolute z-20 flex flex-row md:flex-col items-center justify-center gap-2 px-3 py-1.5 md:px-2 md:py-5 md:rounded-[2rem] rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500
                    ${isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100"}
                    ${isMobile ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.8]" : "bottom-6 left-1/2 -translate-x-1/2 scale-100"}
                  `}
                >
                  <div className="transition-colors duration-300 rounded-full flex items-center justify-center p-1.5 md:p-2.5 bg-white/10 text-white group-hover:bg-primary group-hover:text-primary-foreground">
                    <img.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                  </div>
                  <span className="text-white font-sans text-[10px] md:text-sm font-semibold tracking-widest uppercase md:[writing-mode:vertical-rl] md:-rotate-180 opacity-90 group-hover:opacity-100">
                    {img.collectionLabel}
                  </span>
                </div>

                {/* Content Overlay for Active Full View */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity ${isMobile ? "duration-300" : "duration-500"} flex flex-col justify-end p-6 md:p-8 ${
                  isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}>
                  <div className={`transition-all ${isMobile ? "duration-300" : "duration-700"} ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-start justify-end h-full ${
                    isActive ? "translate-y-0 delay-100 md:delay-300" : "translate-y-10"
                  }`}>
                    
                    {/* Active Collection Label (Above Title) */}
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 shadow-xl">
                      <div className="bg-primary text-primary-foreground rounded-full flex items-center justify-center p-1.5">
                        <img.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                      </div>
                      <span className="text-white font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">
                        {img.collectionLabel}
                      </span>
                    </div>

                    <h3 className="text-white font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-wide origin-bottom">
                      {img.title}
                    </h3>
                    <p className="text-white/80 font-sans text-base md:text-lg">
                      {img.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
