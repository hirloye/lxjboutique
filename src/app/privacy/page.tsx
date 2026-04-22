import { PageBanner } from "@/components/ui/PageBanner";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LXJ Boutique & Fashion",
  description: "Learn how LXJ Boutique protects your privacy and handles your personal information with care and magic.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageBanner
        title="Privacy Policy"
        subtitle="Your trust is our most precious thread. We are committed to protecting your privacy and ensuring your personal information is handled with care."
        breadcrumb={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <div className="py-20 bg-background relative overflow-hidden">
        {/* Magical Background Effect */}
        <ButterflyField count={3} lowProfile={true} />
        
        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 font-sans text-muted-foreground leading-relaxed text-lg">
            
            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p>
                At LXJ Boutique & Fashion, we value the privacy of our customers and visitors. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and boutique services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
              <p className="mb-4">
                We may collect personal information such as your name, email address, phone number, and shipping address when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Register for an account or subscribe to our newsletter.</li>
                <li>Place an order or book a consultation.</li>
                <li>Contact us for inquiries or customization requests.</li>
                <li>Participate in our boutique events or promotions.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <p className="mb-4">
                The information we collect is used to provide you with a more magical and personalized experience, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and fulfilling your orders.</li>
                <li>Communicating with you about your order status or customization requests.</li>
                <li>Sending you updates on our latest collections and offers (with your consent).</li>
                <li>Improving our boutique services and website experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is limited to authorized personnel who are committed to maintaining the confidentiality of your information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information at any time. If you have any questions or concerns regarding your data, please reach out to us at <span className="text-primary font-bold">privacy@lxjboutique.com</span>.
              </p>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
