
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Plus, Wrench, TestTubes } from "lucide-react";

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
      <div className="flex flex-col px-4 py-4">
        {/* Input field on top */}
        <Input
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 text-sm h-9 mb-3"
        />
        
        {/* Buttons row below */}
        <div className="flex items-center justify-between">
          {/* Left side buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded border border-gray-300 p-2 h-9 w-9"
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded border border-gray-300 p-2 h-9 w-9"
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
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded border border-gray-300 p-2 h-9 w-9"
            >
              <Wrench className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded border border-gray-300 p-2 h-9 w-9"
            >
              <TestTubes className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded border border-gray-300 p-2 h-9 w-9"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <Button 
              variant="default"
              size="sm" 
              className="text-white rounded px-4 h-9 text-sm font-medium hover:opacity-90"
              style={{ backgroundColor: 'rgba(17,163,127,255)' }}
              onClick={handleSend}
              disabled={!message.trim()}
            >
              Run
              <span className="ml-2 text-xs opacity-75">⌘↵</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
