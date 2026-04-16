"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", alt: "Saree 1", className: "md:col-span-2 md:row-span-2 h-[600px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1595777457583-95e059f581ce?auto=format&fit=crop&q=80&w=800", alt: "Lehenga 1", className: "h-[290px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1583391733958-d25e07fac662?auto=format&fit=crop&q=80&w=800", alt: "Kurti 1", className: "h-[290px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", alt: "Handbag 1", className: "md:col-span-2 h-[400px]" },
];

export function GallerySection() {
  return (
    <section id="new-arrivals" className="py-24 relative bg-background overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Masterpieces
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Discover our latest arrivals crafted with passion and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-heading text-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   View Details
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
