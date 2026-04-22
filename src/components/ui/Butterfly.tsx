"use client";
import { motion } from "framer-motion";

interface ButterflyProps {
  color?: string;
  size?: number;
  delay?: number;
  className?: string;
  lowProfile?: boolean;
  style?: React.CSSProperties;
}

export function Butterfly({ 
  color = "#CE6892", 
  size = 40, 
  delay = 0,
  className = "",
  lowProfile = false,
  style = {}
}: ButterflyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: lowProfile ? 0.35 : 1, 
        scale: 1,
        x: [0, 50, -50, 0],
        y: [0, -40, -80, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        x: { duration: lowProfile ? 20 : 12, repeat: Infinity, ease: "linear", delay },
        y: { duration: lowProfile ? 15 : 10, repeat: Infinity, ease: "linear", delay },
        rotate: { duration: 8, repeat: Infinity, ease: "linear", delay }
      }}
      className={`absolute pointer-events-none ${className}`}
      style={{ ...style, width: size, height: size }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Left Wing */}
        <motion.div
          animate={{ rotateY: [0, 80, 0] }}
          transition={{ duration: lowProfile ? 0.8 : 0.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/2 origin-right w-1/2 h-full"
        >
          <svg viewBox="0 0 50 100" className="w-full h-full drop-shadow-sm">
             <path 
                d="M50 50 C 50 10 10 0 5 10 C 0 20 10 45 50 50 C 10 55 0 80 5 90 C 10 100 50 90 50 50" 
                fill={color} 
                fillOpacity={lowProfile ? "0.4" : "0.8"}
                stroke="white"
                strokeWidth="1"
             />
          </svg>
        </motion.div>

        {/* Right Wing */}
        <motion.div
          animate={{ rotateY: [0, -80, 0] }}
          transition={{ duration: lowProfile ? 0.8 : 0.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 origin-left w-1/2 h-full"
        >
          <svg viewBox="0 0 50 100" className="w-full h-full scale-x-[-1] drop-shadow-sm">
             <path 
                d="M50 50 C 50 10 10 0 5 10 C 0 20 10 45 50 50 C 10 55 0 80 5 90 C 10 100 50 90 50 50" 
                fill={color} 
                fillOpacity={lowProfile ? "0.4" : "0.8"}
                stroke="white"
                strokeWidth="1"
             />
          </svg>
        </motion.div>

        {/* Body */}
        <div className="absolute w-[2px] h-[60%] bg-black/40 rounded-full z-10" />
      </div>
    </motion.div>
  );
}
