import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
      <div className="container-wide relative pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-background/50 mb-6">— Protected, Simply</p>
            <h3 className="font-serif-display text-5xl md:text-6xl leading-[1.05] mb-8">
              Peace of mind, <em className="text-accent-glow">delivered</em> in 48 hours.
            </h3>
            <a href="tel:8559438332" className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-full text-sm font-medium hover:gap-4 transition-all">
              Get your free quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-12">
            <div>
              <p className="font-mono-label text-[11px] uppercase text-background/40 mb-5">Explore</p>
              <ul className="space-y-3 text-sm">
                <li><Link to="/solutions" className="text-background/80 hover:text-background">Solutions</Link></li>
                <li><Link to="/products" className="text-background/80 hover:text-background">Products</Link></li>
                <li><Link to="/about" className="text-background/80 hover:text-background">About</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-label text-[11px] uppercase text-background/40 mb-5">Resources</p>
              <ul className="space-y-3 text-sm">
                <li><Link to="/blog" className="text-background/80 hover:text-background">Journal</Link></li>
                <li><Link to="/faq" className="text-background/80 hover:text-background">FAQ</Link></li>
                <li><Link to="/contact" className="text-background/80 hover:text-background">Contact</Link></li>
                <li><a href="#" className="text-background/80 hover:text-background">Support</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-label text-[11px] uppercase text-background/40 mb-5">Legal</p>
              <ul className="space-y-3 text-sm">
                <li><Link to="/privacy" className="text-background/80 hover:text-background">Privacy</Link></li>
                <li><Link to="/terms" className="text-background/80 hover:text-background">Terms</Link></li>
                <li><a href="#" className="text-background/80 hover:text-background">Licensing</a></li>
              </ul>
            </div>
            <div>
              <p className="font-mono-label text-[11px] uppercase text-background/40 mb-5">Reach Us</p>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:8559438332" className="text-background/80 hover:text-background">855-943-8332</a></li>
                <li className="text-background/80">info@homeprotectai.com</li>
                <li className="text-background/80">24 Vesey St, NY 10007</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/50 font-mono-label">
          <p>© 2026 Home Protect AI Security, Inc. All rights reserved.</p>
          <p>UL-Listed · FCC Certified · ISO 27001 · SOC 2 Type II</p>
        </div>
      </div>
    </footer>
  );
};

