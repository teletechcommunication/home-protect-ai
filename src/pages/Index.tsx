import { Link } from "react-router-dom";
import { Reveal } from "@/components/site/Reveal";
import { CTAFooter } from "@/components/sections/CTAFooter";
import heroHome from "@/assets/hero-home.jpg";
import lifestyleFamily from "@/assets/lifestyle-family.jpg";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import installerImg from "@/assets/installer.jpg";
import appDashboard from "@/assets/app-dashboard.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productCamHero from "@/assets/product-cam.png";
import productDoorbell from "@/assets/product-doorbell.jpg";
import productLock from "@/assets/product-lock.jpg";
import productSensor from "@/assets/product-sensor.jpg";
import homeExteriorDusk from "@/assets/home-exterior-dusk.jpg";
import operatorCloseup from "@/assets/operator-closeup.jpg";
import livingRoomSmart from "@/assets/living-room-smart.jpg";
import neighborhoodAerial from "@/assets/neighborhood-aerial.jpg";
import installTeam from "@/assets/install-team.jpg";
import { ShieldCheck, Camera, BellRing, KeyRound, Radar, Smartphone, Wrench, Activity, ArrowUpRight, Star, MapPin, PhoneCall, Eye } from "lucide-react";

const PHONE = "8559438332";
const PHONE_DISPLAY = "855-943-8332";

const Index = () => {
  return (
    <>
      {/* HERO — product showcase ====================== */}
      <section className="relative min-h-[100svh] pt-20 pb-20 sm:pb-10 overflow-x-hidden bg-background">
        {/* Radial glow behind product */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-accent/8 blur-[120px]" />
        </div>

        <div className="container-wide relative z-10 flex flex-col h-full">

          {/* ── Top title with floating elements ── */}
          <div className="relative text-center mb-4 md:mb-0">


            {/* Floating icons — left side */}
            <div className="hidden lg:block pointer-events-none select-none">
              <span className="absolute left-[4%] top-[18%] float-1 w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-soft">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </span>
              <span className="absolute left-[10%] top-[55%] float-3 w-9 h-9 rounded-xl bg-foreground/8 border border-foreground/10 flex items-center justify-center shadow-soft">
                <Eye className="w-4 h-4 text-foreground/60" />
              </span>
              <span className="absolute left-[2%] top-[75%] float-5 w-10 h-10 rounded-2xl bg-accent/8 border border-accent/15 flex items-center justify-center shadow-soft">
                <Radar className="w-4 h-4 text-accent" />
              </span>
            </div>

            {/* Floating icons — right side */}
            <div className="hidden lg:block pointer-events-none select-none">
              <span className="absolute right-[4%] top-[22%] float-2 w-11 h-11 rounded-2xl bg-foreground/8 border border-foreground/10 flex items-center justify-center shadow-soft">
                <Camera className="w-5 h-5 text-foreground/60" />
              </span>
              <span className="absolute right-[12%] top-[58%] float-4 w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shadow-soft">
                <Activity className="w-4 h-4 text-accent" />
              </span>
              <span className="absolute right-[3%] top-[78%] float-6 w-10 h-10 rounded-2xl bg-foreground/6 border border-foreground/10 flex items-center justify-center shadow-soft">
                <Star className="w-4 h-4 text-foreground/50" />
              </span>
            </div>

            {/* Title */}
            <Reveal>
              <p className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Smart Security · Precision Protection</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 style={{ fontFamily: "Bebas Neue, cursive", letterSpacing: "0.01em" }}
                  className="leading-[0.85] text-[clamp(2.8rem,11vw,13rem)] uppercase text-foreground">
                Always
              </h1>
            </Reveal>
            <Reveal delay={130}>
              <p style={{ fontFamily: "Bebas Neue, cursive", letterSpacing: "0.01em" }}
                 className="leading-[0.85] text-[clamp(2.8rem,11vw,13rem)] uppercase -mt-2">
                <span className="text-accent">Guard</span> Home
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-4">by Home Protect AI Security</p>
            </Reveal>
          </div>

          {/* ── Main 3-column layout ── */}
          <div className="grid lg:grid-cols-[220px_1fr_220px] gap-6 items-center mt-6 md:mt-10 flex-1">

            {/* LEFT PANEL */}
            <Reveal delay={200} className="hidden lg:flex flex-col justify-between h-full py-4 gap-8">
              {/* Mini product thumb */}
              <div>
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-canvas-2 border border-hairline mb-4">
                  <img src={productCamera} alt="Aura Cam Pro" className="w-full h-full object-cover" />
                </div>
                <p className="font-mono-label text-[9px] uppercase text-muted-foreground">Smart Security</p>
                <p className="text-sm font-semibold mt-0.5 text-accent leading-tight">Precision Vision</p>
                <p className="text-sm font-semibold text-accent leading-tight">Meets Technology</p>
                <p className="font-mono-label text-[9px] uppercase text-muted-foreground mt-0.5">By Home Protect AI</p>
              </div>

              {/* Specs */}
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, label: "Warranty", value: "12 Years" },
                  { icon: Activity,    label: "Uptime",   value: "99.99%" },
                  { icon: Star,        label: "Rating",   value: "4.9 / 5.0" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3 bg-canvas-2/70 border border-hairline rounded-xl px-4 py-3">
                    <s.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                    <div>
                      <p className="font-mono-label text-[9px] uppercase text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-medium">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href={`tel:${PHONE}`} className="btn-primary text-xs justify-center">
                See Full Catalogue <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Reveal>

            {/* CENTER — hero product image with floating badges */}
            <div className="relative flex flex-col items-center justify-center">
              {/* Floating badge — top left — Desktop Only */}
              <Reveal delay={350}>
                <div className="hidden lg:flex absolute top-4 left-0 lg:-left-4 z-20 bg-background border border-hairline rounded-full shadow-soft px-4 py-2 items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <div>
                    <p className="text-[10px] font-semibold leading-none">IP66 Rated</p>
                    <p className="font-mono-label text-[8px] text-muted-foreground mt-0.5">Weatherproof</p>
                  </div>
                </div>
              </Reveal>


              {/* Product image */}
              <Reveal delay={250} className="w-full flex justify-center">
                <div className="relative w-[85%] mx-auto -mt-10">
                  <img
                    src={productCamHero}
                    alt="Aura Cam Pro"
                    className="w-full h-auto"
                    style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.20))" }}
                  />
                  {/* Floating pill badges over the image — Desktop Only */}
                  <div className="hidden lg:flex absolute bottom-16 left-0 flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 bg-background/90 backdrop-blur border border-hairline rounded-full px-3 py-1.5 shadow-soft">
                      <Camera className="w-3 h-3 text-accent" />
                      <span className="text-[10px] font-semibold">4K HDR Active</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-background/90 backdrop-blur border border-hairline rounded-full px-3 py-1.5 shadow-soft">
                      <ShieldCheck className="w-3 h-3 text-accent" />
                      <span className="text-[10px] font-semibold">UL Certified</span>
                    </span>
                  </div>
                  <div className="hidden lg:block absolute bottom-16 right-0">
                    <span className="flex items-center gap-1.5 bg-foreground text-background rounded-full px-3 py-1.5 shadow-soft">
                      <Radar className="w-3 h-3 text-accent-glow" />
                      <span className="text-[10px] font-semibold">Free Install</span>
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Bottom badge / Pricing — Responsive */}
              <Reveal delay={450} className="w-full lg:w-auto lg:absolute lg:right-[-60px] lg:top-1/2 lg:-translate-y-1/2 lg:z-30">
                <div className="relative mt-8 lg:mt-0 bg-foreground text-background rounded-2xl px-6 py-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-3 sm:gap-6 lg:gap-4 shadow-lift text-center sm:text-left mx-auto max-w-[280px] sm:max-w-none lg:min-w-[180px]">
                  <div>
                    <p className="font-mono-label text-[10px] uppercase text-background/50 mb-1">Starting at</p>
                    <p className="font-serif-display text-3xl leading-none">$29<span className="text-sm font-sans font-normal text-background/60">/mo</span></p>
                  </div>
                  <div className="hidden sm:block lg:hidden w-px h-10 bg-background/20" />
                  <div className="hidden lg:block w-full h-px bg-background/20" />
                  <a href={`tel:${PHONE}`} className="text-sm font-medium text-background/80 hover:text-background transition-colors flex items-center gap-1.5">
                    Call {PHONE_DISPLAY} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>

              {/* Stats Cards — Mobile/Tablet Only */}
              <Reveal delay={550} className="lg:hidden w-full mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { icon: ShieldCheck, label: "Warranty", value: "12 Years" },
                    { icon: Activity,    label: "Uptime",   value: "99.99%" },
                    { icon: Star,        label: "Rating",   value: "4.9 / 5.0" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 bg-canvas-2 border border-hairline rounded-xl px-4 py-3">
                      <s.icon className="w-4 h-4 text-accent shrink-0" />
                      <div className="text-left">
                        <p className="font-mono-label text-[9px] uppercase text-muted-foreground">{s.label}</p>
                        <p className="text-sm font-medium">{s.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT PANEL */}
            <Reveal delay={300} className="hidden lg:flex flex-col justify-between h-full py-4 gap-8">
              {/* Variant selector */}
              <div>
                <p className="font-mono-label text-[9px] uppercase text-muted-foreground mb-3">Camera Series</p>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Cam Pro", active: true,  img: productCamera },
                    { name: "Doorbell", active: false, img: productDoorbell },
                  ].map((v) => (
                    <div key={v.name} className={`flex items-center gap-3 rounded-xl border px-3 py-2 cursor-pointer transition-colors ${v.active ? "border-foreground bg-foreground/5" : "border-hairline hover:border-foreground/30"}`}>
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-canvas-2 shrink-0">
                        <img src={v.img} alt={v.name} className="w-full h-full object-cover" />
                      </div>
                      <p className={`text-xs font-medium ${v.active ? "text-foreground" : "text-muted-foreground"}`}>{v.name}</p>
                    </div>
                  ))}
                </div>
              </div>


              {/* Description */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Intelligent cameras, professional monitoring, and elegant smart devices — engineered to protect what matters.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`tel:${PHONE}`} className="btn-ghost text-xs px-4 py-2">Get a quote</a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Mobile CTA row (visible below lg) */}
          <div className="lg:hidden mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground text-sm max-w-sm">Intelligent cameras, professional monitoring, and elegant smart devices — engineered to protect what matters.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${PHONE}`} className="btn-primary">Get a free quote <ArrowUpRight className="w-4 h-4" /></a>
              <a href={`tel:${PHONE}`} className="btn-ghost">Call {PHONE_DISPLAY}</a>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST MARQUEE ===================== */}
      <section className="border-y border-hairline bg-canvas-2/40 py-8 overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              {["UL Listed", "FCC Certified", "SOC 2 Type II", "ISO 27001", "ULC Approved", "Energy Star", "Z-Wave Plus", "Matter Ready"].map((b) => (
                <span key={b + i} className="font-mono-label text-xs uppercase tracking-[0.18em] text-muted-foreground">— {b}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STATEMENT ====================== */}
      <section className="py-16 md:py-32 lg:py-40">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <Reveal><span className="eyebrow">— 01 / Manifesto</span></Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <p className="font-serif-display text-3xl md:text-5xl leading-[1.15] tracking-tight">
                We believe security should feel <em>invisible</em> until it matters — and then it should be the most important thing in the room. Home Protect AI builds systems that watch quietly, respond instantly, and live beautifully alongside the things you love.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOLUTIONS — bento asymmetric grid ====================== */}
      <section className="py-24 border-y border-hairline overflow-hidden">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <Reveal><span className="eyebrow">— 03 / Solutions</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95]">
                  Protection<br/>by <em>design.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <a href={`tel:${PHONE}`} className="btn-ghost">Call to learn more <ArrowUpRight className="w-4 h-4" /></a>
            </Reveal>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 auto-rows-auto">

            {/* Cell 1 — large hero card, spans 5 cols × 2 rows */}
            <Reveal delay={0} className="sm:col-span-2 md:col-span-5 md:row-span-2">
              <a href={`tel:${PHONE}`} className="group flex flex-col justify-between h-full min-h-[360px] md:min-h-[480px] bg-foreground text-background rounded-3xl p-10 hover:ring-2 hover:ring-accent transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-8">
                    <ShieldCheck className="w-6 h-6 text-accent-glow" />
                  </div>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-background/40">01</span>
                  <h3 className="font-serif-display text-5xl md:text-6xl mt-3 leading-[0.92]">Home<br/>Security</h3>
                </div>
                <div>
                  <p className="text-background/70 text-sm leading-relaxed mb-8 max-w-xs">End-to-end protection for single-family homes, with sensors at every entry and intelligent automation.</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-background/60 group-hover:text-background transition-colors">
                    Learn more <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </Reveal>

            {/* Cell 2 — top-right medium */}
            <Reveal delay={80} className="sm:col-span-1 md:col-span-4">
              <a href={`tel:${PHONE}`} className="group flex flex-col justify-between h-full min-h-[220px] bg-canvas-2 border border-hairline rounded-3xl p-8 hover:bg-canvas-2/80 hover:ring-2 hover:ring-accent transition-all">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">02</span>
                </div>
                <div>
                  <h3 className="font-serif-display text-3xl mt-6 mb-2">Smart Cameras</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">4K HDR with AI person, package & vehicle detection.</p>
                </div>
              </a>
            </Reveal>

            {/* Cell 3 — top-right accent */}
            <Reveal delay={120} className="sm:col-span-1 md:col-span-3">
              <a href={`tel:${PHONE}`} className="group flex flex-col justify-between h-full min-h-[220px] bg-accent/10 border border-accent/20 rounded-3xl p-8 hover:bg-accent/20 hover:ring-2 hover:ring-accent transition-all">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                  <BellRing className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">03</span>
                  <h3 className="font-serif-display text-3xl mt-2 mb-2">Video Doorbells</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Crystal-clear two-way audio from anywhere.</p>
                </div>
              </a>
            </Reveal>

            {/* Cell 4 — bottom-right medium */}
            <Reveal delay={160} className="sm:col-span-1 md:col-span-3">
              <a href={`tel:${PHONE}`} className="group flex flex-col justify-between h-full min-h-[220px] bg-canvas-2 border border-hairline rounded-3xl p-8 hover:ring-2 hover:ring-accent transition-all">
                <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">04</span>
                  <h3 className="font-serif-display text-3xl mt-2 mb-2">Smart Locks</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">Rotating PINs, geofence auto-lock & full audit trail.</p>
                </div>
              </a>
            </Reveal>

            {/* Cell 5 — bottom-right dark */}
            <Reveal delay={200} className="sm:col-span-1 md:col-span-4">
              <a href={`tel:${PHONE}`} className="group flex flex-col justify-between h-full min-h-[220px] bg-foreground text-background rounded-3xl p-8 hover:ring-2 hover:ring-accent transition-all">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center">
                    <Radar className="w-5 h-5 text-accent-glow" />
                  </div>
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-background/40">05</span>
                </div>
                <div>
                  <h3 className="font-serif-display text-3xl mt-6 mb-2">Motion Sensors</h3>
                  <p className="text-background/60 text-xs leading-relaxed">Pet-immune millimeter-wave precision — zero false triggers.</p>
                </div>
              </a>
            </Reveal>

            {/* Cell 6 — full-width banner */}
            <Reveal delay={240} className="sm:col-span-2 md:col-span-12">
              <a href={`tel:${PHONE}`} className="group flex flex-col md:flex-row items-center justify-between gap-6 bg-foreground text-background rounded-3xl px-10 py-8 hover:ring-2 hover:ring-accent transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-accent-glow" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] uppercase tracking-widest text-background/40">06</span>
                    <h3 className="font-serif-display text-4xl md:text-5xl leading-[0.95] mt-1">24/7 Monitoring</h3>
                  </div>
                </div>
                <p className="text-background/65 text-sm leading-relaxed max-w-sm">Our UL-listed central station dispatches help in under 30 seconds — verified by video first, every single time.</p>
                <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-background/60 group-hover:text-background group-hover:gap-3 transition-all">
                  Call now <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </Reveal>

          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE — no prices ==================== */}
      <section className="py-32 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <Reveal><span className="eyebrow">— 04 / Hardware</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95]">The Home Protect AI<br/><em>collection.</em></h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <Reveal delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each device is engineered in-house and finished to live in your home. No clunky plastic. No glowing logos. Just refined hardware that works in concert.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: productCamera, name: "Aura Cam Pro", tag: "4K · HDR" },
              { img: productDoorbell, name: "Sentinel Bell", tag: "Two-way HD" },
              { img: productLock, name: "Vault Lock", tag: "Auto-Lock" },
              { img: productSensor, name: "Pulse Sensor", tag: "Pet-Immune" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <a href={`tel:${PHONE}`} className="group block">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-canvas-2 mb-5 relative">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono-label text-[10px] uppercase tracking-wider bg-background/90 backdrop-blur px-3 py-1.5 rounded-full">{p.tag}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif-display text-2xl">{p.name}</h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 flex justify-center">
              <a href={`tel:${PHONE}`} className="btn-ghost">Browse all products <ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US — split feature ====================== */}
      <section className="py-16 md:py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-40" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/50">— 05 / Why Home Protect AI</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-7xl mt-6 leading-[0.95]">
                  More than alarms.<br/>A <em className="text-accent-glow">commitment.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-background/70 leading-relaxed max-w-lg">
                  We staff every monitoring station with US-based experts. We design every device in our New York studio. We answer every call in under 4 rings. That's the Home Protect AI standard.
                </p>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8">
                {[
                  { v: "180k+", l: "Homes protected" },
                  { v: "0.4s", l: "Median alert response" },
                  { v: "4.9/5", l: "Customer rating" },
                  { v: "12yr", l: "Equipment warranty" },
                ].map((s, i) => (
                  <Reveal key={s.l} delay={300 + i * 80}>
                    <div className="border-t border-background/15 pt-5">
                      <p className="font-serif-display text-5xl">{s.v}</p>
                      <p className="font-mono-label text-[11px] uppercase tracking-wider text-background/50 mt-2">{s.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-12">
              <Reveal delay={150}>
                <div className="relative">
                  <img src={monitoringCenter} alt="24/7 Home Protect AI monitoring center" loading="lazy" className="rounded-3xl w-full" />
                  <div className="absolute -bottom-6 -left-6 bg-background text-foreground p-6 rounded-2xl shadow-lift max-w-xs">
                    <p className="font-mono-label text-[10px] uppercase text-muted-foreground mb-2">Home Protect AI Central</p>
                    <p className="font-serif-display text-2xl leading-tight">Always on. Always human. Always here.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING DETAIL ============ */}
      <section className="py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src={operatorCloseup} alt="Home Protect AI monitoring operator" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <div className="lg:col-span-7 lg:pl-8">
              <Reveal><span className="eyebrow">— 06 / Verified Response</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">A <em>real person</em> verifies every alert.</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  When a sensor trips, our specialists pull the live camera feed, confirm what's happening, and dispatch police, fire, or EMTs — usually before you've even reached for your phone.
                </p>
              </Reveal>
              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {[
                  { v: "30s", l: "Avg dispatch time" },
                  { v: "94%", l: "False-alarm reduction" },
                  { v: "6", l: "Redundant US stations" },
                ].map((s, i) => (
                  <Reveal key={s.l} delay={300 + i * 80}>
                    <div className="border-t border-hairline pt-5">
                      <p className="font-serif-display text-5xl">{s.v}</p>
                      <p className="font-mono-label text-[11px] uppercase text-muted-foreground mt-2">{s.l}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP / MONITORING BANNER ============== */}
      <section className="py-24 bg-canvas-2/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Reveal><span className="eyebrow">— 07 / The App</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">Your home,<br/>in your <em>pocket.</em></h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-muted-foreground max-w-lg">Arm, disarm, view live feeds, share access, and receive AI-verified alerts — all from one beautifully simple app.</p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Smartphone, t: "Live HD feeds", d: "Stream every camera in 4K" },
                    { icon: Activity, t: "Smart alerts", d: "AI filters out the noise" },
                    { icon: KeyRound, t: "Guest access", d: "Time-limited PINs in seconds" },
                    { icon: ShieldCheck, t: "One-tap arm", d: "From your wrist or phone" },
                  ].map((f) => (
                    <div key={f.t} className="flex gap-4 p-5 rounded-2xl bg-background border border-border/60">
                      <f.icon className="w-5 h-5 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium text-sm">{f.t}</p>
                        <p className="text-xs text-muted-foreground mt-1">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <img src={appDashboard} alt="Home Protect AI app" loading="lazy" className="rounded-3xl w-full" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SMART HOME LIFESTYLE ============== */}
      <section className="py-32">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6">
            <span className="eyebrow">— 08 / Smart Home</span>
            <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95] mb-6">A home that <em>thinks</em> with you.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Lights that greet you home. Locks that recognize your phone. Thermostats that know when you're away. Home Protect AI binds your security and smart-home into one seamless experience — controlled by voice, app, or schedule.
            </p>
            <ul className="space-y-3">
              {[
                "Works with Apple Home, Google Home & Alexa",
                "Matter & Z-Wave Plus certified",
                "Geofence routines & adaptive scenes",
                "Energy savings up to 23% per year",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />{p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={livingRoomSmart} alt="Smart living room" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING ====================== */}
      <section className="py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-25" />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <Reveal><span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/50">— Pricing</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95]">Simple plans.<br/><em className="text-accent-glow">Serious</em> security.</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <Reveal delay={200}>
                <p className="text-lg text-background/65 leading-relaxed">Every plan includes professional installation, a 12-year equipment warranty, and month-to-month flexibility — no long-term contracts, ever.</p>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Essential",
                price: "$29",
                period: "/mo",
                tag: "Start here",
                featured: false,
                feats: [
                  "Smart hub + 4 entry sensors",
                  "1 indoor Aura Cam",
                  "Mobile app control",
                  "Self or pro monitoring",
                  "24-hr battery backup",
                  "Free professional install",
                ],
              },
              {
                name: "Family",
                price: "$49",
                period: "/mo",
                tag: "Most chosen",
                featured: true,
                feats: [
                  "Smart hub + 8 sensors",
                  "3 cameras + Sentinel Bell",
                  "24/7 verified monitoring",
                  "Vault Smart Lock",
                  "Smart home automation",
                  "AI-verified alerts",
                  "Guest & family access",
                ],
              },
              {
                name: "Ultimate",
                price: "$79",
                period: "/mo",
                tag: "Total control",
                featured: false,
                feats: [
                  "Smart hub + 16 sensors",
                  "6 cameras + 2 doorbells",
                  "24/7 video monitoring",
                  "2 smart locks",
                  "Full smart-home suite",
                  "CO & flood detection",
                  "Medical pendant included",
                ],
              },
            ].map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all ${plan.featured ? "bg-background text-foreground border-background shadow-lift md:scale-[1.02]" : "bg-background/5 border-background/15 hover:bg-background/10"}`}>
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono-label text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-4 py-1.5 rounded-full">Most Popular</span>
                  )}
                  <div className="mb-8">
                    <p className={`font-mono-label text-[11px] uppercase tracking-widest mb-3 ${plan.featured ? "text-muted-foreground" : "text-background/50"}`}>{plan.tag}</p>
                    <h3 className="font-serif-display text-4xl mb-5">{plan.name}</h3>
                    <div className="flex items-end gap-1">
                      <span className="font-serif-display text-6xl leading-none">{plan.price}</span>
                      <span className={`text-sm mb-2 ${plan.featured ? "text-muted-foreground" : "text-background/50"}`}>{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-10">
                    {plan.feats.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${plan.featured ? "bg-accent" : "bg-accent-glow"}`} />
                        <span className={plan.featured ? "text-foreground/85" : "text-background/75"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${PHONE}`} className={`w-full text-center rounded-full py-4 text-sm font-medium transition-all ${plan.featured ? "bg-foreground text-background hover:bg-foreground/90" : "border border-background/25 text-background hover:bg-background/10"}`}>
                    Call to get started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-10 text-center text-sm text-background/40 font-mono-label">All plans · Month-to-month · Cancel anytime · No hidden fees</p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS ====================== */}
      <section className="py-16 md:py-32 bg-canvas-2/40 border-y border-hairline">
        <div className="container-wide">
          <Reveal><span className="eyebrow">— 09 / Customers</span></Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95] mb-16 max-w-3xl">Trusted in <em>180,000</em> homes across America.</h2>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6">
            <Reveal delay={100} className="lg:col-span-7">
              <div className="bg-card border border-border/60 rounded-3xl p-10 h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />)}
                </div>
                <p className="font-serif-display text-3xl md:text-4xl leading-[1.2]">
                  "The install team was in and out in three hours. The app is the cleanest piece of software I've used in years. And the night someone tried our back door, the response was instant."
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-serif-display text-xl">M</div>
                  <div>
                    <p className="font-medium text-sm">Maya Reinholt</p>
                    <p className="text-xs text-muted-foreground">Family customer · Brooklyn, NY</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-5 space-y-6">
              {[
                { q: "Beautifully designed and impossibly easy to use. Everyone in the family figured it out in five minutes.", n: "Daniel R.", c: "Austin, TX" },
                { q: "We compared four other systems. Home Protect AI was the only one that didn't feel like a downgrade to our home.", n: "Priya S.", c: "Seattle, WA" },
              ].map((t, i) => (
                <Reveal key={t.n} delay={200 + i * 100}>
                  <div className="bg-card border border-border/60 rounded-3xl p-7">
                    <p className="text-base leading-relaxed">"{t.q}"</p>
                    <p className="mt-5 font-mono-label text-xs text-muted-foreground">— {t.n}, {t.c}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE / NEIGHBORHOOD ============== */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={neighborhoodAerial} alt="Home Protect AI-protected neighborhood" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container-wide relative text-background">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Reveal><span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/60">— 10 / Coverage</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95]">From coast to coast,<br/>and <em className="text-accent-glow">every</em> block between.</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-background/75 leading-relaxed max-w-lg">Home Protect AI serves all 50 states with same-week professional installation in 480+ metro areas — and overnight equipment delivery anywhere else.</p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={`tel:${PHONE}`} className="btn-accent">Check your area <MapPin className="w-4 h-4" /></a>
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-background/30 text-background px-6 py-3.5 text-sm font-medium hover:border-background/60">
                    <PhoneCall className="w-4 h-4" /> {PHONE_DISPLAY}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 self-end">
              {[
                { v: "50", l: "States covered" },
                { v: "480+", l: "Metro areas" },
                { v: "<48h", l: "Install lead time" },
                { v: "24/7", l: "Local support" },
              ].map((s) => (
                <Reveal key={s.l}>
                  <div className="bg-background/10 backdrop-blur border border-background/15 rounded-2xl p-6">
                    <p className="font-serif-display text-4xl">{s.v}</p>
                    <p className="font-mono-label text-[10px] uppercase text-background/60 mt-2">{s.l}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE ===================== */}
      <section className="py-16 md:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal><span className="eyebrow">— 11 / Installation</span></Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">From quote to <em>protected</em> in 48 hours.</h2>
              </Reveal>
              <Reveal delay={200}>
                <img src={installerImg} alt="Home Protect AI installation" loading="lazy" className="mt-10 rounded-3xl w-full" />
              </Reveal>
            </div>
            <div className="lg:col-span-8 lg:pl-12">
              <ol className="space-y-2">
                {[
                  { n: "01", t: "Free consultation", d: "Speak with a security designer who maps your home and recommends a system tailored to it — no upsell." },
                  { n: "02", t: "Custom blueprint", d: "We send a visual plan of every device placement, monitoring tier, and the exact monthly cost. Approve in one click." },
                  { n: "03", t: "Professional install", d: "A vetted, background-checked technician installs everything in a single visit. Most homes complete in 3—4 hours." },
                  { n: "04", t: "Walkthrough & live", d: "We train your household, configure the app, and arm your system together. The monitoring center activates immediately." },
                ].map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <div className="grid grid-cols-12 gap-6 py-8 border-b border-hairline group hover:bg-canvas-2/50 transition-colors -mx-4 px-4 rounded-2xl">
                      <div className="col-span-2 md:col-span-1"><span className="font-mono-label text-xs text-muted-foreground">{s.n}</span></div>
                      <div className="col-span-10 md:col-span-4">
                        <h3 className="font-serif-display text-3xl">{s.t}</h3>
                      </div>
                      <div className="col-span-12 md:col-span-7">
                        <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ALWAYS WATCHING — sticky image layout ===== */}
      <section className="lg:grid lg:grid-cols-2 overflow-hidden">
        <div className="lg:sticky lg:top-0 lg:h-screen overflow-hidden relative order-2 min-h-[50vh]">
          <img src={homeExteriorDusk} alt="Home protected at dusk" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="bg-foreground text-background py-16 px-6 lg:py-32 lg:px-16 flex items-center order-1 min-h-[70vh]">
          <div className="max-w-lg">
            <Reveal>
              <span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/60">— 12 / Always Watching</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-5xl md:text-7xl mt-4 leading-[0.95]">When the lights go down, <em className="text-accent-glow">we don't.</em></h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">Color night vision, infrared backup, and AI threat detection guard your home through every dark hour.</p>
            </Reveal>
            <Reveal delay={300}>
              <a href={`tel:${PHONE}`} className="mt-10 btn-accent inline-flex items-center gap-2">
                Call {PHONE_DISPLAY} <PhoneCall className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW ===================== */}
      <section className="py-16 md:py-32 bg-canvas-2/40 border-t border-hairline">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><span className="eyebrow">— 13 / Common questions</span></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">Things we get <em>asked</em> a lot.</h2>
            </Reveal>
            <Reveal delay={200}>
              <a href={`tel:${PHONE}`} className="btn-ghost mt-8 inline-flex items-center gap-2">All questions <ArrowUpRight className="w-4 h-4" /></a>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-1">
            {[
              { q: "Are there long-term contracts?", a: "No. Every Home Protect AI plan is month-to-month. Cancel anytime, no fees." },
              { q: "Do I need professional installation?", a: "We include it free with every plan to ensure perfect placement and warranty coverage — but DIY is supported." },
              { q: "What happens during a power or internet outage?", a: "Our hub has a 24-hour battery backup and built-in cellular failover. You stay protected through everything." },
              { q: "Will the system work with my existing smart home?", a: "Yes. Home Protect AI is Matter-compatible and integrates with Apple Home, Google Home, Alexa, and Z-Wave devices." },
            ].map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details className="group border-b border-hairline py-6">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-serif-display text-2xl pr-4">{f.q}</span>
                    <Wrench className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-45 shrink-0" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE CTA — sticky image layout */}
      <section className="lg:grid lg:grid-cols-2 overflow-hidden">
        <div className="lg:sticky lg:top-0 lg:h-screen overflow-hidden relative order-1 min-h-[50vh]">
          <img src={lifestyleFamily} alt="Family at home" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="bg-foreground text-background py-16 px-6 lg:py-32 lg:px-16 flex items-center order-2 min-h-[80vh]">
          <div className="max-w-xl">
            <Reveal>
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95]">
                Because the <em>best</em> nights are the ones you don't have to think about.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <a href={`tel:${PHONE}`} className="mt-10 inline-flex items-center gap-3 bg-background text-foreground px-7 py-4 rounded-full text-sm font-medium hover:gap-4 transition-all">
                Protect your home <ArrowUpRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
};

export default Index;



