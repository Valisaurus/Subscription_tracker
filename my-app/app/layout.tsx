import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "CTRL+",
  description: "Ta ctrl över dina prenumerationer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${lato.className}`}>{children}</main>
      </body>
    </html>
  );
}
