
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
    { id: 'box', label: 'Box', icon: '📦', enabled: enabledSources.box },
    { id: 'dropbox', label: 'Dropbox', icon: '📦', enabled: enabledSources.dropbox },
    { id: 'github', label: 'GitHub', icon: '🐙', enabled: enabledSources.github },
    { id: 'gmail', label: 'Gmail', icon: '📧', enabled: enabledSources.gmail },
    { id: 'googleCalendar', label: 'Google Calendar', icon: '📅', enabled: enabledSources.googleCalendar },
    { id: 'googleDrive', label: 'Google Drive', icon: '💾', enabled: enabledSources.googleDrive },
    { id: 'hubspot', label: 'HubSpot', icon: '🟠', enabled: enabledSources.hubspot },
    { id: 'linear', label: 'Linear', icon: '📐', enabled: enabledSources.linear },
    { id: 'outlookCalendar', label: 'Outlook Calendar', icon: '📅', enabled: enabledSources.outlookCalendar },
    { id: 'outlookEmail', label: 'Outlook Email', icon: '📧', enabled: enabledSources.outlookEmail },
    { id: 'salesforceMarketingCloud', label: 'Salesforce Marketing Cloud', icon: <Cloud className="w-4 h-4 text-blue-500" />, enabled: enabledSources.salesforceMarketingCloud },
    { id: 'sharepoint', label: 'SharePoint', icon: '🟢', enabled: enabledSources.sharepoint },
    { id: 'teams', label: 'Teams', icon: '👥', enabled: enabledSources.teams },
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
