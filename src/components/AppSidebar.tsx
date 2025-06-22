
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
  Layers,
  PanelLeftClose
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  builderToggle: boolean;
}

export function AppSidebar({ currentView, onViewChange, builderToggle }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

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
    <Sidebar className="bg-gray-50">
      {!isCollapsed && (
        <SidebarHeader className="px-4 pt-6 pb-4">
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/767aed11-ad2d-4763-b5d1-76d73bc1c047.png" 
                alt="Schneider Studio"
                className="w-6 h-6"
              />
              <span className="font-medium text-gray-900">Schneider Studio</span>
            </div>
            <SidebarTrigger className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100" />
          </div>
        </SidebarHeader>
      )}

      {isCollapsed && (
        <div className="p-2 pt-6">
          <SidebarTrigger className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100 mx-auto block" />
        </div>
      )}

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
                    } ${isCollapsed ? 'justify-center px-2' : ''}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {!isCollapsed && <span>{item.title}</span>}
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
                    } ${isCollapsed ? 'justify-center px-2' : ''}`}
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCollapsed && (
          <>
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
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
