
import { useState, useEffect } from "react";
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
  campaignLaunched?: boolean;
}

export function AppSidebar({ currentView, onViewChange, builderToggle, campaignLaunched = false }: AppSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const [showAnalyticsBadge, setShowAnalyticsBadge] = useState(false);

  // Show analytics badge with delay when campaign is launched
  useEffect(() => {
    if (campaignLaunched) {
      const timer = setTimeout(() => {
        setShowAnalyticsBadge(true);
      }, 3500); // 3.5 second delay
      
      return () => clearTimeout(timer);
    }
  }, [campaignLaunched]);

  const mainMenuItems = [
    { id: "chat", title: "New chat", icon: MessageSquare },
    { id: "search", title: "Search chats", icon: Search },
    { id: "library", title: "Library", icon: Library },
    ...(builderToggle ? [{ id: "platform", title: "Platform", icon: Layers }] : []),
  ];

  const toolItems = [
    ...(builderToggle ? [{ id: "agents", title: "Agents", icon: Code, color: "text-green-600" }] : []),
    { id: "analytics", title: "Analytics", icon: Film, color: "text-blue-600", badge: showAnalyticsBadge ? 3 : undefined },
    { id: "automation", title: "Automation", icon: Zap, color: "text-yellow-600" },
    { id: "campaigns", title: "Campaigns", icon: Users, color: "text-purple-600", indicator: campaignLaunched },
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
    <Sidebar className="bg-gray-50 border-r-gray-200" collapsible="icon">
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
        <div className="pt-6 pb-4 flex justify-center">
          <SidebarTrigger className="h-8 w-8 text-gray-600 hover:text-gray-800 hover:bg-gray-100" />
        </div>
      )}

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full gap-3 rounded-lg text-sm transition-colors ${
                      currentView === item.id 
                        ? "bg-gray-200 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100"
                    } ${isCollapsed ? 'justify-center p-2 h-10 w-10 mx-auto' : 'justify-start px-3 py-2'}`}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
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
                    className={`w-full gap-3 rounded-lg text-sm transition-colors relative ${
                      currentView === item.id 
                        ? "bg-gray-200 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100"
                    } ${isCollapsed ? 'justify-center p-2 h-10 w-10 mx-auto' : 'justify-start px-3 py-2'}`}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <item.icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                      {!isCollapsed && <span className="flex-1">{item.title}</span>}
                      
                      {/* Campaign indicator - larger animated dot, aligned with analytics badge */}
                      {item.indicator && (
                        <div 
                          className={`w-3 h-3 rounded-full ${isCollapsed ? 'absolute top-1 right-1' : 'mr-0.5'}`}
                          style={{
                            background: 'radial-gradient(circle, #f87171 0%, #dc2626 100%)',
                            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate',
                            boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)'
                          }}
                        ></div>
                      )}
                      
                      {/* Analytics badge - subtle grey dot */}
                      {item.badge && (
                        <div className={`bg-gray-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium ${isCollapsed ? 'absolute top-0.5 right-0.5' : ''}`}>
                          {item.badge}
                        </div>
                      )}
                    </div>
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
