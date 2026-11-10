import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TURJO — Electrical & Electronics Engineer",
  description:
    "Portfolio of TURJO, an electrical and electronics engineer working across transformers, solar, lifts, generators and substations — from design and installation to commissioning and maintenance.",
  keywords: [
    "TURJO",
    "electrical engineer",
    "EEE engineer",
    "transformer",
    "solar",
    "lift",
    "generator",
    "substation",
    "Bangladesh",
  ],
  authors: [{ name: "TURJO" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TURJO",
    title: "TURJO — Electrical & Electronics Engineer",
    description:
      "Transformers, solar, lifts, generators and substations — engineered from load study to commissioning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TURJO — Electrical & Electronics Engineer",
    description:
      "Transformers, solar, lifts, generators and substations — engineered from load study to commissioning.",
  },
};

export const viewport: Viewport = {
  themeColor: "#04060b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#04060b] text-white">
        <div className="site-backdrop" aria-hidden="true">
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
          <div className="aurora aurora-c" />
          <div className="backdrop-grid" />
          <div className="backdrop-vignette" />
          <div className="backdrop-noise" />
        </div>

        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <div className="relative z-10 flex min-h-svh flex-col">{children}</div>
      </body>
    </html>
  );
}
