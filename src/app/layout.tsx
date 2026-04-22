import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LXJ Boutique & Fashion | Premium Style",
  description: "Experience magical luxury fashion. Timeless Sarees, Modern Grace.",
  keywords: ["fashion", "boutique", "luxury", "sarees", "lehengas"],
  icons: {
    icon: "/images/LXJ_upscale_logo.png",
    shortcut: "/images/LXJ_upscale_logo.png",
    apple: "/images/LXJ_upscale_logo.png",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans bg-background text-foreground uppercase-none`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
