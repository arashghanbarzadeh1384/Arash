import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/Components/Navigation/Navigation";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Arashghanbarzadh",
  description: "Front end develoeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
