import { Caveat, Geist, Instrument_Serif } from "next/font/google";
import { Aurora, Grain } from "@/components/atmosphere";
import { siteUrl } from "@/lib/site";
import Nav from "@/components/nav";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EiABC Confessions 2026",
    template: "%s — EiABC Confessions 2026",
  },
  description:
    "An anonymous wall for the words people never had the courage to say. Write one. Drag through thousands.",
  openGraph: {
    title: "EiABC Confessions 2026",
    description:
      "An anonymous wall for the words people never had the courage to say.",
    type: "website",
    siteName: "EiABC Confessions 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "EiABC Confessions 2026",
    description:
      "An anonymous wall for the words people never had the courage to say.",
  },
};

export const viewport = {
  themeColor: "#f3efe7",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable} ${caveat.variable}`}>
      <body>
        <Aurora />
        <Nav />
        {children}
        <Grain />
      </body>
    </html>
  );
}
