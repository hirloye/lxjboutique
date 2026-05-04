"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  sub_category: string;
};

export function ProductGridClient({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const currentIndex = selectedProduct ? products.findIndex(p => p.id === selectedProduct.id) : -1;

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setSelectedProduct(products[currentIndex + 1]);
    } else {
      setSelectedProduct(products[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedProduct(products[currentIndex - 1]);
    } else {
      setSelectedProduct(products[products.length - 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProduct) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct, currentIndex]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary/20 mb-4 group/img">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] z-0" />
              
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                  className="px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  Quick View
                </button>
              </div>
            </div>
            
            <div className="space-y-1 text-center">
              <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              {product.description && (
                <p className="text-sm text-muted-foreground font-sans line-clamp-2">
                  {product.description}
                </p>
              )}
              {product.sub_category && (
                <p className="font-medium text-sm text-primary mt-2 uppercase tracking-wider">
                  {product.sub_category}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with full blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-secondary/10 group/modal">
                <Image
                  key={selectedProduct.id}
                  src={selectedProduct.image_url}
                  alt={selectedProduct.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain md:object-cover"
                />

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>

              {/* Details Side */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-background">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-heading text-3xl font-bold text-foreground">
                      {selectedProduct.title}
                    </h2>
                    {selectedProduct.sub_category && (
                      <p className="font-medium text-primary uppercase tracking-[0.2em] text-sm">
                        {selectedProduct.sub_category}
                      </p>
                    )}
                  </div>

                  <div className="h-px w-12 bg-primary/20" />

                  <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                    {selectedProduct.description || "Elegant boutique collection item, handcrafted with premium quality and traditional aesthetics."}
                  </p>

                  <div className="pt-8">
                    <button 
                      onClick={() => {
                        const text = encodeURIComponent(`Hi LXJ Boutique, I'm interested in: ${selectedProduct.title} (${selectedProduct.sub_category})`);
                        window.open(`https://wa.me/8838562616?text=${text}`, "_blank");
                      }}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_4px_20px_rgba(112,22,45,0.25)] flex items-center justify-center gap-2"
                    >
                      Enquire on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
