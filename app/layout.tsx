import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgeCal - Age Calculator",
  description:
    "Calculate your age accurately with our simple and fast age calculator tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense account verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-4333070677760037"
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4333070677760037"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Navigation />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}