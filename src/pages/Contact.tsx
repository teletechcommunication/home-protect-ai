import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Clock, ShieldAlert } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast({ title: "Quote request received", description: "A specialist will contact you within 1 business hour." });
  };
  return (
    <>
      <PageHero eyebrow="— Index 06" index="get protected" title={<>Let's design your <em>system.</em></>} description="Tell us a little about your home. A Home Protect AI specialist will respond within one business hour with a custom plan and transparent quote." />

      <section className="py-12 pb-32">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-soft">
                <h2 className="font-serif-display text-3xl mb-8">Free quote request</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { l: "First name", n: "first" },
                    { l: "Last name", n: "last" },
                    { l: "Email", n: "email", type: "email" },
                    { l: "Phone", n: "phone", type: "tel" },
                  ].map((f) => (
                    <label key={f.n} className="block">
                      <span className="block font-mono-label text-[10px] uppercase text-muted-foreground mb-2">{f.l}</span>
                      <input required type={f.type || "text"} name={f.n} className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors" />
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="block font-mono-label text-[10px] uppercase text-muted-foreground mb-2">Property</span>
                    <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground">
                      <option>Single-family home</option><option>Apartment / Condo</option><option>Small business</option><option>Multi-property</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="block font-mono-label text-[10px] uppercase text-muted-foreground mb-2">Anything we should know</span>
                    <textarea rows={4} name="message" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground resize-none" placeholder="Concerns, sq footage, existing equipment..." />
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-10">{sent ? "Request received" : "Request my free quote"}</button>
                <p className="mt-4 text-xs text-muted-foreground">No obligation. We never share your information.</p>
              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            {[
              { icon: Phone, t: "Call us", d: "1-800-555-1234", sub: "Mon-Fri, 7a-11p ET · Sat-Sun, 9a-9p ET" },
              { icon: Mail, t: "Email", d: "info@Home Protect AI.com", sub: "Response within 1 business hour" },
              { icon: MapPin, t: "Visit", d: "24 Vesey Street, NYC", sub: "Showroom open by appointment" },
              { icon: Clock, t: "Service area", d: "All 50 US states", sub: "Free install in 38 metro areas" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="p-6 bg-card border border-border/60 rounded-2xl flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center shrink-0"><c.icon className="w-5 h-5" /></div>
                  <div>
                    <p className="font-mono-label text-[10px] uppercase text-muted-foreground mb-1">{c.t}</p>
                    <p className="font-serif-display text-2xl leading-tight">{c.d}</p>
                    <p className="text-sm text-muted-foreground mt-2">{c.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <div className="p-7 bg-foreground text-background rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldAlert className="w-5 h-5 text-accent-glow" />
                  <p className="font-mono-label text-[11px] uppercase">Existing customer · Emergency</p>
                </div>
                <p className="font-serif-display text-3xl leading-tight">Press the panic button in your app, or call our 24/7 line at 1-800-555-9911.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24">
        <div className="container-wide">
          <Reveal>
            <div className="aspect-[21/9] rounded-3xl bg-foreground relative overflow-hidden grain">
              <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center text-background">
                <div className="text-center">
                  <span className="font-mono-label text-[11px] uppercase text-background/50">— Headquarters</span>
                  <h3 className="font-serif-display text-4xl md:text-6xl mt-3">New York · Brooklyn · Austin · Seattle</h3>
                  <p className="text-background/70 mt-4 max-w-md mx-auto">Service available in all 50 states. Free in-person install in 38 major metros.</p>
                </div>
              </div>
              {/* Decorative grid */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;

