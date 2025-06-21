
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

interface TopNavbarProps {
  businessToggle: boolean;
  builderToggle: boolean;
  onBusinessToggle: (value: boolean) => void;
  onBuilderToggle: (value: boolean) => void;
}

export function TopNavbar({ businessToggle, builderToggle, onBusinessToggle, onBuilderToggle }: TopNavbarProps) {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-end">
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
                  <span className="text-sm text-gray-600">Business</span>
                  <Switch
                    checked={businessToggle}
                    onCheckedChange={onBusinessToggle}
                    className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300 h-5 w-9"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Builder</span>
                  <Switch
                    checked={builderToggle}
                    onCheckedChange={onBuilderToggle}
                    className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-300 h-5 w-9"
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
    </header>
  );
}
