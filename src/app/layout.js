"use client";
import React, { useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppSidebar from "@/components/uicomponents/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <UserProvider>
      <html lang="en">
        <body>
          <div className="flex">
            <div className="fixed z-40">
              <AppSidebar />
            </div>
            <div
              className={`relative z-30 transition-all overflow-x-hidden duration-300 flex-grow`}
            >
              {children}
              <Toaster />
            </div>
          </div>
        </body>
      </html>
    </UserProvider>
  );
}
