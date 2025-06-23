
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Bot, 
  Image, 
  Zap, 
  MessageSquare, 
  HelpCircle,
  BookOpen,
  Users
} from "lucide-react";

export function PlatformSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">PLAYGROUND</h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <MessageSquare className="w-4 h-4 mr-3" />
            Prompts
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <Image className="w-4 h-4 mr-3" />
            Images
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <Zap className="w-4 h-4 mr-3" />
            Realtime
          </Button>
          
          <Button
            variant="default"
            className="w-full justify-start bg-gray-900 text-white hover:bg-gray-800"
          >
            <Bot className="w-4 h-4 mr-3" />
            Agents
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
          >
            <MessageSquare className="w-4 h-4 mr-3" />
            TTS
          </Button>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-100 text-sm"
        >
          <BookOpen className="w-4 h-4 mr-3" />
          Cookbook
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-100 text-sm"
        >
          <Users className="w-4 h-4 mr-3" />
          Forum
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-700 hover:bg-gray-100 text-sm"
        >
          <HelpCircle className="w-4 h-4 mr-3" />
          Help
        </Button>
      </div>
    </div>
  );
}
