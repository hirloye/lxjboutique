import { TopOfferBar } from "@/components/layout/TopOfferBar";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { FairyGuide } from "@/components/home/FairyGuide";
import { CategorySection } from "@/components/home/CategorySection";
import { GallerySection } from "@/components/home/GallerySection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PopupOffer } from "@/components/home/PopupOffer";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <TopOfferBar />
      <Header />
      
      {/* Global Scroll Guide */}
      <FairyGuide />
      
      <div className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <CategorySection />
        <GallerySection />
        <FeaturesSection />
        <TestimonialSection />
        <Footer />
      </div>

      <PopupOffer />
    </main>
  );
}
