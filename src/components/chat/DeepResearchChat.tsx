
import { useState } from "react";
import { DeepResearchChatProps } from "./types";
import { CitationsPanel } from "./CitationsPanel";
import { LeftSidebar } from "./LeftSidebar";
import { UserMessage } from "./UserMessage";
import { AIResponse } from "./AIResponse";
import { useResearchProgress } from "./hooks/useResearchProgress";
import { researchSteps } from "./data/researchSteps";
import { citations } from "./data/citations";

export function DeepResearchChat({ onComplete }: DeepResearchChatProps) {
  const [showCitations, setShowCitations] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);

  const { currentStep, showAnalysis, isAnalysisComplete } = useResearchProgress({ 
    researchSteps 
  });

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <LeftSidebar show={showLeftSidebar} />

      {/* Fixed Header with user profile icon on the left */}
      <div className="flex-shrink-0 bg-white border-b border-white z-10 flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <img 
              src="/lovable-uploads/6e5b0c50-41b6-4066-a7d2-3d1bc02fffce.png" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-medium">ChatGPT</span>
        </div>
      </div>

      {/* Main Content Area - scrollable */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Messages - scrollable content */}
        <div className={`${showCitations ? 'w-[calc(100%-400px)]' : 'w-full'} flex flex-col overflow-hidden`}>
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-8 max-w-xl mx-auto w-full">
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

        {/* Citations Panel - if shown */}
        {showCitations && (
          <CitationsPanel 
            citations={citations}
            onClose={() => setShowCitations(false)}
          />
        )}
      </div>
    </div>
  );
}
