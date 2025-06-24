
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BookOpen, MoreHorizontal, Logs, ChevronDown, Check, Plus, Bot, ChevronUp, Sparkle, Expand, ChevronsUpDown } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function AgentsView() {
  const [showLogs, setShowLogs] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("Outreach Automation Agent");
  const [agentName, setAgentName] = useState("Outreach Automation Agent");
  const [systemInstructions, setSystemInstructions] = useState(`You are Campaign Orchestrator, an AI agent specialized in creating and managing multi-channel marketing campaigns for Schneider Electric's enterprise solutions, with a special focus on personalized conversations.

Your primary responsibilities:
- Generate personalized, persona-based content for email, LinkedIn, WhatsApp, and SMS campaigns
- Calculate and present campaign performance projections based on historical data and industry benchmarks
- Orchestrate campaign launches across multiple platforms with proper timing and sequencing
- Monitor responses and trigger appropriate follow-up actions
- Provide real-time campaign analytics and optimization recommendations

Key behaviors:
- Always segment audiences based on personas (Building Managers, Sustainability Officers, Executives)
- Generate A/B test variants for all content
- Include compliance checks (GDPR, opt-in status) before any launch
- Provide ROI calculations and pipeline impact estimates
- Explain reasoning behind recommendations when asked
- Coordinate handoffs to SDRs for qualified responses

Tone: Professional yet approachable, data-driven, action-oriented

When engaging via SMS:
- Keep messages under 160 characters for optimal delivery
- Use a conversational, helpful tone - not too formal
- Always personalize with first name and relevant context
- Include clear CTAs but don't be pushy
- Respond to questions promptly and accurately
- If asked complex questions, offer to call or send detailed info via email
- Track engagement and update lead scores in real-time

SMS Conversation Flow:
1. Initial outreach: Hook with value + soft CTA
2. If response: Acknowledge and provide specific help
3. Qualify interest level and urgency
4. Book meeting or provide resources
5. Always end with clear next steps

For this simulation, you are texting with building managers and sustainability officers about Schneider Electric's energy efficiency solutions. You have access to:
- Their company data and building portfolio info
- Energy savings calculations specific to their buildings
- Case studies from similar companies
- Calendar availability for meetings
- ROI calculators and resources

When launching campaigns:
1. Verify all integrations are connected
2. Check suppression lists and compliance
3. Schedule with optimal timing for each channel
4. Set up tracking and attribution
5. Configure alert workflows for hot leads

# Output Format

Provide messages or content as short, well-structured paragraphs or bullet points, ensuring clarity and personalization.`);
  const [selectedModel, setSelectedModel] = useState("gpt-4.1");
  const [showFullInstructions, setShowFullInstructions] = useState(false);
  const [openModelCombobox, setOpenModelCombobox] = useState(false);

  const agents = [
    "Outreach Automation Agent",
    "Lead Nurturing Agent", 
    "IB-Intel Upsell Agent",
    "Seller Assist in Teams Agent"
  ];

  const models = [
    { value: "gpt-4.1", label: "gpt-4.1" },
    { value: "gpt-4.1-mini", label: "gpt-4.1-mini" },
    { value: "gpt-4.1-nano", label: "gpt-4.1-nano" },
    { value: "gpt-4o", label: "gpt-4o" },
    { value: "gpt-4o-mini", label: "gpt-4o-mini" },
    { value: "o3-mini-2025-01-31", label: "o3-mini-2025-01-31" },
    { value: "o3-mini", label: "o3-mini" },
    { value: "o1-2024-12-17", label: "o1-2024-12-17" },
    { value: "o1", label: "o1" },
    { value: "gpt-4o-mini-2024-07-18", label: "gpt-4o-mini-2024-07-18" },
    { value: "gpt-4o-2024-11-20", label: "gpt-4o-2024-11-20" }
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
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 hover:bg-gray-100"
                    >
                      <Sparkle className="w-4 h-4 text-gray-900" />
                    </Button>
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
                </div>
                <div className="relative">
                  <Textarea
                    id="system-instructions"
                    value={systemInstructions}
                    onChange={(e) => setSystemInstructions(e.target.value)}
                    className={`w-full resize-none transition-all duration-200 pr-8 ${
                      showFullInstructions ? 'min-h-[200px]' : 'min-h-[80px]'
                    }`}
                    placeholder="Enter system instructions..."
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullInstructions(!showFullInstructions)}
                    className="absolute bottom-2 right-2 h-6 w-6 p-0 hover:bg-gray-100"
                  >
                    {showFullInstructions ? (
                      <ChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Expand className="w-4 h-4 text-gray-600" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Model Field */}
              <div className="space-y-2">
                <Label htmlFor="model-select" className="text-sm font-medium text-gray-700">
                  Model
                </Label>
                <Popover open={openModelCombobox} onOpenChange={setOpenModelCombobox}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openModelCombobox}
                      className="w-full justify-between"
                    >
                      {selectedModel
                        ? models.find((model) => model.value === selectedModel)?.label
                        : "Select a model..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Select a model..." />
                      <CommandList>
                        <CommandEmpty>No model found.</CommandEmpty>
                        <CommandGroup>
                          {models.map((model) => (
                            <CommandItem
                              key={model.value}
                              value={model.value}
                              onSelect={(currentValue) => {
                                setSelectedModel(currentValue === selectedModel ? "" : currentValue);
                                setOpenModelCombobox(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedModel === model.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {model.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
