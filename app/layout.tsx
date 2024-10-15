import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const afacad = localFont({
  src: "./fonts/Afacad.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mist",
  description: "Mist mining",
  icons: {
    icon: "/favicon.ico", // /favicon.ico is the default, so this is optional
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
