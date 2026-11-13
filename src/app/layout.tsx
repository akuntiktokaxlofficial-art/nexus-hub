import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const display = Exo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Official Community`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080611",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
