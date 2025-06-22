
import { useState } from "react";
import { DeepResearchChatProps } from "./types";
import { CitationsPanel } from "./CitationsPanel";
import { LeftSidebar } from "./LeftSidebar";
import { UserMessage } from "./UserMessage";
import { AIResponse } from "./AIResponse";
import { ChatInputArea } from "./ChatInputArea";
import { useResearchProgress } from "./hooks/useResearchProgress";
import { researchSteps } from "./data/researchSteps";
import { citations } from "./data/citations";
import { useSidebar } from "@/components/ui/sidebar";

export function DeepResearchChat({ onComplete }: DeepResearchChatProps) {
  const [showCitations, setShowCitations] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
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

  const { currentStep, showAnalysis, isAnalysisComplete } = useResearchProgress({ 
    researchSteps 
  });
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const toggleSource = (sourceId: string) => {
    setEnabledSources(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId as keyof typeof prev]
    }));
  };

  // Calculate dynamic widths based on sidebar and citations state
  const sidebarWidth = isCollapsed ? '3rem' : '16rem';
  const citationsWidth = showCitations ? '33.33%' : '0%';
  const contentWidth = showCitations ? '66.67%' : '100%';

  return (
    <div className="h-full bg-white flex overflow-hidden relative">
      <LeftSidebar show={showLeftSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable Content */}
        <div 
          className="flex-1 flex overflow-hidden transition-all duration-200"
          style={{ 
            marginLeft: sidebarWidth,
            paddingTop: '4rem', // Space for fixed header
            paddingBottom: '5rem' // Space for fixed chat input
          }}
        >
          {/* Chat Messages */}
          <div className={`${showCitations ? 'w-2/3' : 'w-full'} flex flex-col overflow-hidden transition-all duration-200`}>
            <div className="flex-1 overflow-y-auto">
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
          </div>

          {/* Citations Panel */}
          {showCitations && (
            <div className="w-1/3 flex-shrink-0">
              <CitationsPanel 
                citations={citations}
                onClose={() => setShowCitations(false)}
              />
            </div>
          )}
        </div>

        {/* Fixed Chat Input at Bottom */}
        <div 
          className="fixed bottom-0 z-40 bg-white border-t border-gray-200 transition-all duration-200"
          style={{
            left: sidebarWidth,
            width: showCitations ? `calc(66.67% - ${sidebarWidth})` : `calc(100% - ${sidebarWidth})`,
          }}
        >
          <div className="px-6 py-4">
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
      </div>
    </div>
  );
}
