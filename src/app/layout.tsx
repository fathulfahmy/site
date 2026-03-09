import "./globals.css";
import { Footer } from "@/features/footer/components/footer";
import { Header } from "@/features/header/components/header";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathul Fahmy",
  description: "Full Stack Developer, AI Engineer, Open Source Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${interSans.variable} ${interTight.variable} font-inter-tight min-h-screen w-full antialiased`}>
        <Header />
        <main className="mx-auto max-w-7xl border-b border-neutral-200 px-3 pb-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
