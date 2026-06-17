import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/site/Reveal";

const sections = [
  { t: "Acceptance of terms", b: "By creating a Home Protect AI account or using our service, you agree to these Terms of Service. If you do not agree, please do not use the service. We may update these terms with at least 30 days' notice for material changes." },
  { t: "Eligibility", b: "You must be at least 18 years old and legally able to enter contracts in your jurisdiction. You must be the owner or authorized resident of the property where equipment is installed." },
  { t: "Service description", b: "Home Protect AI provides home security equipment, software, and optional 24/7 professional monitoring. Specific features depend on the plan you select. We continuously improve the service; functionality may evolve over time." },
  { t: "Subscription & billing", b: "Plans are billed monthly in advance to your chosen payment method. Prices are in USD and exclude applicable taxes. Failed payments may result in monitoring suspension after 7 days. You may cancel anytime; service ends at the end of your current billing cycle." },
  { t: "Equipment ownership", b: "You own all equipment outright on annual plans. On month-to-month plans, equipment is leased and must be returned within 30 days of cancellation. We provide free return shipping. Damaged or unreturned equipment may be charged at retail value." },
  { t: "Monitoring service", b: "Our UL-listed monitoring center responds to alarm signals 24/7. Response includes video verification (when available), customer contact, and dispatch of emergency services as appropriate. We are not liable for delays caused by network outages, false dispatches refused by authorities, or events outside our reasonable control." },
  { t: "Acceptable use", b: "You agree not to: use the service unlawfully, share account credentials publicly, attempt to disable monitoring, install equipment in a location you do not control, or use cameras to violate the privacy rights of others." },
  { t: "Limitation of liability", b: "Home Protect AI provides security services on a best-efforts basis but does not guarantee prevention of all crime or loss. Our liability is limited to the amount you paid in the prior 12 months. We strongly recommend maintaining homeowner's or renter's insurance — Home Protect AI is not an insurance product." },
  { t: "Warranty", b: "All Home Protect AI equipment carries a 12-year limited warranty against defects in materials and workmanship. Software updates are provided for the life of the device. Damage from misuse, modification, or external causes is not covered." },
  { t: "Dispute resolution", b: "Any disputes will first be addressed through good-faith negotiation. Unresolved disputes will be subject to binding arbitration under the rules of the American Arbitration Association in New York County. You retain the right to small-claims court for qualifying matters." },
  { t: "Governing law", b: "These terms are governed by the laws of the State of New York, without regard to conflict-of-law principles." },
  { t: "Contact", b: "Home Protect AI Security, Inc., 24 Vesey Street, New York, NY 10007 · 1-800-555-1234 · info@Home Protect AI.com" },
];

const Terms = () => (
  <>
    <PageHero eyebrow="— Legal" index="terms" title={<>Terms & <em>conditions.</em></>} description="Last updated: April 1, 2026. The agreement that governs your use of Home Protect AI, written to be readable." />
    <section className="py-12 pb-32">
      <div className="container-wide max-w-4xl">
        {sections.map((s, i) => (
          <Reveal key={s.t} delay={i * 40}>
            <div className="py-8 border-b border-hairline">
              <p className="font-mono-label text-[11px] uppercase text-muted-foreground mb-3">— {String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-serif-display text-3xl md:text-4xl mb-4">{s.t}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{s.b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
);
export default Terms;

