
import { useState } from "react";
import { 
  Bot, 
  Settings, 
  Users, 
  BarChart3, 
  FolderOpen,
  Plus,
  ChevronRight,
  Home,
  Zap
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
}

export function AppSidebar({ currentView, onViewChange }: AppSidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["projects"]);

  const mainMenuItems = [
    { id: "dashboard", title: "Dashboard", icon: Home },
    { id: "agents", title: "AI Agents", icon: Bot },
    { id: "analytics", title: "Analytics", icon: BarChart3 },
    { id: "team", title: "Team", icon: Users },
    { id: "settings", title: "Settings", icon: Settings },
  ];

  const projects = [
    { id: "schneider-concierge", title: "Schneider Concierge Agent", type: "Agent" },
    { id: "energy-advisor", title: "Energy Efficiency Advisor", type: "Agent" },
    { id: "maintenance-assistant", title: "Maintenance Assistant", type: "App" },
    { id: "compliance-checker", title: "Compliance Checker", type: "Automation" },
  ];

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  return (
    <Sidebar className="border-r border-gray-800">
      <SidebarHeader className="border-b border-gray-800 p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Schneider AI Studio</h2>
            <p className="text-sm text-gray-400">Enterprise Platform</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onViewChange(item.id)}
                    className={`w-full justify-start gap-3 px-3 py-2 rounded-lg transition-colors ${
                      currentView === item.id 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
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

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel 
            className="flex items-center justify-between cursor-pointer text-gray-400 hover:text-white transition-colors"
            onClick={() => toggleGroup("projects")}
          >
            <span>Recent Projects</span>
            <ChevronRight 
              className={`w-4 h-4 transition-transform ${
                expandedGroups.includes("projects") ? "rotate-90" : ""
              }`} 
            />
          </SidebarGroupLabel>
          
          {expandedGroups.includes("projects") && (
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.id}>
                    <SidebarMenuButton
                      onClick={() => onViewChange(`project-${project.id}`)}
                      className={`w-full justify-start gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        currentView === `project-${project.id}` 
                          ? "bg-purple-600 text-white" 
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <FolderOpen className="w-3 h-3" />
                      <div className="flex flex-col items-start">
                        <span className="truncate">{project.title}</span>
                        <span className="text-xs text-gray-500">{project.type}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => onViewChange("new-project")}
                    className="w-full justify-start gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors border border-dashed border-gray-600"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Create New Project</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
