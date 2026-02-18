import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Engineer + Photographer Portfolio",
  description: "Dual-track portfolio for software engineering and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${cormorant.variable}`}>
        <div className="background-orb background-orb-1" />
        <div className="background-orb background-orb-2" />
        <SiteHeader />
        <main className="site-shell pb-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
