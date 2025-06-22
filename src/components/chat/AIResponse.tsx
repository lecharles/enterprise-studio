
import { ResearchProgress } from "./ResearchProgress";
import { AnalysisDisplay } from "./AnalysisDisplay";
import { ResearchStep } from "./types";

interface AIResponseProps {
  currentStep: number;
  researchSteps: ResearchStep[];
  showAnalysis: boolean;
  isAnalysisComplete: boolean;
}

export function AIResponse({ 
  currentStep, 
  researchSteps, 
  showAnalysis, 
  isAnalysisComplete 
}: AIResponseProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <ResearchProgress 
            currentStep={currentStep} 
            researchSteps={researchSteps} 
          />

          {showAnalysis && (
            <AnalysisDisplay 
              typingText="analysis"
              isAnalysisComplete={isAnalysisComplete}
            />
          )}
        </div>
      </div>
    </div>
  );
}
