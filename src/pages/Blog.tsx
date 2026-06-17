import { PageHero } from "@/components/sections/PageHero";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/site/SEO";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import lifestyleFamily from "@/assets/lifestyle-family.jpg";
import installerImg from "@/assets/installer.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";

export const articles = [
  { slug: "smart-home-security-2026", title: "The State of Smart Home Security in 2026", excerpt: "AI verification, Matter compatibility, and why local processing finally won the privacy argument.", img: blog1, date: "April 10, 2026", category: "Insights", read: "8 min" },
  { slug: "neighborhood-crime-prevention", title: "How Connected Neighborhoods Are Quietly Reducing Burglaries by 40%", excerpt: "What we've learned protecting 180,000 homes about deterrence, response time, and community alerts.", img: blog2, date: "March 28, 2026", category: "Research", read: "10 min" },
  { slug: "smart-home-automation-guide", title: "A Designer's Guide to Smart Home Automation That Doesn't Look Tacky", excerpt: "Hidden cameras, flush-mount keypads, and how to keep tech out of sight in beautifully designed homes.", img: blog3, date: "March 15, 2026", category: "Design", read: "12 min" },
  { slug: "choosing-monitoring-plan", title: "Self-Monitoring vs Professional: Which Plan is Right for You", excerpt: "An honest comparison from people who sell both. The answer depends on three lifestyle questions.", img: lifestyleFamily, date: "March 2, 2026", category: "Guides", read: "6 min" },
  { slug: "installation-day-checklist", title: "Your Installation Day Checklist: What to Expect From Us", excerpt: "Walk through every step from arrival to handoff so you can prepare your home and household.", img: installerImg, date: "February 18, 2026", category: "Customer", read: "5 min" },
  { slug: "monitoring-center-tour", title: "Inside the Home Protect AI Monitoring Center: A 24-Hour Tour", excerpt: "We embedded a writer in our New York central station for a full day. Here's what they saw.", img: monitoringCenter, date: "February 5, 2026", category: "Behind the Scenes", read: "9 min" },
];

const Blog = () => (
  <main>
    <SEO 
      title="Blog | Home Protect AI"
      description="Read our latest insights, design tips, and guides on home security, smart home automation, and safety."
    />
    <PageHero eyebrow="— Index 07" index="the journal" title={<>Notes from a <em>safer</em> home.</>} description="Field-tested guides, design philosophy, and customer stories from the Home Protect AI team." />

    {/* Featured */}
    <section className="py-12" aria-label="Featured Article">
      <div className="container-wide">
        <Reveal>
          <Link to={`/blog/${articles[0].slug}`} className="group grid lg:grid-cols-12 gap-10 items-center" aria-label={`Read featured article: ${articles[0].title}`}>
            <div className="lg:col-span-7 aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-canvas-2 lift">
              <img src={articles[0].img} alt={articles[0].title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="lg:col-span-5">
              <p className="font-mono-label text-[11px] uppercase text-muted-foreground mb-4">— Featured · {articles[0].category}</p>
              <h2 className="font-serif-display text-5xl md:text-6xl leading-[0.95]">{articles[0].title}</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{articles[0].excerpt}</p>
              <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground font-mono-label">
                <span>{articles[0].date}</span><span>·</span><span>{articles[0].read} read</span>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">Read article <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>

    {/* Grid */}
    <section className="py-20" aria-label="Blog Articles">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {articles.slice(1).map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}>
              <Link to={`/blog/${a.slug}`} className="group block" aria-label={`Read article: ${a.title}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-canvas-2 mb-5 lift">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="font-mono-label text-[10px] uppercase text-muted-foreground mb-2">{a.category} · {a.read}</p>
                <h3 className="font-serif-display text-3xl leading-tight mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTAFooter />
  </>
);

export default Blog;

