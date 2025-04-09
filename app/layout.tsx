// src/app/layout.tsx
import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// --- Define Metadata ---
export const metadata: Metadata = {
  title: "SAS Group Demo",
  description: "Redesign concept for SAS Group website",
  // Viewport definition is MOVED OUT of metadata
};

// --- Define Viewport (New Recommended Way) ---
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // You can add other viewport properties here if needed
  // themeColor: "...",
  // colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* REMOVE the explicit <head /> tag. Next.js handles it. */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
