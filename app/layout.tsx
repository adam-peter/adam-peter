import "./globals.css";
import Navbar from "@/components/Navbar";

import { Josefin_Sans } from "next/font/google";
const josephin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Adam Peter",
  description: "Personal website of Adam Peter",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={"p-6 " + josephin.className}>
        <div className="h-full border border-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
