"use client";
import Link from 'next/link';
import { ShoppingBag, 
 Menu, 
 Sun, 
 Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`fixed top-[120px] left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto rounded-full w-[95%] lg:w-full ${
      scrolled ? 'bg-background/80 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(112,22,45,0.1)] border border-border py-3 -translate-y-[100px]' : 'bg-background/20 backdrop-blur-sm shadow-sm py-5'
    }`}>
      <Link href="/" className="font-heading text-3xl font-extrabold tracking-widest text-primary drop-shadow-sm">
        LXJ.
      </Link>
      
      <nav className="hidden md:flex gap-8 items-center font-sans text-sm font-semibold tracking-wide uppercase">
        <Link href="/" className="hover:text-primary transition-all duration-300 hover:scale-105">Home</Link>
        <Link href="#collections" className="hover:text-primary transition-all duration-300 hover:scale-105">Collections</Link>
        <Link href="#new-arrivals" className="hover:text-primary transition-all duration-300 hover:scale-105">New Arrivals</Link>
        <Link href="#offers" className="hover:text-primary transition-all duration-300 hover:scale-105">Offers</Link>
        <Link href="#contact" className="hover:text-primary transition-all duration-300 hover:scale-105">Contact</Link>
      </nav>

      <div className="flex items-center gap-4">
        {mounted && (
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-secondary/50 transition-colors text-foreground">
             <Sun className="h-5 w-5 dark:hidden" />
             <Moon className="h-5 w-5 hidden dark:block" />
          </button>
        )}
        <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors relative text-foreground">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
        </button>
        <button className="md:hidden p-2 text-foreground">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
