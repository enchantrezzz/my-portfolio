import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CommandPalette } from "@/components/ui/command";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pako Jack Motsumi | CS & Software Engineering",
  description: "CS & Software Engineering undergrad from Botswana. Building mobile apps, web platforms, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-ctp-base text-ctp-text antialiased">
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
