import { PageBanner } from "@/components/ui/PageBanner";
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
      <section className="bg-background relative z-20 pb-32">
        <DynamicProductGrid category="offer" />
      </section>
    </main>
  );
}
