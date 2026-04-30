"use client";
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  Sun,
  Moon,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Offers", href: "/offers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-8 flex justify-between items-center max-w-7xl mx-auto rounded-full w-[95%] lg:w-full h-[64px] ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(112,22,45,0.1)] border border-border mt-6' : 'bg-background/20 backdrop-blur-sm shadow-sm mt-8'
        }`}>
        <Link href="/" className="flex items-center relative group h-full">
          {/* Liquid Glass Circle Logo */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 flex items-center justify-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#FFF9EE] dark:bg-[#FFD9EE] backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(112,22,45,0.15)] dark:shadow-black/50 overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_40px_rgba(112,22,45,0.25)] z-50">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF9EE]/40 dark:from-white/10 to-transparent pointer-events-none rounded-full mix-blend-overlay" />
            <Image
              src="/images/LXJ_upscale_logo.png"
              alt="LXJ Logo"
              width={90}
              height={90}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px] object-contain relative z-10"
              priority
            />
          </div>

          {/* Brand Typography - Responsive adjustment */}
          <div className="flex flex-col pl-20 sm:pl-[96px] lg:pl-[120px] justify-center">
            <span className="font-heading text-2xl sm:text-3xl font-bold tracking-widest text-primary leading-none drop-shadow-sm">
              LXJ
            </span>
            <span className="font-[family-name:var(--font-poppins)] text-[8px] sm:text-xs tracking-[0.2em] uppercase text-foreground/80 mt-1 font-medium">
              Boutique & Fashion
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center font-sans text-sm font-semibold tracking-wide uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {mounted && (
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary/50 transition-colors text-foreground">
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
          )}
          <a href="https://wa.me/8838562616" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md font-[family-name:var(--font-poppins)] text-sm font-semibold hover:scale-105">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="hidden lg:inline">Chat with us</span>
          </a>
          <button 
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-md z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] sm:w-[350px] bg-background border-l border-border z-[70] shadow-2xl p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary">LXJ Boutique & Fashion</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary/50 text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 font-heading text-2xl">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="h-[1px] flex-grow ml-4 bg-primary origin-left transition-transform"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-10 border-t border-border">
                <p className="font-sans text-sm text-muted-foreground mb-6 tracking-wide uppercase">Direct Response</p>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/8838562616" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#25D366] text-white font-bold gap-2 hover:opacity-90 transition-opacity">
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
