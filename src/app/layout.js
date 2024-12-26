"use client";

import localFont from "next/font/local";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppSidebar from "@/components/uicomponents/Sidebar";
import { useSidebarStore } from "@/app/Store/useStore";
import "./globals.css";
import React, { useEffect } from "react";
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
  const { setSidebarState, toggleSidebar } = useSidebarStore();
  
  useEffect(()=> {
    setSidebarState(false);
    // toggleSidebar();
  },[]);

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
