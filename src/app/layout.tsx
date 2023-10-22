import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Hero } from "@/_components/Hero/Hero";
import { Navbar } from "@/_components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visualizing Economic Data",
  description:
    "Explore key economic indicators with interactive charts built using React.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto p-4 relative">
          <Navbar />
          <Hero />
          {children}
        </div>
      </body>
    </html>
  );
}
