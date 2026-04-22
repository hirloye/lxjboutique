"use client";
import { motion } from "framer-motion";

export function FloralUnderline() {
  return (
    <div className="relative h-8 w-48 mx-auto mt-4 overflow-hidden">
      <motion.svg
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-primary"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Main Vine */}
        <path
          d="M10 20C40 20 60 10 100 20C140 30 160 20 190 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Leaf 1 */}
        <path
          d="M40 20C35 15 35 10 40 5C45 10 45 15 40 20Z"
          fill="currentColor"
          className="opacity-60"
        />
        
        {/* Leaf 2 */}
        <path
          d="M160 20C165 25 165 30 160 35C155 30 155 25 160 20Z"
          fill="currentColor"
          className="opacity-60"
        />
        
        {/* Small Flower Center */}
        <motion.circle
          cx="100"
          cy="20"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
        
        {/* Petals */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.path
            key={i}
            d="M100 20C100 15 105 15 105 10C100 10 95 15 100 20Z"
            fill="currentColor"
            style={{ originX: "100px", originY: "20px", rotate: angle }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
            className="opacity-80"
          />
        ))}
      </motion.svg>
    </div>
  );
}
