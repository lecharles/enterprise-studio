
import { useState } from "react";
import { ConnectMoreModal } from "./ConnectMoreModal";
import { ChatInputArea } from "./chat/ChatInputArea";
import { QuickAccessButtons } from "./chat/QuickAccessButtons";
import { RecentProjectsSection } from "./chat/RecentProjectsSection";

interface ChatInterfaceProps {
  builderToggle: boolean;
}

export function ChatInterface({ builderToggle }: ChatInterfaceProps) {
  const [showResearchTool, setShowResearchTool] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);
  const [showConnectMoreModal, setShowConnectMoreModal] = useState(false);
  const [enabledSources, setEnabledSources] = useState({
    webSearch: true,
    box: false,
    dropbox: false,
    github: false,
    gmail: false,
    googleCalendar: false,
    googleDrive: false,
    hubspot: true,
    linear: false,
    outlookCalendar: true,
    outlookEmail: true,
    sharepoint: false,
    teams: false,
    salesforceMarketingCloud: false
  });

  const toggleSource = (sourceId: string) => {
    setEnabledSources(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId as keyof typeof prev]
    }));
  };

  return (
    <div className="flex-1 flex flex-col bg-white min-h-screen">
      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal text-gray-900 mb-6">
              What can I help with?
            </h1>
            
            {/* Chat Input */}
            <ChatInputArea
              showResearchTool={showResearchTool}
              setShowResearchTool={setShowResearchTool}
              showSourcesDropdown={showSourcesDropdown}
              setShowSourcesDropdown={setShowSourcesDropdown}
              setShowConnectMoreModal={setShowConnectMoreModal}
              enabledSources={enabledSources}
              onToggleSource={toggleSource}
            />

            {/* Quick Access Buttons */}
            <QuickAccessButtons builderToggle={builderToggle} />
          </div>
        </div>
      </div>

      {/* Recent Projects Section - Bottom */}
      <RecentProjectsSection />

      {/* Connect More Modal */}
      <ConnectMoreModal
        open={showConnectMoreModal}
        onOpenChange={setShowConnectMoreModal}
        enabledSources={enabledSources}
        onToggleSource={toggleSource}
      />
    </div>
  );
}
