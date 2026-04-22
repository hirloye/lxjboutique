import { TopOfferBar } from "@/components/layout/TopOfferBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { GallerySection } from "@/components/home/GallerySection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StyleFinder } from "@/components/home/StyleFinder";
import { Lookbook } from "@/components/home/Lookbook";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PopupOffer } from "@/components/home/PopupOffer";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <div className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <GallerySection />
        <FeaturesSection />
        <StyleFinder />
        <Lookbook />
        <TestimonialSection />
      </div>

      <PopupOffer />
    </main>
  );
}
