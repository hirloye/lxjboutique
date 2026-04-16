"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: 1, name: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Kurtis", image: "https://images.unsplash.com/photo-1583391733958-d25e07fac662?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Lehengas", image: "https://images.unsplash.com/photo-1595777457583-95e059f581ce?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Kids Wear", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Leather Handbags", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } }
};

export function CategorySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 relative bg-background">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curated Collections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Glassmorphism Card Outline */}
              <div className="absolute inset-0 z-10 border border-white/20 rounded-2xl pointer-events-none transition-colors duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(112,22,45,0.3)] bg-gradient-to-b from-transparent to-background/90" />
              
              {/* Image */}
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Text Content */}
              <div className="absolute bottom-6 left-0 right-0 z-20 text-center px-4 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-heading text-2xl font-bold text-white drop-shadow-md">
                  {category.name}
                </h3>
              </div>

              {/* Fairy Hover Interaction (subtle glow on active) */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="fairyGlow"
                  className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
