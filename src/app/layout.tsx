import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dansam",
  description:
    "Dansam travels and educonsult is an agency created specifically for student need to assist them in studying abroad with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-suse bg-[#f5f5f5] antialiased`}>{children}</body>
    </html>
  );
}
