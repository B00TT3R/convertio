import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "./components";
import { classNames } from "./utils";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          className={classNames(
            "flex w-full p-4 px-8 gap-4 items-center",
            "bg-black text-green-100",
            "shadow-xl",
          )}
        >
          <h1 className="text-bold text-[40px] mr-auto border-green-600 border-x px-4 rounded-md">
            Convertio
          </h1>
          <Button className="bg-transparent border-green-600 border-x text-green-100">
            Home
          </Button>
          <Button className="bg-transparent border-green-600 border-x text-green-100">
            Conversores
          </Button>
        </header>
        {children}
      </body>
    </html>
  );
}
