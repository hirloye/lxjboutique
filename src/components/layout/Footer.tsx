import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-10 rounded-t-[3rem]">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-10 relative group">
              {/* Liquid Glass Circle for Footer Logo */}
              <div className="flex flex-col items-center justify-center w-[200px] h-[200px] rounded-full bg-[#FFF9EE] dark:bg-[#FFD9EE] backdrop-blur-md border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(112,22,45,0.15)] dark:shadow-black/50 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(112,22,45,0.25)]">
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF9EE]/40 dark:from-white/10 to-transparent pointer-events-none rounded-full mix-blend-overlay" />

                <div className="relative z-10 flex flex-col items-center gap-1">
                  <Image
                    src="/images/LXJ_upscale_logo.png"
                    alt="LXJ Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/images/Brand_Name.png"
                    alt="Brand Name"
                    width={125}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="font-sans text-primary-foreground/80 mb-6 max-w-sm">
              Discover a magical journey of luxury fashion. Timeless designs crafted with premium quality.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/lxj_boutique._" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white/80 transition-colors">
                Instagram
              </a>
              <span className="text-white/50">•</span>
              <a href="https://www.facebook.com/share/1Nnrn1WCg5/" className="font-bold hover:text-white/80 transition-colors">
                Facebook
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li><Link href="/" className="hover:text-white hover:underline transition-all">Home</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:underline transition-all">Collections</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-white hover:underline transition-all">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Categories</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li><Link href="/collections" className="hover:text-white hover:underline transition-all">Premium Sarees</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:underline transition-all">Designer Kurtis</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:underline transition-all">Bridal Lehengas</Link></li>
              <li><Link href="/collections" className="hover:text-white hover:underline transition-all">Luxury Handbags</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li>Email: contact@lxjboutique.com</li>
              <li>Phone: +91 88385 62616</li>
              <li>Address:No 167/3, 1st floor, Kalyan Tower, Poonamallee - Avadi High Rd, Ram Nagar, Avadi, Chennai-600054</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-sans text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LXJ Boutique. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
