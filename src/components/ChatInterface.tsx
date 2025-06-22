
import { useState } from "react";
import { ConnectMoreModal } from "./ConnectMoreModal";
import { ChatInputArea } from "./chat/ChatInputArea";
import { QuickAccessButtons } from "./chat/QuickAccessButtons";
import { RecentProjectsSection } from "./chat/RecentProjectsSection";
import { DeepResearchChat } from "./chat/DeepResearchChat";

interface ChatInterfaceProps {
  builderToggle: boolean;
}

export function ChatInterface({ builderToggle }: ChatInterfaceProps) {
  const [showResearchTool, setShowResearchTool] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);
  const [showConnectMoreModal, setShowConnectMoreModal] = useState(false);
  const [showDeepResearch, setShowDeepResearch] = useState(false);
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

  const handleSendMessage = (message: string) => {
    const keywords = ['dormant leads', 'mqls', '6 months', 'conversion', 'outreach'];
    const hasKeywords = keywords.some(keyword => 
      message.toLowerCase().includes(keyword) || 
      message.toLowerCase().includes(keyword.replace(' ', ''))
    );
    
    if (hasKeywords) {
      console.log("Keywords detected, triggering deep research...");
      setShowDeepResearch(true);
    }
  };

  if (showDeepResearch) {
    return <DeepResearchChat onComplete={() => setShowDeepResearch(false)} />;
  }

  return (
    <>
      {/* Main Content - Scrollable */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Centered Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-3xl w-full">
            {/* Main Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-normal text-gray-900 mb-6">
                What can I help with?
              </h1>
              
              {/* Quick Access Buttons */}
              <QuickAccessButtons builderToggle={builderToggle} />
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <RecentProjectsSection />
      </div>

      {/* Fixed Chat Input - Rendered via Portal to bottom of page */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200">
        <div className="px-6 py-4 max-w-4xl mx-auto">
          <ChatInputArea
            showResearchTool={showResearchTool}
            setShowResearchTool={setShowResearchTool}
            showSourcesDropdown={showSourcesDropdown}
            setShowSourcesDropdown={setShowSourcesDropdown}
            setShowConnectMoreModal={setShowConnectMoreModal}
            enabledSources={enabledSources}
            onToggleSource={toggleSource}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>

      {/* Connect More Modal */}
      <ConnectMoreModal
        open={showConnectMoreModal}
        onOpenChange={setShowConnectMoreModal}
        enabledSources={enabledSources}
        onToggleSource={toggleSource}
      />
    </>
  );
}
