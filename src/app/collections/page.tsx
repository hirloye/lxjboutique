import { PageBanner } from "@/components/ui/PageBanner";
import { CategorySection } from "@/components/home/CategorySection";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | LXJ Boutique & Fashion",
  description: "Explore our curated collection of premium sarees, designer kurtis, bridal lehengas, and luxury accessories.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageBanner
        title="Our Collections"
        subtitle="Discover a curated world of luxury fashion where tradition meets modern elegance. Each piece is handpicked for your unique style."
        breadcrumb={[{ label: "Collections", href: "/collections" }]}
      />

      <div>
        <CategorySection />
      </div>

      {/* Additional Content - Featured Collection Teaser */}
      <section className="mt-5 pb-32 container px-4 sm:px-6 mx-auto">
        <div className="bg-secondary/30 backdrop-blur-xl rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-8 sm:gap-12 overflow-hidden relative">
          {/* Magical Background Effect */}
          <ButterflyField count={3} lowProfile={true} />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

          <div className="flex-1 relative z-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-2 mt-6 mb-6">
              <h2 className="font-heading text-4xl font-bold text-foreground">Want something unique?</h2>
              <div className="w-48 -ml-4">
                <FloralUnderline />
              </div>
            </div>
            <p className="font-sans text-muted-foreground text-lg mb-8 leading-relaxed">
              We offer bespoke customization for bridal lehengas and premium sarees. Our master designers will work with you to bring your dream outfit to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all">
                Book a Consultation
              </button>
              <button className="px-8 py-4 bg-white/50 backdrop-blur-md border border-primary/20 text-primary rounded-full font-bold hover:bg-white transition-all">
                View Catalog
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-secondary/40 rounded-[2rem] overflow-hidden relative group">
            {/* Use a placeholder image or leave as a beautiful gradient for now */}
            <div className="absolute inset-0 flex items-center justify-center text-primary/40">
              <span className="font-heading text-xl uppercase tracking-widest opacity-50">Luxury Craftsmanship</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
