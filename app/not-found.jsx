import Link from "next/link";
import Section from "../components/Section";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section width="text" py="lg">
      <div className="text-center" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div
          className="font-display"
          style={{
            fontSize: "clamp(60px, 10vw, 120px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontWeight: 300,
            color: "var(--gold)",
          }}
        >
          404
        </div>
        <h1
          className="font-display mt-4"
          style={{
            fontSize: "clamp(28px, 3.6vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "var(--ink)",
          }}
        >
          That page isn&rsquo;t here.
        </h1>
        <p
          className="mt-6 mx-auto"
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "var(--ink)",
            maxWidth: 480,
          }}
        >
          The link may have moved, or the page may have been retired. The
          studio&rsquo;s entire surface is four pages — easy to find your way
          back.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Return home
          </Link>
          <Link href="/services" className="btn-secondary">
            See services
          </Link>
        </div>
      </div>
    </Section>
  );
}
