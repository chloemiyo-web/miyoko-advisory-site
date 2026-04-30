import Link from "next/link";
import Section from "../../components/Section";

export const metadata = {
  title: "Services",
  description:
    "Five engagements, each with a fixed scope and a fixed price. Diagnostic, Modernization Sprint, Premium Rebrand, Operator Package, Studio Retainer.",
};

const services = [
  {
    name: "The Diagnostic",
    price: "$1,500",
    blurb:
      "A written audit of your brand, site, and customer experience. Delivered as a 12 to 18 page report covering positioning gaps, conversion leaks, trust failures, and a 60-day prioritized action plan.",
    bestFor:
      "Best for: businesses unsure where to invest first, or evaluating whether a larger engagement is the right fit. Fully credited toward any larger engagement booked within 30 days.",
    includes: [
      "Brand and positioning audit",
      "Page-by-page website audit",
      "Booking and inquiry flow review",
      "Three-competitor benchmark",
      "Hidden revenue leak identification",
      "60-day prioritized action plan",
      "Delivered in 5 business days",
    ],
    cta: "Apply for The Diagnostic →",
  },
  {
    name: "The Modernization Sprint",
    price: "$4,500",
    blurb:
      "A complete brand and web rebuild in seven days. Our flagship engagement — and the one most clients begin with.",
    bestFor:
      "Best for: established businesses with an outdated site, an unclear brand, or systems that no longer match the level of work being delivered.",
    includes: [
      "Positioning refresh and brand voice",
      "Full website copywriting (up to 5 pages)",
      "Website design and build, deployed live",
      "Mobile and desktop optimization",
      "Booking system setup",
      "Inquiry form with email routing",
      "Domain and branded email setup",
      "One structured revision round",
      "Live deployment and walkthrough document",
      "Delivered in 7 calendar days",
    ],
    cta: "Apply for The Sprint →",
    flagship: true,
  },
  {
    name: "The Premium Rebrand",
    price: "$6,500",
    blurb:
      "Everything in the Sprint, plus full visual brand identity. For businesses that need more than a website refresh.",
    bestFor:
      "Best for: established businesses repositioning to a higher tier, expanding into new markets, or formalizing what was previously an informal brand.",
    includes: [
      "Everything in The Modernization Sprint",
      "Full visual brand identity (color, type, layout system)",
      "Logo refinement or refresh, with full file delivery",
      "Founder bio and case study development",
      "Up to 8 pages of website copy",
      "Brand guidelines PDF",
      "One round of post-launch revisions (within 14 days)",
      "Delivered in 7 calendar days",
    ],
    cta: "Apply for The Rebrand →",
  },
  {
    name: "The Operator Package",
    price: "$9,500",
    blurb:
      "The most comprehensive engagement. Everything in The Premium Rebrand, plus internal systems work for businesses scaling past founder-only operations.",
    bestFor:
      "Best for: established service businesses building beyond the founder, with multiple staff, multiple service lines, or repeated operational friction.",
    includes: [
      "Everything in The Premium Rebrand",
      "Client onboarding flow design",
      "Booking-to-payment automation",
      "Email template library (10 templates)",
      "Light internal documentation (one SOP, up to 10 pages)",
      "Two rounds of post-launch revisions (within 21 days)",
      "Delivered in 7 calendar days, with systems handoff in week 2",
    ],
    cta: "Apply for The Operator →",
  },
  {
    name: "The Studio Retainer",
    price: "from $1,200/month",
    blurb:
      "Post-launch maintenance and continued evolution. Available only to businesses we've previously launched.",
    bestFor:
      "Best for: clients who want their site, copy, and systems to keep evolving without commissioning new engagements each quarter. Three-month minimum, then month-to-month.",
    includes: [
      "Up to 4 hours of site updates and copy refinements per month",
      "Async strategic access via email (24-hour response, Mon–Fri)",
      "Conversion adjustments and A/B testing recommendations",
      "Priority queue position on any new build engagement",
      "Monthly written check-in",
    ],
    cta: "Apply for The Retainer →",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section width="wide" py="lg">
        <div className="max-w-text">
          <h1
            className="font-display fade-up"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontWeight: 300,
              color: "var(--ink)",
            }}
          >
            Our services.
          </h1>
          <p
            className="mt-6 fade-up"
            style={{ fontSize: "20px", lineHeight: 1.6, color: "var(--ink)", maxWidth: 600 }}
          >
            Five engagements, each with a fixed scope and a fixed price.
          </p>
        </div>
      </Section>

      {services.map((s, i) => (
        <div key={s.name} style={{ borderTop: "1px solid var(--mist)" }}>
          <Section width="wide" py="lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-5">
                <div
                  className="text-[12px] tracking-[0.18em] uppercase fade-up"
                  style={{ color: "var(--gold)", fontWeight: 500 }}
                >
                  {String(i + 1).padStart(2, "0")} · Engagement
                </div>
                <h2
                  className="font-display mt-4 fade-up"
                  style={{
                    fontSize: "clamp(28px, 3.6vw, 40px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                    color: "var(--ink)",
                  }}
                >
                  {s.name}
                </h2>
                <div
                  className="mt-3 font-display fade-up"
                  style={{
                    fontSize: "26px",
                    lineHeight: 1.2,
                    fontWeight: 500,
                    color: "var(--ink)",
                  }}
                >
                  {s.price}
                </div>
                {s.flagship && (
                  <div
                    className="mt-4 inline-block fade-up"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      borderTop: "1px solid var(--gold)",
                      borderBottom: "1px solid var(--gold)",
                      padding: "6px 0",
                      fontWeight: 500,
                    }}
                  >
                    Flagship engagement
                  </div>
                )}
              </div>

              <div className="md:col-span-7">
                <p
                  className="fade-up"
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.7,
                    color: "var(--ink)",
                    maxWidth: 640,
                  }}
                >
                  {s.blurb}
                </p>
                <p
                  className="mt-5 fade-up font-display italic"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    opacity: 0.85,
                    maxWidth: 640,
                  }}
                >
                  {s.bestFor}
                </p>

                <div className="mt-8 fade-up">
                  <div
                    className="text-[12px] tracking-[0.18em] uppercase mb-4"
                    style={{ color: "var(--ink)", fontWeight: 500 }}
                  >
                    Includes
                  </div>
                  <ul className="space-y-3">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3"
                        style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink)" }}
                      >
                        <span style={{ color: "var(--gold)" }}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 fade-up">
                  <Link href="/apply" className="prose-link" style={{ fontSize: 15 }}>
                    {s.cta}
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </div>
      ))}

      {/* Closing block */}
      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <div className="max-w-narrative">
            <p
              className="fade-up"
              style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--ink)" }}
            >
              All packages are paid 50 percent on deposit and 50 percent on
              launch, except The Diagnostic, which is paid in full at deposit.
              We do not negotiate pricing — every package has a fixed scope,
              and the price reflects it.
            </p>
            <p
              className="mt-6 fade-up"
              style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--ink)" }}
            >
              Not sure which engagement is right for you? Apply with whatever
              feels closest. We&rsquo;ll review and recommend the best fit.
            </p>
            <div className="mt-10 fade-up">
              <Link href="/apply" className="btn-primary">
                Start an application
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
