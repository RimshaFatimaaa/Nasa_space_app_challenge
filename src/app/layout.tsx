import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteExperience } from "@/components/SiteExperience";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Beyond Earth",
    template: "%s — Beyond Earth",
  },
  description:
    "Explore the machines NASA left on the Moon and Mars. Read their stories, compare generations of hardware, and try a quiz. Made for students and space fans.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="starfield pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />
        <SiteExperience />
        <div className="reading-scrim pointer-events-none fixed inset-0 z-[1]" aria-hidden="true" />
        <div className="relative z-10">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-space"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
