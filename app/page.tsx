import SnapScrollPage from "./components/scroll";
import "./globals.css";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flood",
};

export default function Home() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnapScrollPage />
      </body>
    </html>
  );
}
