
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, MoreHorizontal, Logs, ChevronDown, Check, Plus, Bot, ChevronUp } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function AgentsView() {
  const [showLogs, setShowLogs] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("Outreach Automation Agent");
  const [agentName, setAgentName] = useState("Outreach Automation Agent");
  const [systemInstructions, setSystemInstructions] = useState("You are Campaign Orchestrator, an AI agent specialized in creating and managing multi-channel marketing campaigns for Schneider Electric's enterprise solutions, with a special focus on personalized conversations.");
  const [selectedModel, setSelectedModel] = useState("gpt-4.1");
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const agents = [
    "Outreach Automation Agent",
    "Lead Nurturing Agent", 
    "IB-Intel Upsell Agent",
    "Seller Assist in Teams Agent"
  ];

  const models = [
    "gpt-4.1",
    "claude-3-5-sonnet",
    "gpt-4o",
    "gpt-3.5-turbo"
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Sub-header */}
      <div className="px-6 py-2 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 h-8 px-2 text-xs border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
              <BookOpen className="w-3 h-3" />
              <span>Learn more</span>
            </Button>
            <Button variant="outline" size="sm" className="px-1.5 hover:bg-gray-50 h-8 w-8 border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
              <MoreHorizontal className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content area with resizable panels */}
      <div className="flex-1 relative">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel */}
          <ResizablePanel defaultSize={33} minSize={20} maxSize={50}>
            <div className="h-full bg-white p-4 space-y-6">
              {/* Agent Picker */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between h-10 px-3 text-left font-normal border-0 bg-white hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-900">{selectedAgent}</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 bg-white border border-gray-200 shadow-lg">
                    {agents.map((agent) => (
                      <DropdownMenuItem
                        key={agent}
                        onClick={() => setSelectedAgent(agent)}
                        className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-50"
                      >
                        <span className="text-gray-900">{agent}</span>
                        {selectedAgent === agent && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator className="my-1" />
                    <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-50 text-gray-600">
                      <Plus className="w-4 h-4" />
                      <span>Create agent</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="agent-name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="agent-name"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">asst_jKdmIBZu1Pptpd4q7JqD5</p>
              </div>

              {/* System Instructions Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="system-instructions" className="text-sm font-medium text-gray-700">
                    System instructions
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullInstructions(!showFullInstructions)}
                    className="h-6 w-6 p-0 hover:bg-gray-100"
                  >
                    {showFullInstructions ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </Button>
                </div>
                <Textarea
                  id="system-instructions"
                  value={systemInstructions}
                  onChange={(e) => setSystemInstructions(e.target.value)}
                  className={`w-full resize-none transition-all duration-200 ${
                    showFullInstructions ? 'min-h-[200px]' : 'min-h-[80px]'
                  }`}
                  placeholder="Enter system instructions..."
                />
              </div>

              {/* Model Field */}
              <div className="space-y-2">
                <Label htmlFor="model-select" className="text-sm font-medium text-gray-700">
                  Model
                </Label>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {!showLogs ? (
            /* 2-panel state: Right panel with Logs button */
            <ResizablePanel defaultSize={67}>
              <div className="h-full bg-white relative">
                {/* Logs button in top right */}
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLogs(true)}
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-3 text-xs border-0 bg-transparent"
                  >
                    <Logs className="w-3 h-3" />
                    <span>Logs</span>
                  </Button>
                </div>
                {/* Right panel content placeholder */}
                <div className="h-full p-4">
                </div>
              </div>
            </ResizablePanel>
          ) : (
            /* 3-panel state: Middle and Right panels */
            <>
              {/* Middle Panel */}
              <ResizablePanel defaultSize={37} minSize={25} maxSize={50}>
                <div className="h-full bg-white border-r border-gray-200 p-4">
                  {/* Middle panel content placeholder */}
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Right Panel (Logs) */}
              <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
                <div className="h-full bg-white relative">
                  {/* Hide logs button in top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowLogs(false)}
                      className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-3 text-xs border-0 bg-transparent"
                    >
                      <Logs className="w-3 h-3" />
                      <span>Hide logs</span>
                    </Button>
                  </div>
                  {/* Logs panel content placeholder */}
                  <div className="h-full p-4">
                  </div>
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
