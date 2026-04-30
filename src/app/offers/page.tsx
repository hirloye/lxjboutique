import { PageBanner } from "@/components/ui/PageBanner";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { DynamicProductGrid } from "@/components/shared/DynamicProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers | LXJ Boutique & Fashion",
  description: "Discover our latest special offers, seasonal discounts, and exclusive boutique bundles.",
};

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageBanner 
        title="Special Offers"
        subtitle="Exclusive deals on our premium collections. Don't miss out on these limited-time boutique offers."
        breadcrumb={[{ label: "Offers", href: "/offers" }]}
      />
      
      <div className="py-20 bg-background relative overflow-hidden">
        <ButterflyField count={2} lowProfile={true} />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container px-6 mx-auto mb-16 relative z-10 text-center">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-2">Current Promotions</h2>
          <div className="flex justify-center mt-4">
            <FloralUnderline />
          </div>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Take advantage of our carefully curated special offers. Handpicked combinations and seasonal discounts to elevate your wardrobe.
          </p>
        </div>
      </div>

      <section className="bg-background relative z-20 pb-32">
        <DynamicProductGrid category="offer" />
      </section>
    </main>
  );
}
