import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://miyokoadvisory.com"),
  title: {
    default: "Miyoko Advisory — Established businesses, modernized in seven days.",
    template: "%s · Miyoko Advisory",
  },
  description:
    "A boutique studio that rebuilds the brand, website, and systems of established businesses — so you finally look as credible online as you already are in real life.",
  openGraph: {
    title: "Miyoko Advisory",
    description:
      "Established businesses, modernized in seven days. By application only.",
    type: "website",
    siteName: "Miyoko Advisory",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FadeUp />
      </body>
    </html>
  );
}
