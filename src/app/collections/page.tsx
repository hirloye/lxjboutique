import { PageBanner } from "@/components/ui/PageBanner";
import { CategorySection } from "@/components/home/CategorySection";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { DynamicProductGrid } from "@/components/shared/DynamicProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | LXJ Boutique & Fashion",
  description: "Explore our curated collection of premium sarees, designer kurtis, bridal lehengas, and luxury accessories.",
};

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;

  return (
    <main className="min-h-screen bg-background">
      <PageBanner
        title="Our Collections"
        subtitle="Discover a curated world of luxury fashion where tradition meets modern elegance. Each piece is handpicked for your unique style."
        breadcrumb={[{ label: "Collections", href: "/collections" }]}
      />

      <div>
        <CategorySection currentFilter={filter} />
      </div>

      {/* Dynamic Products from Admin Panel */}
      <section className="bg-secondary/10 pt-0 pb-10 border-y border-primary/5 min-h-[50vh]">
        <DynamicProductGrid category="collection" filter={filter} />
      </section>
    </main>
  );
}
