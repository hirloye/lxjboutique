"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const categories = [
  { id: 1, name: "Sarees", image: "/images/saree-icon.webp" },
  { id: 2, name: "Kurtis", image: "/images/kurti-icon.webp" },
  { id: 3, name: "Lehengas", image: "/images/lehenga-icon.webp" },
  { id: 4, name: "Kids Wear", image: "/images/kids-icon.webp" },
  { id: 5, name: "Leather Handbags", image: "/images/bag-icon.webp" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } }
};

export function CategorySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="collections" className="relative bg-background">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container px-0 mx-auto relative z-10">


        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
          initial={isMobile ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[200px] lg:h-[240px] rounded-2xl overflow-hidden cursor-pointer border border-primary/20 bg-background shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(112,22,45,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full flex-grow p-6 flex items-center justify-center overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-8 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 opacity-90"
                />
              </div>

              {/* Filled Text Label */}
              <div className="relative w-full py-3 sm:py-4 bg-primary text-primary-foreground border-t border-primary/20 z-20 text-center transition-colors duration-300 group-hover:bg-primary/90">
                <h3 className="font-heading text-sm uppercase tracking-[0.1em] font-bold">
                  {category.name}
                </h3>
              </div>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
