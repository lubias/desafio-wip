"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
    ChartColumn,
    Compass,
    LayoutDashboard,
    ListTree,
    Settings,
    Truck,
    Users2,
} from "lucide-react"
import { usePathname } from "next/navigation"
import React from "react"

function SidebarMolecule() {
    const pathname = usePathname()

    const menuItems = [
        { name: "Create Articles", icon: <LayoutDashboard />, href: "/" },
        { name: "Backlog", icon: <ListTree />, href: "/backlog" },
        { name: "Roadmap", icon: <Compass />, href: "/roadmap" },
        { name: "Reports", icon: <ChartColumn />, href: "/reports" },
        { name: "Releases", icon: <Truck />, href: "/releases" },
    ]

    const secondaryItems = [
        { name: "Teams", icon: <Users2 />, href: "/teams" },
        { name: "Project settings", icon: <Settings />, href: "/project-settings" },
    ]

    return (
        <SidebarProvider>
            <Sidebar className="bg-sidebar text-sidebar-foreground w-64">
                <SidebarContent>
                    <SidebarGroup className="px-0">
                        <h1 className="text-3xl font-bold mb-4 pl-5">WIP</h1>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {menuItems.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            className={`flex items-center px-2 rounded-none hover:bg-muted ${pathname === item.href ? "text-[#d19fa6] border-l-3 border-[#d19fa6] font-bold hover:text-[#d19fa6]" : ""
                                                }`}
                                        >
                                            <a href={item.href}>
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}

                                <Separator className="my-2" />

                                {secondaryItems.map((item) => (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            className={`flex items-center px-2 rounded-none hover:bg-muted ${pathname === item.href ? "text-[#d19fa6] border-l-3 border-[#d19fa6] font-bold hover:text-[#d19fa6]" : ""
                                                }`}
                                        >
                                            <a href={item.href}>
                                                {item.icon}
                                                <span className="ml-2">{item.name}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </SidebarProvider >
    )
}

export default SidebarMolecule
