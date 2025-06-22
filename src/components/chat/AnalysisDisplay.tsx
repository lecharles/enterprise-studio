
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
      delay: 800,
    },
    {
      id: "engagement-insights",
      title: "Engagement Pattern Insights",
      component: EngagementPatternInsightsSection,
      delay: 1600,
    },
    {
      id: "segment-summary",
      title: "High-Potential Segment Summary",
      component: SegmentSummarySection,
      delay: 2400,
    },
    {
      id: "action-plan",
      title: "Immediate Action Plan",
      component: ActionPlanSection,
      delay: 3200,
    }
  ];

  useEffect(() => {
    if (typingText && !isAnalysisComplete) {
      const timer = setInterval(() => {
        if (currentSectionIndex < contentSections.length) {
          const currentSection = contentSections[currentSectionIndex];
          
          setTimeout(() => {
            setVisibleSections(prev => [...prev, currentSection.id]);
            setCurrentSectionIndex(prev => prev + 1);
          }, currentSection.delay);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [typingText, isAnalysisComplete, currentSectionIndex]);

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
        
        {/* Sources button as part of content when analysis is complete */}
        {isAnalysisComplete && (
          <div className="mt-6">
            <SourcesButton 
              showCitations={showCitations}
              onToggle={onToggleCitations}
            />
          </div>
        )}
      </div>
    </div>
  );
}
