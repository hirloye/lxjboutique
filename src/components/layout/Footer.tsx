import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground pt-20 pb-10 rounded-t-[3rem] mt-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-heading text-3xl font-extrabold tracking-widest mb-6">LXJ.</h3>
            <p className="font-sans text-primary-foreground/80 mb-6 max-w-sm">
              Discover a magical journey of luxury fashion. Timeless designs crafted with premium quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="font-bold hover:text-white/80 transition-colors">
                Instagram
              </a>
              <span className="text-white/50">•</span>
              <a href="#" className="font-bold hover:text-white/80 transition-colors">
                Facebook
              </a>
              <span className="text-white/50">•</span>
              <a href="#" className="font-bold hover:text-white/80 transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li><Link href="/" className="hover:text-white hover:underline transition-all">Home</Link></li>
              <li><Link href="#collections" className="hover:text-white hover:underline transition-all">Collections</Link></li>
              <li><Link href="#new-arrivals" className="hover:text-white hover:underline transition-all">New Arrivals</Link></li>
              <li><Link href="#offers" className="hover:text-white hover:underline transition-all">Special Offers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Categories</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li><Link href="#" className="hover:text-white hover:underline transition-all">Premium Sarees</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all">Designer Kurtis</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all">Bridal Lehengas</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all">Luxury Handbags</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 font-sans text-primary-foreground/80">
              <li>Email: contact@lxjboutique.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Fashion Avenue, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-sans text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LXJ Boutique. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
