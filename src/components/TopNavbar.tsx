
import { ChevronDown } from "lucide-react";
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
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Model Picker */}
          <Select value={selectedModel} onValueChange={onModelChange}>
            <SelectTrigger className="w-[140px] h-8 text-sm border-none bg-transparent hover:bg-gray-100 rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">
                <span className="font-medium">GPT-4o</span>
                <span className="text-xs text-gray-500 ml-2">Great for most tasks</span>
              </SelectItem>
              <SelectItem value="o3">
                <span className="font-medium">o3</span>
                <span className="text-xs text-gray-500 ml-2">Uses advanced reasoning</span>
              </SelectItem>
              <SelectItem value="o4-mini">
                <span className="font-medium">o4-mini</span>
                <span className="text-xs text-gray-500 ml-2">Fastest at advanced reasoning</span>
              </SelectItem>
              <SelectItem value="o4-mini-high">
                <span className="font-medium">o4-mini-high</span>
                <span className="text-xs text-gray-500 ml-2">Great at coding and visual reasoning</span>
              </SelectItem>
            </SelectContent>
          </Select>
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
                  <div>
                    <p className="font-medium text-gray-900">Audrey</p>
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
