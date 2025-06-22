
import { useState, useEffect } from "react";
import { IntroSection } from "./analysis/IntroSection";
import { LeadAnalysisSection } from "./analysis/LeadAnalysisSection";
import { EngagementPatternInsightsSection } from "./analysis/EngagementPatternInsightsSection";
import { SegmentSummarySection } from "./analysis/SegmentSummarySection";
import { ActionPlanSection } from "./analysis/ActionPlanSection";
import { SourcesButton } from "./SourcesButton";

interface AnalysisDisplayProps {
  typingText: string;
  isAnalysisComplete: boolean;
  showCitations: boolean;
  onToggleCitations: () => void;
}

interface ContentSection {
  id: string;
  title: string;
  component: React.ComponentType<{ isVisible: boolean }>;
  delay: number;
}

export function AnalysisDisplay({ typingText, isAnalysisComplete, showCitations, onToggleCitations }: AnalysisDisplayProps) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const contentSections: ContentSection[] = [
    {
      id: "intro",
      title: "Introduction",
      component: IntroSection,
      delay: 0,
    },
    {
      id: "lead-analysis",
      title: "Lead Analysis & Segmentation",
      component: LeadAnalysisSection,
      delay: 1000,
    },
    {
      id: "engagement-insights",
      title: "Engagement Pattern Insights",
      component: EngagementPatternInsightsSection,
      delay: 2000,
    },
    {
      id: "segment-summary",
      title: "High-Potential Segment Summary",
      component: SegmentSummarySection,
      delay: 3000,
    },
    {
      id: "action-plan",
      title: "Immediate Action Plan",
      component: ActionPlanSection,
      delay: 4000,
    }
  ];

  useEffect(() => {
    if (typingText && !isAnalysisComplete) {
      const processNextSection = () => {
        if (currentSectionIndex < contentSections.length) {
          const currentSection = contentSections[currentSectionIndex];
          
          setTimeout(() => {
            setVisibleSections(prev => [...prev, currentSection.id]);
            setCurrentSectionIndex(prev => prev + 1);
          }, currentSection.delay);
        }
      };

      processNextSection();
    }
  }, [typingText, isAnalysisComplete, currentSectionIndex, contentSections.length]);

  if (!typingText) {
    return null;
  }

  return (
    <div className="prose max-w-none">
      <div className="text-gray-900 leading-relaxed">
        {contentSections.map((section) => {
          const Component = section.component;
          return (
            <Component
              key={section.id}
              isVisible={visibleSections.includes(section.id)}
            />
          );
        })}
        
        {!isAnalysisComplete && visibleSections.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
        
        {/* Sources button and research footer when analysis is complete */}
        {isAnalysisComplete && (
          <div>
            <SourcesButton 
              showCitations={showCitations}
              onToggle={onToggleCitations}
            />
            
            <div className="px-6 max-w-4xl mx-auto w-full">
              <p className="text-sm text-gray-600 italic">
                Research completed in 8 minutes 47 seconds | 4 enterprise systems analyzed | 127,492 data points processed
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
