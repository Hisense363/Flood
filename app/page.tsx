import Header from "./components/header";
import Home from "./components/home";
import SnapScrollPage from "./components/scroll";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mist",
  description: "Burn sui for mist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Home />
        <SnapScrollPage />
        {children}
      </body>
    </html>
  );
}
