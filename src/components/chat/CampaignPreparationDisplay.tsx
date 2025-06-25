
import { useState, useEffect } from "react";
import { CampaignIntroSection } from "./campaign/CampaignIntroSection";
import { PersonaContentSection } from "./campaign/PersonaContentSection";
import { PerformanceProjectionsSection } from "./campaign/PerformanceProjectionsSection";
import { LaunchOptionsSection } from "./campaign/LaunchOptionsSection";

interface CampaignPreparationDisplayProps {
  isActive: boolean;
  onLaunchAllCampaigns?: () => void;
  campaignLaunched?: boolean;
}

interface ContentSection {
  id: string;
  title: string;
  component: React.ComponentType<{ isVisible: boolean; onLaunchAllCampaigns?: () => void; campaignLaunched?: boolean }>;
  delay: number;
}

export function CampaignPreparationDisplay({ isActive, onLaunchAllCampaigns, campaignLaunched = false }: CampaignPreparationDisplayProps) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const contentSections: ContentSection[] = [
    {
      id: "intro",
      title: "Campaign Introduction",
      component: CampaignIntroSection,
      delay: 1000, // Start after 1 second
    },
    {
      id: "persona-content",
      title: "Persona-Based Content Strategy",
      component: PersonaContentSection,
      delay: 6500, // Wait for intro section to complete (1000 + 5*800 + 800 + 700 buffer)
    },
    {
      id: "performance-projections",
      title: "Performance Projections",
      component: PerformanceProjectionsSection,
      delay: 8500, // 2 seconds after persona content starts
    },
    {
      id: "launch-options",
      title: "Launch Options",
      component: LaunchOptionsSection,
      delay: 10500, // 2 seconds after performance projections starts
    }
  ];

  useEffect(() => {
    if (isActive && !isComplete) {
      const processNextSection = () => {
        if (currentSectionIndex < contentSections.length) {
          const currentSection = contentSections[currentSectionIndex];
          
          setTimeout(() => {
            setVisibleSections(prev => [...prev, currentSection.id]);
            setCurrentSectionIndex(prev => {
              const nextIndex = prev + 1;
              if (nextIndex >= contentSections.length) {
                setIsComplete(true);
              }
              return nextIndex;
            });
          }, currentSection.delay);
        }
      };

      processNextSection();
    }
  }, [isActive, isComplete, currentSectionIndex, contentSections.length]);

  // Reset state when component becomes inactive
  useEffect(() => {
    if (!isActive) {
      setVisibleSections([]);
      setCurrentSectionIndex(0);
      setIsComplete(false);
    }
  }, [isActive]);

  if (!isActive) {
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
              onLaunchAllCampaigns={onLaunchAllCampaigns}
              campaignLaunched={campaignLaunched}
            />
          );
        })}
        
        {!isComplete && visibleSections.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
      </div>
    </div>
  );
}
