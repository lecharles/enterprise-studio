
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
    // Check for the specific lead demo prompt
    const leadDemoPrompt = "I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?";
    
    // Normalize both strings for comparison (remove extra spaces, case insensitive)
    const normalizeString = (str: string) => str.toLowerCase().replace(/\s+/g, ' ').trim();
    
    if (normalizeString(message) === normalizeString(leadDemoPrompt)) {
      console.log("Lead demo prompt detected, triggering deep research...");
      setShowDeepResearch(true);
      return;
    }
    
    // Fallback: Check for key phrases from the lead demo prompt
    const keyPhrases = [
      'revive dormant leads',
      'data center cooling',
      'mqls from the last 6 months',
      'highest potential for conversion',
      'personalized outreach'
    ];
    
    const messageNormalized = normalizeString(message);
    const matchingPhrases = keyPhrases.filter(phrase => 
      messageNormalized.includes(normalizeString(phrase))
    );
    
    // If at least 3 key phrases match, trigger the demo
    if (matchingPhrases.length >= 3) {
      console.log("Lead demo keywords detected, triggering deep research...");
      setShowDeepResearch(true);
    }
  };

  if (showDeepResearch) {
    return <DeepResearchChat onComplete={() => setShowDeepResearch(false)} />;
  }

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
              onSendMessage={handleSendMessage}
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
