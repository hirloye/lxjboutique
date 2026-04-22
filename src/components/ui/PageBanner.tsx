"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  maxWidth?: string;
}

export function PageBanner({ title, subtitle, breadcrumb, maxWidth = "max-w-3xl" }: PageBannerProps) {
  return (
    <div className="relative pt-[100px] md:pt-[120px] pb-8 md:pb-12 overflow-hidden bg-background">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-secondary/20 rounded-full blur-[60px] md:blur-[80px] -ml-20 -mb-20" />
      
      {/* App-wide Magical Background Effect */}
      <ButterflyField count={4} lowProfile={true} />
      
      <div className="container px-6 mx-auto relative z-10">
        {/* Breadcrumbs */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-sans text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-50" />
                {idx === breadcrumb.length - 1 ? (
                  <span className="text-foreground font-semibold uppercase tracking-wider">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-primary transition-colors">{item.label}</Link>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={maxWidth}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">Explore</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight">
            {title}
          </h1>
          <div className="flex justify-start mb-6 -ml-4 underline-scale-75">
            <div className="w-32 sm:w-48 transform -scale-x-100">
               <FloralUnderline />
            </div>
          </div>
          {subtitle && (
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Luxury Glass Dividing Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </div>

  );
}

