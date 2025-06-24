
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Plus, Wrench } from "lucide-react";

interface PlatformBuilderChatboxProps {
  onSendMessage?: (message: string) => void;
}

export function PlatformBuilderChatbox({ onSendMessage }: PlatformBuilderChatboxProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex items-center px-3 py-2">
        {/* Left side buttons */}
        <div className="flex items-center gap-1 mr-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded p-1.5 h-7 w-7"
          >
            <Paperclip className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded p-1.5 h-7 w-7"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded p-1.5 h-7 w-7"
          >
            <Wrench className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Input field */}
        <Input
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 text-sm"
        />
        
        {/* Right side buttons */}
        <div className="flex items-center gap-2 ml-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded p-1.5 h-7 w-7"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button 
            variant="default"
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white rounded px-3 h-7 text-sm font-medium"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            Run
            <span className="ml-1.5 text-xs opacity-75">⌘↵</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
