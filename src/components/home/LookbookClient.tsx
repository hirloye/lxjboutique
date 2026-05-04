"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Stars, Feather, Gem } from "lucide-react";
import { useState, useEffect } from "react";

type LookbookProduct = {
  id: number;
  title: string;
  sub_category: string;
  image_url: string;
};

export function LookbookClient({ products }: { products: LookbookProduct[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Map categories to icons
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'lehenga': return Stars;
      case 'kurti': return Feather;
      case 'saree': return Gem;
      default: return Stars;
    }
  };

  const getLabel = (category: string) => {
    switch (category.toLowerCase()) {
      case 'lehenga': return 'Bridal';
      case 'kurti': return 'Kurtis';
      case 'saree': return 'Sarees';
      default: return category;
    }
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-background shadow-xl border border-primary/5 cursor-pointer aspect-[4/5] transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Background Image (Cover to fill space with blur) */}
              <Image
                src={product.image_url}
                alt=""
                fill
                sizes={idx === 0 ? "(max-width: 768px) 100vw, 50vw" : "33vw"}
                quality={50}
                className="object-cover opacity-30 blur-2xl scale-110"
              />
              
              {/* Foreground Image (Centered 16:9) */}
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                sizes={idx === 0 ? "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"}
                quality={95}
                className={`object-contain transition-transform ${isMobile ? "duration-500" : "duration-1000"} ${isMobile ? "" : "group-hover:scale-105"}`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 border-[10px] border-white/10 m-6 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-110 group-hover:scale-100" />

                <div className="absolute bottom-10 left-10 right-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full">
                      {(() => {
                        const Icon = getIcon(product.sub_category);
                        return <Icon className="w-4 h-4" />;
                      })()}
                    </div>
                    <span className="text-white/80 font-sans text-xs uppercase tracking-[0.2em] font-bold">
                      {getLabel(product.sub_category)}
                    </span>
                  </div>
                  <h3 className="text-white font-heading text-3xl font-bold">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Top Right Label for desktop visibility */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">LOOK #0{idx + 1}</span>
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
