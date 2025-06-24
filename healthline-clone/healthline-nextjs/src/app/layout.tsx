import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healthline: Medical information and health advice you can trust.",
  description: "We're committed to being your source for expert health guidance. Come to us in your pursuit of wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
