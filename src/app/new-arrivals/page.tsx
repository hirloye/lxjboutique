import { PageBanner } from "@/components/ui/PageBanner";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { DynamicProductGrid } from "@/components/shared/DynamicProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Arrivals | LXJ Boutique & Fashion",
  description: "Discover the latest masterpieces from LXJ Boutique. Shimmering bridal lehengas, magical fairy frocks, and premium accessories.",
};

export default function NewArrivalsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageBanner 
        title="New Arrivals"
        subtitle="Experience the magic of our latest creations. From hand-crafted frocks to shimmering bridal wear, explore the newest additions to our boutique."
        breadcrumb={[{ label: "New Arrivals", href: "/new-arrivals" }]}
      />
      
      <div className="py-20 bg-background relative overflow-hidden">
        {/* Magical Background Effect */}
        <ButterflyField count={3} lowProfile={true} />
        
        {/* Soft magical glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container px-6 mx-auto mb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-2">Seasonal Masterpieces</h2>
            <FloralUnderline />
            <p className="font-sans text-muted-foreground text-lg leading-relaxed">
              Our latest drop features textures inspired by nature and silhouettes that celebrate individual grace. Click through each masterpiece to see the detail that goes into our craft.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Products from Admin Panel */}
      <section className="bg-background relative z-20 pb-20">
        <DynamicProductGrid category="new_arrival" />
      </section>

      <section className="py-32 container px-6 mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value Props for New Arrivals */}
            <div className="p-8 rounded-[2rem] bg-secondary/20 border border-primary/5 backdrop-blur-sm">
               <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Limited Edition</h3>
               <p className="font-sans text-muted-foreground">Many of our new designs are produced in limited quantities to ensure exclusivity for our clients.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-secondary/20 border border-primary/5 backdrop-blur-sm">
               <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Premium Fabrics</h3>
               <p className="font-sans text-muted-foreground">This season's collection features hand-woven silks and ethically sourced premium cotton blends.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-secondary/20 border border-primary/5 backdrop-blur-sm">
               <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Express Tailoring</h3>
               <p className="font-sans text-muted-foreground">Complimentary express tailoring is available for all new arrivals for a limited time.</p>
            </div>
         </div>
      </section>
    </main>
  );
}
