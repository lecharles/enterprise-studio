
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Cloud, MessageSquare, Database, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Connector {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: 'data' | 'channel';
  enabled: boolean;
  isNew?: boolean;
}

interface ConnectMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enabledSources: Record<string, boolean>;
  onToggleSource: (sourceId: string) => void;
}

export function ConnectMoreModal({ 
  open, 
  onOpenChange, 
  enabledSources, 
  onToggleSource 
}: ConnectMoreModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'data' | 'channel'>('all');

  const allConnectors: Connector[] = [
    // Data connectors
    { id: 'webSearch', label: 'Web search', icon: '🌐', type: 'data', enabled: enabledSources.webSearch },
    { id: 'box', label: 'Box', icon: '📦', type: 'data', enabled: enabledSources.box },
    { id: 'dropbox', label: 'Dropbox', icon: '📦', type: 'data', enabled: enabledSources.dropbox },
    { id: 'github', label: 'GitHub', icon: '🐙', type: 'data', enabled: enabledSources.github },
    { id: 'googleCalendar', label: 'Google Calendar', icon: '📅', type: 'data', enabled: enabledSources.googleCalendar },
    { id: 'googleDrive', label: 'Google Drive', icon: '💾', type: 'data', enabled: enabledSources.googleDrive },
    { id: 'hubspot', label: 'HubSpot', icon: '🟠', type: 'data', enabled: enabledSources.hubspot },
    { id: 'linear', label: 'Linear', icon: '📐', type: 'data', enabled: enabledSources.linear },
    { id: 'outlookCalendar', label: 'Outlook Calendar', icon: '📅', type: 'data', enabled: enabledSources.outlookCalendar },
    { id: 'salesforceMarketingCloud', label: 'Salesforce Marketing Cloud', icon: <Cloud className="w-4 h-4 text-blue-500" />, type: 'data', enabled: enabledSources.salesforceMarketingCloud },
    { id: 'sharepoint', label: 'SharePoint', icon: '🟢', type: 'data', enabled: enabledSources.sharepoint },
    
    // Channel connectors
    { id: 'gmail', label: 'Gmail', icon: '📧', type: 'channel', enabled: enabledSources.gmail },
    { id: 'outlookEmail', label: 'Outlook Email', icon: '📧', type: 'channel', enabled: enabledSources.outlookEmail },
    { id: 'teams', label: 'Teams', icon: '👥', type: 'channel', enabled: enabledSources.teams },
    { id: 'linkedin', label: 'LinkedIn', icon: '💼', type: 'channel', enabled: false, isNew: true },
    { id: 'whatsapp', label: 'WhatsApp', icon: '📱', type: 'channel', enabled: false, isNew: true },
    { id: 'twilio', label: 'Twilio (SMS)', icon: '💬', type: 'channel', enabled: false, isNew: true },
  ];

  const filteredConnectors = allConnectors.filter(connector => {
    if (selectedFilter === 'all') return true;
    return connector.type === selectedFilter;
  });

  const filterButtons = [
    { id: 'all' as const, label: 'All', count: allConnectors.length },
    { id: 'data' as const, label: 'Data', count: allConnectors.filter(c => c.type === 'data').length },
    { id: 'channel' as const, label: 'Channel', count: allConnectors.filter(c => c.type === 'channel').length },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Browse connectors</DialogTitle>
          <p className="text-sm text-gray-600 mt-1">
            ChatGPT can access information from connected apps, based on what you're authorized to view.
          </p>
        </DialogHeader>

        {/* Filter Pills */}
        <div className="flex gap-2 mt-4">
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={`rounded-full ${
                selectedFilter === filter.id 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>

        {/* Connectors Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6 overflow-y-auto max-h-96 pr-2">
          {filteredConnectors.map((connector) => (
            <div
              key={connector.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  {typeof connector.icon === 'string' ? (
                    <span className="text-lg">{connector.icon}</span>
                  ) : (
                    connector.icon
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{connector.label}</span>
                    {connector.isNew && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 capitalize">{connector.type}</span>
                </div>
              </div>
              
              {connector.isNew ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 h-7 text-gray-600 border-gray-300"
                  disabled
                >
                  Connect
                </Button>
              ) : (
                <Switch
                  checked={connector.enabled}
                  onCheckedChange={() => onToggleSource(connector.id)}
                  className="scale-75"
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t pt-4 mt-4">
          <Button
            variant="outline"
            className="w-full justify-center"
            onClick={() => onOpenChange(false)}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
