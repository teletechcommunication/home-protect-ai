import { PageHero } from "@/components/sections/PageHero";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/site/SEO";
import installerImg from "@/assets/installer.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import operatorCloseup from "@/assets/operator-closeup.jpg";
import neighborhoodAerial from "@/assets/neighborhood-aerial.jpg";
import installTeam from "@/assets/install-team.jpg";
import { MapPin, Users, Heart, Leaf } from "lucide-react";

const About = () => (
  <main>
    <SEO 
      title="Our Story | Home Protect AI"
      description="Learn about Home Protect AI, our commitment to secure, beautifully designed home protection, and our founder's journey since 2014."
    />
    <PageHero eyebrow="— Index 05" index="our story" title={<>Twelve years <em>obsessed</em> with one thing.</>} description="We started Home Protect AI because home security felt 20 years behind every other product in our lives. We rebuilt it — hardware, software, monitoring, and service — from first principles." />

    <section className="py-24">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">— Story</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">Founded in 2014. <em>Family-led</em> ever since.</h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <Reveal delay={100}><p>Home Protect AI began in a converted brownstone in Brooklyn, when our founder couldn't find a home security system that didn't feel like it belonged in a 1990s strip mall. We started with a single question — what if security was designed for the home, not against it?</p></Reveal>
          <Reveal delay={200}><p>Today, our team of engineers, designers, and operators protects 180,000 homes across all fifty states. Every device is engineered in New York. Every monitoring call is answered in under four rings by a US-based specialist. Every customer gets the same attention as our first.</p></Reveal>
          <Reveal delay={300}><p>We're independently owned, profitable, and in no rush to be anything else. We answer to our customers — not investors.</p></Reveal>
        </div>
      </div>
    </section>

    {/* Mission / values */}
    <section className="py-24 bg-foreground text-background">
      <div className="container-wide">
        <Reveal><span className="font-mono-label text-[11px] uppercase text-background/50">— Principles</span></Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95] max-w-4xl">
            Four <em className="text-accent-glow">commitments</em> that guide every decision.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-background/10 mt-20 rounded-3xl overflow-hidden">
          {[
            { n: "01", t: "Design with restraint", d: "If it doesn't earn its place in your home, it doesn't ship. We say no to features more often than yes." },
            { n: "02", t: "Humans, always", d: "Every alert is reviewed by a person before dispatch. AI assists. People decide." },
            { n: "03", t: "Privacy as default", d: "Your video is encrypted end-to-end. We never sell data. Every camera has a hardware shutter." },
            { n: "04", t: "Built to last", d: "12-year equipment warranty. Software updates for life. We don't believe in planned obsolescence." },
          ].map((v) => (
            <div key={v.n} className="p-12 bg-foreground">
              <span className="font-mono-label text-xs text-background/50">{v.n}</span>
              <h3 className="font-serif-display text-4xl mt-6 mb-4">{v.t}</h3>
              <p className="text-background/70 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="py-20 border-b border-hairline">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { v: "180k+", l: "Homes protected" },
          { v: "12yrs", l: "In operation" },
          { v: "640", l: "Team members" },
          { v: "50", l: "States served" },
        ].map((s) => (
          <Reveal key={s.l}>
            <div className="border-t border-hairline pt-5">
              <p className="font-serif-display text-6xl">{s.v}</p>
              <p className="font-mono-label text-[11px] uppercase text-muted-foreground mt-2">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="py-32">
      <div className="container-wide grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal><span className="eyebrow">— Milestones</span></Reveal>
          <Reveal delay={100}><h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">A decade of <em>quiet</em> progress.</h2></Reveal>
          <Reveal delay={200}>
            <img src={operatorCloseup} alt="Home Protect AI operator" loading="lazy" className="mt-10 rounded-3xl w-full" />
          </Reveal>
        </div>
        <div className="lg:col-span-8 lg:pl-12">
          <ol className="space-y-2">
            {[
              { y: "2014", t: "Founded in Brooklyn", d: "Our first hub ships from a converted brownstone — to thirty-four homes in the neighborhood." },
              { y: "2017", t: "Central station opens", d: "We open our first UL-listed monitoring station, staffed entirely by US-based specialists." },
              { y: "2019", t: "10,000 homes protected", d: "We hit our first major milestone — and turn down our first acquisition offer." },
              { y: "2021", t: "Aura Cam launch", d: "Our 4K HDR camera ships, becoming Wirecutter's top pick the same year." },
              { y: "2023", t: "Coast-to-coast", d: "Home Protect AI expands to all 50 states with same-week professional installation." },
              { y: "2026", t: "180,000 homes & growing", d: "Still independent. Still family-led. Still answering every call in under four rings." },
            ].map((m, i) => (
              <Reveal key={m.y} delay={i * 80}>
                <div className="grid grid-cols-12 gap-6 py-7 border-b border-hairline">
                  <div className="col-span-3 md:col-span-2"><span className="font-mono-label text-sm">{m.y}</span></div>
                  <div className="col-span-9 md:col-span-4"><h3 className="font-serif-display text-2xl">{m.t}</h3></div>
                  <div className="col-span-12 md:col-span-6"><p className="text-muted-foreground leading-relaxed">{m.d}</p></div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>

    {/* Founder quote */}
    <section className="py-32 bg-canvas-2/50 border-y border-hairline">
      <div className="container-wide max-w-5xl">
        <Reveal><span className="eyebrow">— A note from the founder</span></Reveal>
        <Reveal delay={100}>
          <blockquote className="font-serif-display text-4xl md:text-6xl leading-[1.1] mt-8">
            "I started Home Protect AI because my mother's alarm system <em>scared</em> her more than any burglar ever did. We promised ourselves we'd build something that felt like care, not surveillance."
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex items-center gap-4">
            <img src={team1} alt="Eleanor Voss" loading="lazy" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="font-medium">Eleanor Voss</p>
              <p className="text-xs text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Team */}
    <section className="py-32">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <Reveal><span className="eyebrow">— Leadership</span></Reveal>
            <Reveal delay={100}><h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">The people on call.</h2></Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: team1, name: "Eleanor Voss", role: "Founder & CEO" },
            { img: team2, name: "Marcus Chen", role: "Chief Technology Officer" },
            { img: team3, name: "Sarah Patel", role: "VP of Operations" },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-canvas-2 mb-5">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif-display text-3xl">{t.name}</h3>
                <p className="font-mono-label text-xs uppercase text-muted-foreground mt-1">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Community / CSR */}
    <section className="py-32">
      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden">
            <img src={neighborhoodAerial} alt="Communities Home Protect AI serves" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-6 lg:pl-8">
          <span className="eyebrow">— In the community</span>
          <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95] mb-6">Security is a <em>shared</em> responsibility.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">We donate complete systems to domestic-violence shelters, train first-responders nationwide, and contribute 1% of revenue to neighborhood safety programs.</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Heart, v: "1,200+", l: "Shelters protected" },
              { icon: Users, v: "8,400", l: "Officers trained" },
              { icon: Leaf, v: "1%", l: "Revenue donated" },
            ].map((c) => (
              <div key={c.l} className="border-t border-hairline pt-5">
                <c.icon className="w-5 h-5 text-accent mb-3" />
                <p className="font-serif-display text-3xl">{c.v}</p>
                <p className="font-mono-label text-[10px] uppercase text-muted-foreground mt-2">{c.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* Offices */}
    <section className="py-32 bg-foreground text-background">
      <div className="container-wide">
        <Reveal><span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/50">— Offices</span></Reveal>
        <Reveal delay={100}><h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95] max-w-3xl">Studios, stations, and <em className="text-accent-glow">support</em> across the country.</h2></Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-3xl overflow-hidden">
          {[
            { city: "Brooklyn, NY", role: "HQ & Design Studio", addr: "24 Vesey Street" },
            { city: "Austin, TX", role: "Engineering", addr: "404 Rainey Street" },
            { city: "Denver, CO", role: "Central Monitoring", addr: "1 Republic Plaza" },
            { city: "Atlanta, GA", role: "Field Operations", addr: "1180 Peachtree" },
          ].map((o) => (
            <div key={o.city} className="bg-foreground p-8">
              <MapPin className="w-5 h-5 text-accent-glow mb-6" />
              <h3 className="font-serif-display text-2xl mb-2">{o.city}</h3>
              <p className="font-mono-label text-[10px] uppercase text-background/50 mb-3">{o.role}</p>
              <p className="text-sm text-background/70">{o.addr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-24 bg-canvas-2/40 border-y border-hairline">
      <div className="container-wide">
        <Reveal><span className="eyebrow">— Certifications</span></Reveal>
        <Reveal delay={100}><h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95] max-w-3xl">Vetted by the <em>strictest</em> standards in the industry.</h2></Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { t: "UL-2050", d: "Listed Central Station" },
            { t: "SOC 2 Type II", d: "Annually audited" },
            { t: "ISO 27001", d: "Information security" },
            { t: "FCC Part 15", d: "All wireless devices" },
            { t: "Energy Star", d: "Low-power certified" },
            { t: "Matter 1.3", d: "Smart home interop" },
            { t: "ULC-S301", d: "Canadian standards" },
            { t: "PCI DSS", d: "Payment security" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 50}>
              <div className="p-6 bg-card rounded-2xl border border-border/60">
                <p className="font-serif-display text-2xl">{c.t}</p>
                <p className="text-xs text-muted-foreground mt-2">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default About;
