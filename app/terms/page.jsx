import Section from "../../components/Section";

export const metadata = {
  title: "Terms",
  description: "Terms of use and engagement for Miyoko Advisory.",
};

export default function TermsPage() {
  return (
    <Section width="text" py="lg">
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          fontWeight: 300,
          color: "var(--ink)",
        }}
      >
        Terms.
      </h1>
      <p
        className="mt-6"
        style={{ fontSize: "15px", color: "var(--ink)", opacity: 0.75 }}
      >
        Last updated: April 2026
      </p>

      <div
        className="mt-12 space-y-8"
        style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--ink)" }}
      >
        <p>
          These terms govern your use of miyokoadvisory.com and any engagement
          you book with Miyoko Advisory (the &ldquo;studio&rdquo;). By using
          the site or engaging the studio, you agree to the terms below.
        </p>

        <Heading>The site</Heading>
        <p>
          The information on this site is published in good faith and intended
          to describe our services accurately. It does not constitute a
          contract or guarantee of any specific result. We may update,
          improve, or change content on the site at any time without notice.
        </p>

        <Heading>Applications</Heading>
        <p>
          Submitting an application does not create an obligation on either
          side. Applications are reviewed personally and answered with one of
          four responses: an invitation to move forward, a recommendation for
          a different package, a waitlist offer, or a polite decline.
        </p>

        <Heading>Engagements</Heading>
        <p>
          Each engagement is governed by a written scope and price set out in
          the recommendation email and confirmed by a 50 percent deposit (or
          full payment, in the case of The Diagnostic). The remaining 50
          percent for build engagements is due within three business days of
          launch on Day 7. Late payments incur a 5 percent fee per week.
          Build weeks are non-refundable once locked, but can be rescheduled
          once with seven or more days notice.
        </p>
        <p>
          The studio operates async-only and within the timeframes published
          on this site. If a client cannot reasonably participate within those
          timeframes, the engagement may be rescheduled or, in rare cases,
          released by mutual agreement.
        </p>

        <Heading>Intellectual property</Heading>
        <p>
          On final payment, all final deliverables (copy, design files, code
          written specifically for the engagement) are owned by the client.
          The studio retains the right to display the work in its portfolio
          and case studies, link to the live site, and reference the
          engagement in marketing materials, unless the client requests
          otherwise in writing.
        </p>

        <Heading>Confidentiality</Heading>
        <p>
          Information shared during an engagement is treated as confidential
          and used only to deliver the work. The studio does not disclose
          client information to third parties beyond standard service
          providers (e.g., hosting, payments, productivity tools) bound by
          their own policies.
        </p>

        <Heading>Limitation of liability</Heading>
        <p>
          To the fullest extent permitted by law, the studio&rsquo;s liability
          for any claim arising out of an engagement is limited to the fees
          paid for that engagement. The studio is not liable for indirect,
          consequential, or incidental damages.
        </p>

        <Heading>Changes</Heading>
        <p>
          We may update these terms from time to time. Material changes will
          be reflected by updating the date above and, where appropriate,
          notifying clients directly.
        </p>

        <Heading>Contact</Heading>
        <p>
          For any questions about these terms, write to{" "}
          <a href="mailto:studio@miyokoadvisory.com" className="prose-link">
            studio@miyokoadvisory.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

function Heading({ children }) {
  return (
    <h2
      className="font-display"
      style={{
        fontSize: "22px",
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
        fontWeight: 500,
        color: "var(--ink)",
        marginTop: 24,
      }}
    >
      {children}
    </h2>
  );
}
