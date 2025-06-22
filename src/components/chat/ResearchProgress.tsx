
import { Progress } from "@/components/ui/progress";
import { ResearchStep } from "./types";

interface ResearchProgressProps {
  currentStep: number;
  researchSteps: ResearchStep[];
}

export function ResearchProgress({ currentStep, researchSteps }: ResearchProgressProps) {
  if (currentStep > researchSteps.length) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600">
          Analyzing {currentStep} sources • {currentStep} searches
        </span>
      </div>
      <Progress value={(currentStep / researchSteps.length) * 100} className="mb-4" />
      
      {researchSteps.slice(0, currentStep).map((step, index) => (
        <div key={index} className="flex items-center gap-3 mb-3 p-3 bg-gray-50 rounded-lg">
          <img src={step.icon} alt={step.source} className="w-5 h-5" />
          <span className="text-sm text-gray-700">
            <strong>{step.source}:</strong> {step.message}
          </span>
        </div>
      ))}
    </div>
  );
}
