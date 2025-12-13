import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

const font = Lexend({
  variable: "--font",
  subsets: ["latin"],
});

const font2 = Lexend({
  variable: "--font2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alois",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} ${font2.variable} antialiased`}>
        <ThemeProvider enableSystem enableColorScheme attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
