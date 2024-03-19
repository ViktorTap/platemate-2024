import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "./components/NavigarionBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLATEMATE 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
