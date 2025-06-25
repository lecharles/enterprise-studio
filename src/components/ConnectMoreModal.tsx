
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
    { id: 'box', label: 'Box', icon: <img src="/lovable-uploads/77ce685e-5dd7-47f6-be09-f785a2f366db.png" alt="Box" className="w-8 h-8" />, type: 'data', enabled: enabledSources.box },
    { id: 'dropbox', label: 'Dropbox', icon: <img src="/lovable-uploads/0f78cd6e-c64d-45cc-87bf-7297132f4164.png" alt="Dropbox" className="w-8 h-8" />, type: 'data', enabled: enabledSources.dropbox },
    { id: 'github', label: 'GitHub', icon: <img src="/lovable-uploads/c1d25069-039d-4ba9-bf56-2785c848ab10.png" alt="GitHub" className="w-8 h-8" />, type: 'data', enabled: enabledSources.github },
    { id: 'googleCalendar', label: 'Google Calendar', icon: <img src="/lovable-uploads/7828fd40-fa53-4bee-a57d-6e1e18fc896a.png" alt="Google Calendar" className="w-8 h-8" />, type: 'data', enabled: enabledSources.googleCalendar },
    { id: 'googleDrive', label: 'Google Drive', icon: <img src="/lovable-uploads/c950b919-5d4d-4d66-b873-ba4b4e140293.png" alt="Google Drive" className="w-8 h-8" />, type: 'data', enabled: enabledSources.googleDrive },
    { id: 'hubspot', label: 'HubSpot', icon: <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="w-8 h-8" />, type: 'data', enabled: enabledSources.hubspot },
    { id: 'linear', label: 'Linear', icon: <img src="/lovable-uploads/e5d60a42-015d-42a4-a952-200a715b281d.png" alt="Linear" className="w-8 h-8" />, type: 'data', enabled: enabledSources.linear },
    { id: 'outlookCalendar', label: 'Outlook Calendar', icon: <img src="/lovable-uploads/667b69ec-3dd7-4560-8627-7e1a6449024d.png" alt="Outlook Calendar" className="w-8 h-8" />, type: 'data', enabled: enabledSources.outlookCalendar },
    { id: 'salesforceMarketingCloud', label: 'Salesforce Marketing Cloud', icon: <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Salesforce Marketing Cloud" className="w-8 h-8" />, type: 'data', enabled: enabledSources.salesforceMarketingCloud },
    { id: 'sharepoint', label: 'SharePoint', icon: <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="w-8 h-8" />, type: 'data', enabled: enabledSources.sharepoint },
    
    // Channel connectors
    { id: 'gmail', label: 'Gmail', icon: <img src="/lovable-uploads/ee57e9a8-5a7c-4b2f-9d6a-a58a5c4c03f5.png" alt="Gmail" className="w-8 h-8" />, type: 'channel', enabled: enabledSources.gmail },
    { id: 'outlookEmail', label: 'Outlook Email', icon: <img src="/lovable-uploads/73c3916a-6f7a-4114-b6c5-9bdad02b84a4.png" alt="Outlook Email" className="w-8 h-8" />, type: 'channel', enabled: enabledSources.outlookEmail },
    { id: 'teams', label: 'Teams', icon: <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="w-8 h-8" />, type: 'channel', enabled: enabledSources.teams },
    { id: 'linkedin', label: 'LinkedIn', icon: <img src="/lovable-uploads/d714029c-55c2-4ca0-bc7a-e651c82e23cd.png" alt="LinkedIn" className="w-8 h-8" />, type: 'channel', enabled: enabledSources.linkedin || false, isNew: true },
    { id: 'whatsapp', label: 'WhatsApp', icon: <img src="/lovable-uploads/ff21a3b9-4cda-4164-a4e9-2b3f2f98a3f4.png" alt="WhatsApp" className="w-8 h-8" />, type: 'channel', enabled: enabledSources.whatsapp || false, isNew: true },
    { id: 'twilio', label: 'Twilio (SMS)', icon: <img src="/lovable-uploads/2200876f-72f7-4232-ac55-c0a95cd341e9.png" alt="Twilio" className="w-8 h-8" />, type: 'channel', enabled: false, isNew: true },
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
            ChatGPT can access and push information from and to connected apps, based on what you're authorized to view and write.
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
              
              {connector.id === 'twilio' ? (
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
