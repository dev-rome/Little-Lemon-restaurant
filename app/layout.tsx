import "./globals.css";
import type { Metadata } from "next";
import { karla } from "./fonts";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
