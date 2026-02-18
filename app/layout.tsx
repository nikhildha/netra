import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project NETRA | Surveillance System",
  description: "National Electronic Tracking & Risk Analysis Proposal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex overflow-hidden bg-background text-foreground`}
      >
        <Sidebar nice-name="Sidebar Navigation" />
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Header nice-name="Top Header" />
          <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
