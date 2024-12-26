"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correctly import the router from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppSidebar from "@/components/uicomponents/Sidebar";
import { useSidebarStore } from "@/app/Store/useStore";
import "./globals.css";

export default function RootLayout({ children }) {
  // const { setSidebarState } = useSidebarStore();
  // const router = useRouter();

  // // Close the sidebar on route change
  // useEffect(() => {
  //   if (router && router.events && typeof router.events.on === "function") {
  //     const handleRouteChange = () => {
  //       setSidebarState(true);
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);
  //     return () => {
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }
  // }, [router, setSidebarState]);

  return (
    <UserProvider>
      <html lang="en">
        <body>
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
