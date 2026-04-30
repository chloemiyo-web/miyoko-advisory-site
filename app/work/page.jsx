import Link from "next/link";
import Section from "../../components/Section";

export const metadata = {
  title: "Work",
  description:
    "Recent engagements from Miyoko Advisory. Each project delivered in a seven-day build week. Live links included.",
};

export default function WorkPage() {
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
            Recent engagements.
          </h1>
          <p
            className="mt-6 fade-up"
            style={{ fontSize: "20px", lineHeight: 1.6, color: "var(--ink)", maxWidth: 600 }}
          >
            Each project below was delivered in a seven-day build week. Live
            links included.
          </p>
        </div>
      </Section>

      {/* Case study — Laura Fields LLC */}
      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="wide" py="lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <div
                className="text-[12px] tracking-[0.18em] uppercase fade-up"
                style={{ color: "var(--gold)", fontWeight: 500 }}
              >
                Case study · 01
              </div>
              <h2
                className="font-display mt-4 fade-up"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                Laura Fields LLC
              </h2>
              <p
                className="mt-5 fade-up"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  maxWidth: 460,
                }}
              >
                A consulting practice, rebranded and launched as a premium
                advisory firm in seven days.
              </p>

              <dl
                className="mt-10 grid grid-cols-1 gap-5 fade-up"
                style={{ maxWidth: 460 }}
              >
                <div
                  className="grid grid-cols-[120px_1fr] gap-4 py-3"
                  style={{ borderTop: "1px solid var(--mist)" }}
                >
                  <dt
                    className="text-[12px] tracking-[0.16em] uppercase"
                    style={{ color: "var(--ink)", opacity: 0.65 }}
                  >
                    Disciplines
                  </dt>
                  <dd style={{ fontSize: 15, color: "var(--ink)" }}>
                    Brand · Strategy · Website · Booking · Live Deployment
                  </dd>
                </div>
                <div
                  className="grid grid-cols-[120px_1fr] gap-4 py-3"
                  style={{ borderTop: "1px solid var(--mist)" }}
                >
                  <dt
                    className="text-[12px] tracking-[0.16em] uppercase"
                    style={{ color: "var(--ink)", opacity: 0.65 }}
                  >
                    Timeline
                  </dt>
                  <dd style={{ fontSize: 15, color: "var(--ink)" }}>
                    7 days, start to launch
                  </dd>
                </div>
                <div
                  className="grid grid-cols-[120px_1fr] gap-4 py-3"
                  style={{
                    borderTop: "1px solid var(--mist)",
                    borderBottom: "1px solid var(--mist)",
                  }}
                >
                  <dt
                    className="text-[12px] tracking-[0.16em] uppercase"
                    style={{ color: "var(--ink)", opacity: 0.65 }}
                  >
                    Live site
                  </dt>
                  <dd style={{ fontSize: 15 }}>
                    <a
                      href="https://www.laurafieldsllc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="prose-link"
                    >
                      laurafieldsllc.com →
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-7">
              {/* Composed visual frame */}
              <div className="fade-up">
                <div
                  className="card overflow-hidden"
                  style={{ backgroundColor: "var(--bone)" }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ borderBottom: "1px solid var(--mist)" }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: "var(--mist)" }} />
                    <span style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: "var(--mist)" }} />
                    <span style={{ width: 8, height: 8, borderRadius: 999, backgroundColor: "var(--mist)" }} />
                    <div
                      className="ml-4 px-3 py-1 text-[12px]"
                      style={{
                        backgroundColor: "var(--bone)",
                        border: "1px solid var(--mist)",
                        borderRadius: 2,
                        color: "var(--ink)",
                        opacity: 0.7,
                        maxWidth: 420,
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      laurafieldsllc.com
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: "var(--bone)",
                      padding: "56px 40px",
                      minHeight: 360,
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: "clamp(22px, 2.6vw, 36px)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        fontWeight: 400,
                        color: "var(--ink)",
                        maxWidth: 520,
                      }}
                    >
                      Laura Fields LLC — strategic advisory for established
                      businesses.
                    </div>
                    <div
                      className="mt-5"
                      style={{
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--ink)",
                        opacity: 0.85,
                        maxWidth: 480,
                      }}
                    >
                      Repositioned, rebranded, and launched as a premium
                      advisory practice — built and shipped in seven days.
                    </div>
                    <div className="mt-10 flex gap-4 items-center">
                      <span
                        style={{
                          backgroundColor: "var(--ink)",
                          color: "var(--bone)",
                          padding: "10px 20px",
                          borderRadius: 2,
                          fontSize: 13,
                          letterSpacing: "0.02em",
                        }}
                      >
                        Begin
                      </span>
                      <span style={{ fontSize: 13, color: "var(--ink)", opacity: 0.7 }}>
                        — by application
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.laurafieldsllc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose-link mt-4 inline-block"
                  style={{ fontSize: 14 }}
                >
                  Visit the live site →
                </a>
              </div>
            </div>
          </div>

          {/* Project narrative */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mt-24">
            <div className="md:col-span-12 md:col-start-1 max-w-text">
              <div
                className="text-[12px] tracking-[0.18em] uppercase fade-up"
                style={{ color: "var(--ink)", opacity: 0.65, fontWeight: 500 }}
              >
                Project overview
              </div>
              <p
                className="mt-4 fade-up"
                style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink)" }}
              >
                Laura Fields came to Miyoko Advisory ready to formalize an
                established consulting practice as a premium, web-forward
                advisory brand. The existing setup didn&rsquo;t reflect the
                level of work she was already delivering — and was making it
                harder to land the right clients.
              </p>
            </div>

            <div className="md:col-span-12 max-w-text">
              <div
                className="text-[12px] tracking-[0.18em] uppercase mt-12 fade-up"
                style={{ color: "var(--ink)", opacity: 0.65, fontWeight: 500 }}
              >
                The challenge
              </div>
              <p
                className="mt-4 fade-up"
                style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink)" }}
              >
                An established consultant whose web presence didn&rsquo;t match
                her credibility. The brand needed to be repositioned, the site
                rebuilt, and the booking and email infrastructure stood up —
                quickly enough to begin attracting the higher-tier clients she
                was already qualified to serve.
              </p>
            </div>

            <div className="md:col-span-12 max-w-text">
              <div
                className="text-[12px] tracking-[0.18em] uppercase mt-12 fade-up"
                style={{ color: "var(--ink)", opacity: 0.65, fontWeight: 500 }}
              >
                What we did
              </div>
              <ul className="mt-4 space-y-3 fade-up">
                {[
                  "Repositioned the practice with a clear, specific niche",
                  "Wrote the full brand voice and website copy",
                  "Designed and built the website",
                  "Set up the domain, email, and booking infrastructure",
                  "Deployed live and resolved all post-launch technical issues",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3"
                    style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--ink)" }}
                  >
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-12 max-w-text">
              <div
                className="text-[12px] tracking-[0.18em] uppercase mt-12 fade-up"
                style={{ color: "var(--ink)", opacity: 0.65, fontWeight: 500 }}
              >
                The result
              </div>
              <p
                className="mt-4 fade-up"
                style={{ fontSize: "18px", lineHeight: 1.75, color: "var(--ink)" }}
              >
                A complete, live, revenue-ready advisory brand — shipped in
                seven days. The site is live at{" "}
                <a
                  href="https://www.laurafieldsllc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose-link"
                >
                  laurafieldsllc.com
                </a>
                .
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Closing CTA */}
      <div style={{ borderTop: "1px solid var(--mist)" }}>
        <Section width="text" py="lg">
          <div className="text-center">
            <p
              className="font-display fade-up"
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: 1.3,
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--ink)",
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              One client, one full rebuild, one live result.
            </p>
            <div className="mt-10 fade-up">
              <Link href="/apply" className="btn-primary">
                Apply for an engagement
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
