import { Link, useParams } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { articles } from "./Blog";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const BlogArticle = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug) ?? articles[0];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="pt-36 pb-20">
        <div className="container-wide max-w-4xl">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 font-mono-label uppercase tracking-wider text-xs">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-mono-label text-[11px] uppercase text-muted-foreground mb-6">"” {article.category} · {article.date} · {article.read} read</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-serif-display text-5xl md:text-7xl leading-[0.95]">{article.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">{article.excerpt}</p>
          </Reveal>
        </div>

        <div className="container-wide max-w-6xl mt-16">
          <Reveal delay={250}>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-canvas-2">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="container-wide max-w-3xl mt-20 prose-lg">
          <Reveal>
            <div className="space-y-8 text-lg leading-[1.75] text-foreground/90">
              <p className="text-2xl leading-[1.5] font-serif-display first-letter:font-serif-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-1">
                The home security industry has changed more in the last three years than the previous thirty. What used to be a wired panel screwed to a closet wall is now a distributed mesh of sensors, cameras, locks, and AI services that work together "” quietly, intelligently, and elegantly.
              </p>

              <p>At Home Protect AI, we've spent over a decade studying what makes a home feel truly safe. Not just protected on paper, but safe in the way that lets a parent sleep through the night, lets a small business owner take a real vacation, lets a family welcome strangers without anxiety. The answer, we've learned, has very little to do with louder alarms or more cameras.</p>

              <h2 className="font-serif-display text-4xl mt-16 mb-4">The shift from reactive to proactive</h2>

              <p>Traditional security systems were designed around a simple model: something bad happens, an alarm goes off, someone calls the police. That model worked when the alternative was nothing "” but it ignored the most important truth about home invasions: the average response time from alarm to police arrival is over eight minutes. By then, the damage is done.</p>

              <p>Modern systems flip the model entirely. Instead of waiting for a break-in to happen, they prevent the break-in from being attempted. AI-verified cameras detect a person approaching at 2 a.m. and trigger lights, two-way speakers, and a recorded warning before any glass is broken. The would-be intruder leaves. No alarm needed.</p>

              <h2 className="font-serif-display text-4xl mt-16 mb-4">Why local processing finally won</h2>

              <p>For years, smart cameras streamed everything they saw to remote servers for AI analysis. It was bandwidth-heavy, privacy-questionable, and slow. The breakthrough came when consumer-grade chips became powerful enough to run sophisticated computer vision models directly on the camera itself.</p>

              <p>Today, our Aura Cam Pro distinguishes between people, pets, packages, and vehicles entirely on-device. Your video never leaves your home unless you ask it to. The privacy implications are enormous "” and they're finally being recognized as a default expectation, not a premium feature.</p>

              <blockquote className="border-l-2 border-accent pl-8 my-12">
                <p className="font-serif-display text-3xl leading-[1.3] italic">"The best security system is the one you forget you have "” until the moment you need it, and then it's the most important thing in your home."</p>
                <cite className="font-mono-label text-xs uppercase text-muted-foreground not-italic mt-4 block">"” Eleanor Voss, Founder, Home Protect AI</cite>
              </blockquote>

              <h2 className="font-serif-display text-4xl mt-16 mb-4">The Matter standard, finally arriving</h2>

              <p>For a decade, smart home enthusiasts have begged for one thing: interoperability. The ability to mix and match devices from different brands without three different apps and a degree in network engineering. The Matter 1.3 standard, ratified last year, finally delivers it.</p>

              <p>Every Home Protect AI device ships Matter-ready. Your Apple Home, Google Home, Alexa, and SmartThings ecosystems all see the same devices, control them the same way, and respond to the same automations. We didn't build this because customers asked "” we built it because it was the right thing to do.</p>

              <h2 className="font-serif-display text-4xl mt-16 mb-4">What's next</h2>

              <p>The next three years will see security systems become predictive rather than just responsive. Behavioral analysis will recognize when something is unusual for your specific household "” not just when motion is detected. Machine learning will adapt to your routines and flag genuine anomalies, dramatically reducing false alarms while catching real threats earlier.</p>

              <p>It's an exciting time to protect a home. And it's an even better time to start, because for the first time in the industry's history, the smartest, safest, and most beautifully designed system can also be the most affordable. That's the future Home Protect AI was built for.</p>
            </div>
          </Reveal>

          {/* CTA banner */}
          <Reveal delay={200}>
            <div className="mt-20 p-10 md:p-14 rounded-3xl bg-foreground text-background relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-aurora opacity-50" />
              <div className="relative">
                <p className="font-mono-label text-[11px] uppercase text-background/50 mb-4">"” Ready to upgrade?</p>
                <h3 className="font-serif-display text-4xl md:text-5xl leading-tight max-w-xl">Bring 2026's smartest security home in less than 48 hours.</h3>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-full text-sm font-medium hover:gap-4 transition-all">
                  Get a free quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      <section className="py-24 border-t border-hairline">
        <div className="container-wide">
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-serif-display text-4xl md:text-5xl">Continue reading</h2>
              <Link to="/blog" className="btn-ghost text-xs">All articles <ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link to={`/blog/${a.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-canvas-2 mb-4 lift">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="font-mono-label text-[10px] uppercase text-muted-foreground mb-2">{a.category}</p>
                  <h3 className="font-serif-display text-2xl leading-tight">{a.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
};

export default BlogArticle;

