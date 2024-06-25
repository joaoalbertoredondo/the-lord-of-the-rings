import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

const ring = localFont({
  src: [
    {
      path: "../public/font/RINGM___.ttf",
    },
  ],
  variable: "--font-ring",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ring.variable}`}>
      <body
        className={`${inter.className} h-screen bg-gradient-to-b from-[#161616] to-[#3C4B4C]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
