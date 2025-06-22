
import { useState, useEffect } from "react";
import { ResearchStep } from "../types";

interface UseResearchProgressProps {
  researchSteps: ResearchStep[];
}

export function useResearchProgress({ researchSteps }: UseResearchProgressProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);

  useEffect(() => {
    if (currentStep < researchSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentStep >= researchSteps.length && !showAnalysis) {
      const timer = setTimeout(() => {
        setShowAnalysis(true);
        setTimeout(() => {
          setIsAnalysisComplete(true);
        }, 8000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, showAnalysis, researchSteps.length]);

  return {
    currentStep,
    showAnalysis,
    isAnalysisComplete
  };
}
