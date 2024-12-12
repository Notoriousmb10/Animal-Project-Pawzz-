"use client";
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";

import Image from "next/image";
import paw from "../../../public/paw.png";

// Menu items.
const items = [
  { title: "Home", url: "/home", icon: Home },
  { title: "My Pets", url: "/mypets", icon: Inbox },
  { title: "Appointments", url: "/schedules", icon: Calendar },
  { title: "Ngo Listings", url: "/ngolistings", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function AppSidebar({ onToggle }) {
  const [isOpen, setIsOpen] = useState(JSON.parse(localStorage.getItem("sidebar")));


  useEffect(() => {
    const sideBarStatus = JSON.parse(localStorage.getItem("sidebar"));
    setIsOpen(sideBarStatus);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };
  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar isOpen={isOpen} >
          <div className="flex items-center gap-2 bg-white p-4">
            <Image src={paw} height={48} width={48} alt="" />
            <h1 className="text-2xl font-bold">Pawzz</h1>
          </div>
          <SidebarContent className="bg-white shadow-2xl shadow-blue-300">
            <SidebarGroup>
              <SidebarGroupLabel></SidebarGroupLabel>
              <SidebarGroupContent className="">
                <SidebarMenu className="gap-6">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="  hover:bg-white py-4"
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
              
            </SidebarGroup>

          </SidebarContent>
        </Sidebar>
      </div>
      <SidebarTrigger
        className="relative top-2 left-2"
        onClick={handleToggle}
      />
    </SidebarProvider>
  );
}
