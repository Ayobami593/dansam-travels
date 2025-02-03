import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dansam Travels and Educonsult",
  description:
    "Dansam travels and educonsult is an agency created specifically for student need to assist them in studying abroad with ease and consulting with educational expert.",
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
