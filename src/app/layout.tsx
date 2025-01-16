import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { classNames } from "./utils";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Sidebar from "./LayoutComponents/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Convertio - Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-black min-h-screen flex flex-col",
        )}
      >
        <Header />
        <div className="flex flex-1 size-full">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
