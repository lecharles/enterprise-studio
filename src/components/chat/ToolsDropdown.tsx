
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";

interface ToolsDropdownProps {
  onShowConnectMore: () => void;
  onShowResearch: () => void;
}

export function ToolsDropdown({ onShowConnectMore, onShowResearch }: ToolsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-1 mr-3"
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm">Tools</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-white">
        <DropdownMenuItem 
          className="flex items-center gap-3 cursor-pointer"
          onClick={onShowConnectMore}
        >
          <div className="w-4 h-4 flex items-center justify-center">🔗</div>
          <div>
            <div className="font-medium text-sm">Search connectors</div>
            <div className="text-xs text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">NEW</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
          <div className="w-4 h-4 flex items-center justify-center">🎨</div>
          <span className="text-sm">Create an image</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
          <div className="w-4 h-4 flex items-center justify-center">🌐</div>
          <span className="text-sm">Search the web</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
          <div className="w-4 h-4 flex items-center justify-center">💻</div>
          <span className="text-sm">Write or code</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 cursor-pointer" onClick={onShowResearch}>
          <div className="w-4 h-4 flex items-center justify-center">🔍</div>
          <span className="text-sm">Run deep research</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
