import type { Metadata } from "next";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./ui/navbar/navBar";

export const metadata: Metadata = {
  title: "Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
