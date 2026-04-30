import Section from "../../components/Section";

export const metadata = {
  title: "Privacy",
  description: "Miyoko Advisory privacy policy.",
};

export default function PrivacyPage() {
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
        Privacy.
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
          Miyoko Advisory (&ldquo;we,&rdquo; &ldquo;our,&rdquo; the
          &ldquo;studio&rdquo;) respects your privacy. This page describes the
          limited information we collect when you visit our website or submit
          an application, how we use it, and the choices you have.
        </p>

        <Heading>What we collect</Heading>
        <p>
          When you submit our application form, we collect the information you
          choose to provide — including your name, business name, email
          address, business details, and any context you share about the
          engagement you&rsquo;re considering. We use this information solely
          to review and respond to your application.
        </p>
        <p>
          When you visit the site, we use lightweight analytics to understand
          aggregate visitor behavior (page views, referral source, country at
          the country level). We do not use cookies that personally identify
          you, and we do not sell or share visitor data with third parties.
        </p>

        <Heading>How we use it</Heading>
        <p>
          Application information is used only to review your application,
          respond to it personally, and — if we proceed together — administer
          the engagement. Analytics data is used only to understand how the
          site performs and to improve it over time.
        </p>

        <Heading>Who has access</Heading>
        <p>
          Application information is reviewed by Miyoko Advisory. We do not
          share applications with anyone outside the studio. We may use
          standard service providers (email, payments, project management) to
          deliver our work; each is bound by their own privacy policies and
          processes data on our instructions.
        </p>

        <Heading>Retention</Heading>
        <p>
          We retain application information for as long as is reasonable to
          service the engagement and meet legal or accounting obligations.
          You can request deletion of your application data at any time by
          emailing studio@miyokoadvisory.com.
        </p>

        <Heading>Your rights</Heading>
        <p>
          You can request access, correction, or deletion of any personal
          information we hold about you by writing to
          studio@miyokoadvisory.com. We&rsquo;ll respond promptly.
        </p>

        <Heading>Changes</Heading>
        <p>
          If we materially change this policy, we&rsquo;ll update the revision
          date at the top of this page and, where appropriate, notify clients
          directly.
        </p>

        <Heading>Contact</Heading>
        <p>
          For any privacy-related question, write to{" "}
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
