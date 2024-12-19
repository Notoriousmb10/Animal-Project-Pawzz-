"use client";

import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import AppSidebar from "@/components/uicomponents/Sidebar";
import useSidebarStore from "./Store/useStore";
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
  const { isOpen, setSidebarState, toggleSidebar} = useSidebarStore();
  
    useEffect(() => {
      setSidebarState(false);
      toggleSidebar();
    }, [setSidebarState]); 
  
  return (
    <UserProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex">
            <div className="relative z-20">
              <AppSidebar />
            </div>
            <div
              className={`relative z-30 transition-all overflow-x-hidden duration-300 flex-grow`}
            >
              {children}
            </div>
          </div>
        </body>
      </html>
    </UserProvider>
  );
}
