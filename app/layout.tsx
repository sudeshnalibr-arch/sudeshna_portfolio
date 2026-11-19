
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudeshna Mandal | Full Stack Developer",
  description:
    "Portfolio of Sudeshna Mandal, Full Stack Developer specializing in Node.js, Express.js, React.js, Next.js, TypeScript and database-driven applications.",
  keywords: [
    "Sudeshna Mandal",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Sudeshna Mandal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
