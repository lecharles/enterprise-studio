
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
    <div className="h-screen bg-white flex overflow-hidden">
      <LeftSidebar show={showLeftSidebar} />

      {/* Main container that adjusts based on citations visibility */}
      <div className={`flex flex-col flex-1 overflow-hidden ${showCitations ? 'w-[66.67%]' : 'w-full'} transition-all duration-200`}>
        {/* Fixed Header */}
        <div className="flex-shrink-0 bg-white border-b border-white z-10">
          {/* Add any header content here if needed */}
        </div>

        {/* Chat Messages - scrollable content */}
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

      {/* Citations Panel - fixed width on the right, full height */}
      {showCitations && (
        <div className="w-[33.33%] flex-shrink-0 h-full">
          <CitationsPanel 
            citations={citations}
            onClose={() => setShowCitations(false)}
          />
        </div>
      )}
    </div>
  );
}
