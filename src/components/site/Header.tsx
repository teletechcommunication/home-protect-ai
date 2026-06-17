import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 rounded-md bg-foreground flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-60 animate-pulse-glow" />
            <div className="relative w-2 h-2 rounded-full bg-accent" />
          </div>
          <span className="font-serif-display text-2xl leading-none tracking-tight">Home Protect AI</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:8559438332" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono-label text-xs">855-943-8332</span>
          </a>
          <a href="tel:8559438332" className="btn-primary text-xs px-5 py-2.5">
            Free Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-wide py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} className="py-3 text-lg font-medium border-b border-border/50">{n.label}</NavLink>
            ))}
            <a href="tel:8559438332" className="btn-primary mt-4 justify-center">Free Quote</a>
          </div>
        </div>
      )}
    </header>
  );
};
