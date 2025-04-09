// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script"; // Import next/script
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SAS Group Demo",
  description: "Redesign concept for SAS Group website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}

        {/* Add Instagram Embed Script */}
        {/* strategy="lazyOnload" waits until browser is idle to load */}
        <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
