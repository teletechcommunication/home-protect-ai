import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { Reveal } from "@/components/site/Reveal";
import { Plus } from "lucide-react";
import { SEO } from "@/components/site/SEO";

const groups = [
  { cat: "Pricing", items: [
    { q: "How much does Home Protect AI cost?", a: "Plans start at $29/month for self-monitoring and go up to $89/month for our Ultimate Smart Home tier with full video monitoring. There are no equipment fees on annual plans, and installation is always free." },
    { q: "Are there hidden fees?", a: "No. The monthly price includes equipment, monitoring, app access, software updates, and support. The only optional add-on is cloud video storage beyond 60 days." },
    { q: "Do you offer financing?", a: "Yes. We offer 0% APR financing over 24 months on equipment for qualified customers. Apply during checkout — most decisions take less than 30 seconds." },
  ]},
  { cat: "Contracts", items: [
    { q: "Is there a long-term contract?", a: "No. Every Home Protect AI plan is month-to-month. You can cancel anytime without fees or penalties. We earn your business every month." },
    { q: "What's your cancellation policy?", a: "Cancel through the app or by calling us. Service ends at the end of your current billing cycle. We even pay return shipping for equipment." },
    { q: "Can I move my system if I relocate?", a: "Yes. Home Protect AI equipment is designed to come with you. We'll send a free technician to reinstall in your new home — even across states." },
  ]},
  { cat: "Installation", items: [
    { q: "How long does installation take?", a: "Most homes are completed in 3-4 hours. Larger properties or custom installations may take a single full day. We always confirm the timeline during your design consultation." },
    { q: "Do I need to be home?", a: "Yes, an adult homeowner or authorized resident must be present for installation, walkthrough, and account setup. We work around your schedule, including evenings and weekends." },
    { q: "Can I install it myself?", a: "Absolutely. Every device is designed for DIY installation, and our app guides you step by step. But professional installation is included free with all annual plans." },
  ]},
  { cat: "Monitoring", items: [
    { q: "Where is the monitoring center?", a: "Our primary UL-listed central station is in New York, with a fully redundant backup facility in Austin. Both are staffed 24/7 by US-based, bilingual specialists." },
    { q: "How quickly do you respond to alarms?", a: "Our median response time is 0.4 seconds from alarm trigger to operator engagement. Video verification typically completes within 30 seconds, before police are dispatched." },
    { q: "What happens during a false alarm?", a: "Our operators verify every alert with video before dispatching emergency services. This eliminates 94% of false alarms compared to traditional audio-only systems." },
  ]},
  { cat: "App & Devices", items: [
    { q: "Will it work with Apple Home / Google Home / Alexa?", a: "Yes. Every Home Protect AI device supports Matter 1.3 and integrates natively with all major smart home ecosystems." },
    { q: "Does it work without internet?", a: "Yes. Our hub includes 24-hour battery backup and built-in cellular failover. The system continues to monitor and dispatch even during full power and internet outages." },
    { q: "Can I share access with family?", a: "Yes. Add unlimited household members with custom permissions. Each user gets their own PIN, app login, and access schedule." },
  ]},
];

const Item = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex justify-between items-start w-full py-7 text-left gap-6"
        aria-expanded={open}
        aria-label={`Expand question: ${q}`}
      >
        <span className="font-serif-display text-2xl md:text-3xl leading-tight">{q}</span>
        <Plus className={`w-5 h-5 mt-2 shrink-0 transition-transform duration-500 ${open ? "rotate-45" : ""}`} aria-hidden="true" />
      </button>
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => (
  <main>
    <SEO 
        title="Frequently Asked Questions | Home Protect AI"
        description="Find answers to common questions about Home Protect AI pricing, installation, monitoring, and smart home integration."
    />
    <PageHero eyebrow="— Index 08" index="faq" title={<>Answers, before you <em>ask.</em></>} description="Real questions from real customers. If yours isn't here, reach out — we answer every email within an hour." />

    <section className="py-12 pb-32" aria-label="FAQ Sections">
      <div className="container-wide">
        {groups.map((g, gi) => (
          <Reveal key={g.cat}>
            <div className="grid lg:grid-cols-12 gap-10 mb-20" aria-label={g.cat}>
              <div className="lg:col-span-3">
                <span className="font-mono-label text-[11px] uppercase text-muted-foreground sticky top-28">— {String(gi + 1).padStart(2, "0")} / {g.cat}</span>
              </div>
              <div className="lg:col-span-9">
                {g.items.map((i) => <Item key={i.q} q={i.q} a={i.a} />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTAFooter />
  </main>
);

export default FAQ;
