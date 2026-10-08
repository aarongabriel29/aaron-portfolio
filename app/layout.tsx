import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";

// Fonts are bundled locally (SIL Open Font License) so builds never depend on Google Fonts.
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;
const description =
  "Senior WordPress developer and designer. Figma to launch builds, custom PHP and Elementor development, and CRM and marketing automation integrations with NetSuite and Iterable.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.fullName }],
  keywords: ["WordPress developer", "Web designer", "Elementor", "PHP", "Figma", "Iterable", "NetSuite", "GA4", "Philippines"],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as JS enabled so scroll reveal animations only apply when they can run */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
