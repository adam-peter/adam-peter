import "./globals.css";
import { Josefin_Sans } from 'next/font/google'

const josephin = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Adam Peter",
  description: "Personal website of Adam Peter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josephin.className}>{children}</body>
    </html>
  );
}
