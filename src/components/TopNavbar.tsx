
import { Search, Bell, Settings, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface TopNavbarProps {
  businessToggle: boolean;
  builderToggle: boolean;
  onBusinessToggle: (value: boolean) => void;
  onBuilderToggle: (value: boolean) => void;
}

export function TopNavbar({ businessToggle, builderToggle, onBusinessToggle, onBuilderToggle }: TopNavbarProps) {
  return (
    <header className="border-b border-gray-800 bg-[#1a1a1a] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search projects, agents, or ask questions..."
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Bell className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 ml-4 cursor-pointer hover:bg-gray-800 rounded-lg p-2 transition-colors">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="/lovable-uploads/3d9dae14-5b23-4399-9919-ecf50ed251ee.png" 
                    alt="Audrey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Audrey</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400 text-xs">audrey@schneider.com</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-400">SSO</span>
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white border border-gray-200 shadow-lg">
              <div className="p-3 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/3d9dae14-5b23-4399-9919-ecf50ed251ee.png" 
                      alt="Audrey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Audrey</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-600">audrey@schneider.com</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600">SSO</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Business</span>
                    <Switch
                      checked={businessToggle}
                      onCheckedChange={onBusinessToggle}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Builder</span>
                    <Switch
                      checked={builderToggle}
                      onCheckedChange={onBuilderToggle}
                    />
                  </div>
                </div>
              </div>
              
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <User className="w-4 h-4" />
                <span>Upgrade plan</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Personalize</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                <Settings className="w-4 h-4" />
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
