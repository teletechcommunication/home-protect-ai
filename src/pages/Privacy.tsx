import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/site/Reveal";

const sections = [
  { t: "Information we collect", b: "We collect only the information necessary to deliver and improve our security service: account details (name, email, phone, address), device telemetry (system status, sensor events), and customer support communications. Camera video is stored encrypted and accessed only by you, your authorized users, or, with your permission, our monitoring operators verifying an alarm." },
  { t: "How we use information", b: "Your information powers your security service: authenticating your account, dispatching the right responders, providing customer support, and maintaining the system. We use aggregated, anonymized data to improve product reliability — never to advertise to you." },
  { t: "Sharing & disclosure", b: "We do not sell your personal information, ever. We share data only with: emergency responders (when you trigger an alarm), authorized household members (when you grant access), service providers under strict contractual confidentiality, and law enforcement (only with a valid court order, and we'll always notify you when permitted by law)." },
  { t: "Video & camera privacy", b: "Camera footage is encrypted end-to-end. You control retention from 1 day to 60 days (longer with optional cloud storage). Every Home Protect AI camera includes a hardware shutter you can engage from the app. We never review your video unless you ask us to or as part of an active alarm verification you initiated." },
  { t: "Data security", b: "We are SOC 2 Type II certified and ISO 27001 compliant. All data in transit uses TLS 1.3. All data at rest is AES-256 encrypted. Access requires multi-factor authentication and is audited continuously. Our infrastructure is hosted in SOC 2 certified US data centers with 24/7 physical security." },
  { t: "Your rights", b: "You may access, correct, export, or delete your personal information at any time through the app or by emailing info@Home Protect AI.com. California residents have additional rights under CCPA, EU/UK residents under GDPR. We honor all valid requests within 30 days." },
  { t: "Cookies & tracking", b: "Our website uses essential cookies for authentication and minimal analytics to improve performance. We do not use advertising trackers. You can adjust preferences anytime via your browser." },
  { t: "Children's privacy", b: "Our service is not intended for users under 18. We do not knowingly collect data from children. If you believe a child has provided us information, contact info@Home Protect AI.com and we will delete it." },
  { t: "Changes to this policy", b: "We will notify you via email and in-app at least 30 days before any material change. Your continued use after the effective date constitutes acceptance." },
  { t: "Contact us", b: "Privacy questions or requests: info@Home Protect AI.com · 1-800-555-1234 · Home Protect AI Security, Inc., 24 Vesey Street, New York, NY 10007." },
];

const Privacy = () => (
  <>
    <PageHero eyebrow="— Legal" index="privacy" title={<>Privacy <em>by design.</em></>} description="Last updated: April 1, 2026. We wrote this policy in plain English so you actually know what we do with your information." />
    <section className="py-12 pb-32">
      <div className="container-wide max-w-4xl">
        {sections.map((s, i) => (
          <Reveal key={s.t} delay={i * 50}>
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
export default Privacy;

