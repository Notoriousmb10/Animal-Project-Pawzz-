"use client";
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useState } from "react";
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

export function AppSidebar({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };
  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar isOpen={isOpen.toString()} >
          <div className="flex items-center gap-2 bg-[#F0F8FF] p-4">
            <Image src={paw} height={48} width={48} alt="" />
            <h1 className="text-2xl font-bold">Pawzz</h1>
          </div>
          <SidebarContent className="bg-[#F0F8FF] ">
            <SidebarGroup>
              <SidebarGroupLabel>Content</SidebarGroupLabel>
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
