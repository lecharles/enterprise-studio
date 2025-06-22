
import { useState } from "react";
import { DeepResearchChatProps } from "./types";
import { CitationsPanel } from "./CitationsPanel";
import { LeftSidebar } from "./LeftSidebar";
import { SourcesButton } from "./SourcesButton";
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
    <div className="min-h-screen bg-white flex">
      <LeftSidebar show={showLeftSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Content */}
        <div className="flex-1 flex">
          {/* Chat Messages */}
          <div className={`${showCitations ? 'flex-1' : 'w-full'} flex flex-col`}>
            <div className="flex-1 px-6 py-8 overflow-y-auto max-w-4xl mx-auto w-full">
              <UserMessage message="I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?" />

              <AIResponse 
                currentStep={currentStep}
                researchSteps={researchSteps}
                showAnalysis={showAnalysis}
                isAnalysisComplete={isAnalysisComplete}
              />
            </div>

            {isAnalysisComplete && (
              <SourcesButton 
                showCitations={showCitations}
                onToggle={() => setShowCitations(!showCitations)}
              />
            )}
          </div>

          {showCitations && (
            <CitationsPanel 
              citations={citations}
              onClose={() => setShowCitations(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
