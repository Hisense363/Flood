import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-afacad antialiased bg-hero-pattern bg-cover bg-center bg-fixed min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
