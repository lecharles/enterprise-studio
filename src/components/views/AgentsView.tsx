import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AgentPicker } from "@/components/agents/AgentPicker";
import { SystemInstructionsField } from "@/components/agents/SystemInstructionsField";
import { ModelSelector } from "@/components/agents/ModelSelector";
import { ToolsSection } from "@/components/agents/ToolsSection";
import { ModelConfiguration } from "@/components/agents/ModelConfiguration";
import { McpConfigurationModal } from "@/components/agents/McpConfigurationModal";
import { AgentsViewLayout } from "@/components/agents/AgentsViewLayout";

interface AgentsViewProps {
  onTriggerEvaluations?: () => void;
}

export function AgentsView({ onTriggerEvaluations }: AgentsViewProps) {
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
  const [responseFormat, setResponseFormat] = useState("text");
  
  // Tools section state
  const [fileSearchEnabled, setFileSearchEnabled] = useState(false);
  const [connectorsEnabled, setConnectorsEnabled] = useState(true);
  const [functionsEnabled, setFunctionsEnabled] = useState(true);

  // Individual connector states
  const [connectorStates, setConnectorStates] = useState({
    hubspot: true,
    linkedin: false,
    whatsapp: true,
  });

  // Function states
  const [functionStates, setFunctionStates] = useState({
    twilioSms: false,
  });

  // Modal state for MCP configuration
  const [showMcpModal, setShowMcpModal] = useState(false);
  const [selectedMcpConfig, setSelectedMcpConfig] = useState<any>(null);

  const toggleConnector = (connectorId: string) => {
    setConnectorStates(prev => ({
      ...prev,
      [connectorId]: !prev[connectorId as keyof typeof prev]
    }));
  };

  const toggleFunction = (functionId: string) => {
    setFunctionStates(prev => ({
      ...prev,
      [functionId]: !prev[functionId as keyof typeof prev]
    }));
  };

  const showMcpConfiguration = (config: any) => {
    setSelectedMcpConfig(config);
    setShowMcpModal(true);
  };

  const leftPanelContent = (
    <div className="h-full bg-white flex flex-col">
      {/* Fixed Agent Picker Header */}
      <div className="flex-shrink-0 p-4 pb-2 border-b border-gray-100">
        <AgentPicker 
          selectedAgent={selectedAgent}
          onAgentChange={setSelectedAgent}
        />
      </div>

      {/* Scrollable Left Panel Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4 pt-4">
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

        <SystemInstructionsField 
          value={systemInstructions}
          onChange={setSystemInstructions}
        />

        <ModelSelector 
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />

        <ToolsSection
          fileSearchEnabled={fileSearchEnabled}
          connectorsEnabled={connectorsEnabled}
          functionsEnabled={functionsEnabled}
          connectorStates={connectorStates}
          functionStates={functionStates}
          onFileSearchToggle={setFileSearchEnabled}
          onConnectorsToggle={setConnectorsEnabled}
          onFunctionsToggle={setFunctionsEnabled}
          onConnectorToggle={toggleConnector}
          onFunctionToggle={toggleFunction}
          onShowMcpConfiguration={showMcpConfiguration}
        />

        <ModelConfiguration
          responseFormat={responseFormat}
          onResponseFormatChange={setResponseFormat}
        />
      </div>
    </div>
  );

  const middlePanelContent = (
    <div className="h-full flex flex-col">
      {/* Middle panel content without thread info - handled by layout */}
    </div>
  );

  const rightPanelContent = (
    <div className="h-full flex flex-col">
      {/* Right panel content without thread info - handled by layout */}
    </div>
  );

  return (
    <TooltipProvider>
      <AgentsViewLayout
        leftPanelContent={leftPanelContent}
        middlePanelContent={middlePanelContent}
        rightPanelContent={rightPanelContent}
        onTriggerEvaluations={onTriggerEvaluations}
      />
      
      <McpConfigurationModal
        isOpen={showMcpModal}
        onClose={() => setShowMcpModal(false)}
        config={selectedMcpConfig}
      />
    </TooltipProvider>
  );
}
