import { useState } from "react";
import { 
  MessageSquare,
  Search,
  Library,
  Code,
  Film,
  Users,
  Palette,
  Plus,
  Zap,
  Layers
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  builderToggle: boolean;
}

export function AppSidebar({ currentView, onViewChange, builderToggle }: AppSidebarProps) {
  const mainMenuItems = [
    { id: "chat", title: "New chat", icon: MessageSquare },
    { id: "search", title: "Search chats", icon: Search },
    { id: "library", title: "Library", icon: Library },
    ...(builderToggle ? [{ id: "platform", title: "Platform", icon: Layers }] : []),
  ];

  const toolItems = [
    ...(builderToggle ? [{ id: "agents", title: "Agents", icon: Code, color: "text-green-600" }] : []),
    { id: "analytics", title: "Analytics", icon: Film, color: "text-blue-600" },
    { id: "automation", title: "Automation", icon: Zap, color: "text-yellow-600" },
    { id: "campaigns", title: "Campaigns", icon: Users, color: "text-purple-600" },
    { id: "design", title: "Design", icon: Palette, color: "text-pink-600" },
  ];

  const recentChats = [
    "Schneider Electric Energy Solutions",
    "Building Automation Systems",
    "Solar Panel Optimization",
    "Industrial IoT Implementation",
    "Smart Grid Technology",
    "Energy Efficiency Analysis",
    "Electrical Safety Protocols",
    "Renewable Energy Integration",
    "Power Management Systems",
    "Sustainability Reporting"
  ];

  return (
    <Sidebar className="border-r border-gray-200 bg-gray-50">
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-gray-900">Schneider Studio</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full justify-start gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentView === item.id 
                        ? "bg-gray-200 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {toolItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full justify-start gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentView === item.id 
                        ? "bg-gray-200 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarMenuButton
            onClick={() => onViewChange("new-project")}
            className="w-full justify-start gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New project</span>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="text-xs text-gray-500 px-3 py-1">
            Chats
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(`chat-${index}`)}
                    className="w-full justify-start px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors truncate"
                  >
                    <span className="truncate">{chat}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
