"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

const lookbookItems = [
  {
    id: 1,
    title: "The Midnight Bloom",
    category: "Evening Wear",
    image: "/images/gallery/3.jpg", // Using existing gallery images as placeholders
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Golden Hour Grace",
    category: "Bridal Couture",
    image: "/images/gallery/5.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Ethereal Whispers",
    category: "Fusion Style",
    image: "/images/gallery/1.jpg",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "Silk Symphony",
    category: "Traditional",
    image: "/images/gallery/2.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function Lookbook() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-24 relative bg-secondary/5 overflow-hidden">
      {/* Magical Background Effect */}
      <ButterflyField count={3} lowProfile={true} />
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Aesthetic Journey</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
            Seasonal Lookbook
          </h2>
          <FloralUnderline />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto mt-4">
            A curated visual story of complete looks, meticulously designed to inspire your next magical transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
          {lookbookItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-background shadow-lg border border-primary/5 cursor-pointer ${item.className} transition-all ${isMobile ? "duration-300" : "duration-700"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform ${isMobile ? "duration-500" : "duration-1000"} ${isMobile ? "" : "group-hover:scale-110"}`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 border-[10px] border-white/10 m-4 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary-foreground font-sans text-xs uppercase tracking-[0.2em] mb-2 block opacity-80">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-white/20 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-primary transition-colors">
                    <Eye className="w-4 h-4" />
                    View Details
                  </div>
                </div>
              </div>

              {/* Top Right Label for desktop visibility */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <span className="text-white text-[10px] font-bold tracking-widest uppercase">LOOK #0{item.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="/collections">
                <button className="px-10 py-5 rounded-full border border-primary/20 bg-background text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-xl hover:scale-105 active:scale-95">
                    Explore All Looks
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
