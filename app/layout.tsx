import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import ThemeController from "@/components/ThemeController/ThemeController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SE-Josh",
  description: "this si SE-Josh's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="nord">
      <body
        className={`bg-base-300 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeController />
        {children}
      </body>
    </html>
  );
}
