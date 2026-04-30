"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Product = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  price: string;
};

export function ProductGridClient({ products }: { products: Product[] }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary/20 mb-4">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={() => setSelectedProduct(product)}
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
              {product.price && (
                <p className="font-medium text-sm text-primary mt-2 uppercase tracking-wider">
                  {product.price}
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
              <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-secondary/10">
                <Image
                  src={selectedProduct.image_url}
                  alt={selectedProduct.title}
                  fill
                  priority
                  className="object-contain md:object-cover"
                />
              </div>

              {/* Details Side */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-background">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-heading text-3xl font-bold text-foreground">
                      {selectedProduct.title}
                    </h2>
                    {selectedProduct.price && (
                      <p className="font-medium text-primary uppercase tracking-[0.2em] text-sm">
                        {selectedProduct.price}
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
                        const text = encodeURIComponent(`Hi LXJ Boutique, I'm interested in: ${selectedProduct.title} (${selectedProduct.price})`);
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
