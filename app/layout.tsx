import type { Metadata } from "next";
import "./globals.css";
import { Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Pearl Website",
  description: "Official Website of Pearl Projects",
};

const barlow = Barlow({
  subsets: ["latin"], // Choose the appropriate subsets, e.g., "latin"
  weight: ["100", "300", "400", "500", "700"], // Specify the font weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(barlow.className, "antialiased")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
