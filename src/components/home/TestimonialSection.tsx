"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";

const testimonials = [
  {
    name: "Aisha Patel",
    review: "The saree I bought for my sister's wedding was absolutely stunning. The fabric quality and modern design made me feel like royalty.",
    role: "Verified Buyer"
  },
  {
    name: "Priya Sharma",
    review: "I love the glassmorphism aesthetic of their online store, it really reflects the premium quality of their clothing. Quick delivery too!",
    role: "Regular Customer"
  },
  {
    name: "Riya Kapoor",
    review: "Their lehengas are a dream come true. Customization was seamless, and the fit is just perfect. Highly recommend LXJ Boutique.",
    role: "Verified Buyer"
  }
];

export function TestimonialSection() {
  return (
    <section className="pt-6 pb-4 md:pt-16 md:pb-8 relative overflow-hidden bg-background">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />
      
      {/* Magical Background Effect */}
      <ButterflyField count={3} lowProfile={true} />
      

      <div className="container px-6 mx-auto relative z-10 text-center">
        <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Real Experiences</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          Client Stories
        </h2>
        <FloralUnderline />
        <p className="text-muted-foreground font-sans max-w-2xl mx-auto mt-4 mb-8">
          Hear from the individuals who found their unique expression and magical style at LXJ Boutique.
        </p>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-background/50 backdrop-blur-md border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                        <Quote className="w-10 h-10 text-primary/40 mb-4" />
                        <p className="font-sans text-muted-foreground italic mb-6">&quot;{t.review}&quot;</p>
                        <div>
                          <h4 className="font-heading text-xl font-bold text-foreground">{t.name}</h4>
                          <span className="text-sm text-primary">{t.role}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4 relative">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 bg-secondary text-primary hover:bg-primary hover:text-white border-none" />
              <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 bg-secondary text-primary hover:bg-primary hover:text-white border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
