import type { Metadata } from "next";
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
  metadataBase: new URL("https://stressfreesprint.com"),
  title: {
    default: "Stress Free Sprint | Stress Management & Digital Well-being",
    template: "%s | Stress Free Sprint",
  },
  description:
    "Inhale courage, exhale stress. Safe, supportive space for stress management and digital well-being. Certified Stress Management Strategist and Spiritual Healer.",
  keywords: [
    "stress management",
    "digital well-being",
    "work-life balance",
    "corporate stress",
    "IT stress",
    "burnout",
    "mindfulness",
    "stress relief",
  ],
  authors: [{ name: "Stress Free Sprint", url: "https://stressfreesprint.com" }],
  creator: "Stress Free Sprint",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stressfreesprint.com",
    siteName: "Stress Free Sprint",
    title: "Stress Free Sprint | Stress Management & Digital Well-being",
    description:
      "Inhale courage, exhale stress. Safe, supportive space for stress management and digital well-being.",
    images: [{ url: "/favicon.svg", alt: "Stress Free Sprint — Pause, Breath, Reset" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress Free Sprint | Stress Management & Digital Well-being",
    description:
      "Inhale courage, exhale stress. Safe, supportive space for stress management and digital well-being.",
    images: [{ url: "/favicon.svg", alt: "Stress Free Sprint — Pause, Breath, Reset" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
