import "./globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-afacad", // Add this
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased bg-hero-pattern bg-cover bg-center bg-fixed min-h-screen font-afacad`}
      >
        {children}
      </body>
    </html>
  );
}
