import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ipu-sgpa-calculator.example.com"),
  title: "GGSIPU SGPA Calculator | IPU SGPA",
  description:
    "Calculate your GGSIPU semester SGPA instantly with the latest IPU grading pattern. Fast, accurate, mobile-friendly and free.",
  keywords: [
    "IPU SGPA calculator",
    "GGSIPU SGPA",
    "IPU grade calculator",
    "GGSIPU CGPA",
  ],
  openGraph: {
    title: "GGSIPU SGPA Calculator",
    description:
      "Calculate your semester SGPA in seconds with the latest IPU pattern.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
