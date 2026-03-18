import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar | Modern Next.js Template",
  description: "A stunning, high-performance Next.js landing page built with Vanilla CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
