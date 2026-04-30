import Section from "../../components/Section";
import ApplyForm from "../../components/ApplyForm";

export const metadata = {
  title: "Apply",
  description:
    "A short application, reviewed personally, answered within two business days. By application only.",
};

export default function ApplyPage() {
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
            Apply for an engagement.
          </h1>
          <p
            className="mt-6 fade-up"
            style={{ fontSize: "20px", lineHeight: 1.6, color: "var(--ink)", maxWidth: 600 }}
          >
            A short application, reviewed personally, answered within two
            business days.
          </p>
        </div>
      </Section>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="wide" py="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="fade-up">
              <h2
                className="font-display"
                style={{
                  fontSize: "26px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                Who should apply.
              </h2>
              <p
                className="mt-4"
                style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink)" }}
              >
                Miyoko Advisory works with established service businesses. The
                application is the right next step if:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Your business has been operating for three or more years",
                  "You've built real revenue, real clients, and a real reputation",
                  "Your website, brand, or systems no longer reflect the level of work you're delivering",
                  "You're prepared to make a decision in days, not months",
                  "You're comfortable working async — written communication only, no calls",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3"
                    style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--ink)" }}
                  >
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up">
              <h2
                className="font-display"
                style={{
                  fontSize: "26px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                Who shouldn&rsquo;t.
              </h2>
              <p
                className="mt-4"
                style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink)" }}
              >
                We&rsquo;re not the right fit for every business. Apply
                elsewhere if:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "You're in your first year of operation",
                  "You need ongoing marketing services (ads, SEO, social content, video)",
                  "You require regular calls or in-person meetings",
                  "You're shopping multiple agencies in parallel and prioritizing price",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3"
                    style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--ink)" }}
                  >
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 font-display italic"
                style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--ink)" }}
              >
                A clean no benefits both of us.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <h2
            className="font-display fade-up"
            style={{
              fontSize: "26px",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontWeight: 500,
              color: "var(--ink)",
            }}
          >
            What happens after submission.
          </h2>
          <ol className="mt-6 space-y-4 fade-up">
            {[
              "You'll receive a confirmation email immediately.",
              "We review every submission personally, within one to two business days.",
              "You'll receive one of four responses: an invitation to move forward with a recommended package, a recommendation for a different package, a waitlist offer, or a polite decline.",
              "If accepted, the next step is a 50 percent deposit via Stripe to lock your build week.",
            ].map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[36px_1fr] gap-4"
                style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--ink)" }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: 18,
                    color: "var(--gold)",
                    fontWeight: 500,
                    paddingTop: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p
            className="mt-8 fade-up"
            style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--ink)", opacity: 0.85 }}
          >
            No calls. No follow-up required from you. The application is the
            entire input we need.
          </p>
        </Section>
      </div>

      {/* The form */}
      <div id="form" style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <ApplyForm />
        </Section>
      </div>

      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="md">
          <p
            className="font-display italic text-center fade-up"
            style={{ fontSize: "18px", color: "var(--ink)" }}
          >
            Thank you for taking the time. Every application is reviewed
            personally.
          </p>
        </Section>
      </div>
    </>
  );
}
