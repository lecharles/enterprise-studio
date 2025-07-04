
import { useState } from "react";
import { DeepResearchChatProps } from "./types";
import { CitationsPanel } from "./CitationsPanel";
import { LeftSidebar } from "./LeftSidebar";
import { UserMessage } from "./UserMessage";
import { AIResponse } from "./AIResponse";
import { ChatInputArea } from "./ChatInputArea";
import { CampaignPreparationDisplay } from "./CampaignPreparationDisplay";
import { useResearchProgress } from "./hooks/useResearchProgress";
import { researchSteps } from "./data/researchSteps";
import { citations } from "./data/citations";

export function DeepResearchChat({ onComplete, onCampaignLaunch }: DeepResearchChatProps) {
  const [showCitations, setShowCitations] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showResearchTool, setShowResearchTool] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);
  const [showConnectMoreModal, setShowConnectMoreModal] = useState(false);
  const [showCampaignPreparation, setShowCampaignPreparation] = useState(false);
  const [campaignLaunched, setCampaignLaunched] = useState(false);
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
    salesforceMarketingCloud: false,
    linkedin: false,
    whatsapp: false
  });

  const { currentStep, showAnalysis, isAnalysisComplete } = useResearchProgress({ 
    researchSteps 
  });

  const toggleSource = (sourceId: string) => {
    setEnabledSources(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId as keyof typeof prev]
    }));
  };

  const handlePrepareCampaign = () => {
    setShowCampaignPreparation(true);
  };

  const handleLaunchAllCampaigns = () => {
    setCampaignLaunched(true);
    if (onCampaignLaunch) {
      onCampaignLaunch(true);
    }
  };

  // Calculate widths based on citations visibility
  const headerWidth = showCitations ? 'w-[calc(66.67%-24px)]' : 'w-full';
  const contentWidth = showCitations ? 'w-[66.67%]' : 'w-full';

  // Determine which user message to show based on current state
  const userMessage = showCampaignPreparation 
    ? "Prepare Campaign"
    : "I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?";

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <LeftSidebar show={showLeftSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header - width adjusts based on citations visibility */}
        <div className={`flex-shrink-0 bg-white border-b border-white z-10 ${headerWidth} transition-all duration-200`}>
          {/* Add any header content here if needed */}
        </div>

        {/* Main Content Area - scrollable, but leaves space for chat input */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Messages - width adjusts based on citations visibility */}
          <div className={`${contentWidth} flex flex-col overflow-hidden transition-all duration-200 relative`}>
            <div className="flex-1 overflow-y-auto pb-24">
              <div className="px-6 py-8 max-w-2xl mx-auto w-full">
                <UserMessage message={userMessage} />

                {!showCampaignPreparation ? (
                  <AIResponse 
                    currentStep={currentStep}
                    researchSteps={researchSteps}
                    showAnalysis={showAnalysis}
                    isAnalysisComplete={isAnalysisComplete}
                    showCitations={showCitations}
                    onToggleCitations={() => setShowCitations(!showCitations)}
                    onPrepareCampaign={handlePrepareCampaign}
                  />
                ) : (
                  <CampaignPreparationDisplay 
                    isActive={showCampaignPreparation} 
                    onLaunchAllCampaigns={handleLaunchAllCampaigns}
                    campaignLaunched={campaignLaunched}
                  />
                )}
              </div>
            </div>

            {/* Fixed Chat Input at Bottom - positioned relative to the center content area */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-white px-6 py-4 z-20">
              <div className="max-w-2xl mx-auto">
                <ChatInputArea
                  showResearchTool={showResearchTool}
                  setShowResearchTool={setShowResearchTool}
                  showSourcesDropdown={showSourcesDropdown}
                  setShowSourcesDropdown={setShowSourcesDropdown}
                  setShowConnectMoreModal={setShowConnectMoreModal}
                  enabledSources={enabledSources}
                  onToggleSource={toggleSource}
                />
              </div>
            </div>
          </div>

          {/* Citations Panel - fixed width on the right */}
          {showCitations && (
            <div className="w-[33.33%] flex-shrink-0">
              <CitationsPanel 
                citations={citations}
                onClose={() => setShowCitations(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
