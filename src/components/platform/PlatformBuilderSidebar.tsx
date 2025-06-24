
import { 
  Layers,
  MessageSquare,
  Image,
  AudioWaveform,
  Bot,
  Mic,
  ArrowLeft,
  ChefHat,
  Users,
  HelpCircle
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
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface PlatformBuilderSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function PlatformBuilderSidebar({ currentView, onViewChange }: PlatformBuilderSidebarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainMenuItems = [
    { id: "platform", title: "Platform", icon: Layers, bold: true },
  ];

  const toolItems = [
    { id: "prompts", title: "Prompts", icon: MessageSquare },
    { id: "images", title: "Images", icon: Image },
    { id: "realtime", title: "Realtime", icon: AudioWaveform },
    { id: "agents", title: "Agents", icon: Bot },
    { id: "tts", title: "TTS", icon: Mic },
  ];

  const enterpriseItems = [
    { id: "enterprise", title: "Enterprise", icon: ArrowLeft },
  ];

  const bottomItems = [
    { id: "cookbook", title: "Cookbook", icon: ChefHat },
    { id: "forum", title: "Forum", icon: Users },
    { id: "help", title: "Help", icon: HelpCircle },
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
                    className={`w-full gap-3 rounded-lg text-sm transition-colors text-gray-700 hover:bg-gray-100 ${isCollapsed ? 'justify-center p-2 h-10 w-10 mx-auto' : 'justify-start px-3 py-2'} ${
                      item.bold ? 'font-bold' : ''
                    }`}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className={`w-4 h-4 shrink-0 ${item.bold ? 'font-bold' : ''}`} />
                    {!isCollapsed && <span className={item.bold ? 'font-bold' : ''}>{item.title}</span>}
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
                    className={`w-full gap-3 rounded-lg text-sm transition-colors ${
                      currentView === item.id 
                        ? "bg-gray-200 text-gray-900" 
                        : "text-gray-700 hover:bg-gray-100"
                    } ${isCollapsed ? 'justify-center p-2 h-10 w-10 mx-auto' : 'justify-start px-3 py-2'}`}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <item.icon className="w-4 h-4 shrink-0 text-gray-600" />
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
              {enterpriseItems.map((item) => (
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
                    <item.icon className="w-4 h-4 shrink-0 text-gray-600" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="flex-1" />

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
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
                    <item.icon className="w-4 h-4 shrink-0 text-gray-600" />
                    {!isCollapsed && <span>{item.title}</span>}
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
