"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppSidebar from "@/components/uicomponents/Sidebar";
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
