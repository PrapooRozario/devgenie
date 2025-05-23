import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { geistMono, geistSans } from "./utils/fonts";
import BottomBlur from "@/components/BottomBlur";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="bg-black h-screen">
          <main className="container w-11/12 mx-auto md:py-6 py-4">
            <Navbar />
            {children}
            <BottomBlur />
          </main>
        </main>
      </body>
    </html>
  );
}
