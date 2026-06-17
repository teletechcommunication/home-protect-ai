import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  index?: string;
}

export const PageHero = ({ eyebrow, title, description, index }: Props) => (
  <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-aurora pointer-events-none" />
    <div className="container-wide relative">
      <div className="flex items-center justify-between mb-10">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        {index && <Reveal delay={150}><span className="font-mono-label text-xs text-muted-foreground">{index}</span></Reveal>}
      </div>
      <Reveal delay={100}>
        <h1 className="font-serif-display text-[18vw] md:text-[7.5rem] leading-[0.92] tracking-tight max-w-[16ch]">
          {title}
        </h1>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">{description}</p>
        </Reveal>
      )}
      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">Get a free quote</Link>
          <Link to="/solutions" className="btn-ghost">Explore solutions</Link>
        </div>
      </Reveal>
    </div>
    <div className="container-wide mt-20"><div className="h-px bg-hairline" /></div>
  </section>
);
