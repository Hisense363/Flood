import SnapScrollPage from "./components/scroll";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flood",
};

export default function page() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnapScrollPage />
      </body>
    </html>
  );
}
