import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import '@picocss/pico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poke App",
  description: "Your pocket pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
