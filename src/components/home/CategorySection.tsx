"use client";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  { id: 1, name: "All", value: "all", image: "/images/LXJ_upscale_logo.png" }, // Added an "All" option to reset filter
  { id: 2, name: "Sarees", value: "saree", image: "/images/saree-icon.webp" },
  { id: 3, name: "Kurtis", value: "kurti", image: "/images/kurti-icon.webp" },
  { id: 4, name: "Lehengas", value: "lehenga", image: "/images/lehenga-icon.webp" },
  { id: 5, name: "Kids Wear", value: "kids wear", image: "/images/kids-icon.webp" },
  { id: 6, name: "Handbags", value: "handbags", image: "/images/bag-icon.webp" },
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

export function CategorySection({ currentFilter }: { currentFilter?: string }) {
  const router = useRouter();
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
          className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 lg:gap-6 pb-6 pt-2 px-2 md:px-0 w-full"
          variants={containerVariants}
          initial={isMobile ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onClick={() => router.push(`?filter=${category.value}`, { scroll: false })}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border bg-background shadow-sm transition-all duration-300 hover:border-primary/50 flex flex-col aspect-square sm:aspect-auto sm:h-[150px] lg:h-[200px] ${
                currentFilter === category.value || (!currentFilter && category.value === "all") 
                  ? "border-primary shadow-[0_4px_20px_rgba(112,22,45,0.2)] scale-[1.02]" 
                  : "border-primary/20"
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full flex-grow p-1 sm:p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 15vw, (max-width: 1024px) 10vw, 8vw"
                  className="object-contain p-2 sm:p-6 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 opacity-90"
                />
              </div>

              {/* Filled Text Label */}
              <div className="relative w-full h-6 sm:h-auto py-1 sm:py-3 bg-primary text-primary-foreground border-t border-primary/20 z-20 text-center transition-colors duration-300 group-hover:bg-primary/90 flex items-center justify-center">
                <h3 className="font-heading text-[8px] sm:text-xs lg:text-sm uppercase tracking-wider sm:tracking-[0.1em] font-bold truncate px-1 w-full text-center">
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
