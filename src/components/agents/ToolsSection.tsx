
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Settings, Plus, Info, Trash2, CodeXml } from "lucide-react";

interface ToolsSectionProps {
  fileSearchEnabled: boolean;
  connectorsEnabled: boolean;
  functionsEnabled: boolean;
  connectorStates: {
    hubspot: boolean;
    linkedin: boolean;
    whatsapp: boolean;
  };
  functionStates: {
    twilioSms: boolean;
  };
  onFileSearchToggle: (enabled: boolean) => void;
  onConnectorsToggle: (enabled: boolean) => void;
  onFunctionsToggle: (enabled: boolean) => void;
  onConnectorToggle: (connectorId: string) => void;
  onFunctionToggle: (functionId: string) => void;
  onShowMcpConfiguration: (config: any) => void;
}

export function ToolsSection({
  fileSearchEnabled,
  connectorsEnabled,
  functionsEnabled,
  connectorStates,
  functionStates,
  onFileSearchToggle,
  onConnectorsToggle,
  onFunctionsToggle,
  onConnectorToggle,
  onFunctionToggle,
  onShowMcpConfiguration
}: ToolsSectionProps) {
  const twilioMcpConfig = {
    "name": "MCP-twilio-sms-campaigns",
    "description": "Send personalized SMS campaigns with Twilio",
    "functions": [
      "send_sms_campaign",
      "schedule_sms_sequence", 
      "track_sms_engagement",
      "manage_opt_outs",
      "get_delivery_reports"
    ],
    "auth": "api_key",
    "rate_limits": {
      "messages_per_second": 100,
      "daily_limit": 50000
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">TOOLS</h3>
      
      {/* File Search */}
      <div className="flex items-center justify-between py-1">
        <div className="flex items-center gap-2">
          <Switch 
            checked={fileSearchEnabled}
            onCheckedChange={onFileSearchToggle}
            className="data-[state=checked]:bg-green-500 h-4 w-7"
          />
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-900">File Search</span>
            <Info className="w-3 h-3 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-6 px-1 text-xs text-gray-600 hover:bg-gray-100">
            <Settings className="w-3 h-3" />
          </Button>
          <Button variant="outline" size="sm" className="h-6 px-1.5 text-xs text-gray-600 hover:bg-gray-50 border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
            <Plus className="w-3 h-3 mr-1" />
            Files
          </Button>
        </div>
      </div>

      {/* Connectors */}
      <div className="space-y-2">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2">
            <Switch 
              checked={connectorsEnabled}
              onCheckedChange={onConnectorsToggle}
              className="data-[state=checked]:bg-green-500 h-4 w-7"
            />
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-900">Connectors</span>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
          </div>
          <Button variant="outline" size="sm" className="h-6 px-1.5 text-xs text-gray-600 hover:bg-gray-50 border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
            <Plus className="w-3 h-3 mr-1" />
            Connectors
          </Button>
        </div>
        
        {/* Connector Items with individual toggles */}
        <div className="space-y-1.5 ml-6">
          {/* HubSpot Email */}
          <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded text-xs">
            <div className="flex items-center gap-2">
              <Switch 
                checked={connectorStates.hubspot}
                onCheckedChange={() => onConnectorToggle('hubspot')}
                className="data-[state=checked]:bg-green-500 h-3 w-5 scale-75"
              />
              <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="w-4 h-4" />
              <span className="text-gray-900">HubSpot Email</span>
            </div>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 hover:bg-gray-200">
              <Trash2 className="w-3 h-3 text-gray-600" />
            </Button>
          </div>

          {/* LinkedIn Campaign */}
          <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded text-xs">
            <div className="flex items-center gap-2">
              <Switch 
                checked={connectorStates.linkedin}
                onCheckedChange={() => onConnectorToggle('linkedin')}
                className="data-[state=checked]:bg-green-500 h-3 w-5 scale-75"
              />
              <img src="/lovable-uploads/d714029c-55c2-4ca0-bc7a-e651c82e23cd.png" alt="LinkedIn" className="w-4 h-4" />
              <span className="text-gray-900">LinkedIn Campaign</span>
            </div>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 hover:bg-gray-200">
              <Trash2 className="w-3 h-3 text-gray-600" />
            </Button>
          </div>

          {/* WhatsApp Business API */}
          <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded text-xs">
            <div className="flex items-center gap-2">
              <Switch 
                checked={connectorStates.whatsapp}
                onCheckedChange={() => onConnectorToggle('whatsapp')}
                className="data-[state=checked]:bg-green-500 h-3 w-5 scale-75"
              />
              <img src="/lovable-uploads/ff21a3b9-4cda-4164-a4e9-2b3f2f98a3f4.png" alt="WhatsApp" className="w-4 h-4" />
              <span className="text-gray-900">WhatsApp Business API</span>
            </div>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 hover:bg-gray-200">
              <Trash2 className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Functions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium text-gray-900">Functions</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3 h-3 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>api, mcp, a2a, etc</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Button variant="outline" size="sm" className="h-6 px-1.5 text-xs text-gray-600 hover:bg-gray-50 border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
            <Plus className="w-3 h-3 mr-1" />
            Functions
          </Button>
        </div>
        
        {/* Twilio SMS Function Item */}
        <div className="flex items-center justify-between py-1.5 px-2 bg-gray-50 rounded text-xs">
          <div className="flex items-center gap-2">
            <Switch 
              checked={functionStates.twilioSms}
              onCheckedChange={() => onFunctionToggle('twilioSms')}
              className="data-[state=checked]:bg-green-500 h-3 w-5 scale-75"
            />
            <img src="/lovable-uploads/181b29ba-d8ff-4a97-8705-41d2fdf24153.png" alt="MCP" className="w-4 h-4" />
            <span className="font-mono text-gray-900">MCP-twilio-sms-campaigns</span>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-4 w-4 p-0 hover:bg-gray-200"
              onClick={() => onShowMcpConfiguration(twilioMcpConfig)}
            >
              <CodeXml className="w-3 h-3 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0 hover:bg-gray-200">
              <Trash2 className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
