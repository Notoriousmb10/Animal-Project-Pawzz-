'use client'

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


import Image from 'next/image'
import paw from '../../../public/paw.png'

// Menu items.
const items = [
  { title: "Home", url: "/home", icon: Home },
  { title: "My Pets", url: "/mypets", icon: Inbox },
  { title: "Appointments", url: "/schedules", icon: Calendar },
  { title: "Emergency Assistance", url: "/mergency", icon: Search },
  { title: "Ngo Listings", url: "/ngolistings", icon: Settings },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar({onToggle}) {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };
  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar isOpen={isOpen.toString()}>
        <div className="flex items-center gap-2  p-4">
          <Image src={paw} height={48} width={48} alt="" />
          <h1 className="text-2xl font-bold">Pawzz</h1>
        </div>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
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
      <SidebarTrigger className="relative top-2 left-2"  onClick={handleToggle}/>
    </SidebarProvider>
  );
}
