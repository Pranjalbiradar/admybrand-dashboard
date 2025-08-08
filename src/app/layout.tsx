// src/app/layout.tsx

import "./globals.css";
import Sidebar from "@/components/ui/layout/sidebar";
import Navbar from "@/components/ui/layout/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admybrand Dashboard",
  description: "AI-powered analytics for marketing campaigns",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Navbar />
        <main className="ml-64 mt-16 p-6 bg-white min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
