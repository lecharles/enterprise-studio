
import { useState } from "react";
import { DeepResearchChatProps } from "./types";
import { CitationsPanel } from "./CitationsPanel";
import { LeftSidebar } from "./LeftSidebar";
import { UserMessage } from "./UserMessage";
import { AIResponse } from "./AIResponse";
import { ChatInputArea } from "./ChatInputArea";
import { TopNavbar } from "../TopNavbar";
import { useResearchProgress } from "./hooks/useResearchProgress";
import { researchSteps } from "./data/researchSteps";
import { citations } from "./data/citations";

export function DeepResearchChat({ onComplete }: DeepResearchChatProps) {
  const [showCitations, setShowCitations] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showResearchTool, setShowResearchTool] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);
  const [showConnectMoreModal, setShowConnectMoreModal] = useState(false);
  const [businessToggle, setBusinessToggle] = useState(true);
  const [builderToggle, setBuilderToggle] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
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

  const { currentStep, showAnalysis, isAnalysisComplete } = useResearchProgress({ 
    researchSteps 
  });

  const toggleSource = (sourceId: string) => {
    setEnabledSources(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId as keyof typeof prev]
    }));
  };

  // Calculate header positioning based on panel visibility
  const leftSidebarWidth = showLeftSidebar ? 256 : 0; // w-64 = 256px
  const headerLeft = showLeftSidebar ? '256px' : '0px';
  const headerWidth = showCitations ? 'calc(66.67% - 0px)' : showLeftSidebar ? 'calc(100% - 256px)' : '100%';

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <LeftSidebar show={showLeftSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Fixed Header - always visible, positioned over the content area only */}
        <div 
          className="fixed top-0 bg-white border-b border-gray-100 z-30 transition-all duration-200"
          style={{
            left: headerLeft,
            width: headerWidth,
          }}
        >
          <TopNavbar
            businessToggle={businessToggle}
            builderToggle={builderToggle}
            onBusinessToggle={setBusinessToggle}
            onBuilderToggle={setBuilderToggle}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
        </div>

        {/* Main Content Area - with top padding to account for fixed header */}
        <div className="flex-1 flex overflow-hidden pt-16">
          {/* Chat Messages - width adjusts based on citations visibility */}
          <div className={`${showCitations ? 'w-[66.67%]' : 'w-full'} flex flex-col overflow-hidden transition-all duration-200 relative`}>
            <div className="flex-1 overflow-y-auto pb-24">
              <div className="px-6 py-8 max-w-2xl mx-auto w-full">
                <UserMessage message="I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?" />

                <AIResponse 
                  currentStep={currentStep}
                  researchSteps={researchSteps}
                  showAnalysis={showAnalysis}
                  isAnalysisComplete={isAnalysisComplete}
                  showCitations={showCitations}
                  onToggleCitations={() => setShowCitations(!showCitations)}
                />
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

          {/* Citations Panel - starts from the very top, full height */}
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
