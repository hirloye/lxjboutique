import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LXJ Boutique & Fashion | Premium Style",
  description: "Experience magical luxury fashion. Timeless Sarees, Modern Grace.",
  keywords: ["fashion", "boutique", "luxury", "sarees", "lehengas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-sans bg-background text-foreground`}>{children}</body>
    </html>
  );
}
