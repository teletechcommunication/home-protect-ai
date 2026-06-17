import { PageHero } from "@/components/sections/PageHero";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/site/SEO";
import { Link } from "react-router-dom";
import { Home, Building2, Briefcase, Activity, Camera, Bell, Fingerprint, ArrowUpRight, Flame, Droplet, Siren, ShieldCheck, Wifi, Eye, Map, ClipboardCheck, Wrench, HeartPulse } from "lucide-react";
import apartmentImg from "@/assets/apartment.jpg";
import businessImg from "@/assets/business.jpg";
import heroHome from "@/assets/hero-home.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productSensor from "@/assets/product-sensor.jpg";
import productLock from "@/assets/product-lock.jpg";
import installTeam from "@/assets/install-team.jpg";
import livingRoomSmart from "@/assets/living-room-smart.jpg";

const solutions = [
  { icon: Home, n: "01", title: "Home Security", img: heroHome, desc: "Comprehensive protection for single-family homes — door, window, motion, glass-break, and AI camera coverage. Monitored 24/7 from our New York central station.", points: ["Whole-home sensor coverage", "AI-verified video alerts", "Cellular + battery failover", "Free professional install"] },
  { icon: Building2, n: "02", title: "Apartment Security", img: apartmentImg, desc: "Renter-friendly systems that move with you. No drilling, no permanent installation, no landlord conversations — just smart protection in 30 minutes.", points: ["Wireless adhesive sensors", "Portable hub design", "Building-friendly cameras", "Tenant-only insurance"] },
  { icon: Briefcase, n: "03", title: "Small Business", img: businessImg, desc: "Commercial-grade protection without the commercial complexity. Storefront cameras, employee access control, and after-hours monitoring designed for owner-operators.", points: ["Open/close reporting", "Employee codes & schedules", "License-plate detection", "Insurance discount certificates"] },
  { icon: Activity, n: "04", title: "Smart Monitoring", img: monitoringCenter, desc: "Our UL-listed monitoring station verifies every alert with live video before dispatch. Faster police response, fewer false alarms, more peace of mind.", points: ["Median 0.4s response", "Video verification first", "Bilingual operators", "Direct emergency dispatch"] },
  { icon: Camera, n: "05", title: "Camera Systems", img: productCamera, desc: "From single doorbells to full perimeter coverage — our 4K cameras feature true HDR, color night vision, and on-device AI that distinguishes people from packages.", points: ["4K HDR sensors", "60-day cloud storage", "Local NVR option", "Privacy zones built-in"] },
  { icon: Bell, n: "06", title: "Alarm Protection", img: productSensor, desc: "Layered intrusion detection with sensors that learn your routines. Smart triggers reduce false alarms by 94% compared to traditional alarm systems.", points: ["Pet-immune motion", "Glass-break acoustics", "Smoke + CO integration", "Silent panic mode"] },
  { icon: Fingerprint, n: "07", title: "Smart Access", img: productLock, desc: "Replace your keys with elegant smart locks, keypads, and biometric readers. Grant time-limited access, audit every entry, and never worry about a lost key again.", points: ["Rotating PIN codes", "Geofence auto-lock", "Apple Wallet integration", "Tamper-resistant design"] },
];

const Solutions = () => (
  <main>
    <SEO 
      title="Security Solutions | Home Protect AI"
      description="Explore our range of intelligent home security solutions, from single-family home systems to renter-friendly apartment options and small business protection."
    />
    <PageHero eyebrow="— Index 02" index="07 solutions" title={<>Built for every kind of <em>home</em>.</>} description="From a one-bedroom apartment to a multi-acre estate — Home Protect AI designs the right protection for the way you live, not a one-size-fits-all kit." />

    {/* Coverage capabilities strip */}
    <section className="py-20 bg-canvas-2/40 border-y border-hairline" aria-label="Security Capabilities">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Reveal><span className="eyebrow">— Capabilities</span></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-4xl md:text-5xl mt-4 leading-[0.95]">Total coverage,<br/><em>one</em> trusted system.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border/60 rounded-3xl overflow-hidden">
            {[
              { icon: Siren, t: "Intrusion", d: "Layered sensors with verified police dispatch." },
              { icon: Flame, t: "Fire & Smoke", d: "Direct fire-department response, day or night." },
              { icon: Droplet, t: "Water & Freeze", d: "Catch leaks before the floor is gone." },
              { icon: HeartPulse, t: "Medical & CO", d: "One-touch EMT and CO detection." },
              { icon: Camera, t: "Video", d: "4K HDR with on-device AI scene analysis." },
              { icon: Wifi, t: "Smart Home", d: "Matter, Z-Wave, Apple Home & Alexa." },
            ].map((c) => (
              <div key={c.t} className="bg-card p-6">
                <c.icon className="w-5 h-5 text-accent mb-4" />
                <p className="font-serif-display text-xl">{c.t}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20" aria-label="Individual Security Solutions">
      <div className="container-wide space-y-32">
        {solutions.map((s, i) => (
          <Reveal key={s.title}>
            <div className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-canvas-2">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-6 lg:px-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center"><s.icon className="w-5 h-5" aria-hidden="true" /></div>
                  <span className="font-mono-label text-xs text-muted-foreground">{s.n} / SOLUTION</span>
                </div>
                <h2 className="font-serif-display text-5xl md:text-6xl leading-[0.95] mb-6">{s.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2.5" aria-hidden="true" />{p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-ghost" aria-label={`Discuss ${s.title} solution with a specialist`}>Discuss this solution <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Process / how we tailor */}
    <section className="py-32 bg-foreground text-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <Reveal><span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/50">— Tailored to you</span></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">Designed in four <em className="text-accent-glow">conversations.</em></h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={200}><p className="text-lg text-background/70 leading-relaxed">No salespeople. No quotas. Just security designers who study your home — and recommend exactly what it needs, nothing it doesn't.</p></Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-3xl overflow-hidden">
          {[
            { icon: Map, n: "01", t: "Walk your home", d: "Virtual or in-person, we map every entry, blind spot, and routine." },
            { icon: ClipboardCheck, n: "02", t: "Custom blueprint", d: "A device-by-device plan with every camera angle and sensor location." },
            { icon: Wrench, n: "03", t: "White-glove install", d: "Background-checked technicians complete most homes in 3-4 hours." },
            { icon: ShieldCheck, n: "04", t: "Live walkthrough", d: "We train your household and arm the system together — same day." },
          ].map((s) => (
            <div key={s.n} className="bg-foreground p-8">
              <s.icon className="w-6 h-6 text-accent-glow mb-8" />
              <span className="font-mono-label text-xs text-background/40">{s.n}</span>
              <h3 className="font-serif-display text-2xl mt-3 mb-3">{s.t}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Indoor vs outdoor visual */}
    <section className="py-32">
      <div className="container-wide grid lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-3xl overflow-hidden bg-canvas-2 relative aspect-[4/5]">
            <img src={livingRoomSmart} alt="Indoor protection" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-foreground/80 to-transparent text-background">
              <span className="font-mono-label text-[10px] uppercase text-background/70">— Indoor</span>
              <h3 className="font-serif-display text-4xl mt-2 mb-3">Inside, with discretion</h3>
              <p className="text-sm text-background/80 max-w-md leading-relaxed">Privacy-shutter cameras, gentle motion sensors, and smart hubs that disappear into the room.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="rounded-3xl overflow-hidden bg-canvas-2 relative aspect-[4/5]">
            <img src={installTeam} alt="Outdoor protection install" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-foreground/80 to-transparent text-background">
              <span className="font-mono-label text-[10px] uppercase text-background/70">— Outdoor</span>
              <h3 className="font-serif-display text-4xl mt-2 mb-3">Outside, without compromise</h3>
              <p className="text-sm text-background/80 max-w-md leading-relaxed">Weather-rated 4K cameras, license-plate recognition, and motion-activated floodlights.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Industry-specific quick links */}
    <section className="py-24 bg-canvas-2/40 border-y border-hairline">
      <div className="container-wide">
        <div className="mb-16">
          <Reveal><span className="eyebrow">— Property types</span></Reveal>
          <Reveal delay={100}><h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95] max-w-3xl">A purpose-built plan for every <em>property.</em></h2></Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "Single-family home", d: "Whole-home sensor coverage with 24/7 verified monitoring." },
            { t: "Apartment & condo", d: "Renter-friendly wireless system, no drilling required." },
            { t: "Vacation property", d: "Remote arming, leak detection, and freeze alerts." },
            { t: "Small business", d: "Open/close reporting, employee codes, after-hours alerts." },
            { t: "Multi-family building", d: "Lobby intercom, package room cameras, tenant access." },
            { t: "Estate & large property", d: "Perimeter cameras, gated entry, license-plate AI." },
            { t: "New construction", d: "Pre-wire consultation and integrated low-voltage design." },
            { t: "Short-term rental", d: "Self-check-in keypads with rotating guest codes." },
          ].map((p) => (
            <Reveal key={p.t}>
              <div className="card-soft p-6 h-full">
                <h3 className="font-serif-display text-2xl mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default Solutions;

