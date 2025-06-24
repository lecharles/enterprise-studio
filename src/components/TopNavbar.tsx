import { ChevronDown, PanelLeft, Check, Plus, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface TopNavbarProps {
  businessToggle: boolean;
  builderToggle: boolean;
  onBusinessToggle: (value: boolean) => void;
  onBuilderToggle: (value: boolean) => void;
  selectedModel: string;
  onModelChange: (value: string) => void;
}

export function TopNavbar({ 
  businessToggle, 
  builderToggle, 
  onBusinessToggle, 
  onBuilderToggle,
  selectedModel,
  onModelChange 
}: TopNavbarProps) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const isPlatformBuilder = location.pathname === "/platform/builder";

  const getModelDisplayName = (model: string) => {
    switch (model) {
      case "gpt-4o": return "GPT-4o";
      case "o3": return "o3";
      case "o4-mini": return "o4-mini";
      case "o4-mini-high": return "o4-mini-high";
      default: return model;
    }
  };

  return (
    <header className={`pl-4 pr-6 py-4 ${isPlatformBuilder ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Conditional Picker - Project for Platform Builder, Model for others */}
          {isPlatformBuilder ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
                  <span className="text-gray-900 text-base font-medium">Marketing & Sales project</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 bg-white border border-gray-200 shadow-lg">
                <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PROJECTS
                </div>
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <Check className="w-4 h-4 text-gray-600" />
                  <span>Marketing & Sales project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <Plus className="w-4 h-4 text-gray-600" />
                  <span>Create project</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 cursor-pointer">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <span>Manage projects</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Select value={selectedModel} onValueChange={onModelChange}>
              <SelectTrigger className="w-[200px] h-8 text-base border-none bg-transparent hover:bg-gray-100 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 text-lg">ChatGPT</span>
                  <span className="text-gray-500 text-sm">{getModelDisplayName(selectedModel)}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">
                  <div className="flex flex-col">
                    <span className="font-medium">GPT-4o</span>
                    <span className="text-xs text-gray-500">Great for most tasks</span>
                  </div>
                </SelectItem>
                <SelectItem value="o3">
                  <div className="flex flex-col">
                    <span className="font-medium">o3</span>
                    <span className="text-xs text-gray-500">Uses advanced reasoning</span>
                  </div>
                </SelectItem>
                <SelectItem value="o4-mini">
                  <div className="flex flex-col">
                    <span className="font-medium">o4-mini</span>
                    <span className="text-xs text-gray-500">Fastest at advanced reasoning</span>
                  </div>
                </SelectItem>
                <SelectItem value="o4-mini-high">
                  <div className="flex flex-col">
                    <span className="font-medium">o4-mini-high</span>
                    <span className="text-xs text-gray-500">Great at coding and visual reasoning</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
        
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/3d9dae14-5b23-4399-9919-ecf50ed251ee.png" 
                    alt="Audrey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white border border-gray-200 shadow-lg">
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/3d9dae14-5b23-4399-9919-ecf50ed251ee.png" 
                      alt="Audrey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Audrey</p>
                    <p className="text-sm text-gray-600">audrey@schneider.com</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">SSO</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Business</span>
                    <Switch
                      checked={businessToggle}
                      onCheckedChange={onBusinessToggle}
                      className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300 h-4 w-7"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Builder</span>
                    <Switch
                      checked={builderToggle}
                      onCheckedChange={onBuilderToggle}
                      className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300 h-4 w-7"
                    />
                  </div>
                </div>
              </div>
              
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <span>Personalize</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <span>Help</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
