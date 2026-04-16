"use client";
import { motion } from "framer-motion";
import { Gem, Scissors, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Fabrics",
    description: "Sourced from the finest weavers, ensuring long-lasting luxury and unmatched comfort."
  },
  {
    icon: Heart,
    title: "Handpicked Designs",
    description: "Every piece is carefully selected to reflect modern grace while keeping traditions alive."
  },
  {
    icon: Scissors,
    title: "Tailored to Perfection",
    description: "Customization options available to fit your unique style and perfect measurements."
  },
  {
    icon: Sparkles,
    title: "Affordable Luxury",
    description: "Experience premium boutique fashion without compromising on value and elegance."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative bg-secondary/20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose LXJ
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 rounded-3xl bg-background border border-border/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(206,104,146,0.3)] hover:border-primary/50 overflow-hidden"
            >
              {/* Subtle fairy glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
