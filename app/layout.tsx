import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.T.S Club | Community, Culture & Legacy Since 1971",
  description:
    "Official website of S.T.S Club, established on May 9, 1971. Discover our history, community, cultural activities, events and members.",
  metadataBase: new URL("https://stsclub.org"),
  openGraph: {
    title: "S.T.S Club | Community, Culture & Legacy Since 1971",
    description:
      "Official website of S.T.S Club, established on May 9, 1971. Discover our history, community, cultural activities, events and members.",
    url: "https://stsclub.org",
    siteName: "S.T.S Club",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body selection:bg-primary/20 selection:text-primary-dark">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
