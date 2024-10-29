import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const afacad = localFont({
  src: "./fonts/Afacad.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased bg-[url('/images/pexels-shotbyrain-3989914.jpg')] bg-cover bg-center bg-fixed min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
