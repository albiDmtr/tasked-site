import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasked",
  description: "Digitalizing your company's operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link  rel="apple-touch-icon"  href="/favicon.png" type="image/png" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
