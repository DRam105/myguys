import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { LiveChatButton } from "@/components/shared/live-chat-button";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/shared/json-ld";
import { localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · Fast, Guaranteed Local Pest Control`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "pest control",
    "exterminator",
    "termite control",
    "rodent control",
    "mosquito control",
    "bed bug treatment",
    siteConfig.region,
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Fast, Guaranteed Local Pest Control`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        {/*
          ANALYTICS
          - Vercel Web Analytics is active via <Analytics /> below.
          - To also add Google Analytics 4: install @next/third-parties and
            render <GoogleAnalytics gaId="G-XXXX" /> here.
        */}
        <JsonLd data={localBusinessSchema()} />

        <Header />
        {/* pb accounts for the fixed mobile call bar */}
        <main className="flex-1 pb-14 lg:pb-0">{children}</main>
        <Footer />

        <MobileCallBar />
        <LiveChatButton />
        <Analytics />
      </body>
    </html>
  );
}
