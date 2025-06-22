
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Share, Menu } from "lucide-react";
import { DeepResearchChatProps, ResearchStep, CitationSource } from "./types";
import { ResearchProgress } from "./ResearchProgress";
import { CitationsPanel } from "./CitationsPanel";
import { AnalysisDisplay } from "./AnalysisDisplay";
import { LeftSidebar } from "./LeftSidebar";
import { SourcesButton } from "./SourcesButton";

export function DeepResearchChat({ onComplete }: DeepResearchChatProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCitations, setShowCitations] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);

  const researchSteps: ResearchStep[] = [
    {
      source: "HubSpot",
      message: "Analyzing 48,327 dormant MQLs, segmenting by engagement patterns...",
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      completed: false
    },
    {
      source: "Marketing Cloud",
      message: "Processing campaign performance and persona data across EMEA...",
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
      completed: false
    },
    {
      source: "SharePoint",
      message: "Reviewing EcoStruxure™ documentation and competitive intelligence...",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      completed: false
    },
    {
      source: "Teams",
      message: "Extracting sales conversations and regional feedback...",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      completed: false
    }
  ];

  const citations: CitationSource[] = [
    {
      id: "hubspot-1",
      title: "Schneider Electric CRM - Lead Database Analysis",
      source: "HubSpot",
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      sourceType: "HubSpot CRM Export - EMEA MQL Report Q4 2024",
      description: "Dataset: 48,327 dormant MQLs analyzed\nKey Metrics: Lead scoring, engagement rates, persona classification",
      lastUpdated: "January 15, 2025",
      excerpt: "Lead Database Export showing 48,327 dormant MQLs with engagement scores. Persona mapping identifies 4 key segments. Energy Efficiency Consultants show highest engagement (73% open rate) but lowest conversion..."
    },
    {
      id: "marketing-cloud-1",
      title: "Campaign Performance Dashboard - Q4 2024",
      source: "Marketing Cloud",
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
      sourceType: "Salesforce Marketing Cloud Analytics",
      description: "Campaigns Analyzed: 47 email campaigns, 15 nurture flows\nMetrics: Open rates, CTR, geographic engagement patterns\nTime Period: October - December 2024",
      lastUpdated: "Today",
      excerpt: "The \"EcoStruxure™ Power Launch\" campaign achieved 42% open rate across EMEA but only 2.3% CTR. Analysis reveals technical PDFs get 5x more engagement than product brochures. Nordic countries show 61% higher engagement with sustainability content..."
    },
    {
      id: "sharepoint-1",
      title: "EcoStruxure™ Product Documentation Library",
      source: "SharePoint",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      sourceType: "Product Management Team shared:",
      description: "EcoStruxure™ Power 3.0 Technical Specifications\nCompetitive Analysis: Schneider vs. Siemens TCO Study\nROI Calculator Template v2.3\nSuccess Story Repository (47 case studies)",
      lastUpdated: "Yesterday",
      excerpt: "TCO Analysis: Schneider solutions demonstrate 15-20% cost advantage. Average ROI: 18 months for mid-size installations. Integration complexity addressed in v3.0 release. 47 verified customer success stories available..."
    },
    {
      id: "teams-1",
      title: "Sales Team Conversations - EMEA Region",
      source: "Teams",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      sourceType: "Regional Sales Insights:",
      description: "Thread: \"Q4 Win/Loss Analysis\" (1,247 messages)\nParticipants: Pierre Dubois (FR), Klaus Mueller (DE), Sofia Andersson (SE)\nKey Topics: Integration objections, regional requirements, workshop effectiveness",
      lastUpdated: "Today",
      excerpt: "Klaus Mueller: \"German market requires ISO 50001 messaging - it's non-negotiable.\" Sofia Andersson: \"Technical workshops in Stockholm converted 4.7x better than digital.\" Pierre Dubois: \"Integration complexity stops 34% of deals...\""
    }
  ];

  useEffect(() => {
    if (currentStep < researchSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1200); // Reduced from 1500ms for faster progression
      return () => clearTimeout(timer);
    } else if (currentStep >= researchSteps.length && !showAnalysis) {
      const timer = setTimeout(() => {
        setShowAnalysis(true);
        // Set analysis complete after 8 seconds instead of waiting for typing
        setTimeout(() => {
          setIsAnalysisComplete(true);
        }, 8000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, showAnalysis]);

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
              {/* User Message */}
              <div className="mb-8">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-900 leading-relaxed">
                      I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Response */}
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
