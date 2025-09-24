import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { fontSans, fontMono } from "@/fonts";
import { LenisOptions } from "lenis";
import { ReactLenis } from "@/lib/lenis";
import { Toaster } from "react-hot-toast";
const fonts = `${fontSans.variable} ${fontMono.variable}`;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "EU Prime Serwis - International Recruitment Agency",
  description: "International Recruitment Agency in Europe"
};

const lenisOptions: Partial<LenisOptions> = {
  // smoothing controls
  duration: 1.2,

  // input multipliers & behavior
  wheelMultiplier: 1, // mouse wheel sensitivity
  touchMultiplier: 2
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root options={lenisOptions}>
        <body className={fonts}>
          <Layout className="flex-1">{children}</Layout>
          <Toaster position="top-right" reverseOrder={false} />
        </body>
      </ReactLenis>
    </html>
  );
}
