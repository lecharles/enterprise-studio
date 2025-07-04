
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Mic, Send } from "lucide-react";
import { ToolsDropdown } from "./ToolsDropdown";
import { ResearchTool } from "./ResearchTool";

interface ChatInputAreaProps {
  showResearchTool: boolean;
  setShowResearchTool: (show: boolean) => void;
  showSourcesDropdown: boolean;
  setShowSourcesDropdown: (show: boolean) => void;
  setShowConnectMoreModal: (show: boolean) => void;
  enabledSources: Record<string, boolean>;
  onToggleSource: (sourceId: string) => void;
  onSendMessage?: (message: string) => void;
}

export function ChatInputArea({
  showResearchTool,
  setShowResearchTool,
  showSourcesDropdown,
  setShowSourcesDropdown,
  setShowConnectMoreModal,
  enabledSources,
  onToggleSource,
  onSendMessage
}: ChatInputAreaProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && onSendMessage) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative">
      <div className="bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center px-4 py-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2 mr-2"
          >
            <Plus className="w-4 h-4" />
          </Button>
          
          <ToolsDropdown 
            onShowConnectMore={() => setShowConnectMoreModal(true)}
            onShowResearch={() => setShowResearchTool(!showResearchTool)}
          />

          <ResearchTool
            showResearchTool={showResearchTool}
            onHideResearch={() => setShowResearchTool(false)}
            showSourcesDropdown={showSourcesDropdown}
            setShowSourcesDropdown={setShowSourcesDropdown}
            setShowConnectMoreModal={setShowConnectMoreModal}
            enabledSources={enabledSources}
            onToggleSource={onToggleSource}
          />
          
          <Input
            placeholder="Ask anything"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none focus:border-white text-gray-900 placeholder-gray-500"
            style={{ boxShadow: 'none' }}
          />
          
          <div className="flex items-center gap-2 ml-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
            >
              <Mic className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white bg-black hover:bg-gray-800 rounded-full p-2"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
