
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Bot, ChevronDown, Check, Plus } from "lucide-react";

interface AgentPickerProps {
  selectedAgent: string;
  onAgentChange: (agent: string) => void;
}

export function AgentPicker({ selectedAgent, onAgentChange }: AgentPickerProps) {
  const agents = [
    "Outreach Automation Agent",
    "Lead Nurturing Agent", 
    "IB-Intel Upsell Agent",
    "Seller Assist in Teams Agent"
  ];

  return (
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
            onClick={() => onAgentChange(agent)}
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
  );
}
