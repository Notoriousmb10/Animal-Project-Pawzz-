import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
import paw from '../../../../public/paw.png'

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "My Pets",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Appointments",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Emengency Assistance", 
    url: "#",
    icon: Search,
  },
  {
    title: "Ngo Listings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar>
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
      <SidebarTrigger className="relative top-2 left-2" />
    </SidebarProvider>
  );
}
