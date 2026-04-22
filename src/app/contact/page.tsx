import { PageBanner } from "@/components/ui/PageBanner";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Globe, MessageCircle, Clock } from "lucide-react";
import { FloralUnderline } from "@/components/ui/FloralUnderline";
import { ButterflyField } from "@/components/ui/ButterflyField";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | LXJ Boutique & Fashion",
  description: "Get in touch with LXJ Boutique in Chennai. Visit our store or reach out for inquiries, customizations, and boutique fashion support.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "No 167/3, 1st floor, Kalyan Tower",
        "Poonamallee - Avadi High Rd, Ram Nagar",
        "Avadi, Chennai-600054"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 88385 62616", "+91 44 1234 5678"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@lxjboutique.com", "sales@lxjboutique.com"]
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon - Sat: 10:00 AM - 9:00 PM", "Sun: 11:00 AM - 7:00 PM"]
    }
  ];

  return (
    <main className="min-h-screen bg-background pb-10">
      <PageBanner
        title="Contact Us"
        subtitle="Have a question about a collection or want to visit our boutique in Chennai? We'd love to hear from you."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
        maxWidth="max-w-none"
      />

      <section className="container px-4 sm:px-6 mx-auto mt-2 max-w-6xl">
        {/* Main Unified Container */}
        <div className="bg-secondary/30 backdrop-blur-xl border border-primary/10 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-12 text-center relative overflow-hidden group">
          {/* Magical Background Effect */}
          <ButterflyField count={4} lowProfile={true} />
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

          <div className="flex flex-col items-center space-y-12 relative z-10">

            {/* Contact Details Row */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.filter(info => info.title !== "Email Us").map((info, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6 p-8 rounded-[2rem] bg-secondary/40 border border-primary/5 hover:border-primary/20 transition-all group/card">
                  <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500 shadow-sm">
                    <info.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-heading text-xl font-bold text-foreground">{info.title}</h4>
                    <div className="font-sans text-muted-foreground text-sm space-y-1 leading-relaxed">
                      {info.details.map((line, lIdx) => (
                        <p key={lIdx}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connected Directly Section */}
            <div className="w-full">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Connect Directly</h3>
              <p className="font-sans text-muted-foreground text-lg mx-auto mb-10 leading-relaxed">
                Reach out to us via WhatsApp or Instagram for the fastest response on inquiries and customizations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
                <a
                  href="https://wa.me/8838562616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl font-bold text-lg shadow-lg transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/lxj_boutique._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90 text-white rounded-2xl font-bold text-lg shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Globe className="w-6 h-6" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  );
}
