import { Reveal } from "@/components/site/Reveal";
import { PhoneCall } from "lucide-react";

export const CTAFooter = () => (
  <section className="relative py-32 overflow-hidden bg-canvas-2">
    <div className="absolute inset-0 bg-gradient-aurora opacity-70" />
    <div className="container-wide relative text-center max-w-4xl">
      <Reveal><span className="eyebrow">"” Start in minutes</span></Reveal>
      <Reveal delay={100}>
        <h2 className="font-serif-display text-6xl md:text-8xl leading-[0.95] mt-6">
          Your home, <em>guarded</em> by tomorrow's tech.
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Speak with a Home Protect AI specialist. No pressure, no contracts to start "” just a thoughtful plan tailored to your home.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="tel:8559438332" className="btn-primary inline-flex items-center gap-2">
            <PhoneCall className="w-4 h-4" /> Call 855-943-8332
          </a>
          <a href="tel:8559438332" className="btn-ghost">Free home assessment</a>
        </div>
      </Reveal>
    </div>
  </section>
);

