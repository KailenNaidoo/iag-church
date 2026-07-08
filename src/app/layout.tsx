import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "IAG - International Assemblies of God",
  description: "Welcome to the International Assemblies of God. A sanctuary of worship, fellowship, and spiritual transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f0f2f5]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
