import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Search, ChevronDown, X, Cloud } from "lucide-react";

interface ResearchToolProps {
  showResearchTool: boolean;
  onHideResearch: () => void;
  showSourcesDropdown: boolean;
  setShowSourcesDropdown: (show: boolean) => void;
  setShowConnectMoreModal: (show: boolean) => void;
  enabledSources: Record<string, boolean>;
  onToggleSource: (sourceId: string) => void;
}

export function ResearchTool({
  showResearchTool,
  onHideResearch,
  showSourcesDropdown,
  setShowSourcesDropdown,
  setShowConnectMoreModal,
  enabledSources,
  onToggleSource
}: ResearchToolProps) {
  const sources = [
    { id: 'webSearch', label: 'Web search', icon: '🌐', enabled: enabledSources.webSearch },
    { id: 'box', label: 'Box', icon: <img src="/lovable-uploads/77ce685e-5dd7-47f6-be09-f785a2f366db.png" alt="Box" className="w-4 h-4" />, enabled: enabledSources.box },
    { id: 'dropbox', label: 'Dropbox', icon: <img src="/lovable-uploads/0f78cd6e-c64d-45cc-87bf-7297132f4164.png" alt="Dropbox" className="w-4 h-4" />, enabled: enabledSources.dropbox },
    { id: 'github', label: 'GitHub', icon: <img src="/lovable-uploads/c1d25069-039d-4ba9-bf56-2785c848ab10.png" alt="GitHub" className="w-4 h-4" />, enabled: enabledSources.github },
    { id: 'gmail', label: 'Gmail', icon: <img src="/lovable-uploads/ee57e9a8-5a7c-4b2f-9d6a-a58a5c4c03f5.png" alt="Gmail" className="w-4 h-4" />, enabled: enabledSources.gmail },
    { id: 'googleCalendar', label: 'Google Calendar', icon: <img src="/lovable-uploads/7828fd40-fa53-4bee-a57d-6e1e18fc896a.png" alt="Google Calendar" className="w-4 h-4" />, enabled: enabledSources.googleCalendar },
    { id: 'googleDrive', label: 'Google Drive', icon: <img src="/lovable-uploads/c950b919-5d4d-4d66-b873-ba4b4e140293.png" alt="Google Drive" className="w-4 h-4" />, enabled: enabledSources.googleDrive },
    { id: 'hubspot', label: 'HubSpot', icon: <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="w-4 h-4" />, enabled: enabledSources.hubspot },
    { id: 'linear', label: 'Linear', icon: <img src="/lovable-uploads/e5d60a42-015d-42a4-a952-200a715b281d.png" alt="Linear" className="w-4 h-4" />, enabled: enabledSources.linear },
    { id: 'outlookCalendar', label: 'Outlook Calendar', icon: <img src="/lovable-uploads/667b69ec-3dd7-4560-8627-7e1a6449024d.png" alt="Outlook Calendar" className="w-4 h-4" />, enabled: enabledSources.outlookCalendar },
    { id: 'outlookEmail', label: 'Outlook Email', icon: <img src="/lovable-uploads/73c3916a-6f7a-4114-b6c5-9bdad02b84a4.png" alt="Outlook Email" className="w-4 h-4" />, enabled: enabledSources.outlookEmail },
    { id: 'salesforceMarketingCloud', label: 'Salesforce Marketing Cloud', icon: <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Salesforce Marketing Cloud" className="w-4 h-4" />, enabled: enabledSources.salesforceMarketingCloud },
    { id: 'sharepoint', label: 'SharePoint', icon: <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="w-4 h-4" />, enabled: enabledSources.sharepoint },
    { id: 'teams', label: 'Teams', icon: <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="w-4 h-4" />, enabled: enabledSources.teams },
  ];

  if (!showResearchTool) return null;

  return (
    <div className="flex items-center gap-2 mr-3">
      <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
        <Search className="w-3 h-3" />
        <span>Research</span>
        <Button
          variant="ghost"
          size="sm"
          className="p-0 h-4 w-4 hover:bg-blue-200 rounded-full"
          onClick={onHideResearch}
        >
          <X className="w-3 h-3" />
        </Button>
      </div>

      <DropdownMenu open={showSourcesDropdown} onOpenChange={setShowSourcesDropdown}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-1"
          >
            <span className="text-sm">Sources</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 bg-white max-h-80 overflow-y-auto">
          {sources.map((source) => (
            <DropdownMenuItem key={source.id} className="flex items-center justify-between p-3 cursor-pointer" onClick={(e) => e.preventDefault()}>
              <div className="flex items-center gap-3">
                {typeof source.icon === 'string' ? (
                  <span>{source.icon}</span>
                ) : (
                  source.icon
                )}
                <span className="text-sm">{source.label}</span>
              </div>
              <Switch
                checked={source.enabled}
                onCheckedChange={() => onToggleSource(source.id)}
                className="scale-75"
              />
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowConnectMoreModal(true)}
          >
            <span>🔗</span>
            <span className="text-sm">Connect more</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
