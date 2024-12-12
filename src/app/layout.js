'use client'

import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppSidebar } from "@/components/uicomponents/Sidebar";
import { useEffect } from "react";

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
  // const [currentHref, setCurrentHref] = useState(null); // Default value for SSR safety

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {

  //     setCurrentHref(window.location.pathname); // Get the path (e.g., '/about')
  //   }
  // }, []);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(currentHref === '/' ? false : true);
  
  return (
    <UserProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          
          <div className={`relative z-10 transition-all overflow-x-hidden duration-300 `}>{children}</div>
        </body>
      </html>
    </UserProvider>
  );
}
