import { PageBanner } from "@/components/ui/PageBanner";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | LXJ Boutique & Fashion",
  description: "Read the terms and conditions for shopping with LXJ Boutique. Professional policies for a magical fashion experience.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageBanner
        title="Terms & Conditions"
        subtitle="These terms are the thread that connects our boutique to your trust. Please read them carefully to understand our service standards."
        breadcrumb={[{ label: "Terms & Conditions", href: "/terms" }]}
      />

      <div className="py-20 bg-background relative overflow-hidden">
        {/* Magical Background Effect */}
        <ButterflyField count={3} lowProfile={true} />
        
        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 font-sans text-muted-foreground leading-relaxed text-lg">
            
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Service Overview</h2>
              <p>
                By using our website and services, you agree to comply with these Terms and Conditions. LXJ Boutique & Fashion provides premium handcrafted attire and luxury accessories. We reserve the right to modify or discontinue any service at our discretion.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Orders & Customization</h2>
              <p>
                All orders are subject to availability and acceptance. For custom designs and tailoring:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detailed measurements and design requirements must be provided during consultation.</li>
                <li>Customized items are tailored specifically for you and may have unique production times.</li>
                <li>Changes to custom orders can only be made within 48 hours of order confirmation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Payment Terms</h2>
              <p>
                We accept major credit cards, UPI, and bank transfers through secure payment gateways. Full payment is required before an order is processed for shipping or customization begins. All prices are in INR (Indian Rupee) unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Returns & Exchanges</h2>
              <p>
                Due to the handcrafted and often custom nature of our products:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard items can be returned within 7 days of delivery if they are in their original, unused condition.</li>
                <li>Customized designs and bespoke tailoring are non-returnable unless a manufacturing defect is present.</li>
                <li>Return shipping costs are the responsibility of the customer unless the return is due to our error.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Intellectual Property</h2>
              <p>
                All designs, images, and content on this website are the intellectual property of LXJ Boutique & Fashion. Unauthorized use or reproduction of our designs is strictly prohibited.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
