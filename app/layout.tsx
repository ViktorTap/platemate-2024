import type { Metadata } from "next";

// Style
import "./globals.css";
import { Inter } from "next/font/google";

// Components
import NavigationBar from "./components/NavigarionBar";
import SessionProviderWrapper from "./components/SessionProviderWrapper";

// Toastify
import { Bounce, ToastContainer } from "react-toastify";

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
        <SessionProviderWrapper>
          <NavigationBar />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
