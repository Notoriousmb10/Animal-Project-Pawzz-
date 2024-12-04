'use client'

import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppSidebar } from "@/components/uicomponents/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };
  return (
    <UserProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="fixed z-20">
            <AppSidebar onToggle={handleSidebarToggle} />
          </div>
          <div className={`relative z-10 transition-all duration-300 ${!isSidebarOpen ? 'ml-64' : 'ml-0'}`}>{children}</div>
        </body>
      </html>
    </UserProvider>
  );
}
