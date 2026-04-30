import Link from "next/link";
import Section from "../components/Section";

export const metadata = {
  title:
    "Miyoko Advisory — Established businesses, modernized in seven days.",
  description:
    "A boutique studio that rebuilds the brand, website, and systems of established businesses. By application only.",
};

const days = [
  { d: "Day 1", t: "Intake.", b: "Onboarding brief reviewed in full. Scope and access confirmed in writing." },
  { d: "Day 2", t: "Strategy.", b: "Positioning, voice, and architecture finalized in a written strategy document." },
  { d: "Day 3", t: "First draft.", b: "Full website draft, copy, and brand direction delivered for review." },
  { d: "Day 4", t: "Revisions.", b: "One structured round of changes. Resolved within 24 hours." },
  { d: "Day 5", t: "Systems.", b: "Domain, email, booking, payment, and integrations configured and tested." },
  { d: "Day 6", t: "Polish.", b: "Mobile, desktop, every flow, every link. 40-point QA checklist." },
  { d: "Day 7", t: "Launch.", b: "Live on your domain. Walkthrough document delivered. Engagement closes." },
];

const verticals = [
  "Consultants and advisors",
  "Law firms",
  "Med spas and aesthetic clinics",
  "Realtors and real estate teams",
  "Health and wellness clinics",
  "Premium service businesses",
];

const advantages = [
  { t: "No meeting overhead.", b: "Agencies lose 30 to 40 percent of project time to internal alignment and client calls. We lose none." },
  { t: "One operator, one decision.", b: "The same person who hears the brief writes the strategy and ships the site." },
  { t: "Time-boxed scope.", b: "A seven-day delivery model forces ruthless prioritization. The 80 percent that drives 95 percent of the outcome." },
  { t: "Fixed pricing, no negotiation.", b: "Every package has a written scope and a fixed price. No proposals, no SOW theater." },
];

const h2 = {
  fontSize: "clamp(28px, 3.6vw, 44px)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  fontWeight: 400,
  color: "var(--ink)",
};

export default function HomePage() {
  return (
    <>
      <Section width="wide" py="lg">
        <div className="max-w-text">
          <h1 className="font-display fade-up" style={{ fontSize: "clamp(44px, 7vw, 72px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 300, color: "var(--ink)" }}>
            Established businesses, modernized in seven days.
          </h1>
          <p className="mt-8 fade-up" style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.6, color: "var(--ink)", maxWidth: 640 }}>
            Miyoko Advisory is a boutique studio that rebuilds the brand, website, and systems of established businesses — so you finally look as credible online as you already are in real life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 fade-up">
            <Link href="/apply" className="btn-primary">Start an application</Link>
            <Link href="/work" className="btn-secondary">See our work</Link>
          </div>
        </div>
      </Section>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <div className="max-w-narrative">
            <h2 className="font-display fade-up" style={h2}>The brand isn&rsquo;t keeping up with the business.</h2>
            <div className="mt-8 space-y-6 fade-up" style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink)" }}>
              <p>You&rsquo;ve built something real. The clients are there, the revenue is there, the reputation is there.</p>
              <p>But your website doesn&rsquo;t show it. The brand doesn&rsquo;t match it. And every week, opportunities are quietly slipping away.</p>
              <p>You deserve to look as credible online as you already are in real life. <em className="font-display" style={{ fontStyle: "italic" }}>That&rsquo;s what we fix.</em></p>
            </div>
          </div>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <h2 className="font-display fade-up" style={h2}>We work with established service businesses.</h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 fade-up" style={{ fontSize: "17px", lineHeight: 1.6 }}>
            {verticals.map((item) => (
              <li key={item} className="flex items-baseline gap-3" style={{ color: "var(--ink)" }}>
                <span style={{ color: "var(--gold)" }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 font-display fade-up" style={{ fontSize: "20px", lineHeight: 1.55, fontStyle: "italic", color: "var(--ink)", maxWidth: 640 }}>
            If you&rsquo;ve been operating for three or more years, your work is already excellent, and your website hasn&rsquo;t kept up — we built Miyoko Advisory for you.
          </p>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <h2 className="font-display fade-up" style={h2}>The seven-day model.</h2>
          <p className="mt-4 fade-up" style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--ink)" }}>
            Most engagements are delivered in a single, focused build week — start to launch.
          </p>
          <div className="mt-12">
            {days.map((row, i) => (
              <div key={row.d} className="fade-up grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-6"
                style={{ borderTop: i === 0 ? "1px solid var(--mist)" : "none", borderBottom: "1px solid var(--mist)" }}>
                <div className="font-display" style={{ fontSize: "18px", color: "var(--gold)", fontWeight: 500, paddingTop: 4 }}>{row.d}</div>
                <div>
                  <div className="font-display" style={{ fontSize: "22px", lineHeight: 1.25, fontWeight: 500, color: "var(--ink)" }}>{row.t}</div>
                  <p className="mt-2" style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--ink)" }}>{row.b}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="wide" py="lg">
          <h2 className="font-display fade-up" style={h2}>Recent work.</h2>
          <article className="card mt-12 fade-up px-6 md:px-10 py-10" style={{ backgroundColor: "var(--bone)" }}>
            <h3 className="font-display" style={{ fontSize: "26px", lineHeight: 1.2, fontWeight: 500, color: "var(--ink)" }}>Laura Fields LLC</h3>
            <p className="mt-3" style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--ink)", maxWidth: 640 }}>
              A consulting practice repositioned, rebranded, and launched as a premium advisory firm.
            </p>
            <p className="mt-3 font-display italic" style={{ fontSize: "15px", color: "var(--ink)", opacity: 0.75 }}>
              Brand · Strategy · Website · Booking · Live Deployment
            </p>
            <div className="mt-6 flex flex-wrap gap-6 items-center">
              <a href="https://www.laurafieldsllc.com/" target="_blank" rel="noopener noreferrer" className="prose-link" style={{ fontSize: "15px" }}>
                View the live site →
              </a>
              <Link href="/work" className="prose-link" style={{ fontSize: "15px" }}>Read the case study →</Link>
            </div>
          </article>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <h2 className="font-display fade-up" style={h2}>Why a studio, not an agency.</h2>
          <div className="mt-12 max-w-narrative space-y-12">
            {advantages.map((row) => (
              <div key={row.t} className="fade-up">
                <h3 className="font-display" style={{ fontSize: "22px", lineHeight: 1.25, fontWeight: 500, color: "var(--ink)" }}>{row.t}</h3>
                <p className="mt-2" style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink)" }}>{row.b}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <div className="max-w-narrative mx-auto text-center">
            <h2 className="font-display fade-up" style={h2}>A small studio, by design.</h2>
            <p className="mt-8 fade-up" style={{ fontSize: "19px", lineHeight: 1.75, color: "var(--ink)" }}>
              We take on two to three engagements per month. Each runs as a dedicated build week — start to launch, undivided attention.
            </p>
            <p className="mt-6 fade-up" style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--ink)" }}>
              Booking is by application only. We respond to every applicant within one to two business days.
            </p>
          </div>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <div className="text-center" style={{ paddingTop: 32, paddingBottom: 32 }}>
            <h2 className="font-display fade-up" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.15, letterSpacing: "-0.02em", fontWeight: 300, color: "var(--ink)" }}>
              Ready to modernize?
            </h2>
            <p className="mt-6 fade-up mx-auto" style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--ink)", maxWidth: 540 }}>
              Tell us about your business and what you&rsquo;re trying to fix. We&rsquo;ll review your application and respond within two business days.
            </p>
            <div className="mt-12 fade-up">
              <Link href="/apply" className="btn-primary" style={{ padding: "18px 36px", fontSize: 16 }}>
                Start an application
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
