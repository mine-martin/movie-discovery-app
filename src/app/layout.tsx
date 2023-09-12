import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie APP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-gray-200">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
