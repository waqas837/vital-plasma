"use client";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head></head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
