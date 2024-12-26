"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correctly import the router from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppSidebar from "@/components/uicomponents/Sidebar";
import { useSidebarStore } from "@/app/Store/useStore";
import "./globals.css";

export default function RootLayout({ children }) {
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
            </div>
          </div>
        </body>
      </html>
    </UserProvider>
  );
}
