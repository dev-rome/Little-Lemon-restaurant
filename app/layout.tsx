import "./globals.css";

import type { Metadata } from "next";
import { karla } from "./fonts";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description:
    "Little Lemon is a restaurant that serves the best food in the world. We're located in the heart of the city.",
  openGraph: {
    title: "Little Lemon Restaurant",
    description:
      "Little Lemon is a restaurant that serves the best food in the world. We're located in the heart of the city.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
