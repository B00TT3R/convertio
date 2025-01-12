import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "./components";
import { classNames } from "./utils";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import { SidebarProvider } from "./context/SidebarContext";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen flex flex-col`}
      >
        <SidebarProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
