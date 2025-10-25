import "./globals.css";

export const metadata = {
  title: "Alois~",
  description: "Uptempo, NEXT.js & Club Mate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.png" />
      </head>
      <body className="antialiased font-[monospace] flex justify-between h-screen">
        {children}
      </body>
    </html>
  );
}
