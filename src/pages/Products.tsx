import { CTAFooter } from "@/components/sections/CTAFooter";
import { Reveal } from "@/components/site/Reveal";
import productCamera from "@/assets/product-camera.jpg";
import productDoorbell from "@/assets/product-doorbell.jpg";
import productLock from "@/assets/product-lock.jpg";
import productSensor from "@/assets/product-sensor.jpg";
import { ArrowUpRight, ShieldCheck, Wifi, BatteryFull, Eye, Zap, Smartphone, Lock, ThermometerSnowflake, PhoneCall } from "lucide-react";

const PHONE = "8559438332";
const PHONE_DISPLAY = "855-943-8332";

const products = [
  {
    img: productCamera,
    name: "Aura Cam Pro",
    category: "Indoor / Outdoor Camera",
    tag: "4K HDR",
    tagline: "See everything. Miss nothing.",
    desc: "The Aura Cam Pro is our flagship camera — engineered with a 180° wide-angle lens, true 4K HDR imaging, and full-color night vision that keeps your home visible even in complete darkness. Its AI-powered detection distinguishes people, packages, vehicles, and animals — so you only get alerts that matter.",
    specs: [
      { icon: Eye, label: "Resolution", value: "4K Ultra HD (3840×2160)" },
      { icon: Zap, label: "Night Vision", value: "Full-color up to 30 ft" },
      { icon: Wifi, label: "Connectivity", value: "Wi-Fi 6 dual-band" },
      { icon: ShieldCheck, label: "Weather Rating", value: "IP66 weatherproof" },
    ],
    features: [
      "180° ultra-wide field of view",
      "AI person, vehicle & package detection",
      "Two-way audio with noise cancellation",
      "Local + cloud encrypted storage",
      "Works with Apple Home, Google, Alexa",
      "Aerospace-grade aluminum housing",
    ],
    reverse: false,
  },
  {
    img: productDoorbell,
    name: "Sentinel Bell",
    category: "Video Doorbell",
    tag: "Two-way HD",
    tagline: "Answer your door from anywhere.",
    desc: "The Sentinel Bell replaces your existing doorbell in minutes and gives you crystal-clear HD video with instant two-way audio — whether you're in the next room or across the country. Pre-motion zones detect visitors before they even reach the door, and package detection keeps your deliveries safe.",
    specs: [
      { icon: Eye, label: "Video", value: "1080p HDR, 160° view" },
      { icon: Zap, label: "Pre-motion", value: "Detects approach at 15 ft" },
      { icon: Wifi, label: "Install", value: "Wired or wire-free" },
      { icon: ShieldCheck, label: "Audio", value: "HD two-way, noise-cancel" },
    ],
    features: [
      "Instant push & chime notifications",
      "Package & person zone detection",
      "Quick-replies for hands-free response",
      "Works wired (existing doorbell) or battery",
      "Night vision with infrared + color modes",
      "Integrates with Vault Lock for auto-unlock",
    ],
    reverse: true,
  },
  {
    img: productLock,
    name: "Vault Lock",
    category: "Smart Lock",
    tag: "Auto-Lock",
    tagline: "Keys are a thing of the past.",
    desc: "Vault Lock's brushed-metal body fits any standard deadbolt slot and brings intelligent access control to your front door. Create time-limited guest codes, set geofence rules that auto-lock when you leave, and review a full encrypted audit trail of every entry — all from the Home Protect AI app.",
    specs: [
      { icon: Lock, label: "Entry methods", value: "PIN, app, auto, key backup" },
      { icon: Smartphone, label: "Geofence", value: "Auto-lock when you leave" },
      { icon: BatteryFull, label: "Battery", value: "12-month AA batteries" },
      { icon: ShieldCheck, label: "Encryption", value: "AES-256 end-to-end" },
    ],
    features: [
      "Rotating guest PINs with expiry",
      "Full encrypted access audit trail",
      "Integrates with Sentinel Bell for auto-unlock",
      "Physical key backup included",
      "Low-battery alerts on app",
      "Fits standard deadbolt — no drilling",
    ],
    reverse: false,
  },
  {
    img: productSensor,
    name: "Pulse Motion",
    category: "Motion Sensor",
    tag: "Pet-Immune",
    tagline: "Human-only alerts. No false alarms.",
    desc: "Pulse Motion uses millimeter-wave radar technology to detect human presence with pinpoint accuracy — ignoring pets up to 60 lbs, HVAC drafts, and sunlight shifts that fool ordinary PIR sensors. It learns your household's movement patterns over 14 days and adapts automatically.",
    specs: [
      { icon: Eye, label: "Technology", value: "Millimeter-wave radar" },
      { icon: ThermometerSnowflake, label: "Pet immunity", value: "Up to 60 lbs" },
      { icon: BatteryFull, label: "Battery", value: "5-year CR123A" },
      { icon: Wifi, label: "Protocol", value: "Z-Wave Plus / Thread" },
    ],
    features: [
      "14-day adaptive learning mode",
      "360° coverage up to 40 ft range",
      "Zero false alarms from pets or drafts",
      "Tamper-evident sealed housing",
      "Instant alert to monitoring center",
      "Paintable cover — blends into any room",
    ],
    reverse: true,
  },
];

const Products = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-20 border-b border-hairline">
      <div className="container-wide">
        <Reveal>
          <span className="eyebrow">— Hardware Collection</span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif-display text-6xl md:text-8xl mt-4 leading-[0.90] max-w-4xl">
            Hardware, <em>obsessively</em> made.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every Home Protect AI device is engineered in our New York studio, hand-finished, and tested in real homes for six months before it ships. Four devices. One seamless system.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary">
              Talk to a specialist <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={`tel:${PHONE}`} className="btn-ghost inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 4 Product detail sections */}
    {products.map((p, idx) => (
      <section key={p.name} className={`py-28 ${idx % 2 === 1 ? "bg-canvas-2/50" : ""} border-b border-hairline`}>
        <div className="container-wide">
          <div className={`grid lg:grid-cols-2 gap-16 items-center ${p.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

            {/* Image */}
            <Reveal delay={p.reverse ? 150 : 0}>
              <div className="relative mb-8 lg:mb-0">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-canvas-2">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                
                {/* Floating Badge - Desktop Only */}
                <div className="hidden lg:block absolute top-5 left-5">
                  <span className="font-mono-label text-[10px] uppercase tracking-wider bg-background/90 backdrop-blur px-3 py-1.5 rounded-full">{p.tag}</span>
                </div>
                
                {/* Floating Card - Desktop Only */}
                <div className="hidden lg:block absolute -bottom-5 -right-5 bg-foreground text-background rounded-2xl px-6 py-4 shadow-lift z-10">
                  <p className="font-mono-label text-[9px] uppercase text-background/50 mb-1">{p.category}</p>
                  <p className="font-serif-display text-xl leading-tight">{p.tagline}</p>
                </div>

                {/* Mobile/Tablet Card - Below Image */}
                <div className="lg:hidden mt-6 bg-foreground text-background rounded-2xl px-6 py-4 shadow-lift">
                  <p className="font-mono-label text-[9px] uppercase text-background/50 mb-1">{p.category}</p>
                  <p className="font-serif-display text-xl leading-tight">{p.tagline}</p>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={p.reverse ? 0 : 150}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono-label text-[10px] uppercase tracking-widest text-muted-foreground">{String(idx + 1).padStart(2, "0")} / {p.category}</span>
                </div>
                <h2 className="font-serif-display text-5xl md:text-6xl leading-[0.92] mb-6">{p.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">{p.desc}</p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {p.specs.map((s) => (
                    <div key={s.label} className="bg-canvas-2/60 border border-hairline rounded-2xl p-5">
                      <s.icon className="w-4 h-4 text-accent mb-3" />
                      <p className="font-mono-label text-[10px] uppercase text-muted-foreground mb-1">{s.label}</p>
                      <p className="text-sm font-medium">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={`tel:${PHONE}`} className="btn-primary inline-flex items-center gap-2">
                  Get {p.name} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    ))}

    {/* Engineering strip */}
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-aurora opacity-30" />
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal><span className="font-mono-label text-[11px] uppercase tracking-[0.18em] text-background/50">— Engineering</span></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-5xl md:text-6xl mt-4 leading-[0.95]">Built to outlast <em className="text-accent-glow">your home.</em></h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-background/65 leading-relaxed">Every device shares the same standard: aerospace-grade materials, encrypted wireless, and a 12-year warranty backed by our own engineers.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "IP66 weatherproof", d: "Cameras and doorbells withstand rain, dust, and extreme temperature." },
              { icon: Wifi, t: "Wi-Fi 6 + Z-Wave", d: "Dual-band Wi-Fi 6, Z-Wave Plus, Thread, and Matter out of the box." },
              { icon: BatteryFull, t: "5-year batteries", d: "Sensors run for up to five years on a single set of batteries." },
              { icon: Eye, t: "Hardware privacy", d: "Physical shutters and local processing — your footage never leaves your control." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div className="bg-background/5 border border-background/10 rounded-2xl p-7">
                  <s.icon className="w-5 h-5 text-accent-glow mb-5" />
                  <h3 className="font-serif-display text-2xl mb-2">{s.t}</h3>
                  <p className="text-sm text-background/60 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTAFooter />
  </>
);

export default Products;

