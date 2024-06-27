import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "./components/Head";

const inter = Inter({ subsets: ["latin"] });

const ring = localFont({
  src: [
    {
      path: "../public/fonts/RINGM___.ttf",
    },
  ],
  variable: "--font-ring",
});

const middle = localFont({
  src: [
    {
      path: "../public/fonts/MiddleEarth.otf",
    },
  ],
  variable: "--font-middle",
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
    <html
      lang="en"
      className={`${ring.variable} ${middle.variable} h-full bg-gradient-to-b from-[#161616] to-[#3C4B4C] scrollbar-none bg-fixed overflow-y-scroll scroll-smooth`}
    >
      <body className={`${inter.className}`}>
        <section id="home">
          <Head />
          <Header />
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
