
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
  const [typingText, setTypingText] = useState("");
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

  const finalAnalysis = `Here's a comprehensive analysis of Schneider Electric's dormant lead opportunities, with actionable insights for immediate nurture campaign activation:

🎯 **Lead Analysis & Segmentation**

**1. Dormant MQL Assessment**

• **Energy Efficiency Segment**: Identified 12,847 leads with strong engagement indicators. These contacts showed 73% email open rates on sustainability content but haven't converted in 90+ days—indicating high interest but missing activation trigger 📊 [HubSpot].

• **Industrial Automation Prospects**: Discovered 8,432 leads who downloaded 3+ technical whitepapers on EcoStruxure™ automation. Analysis shows 67% work at companies with 500+ employees and have budget authority indicators 🏭 [HubSpot] [Marketing Cloud].

• **Building Management Specialists**: Found 15,234 webinar attendees from DACH and Nordic regions. Cross-reference with CRM data reveals 82% have active building renovation projects but haven't engaged with sales 🏢 [HubSpot].

**2. Engagement Pattern Insights**

• **Content Performance Analysis**: EcoStruxure™ Power campaign achieved 42% open rates but only 2.3% CTR. Deep dive shows technical specification PDFs get 5x more downloads than product brochures among engineer personas 📈 [Marketing Cloud].

• **Geographic Intelligence**: Nordic countries show 61% higher engagement with ESG content. German market specifically requires ISO 50001 compliance messaging based on 89% correlation with successful conversions 🌍 [Marketing Cloud] [Teams].

• **Optimal Timing Discovered**: Machine learning analysis identifies Tuesday 10:00 CET as peak engagement for DACH region (37% higher open rates), while Southern Europe responds best Thursday 14:00 CET 🕐 [Marketing Cloud].

**3. Sales Intelligence Mining**

• **Win/Loss Patterns**: Analysis of 1,247 sales conversations reveals "integration complexity" as primary objection in 34% of lost deals. Successful deals included technical workshop attendance (4.7x higher close rate) 💬 [Teams].

• **Competitive Positioning**: Schneider solutions show 15-20% lower TCO vs. Siemens for mid-size installations. ROI calculator demonstrates 18-month average payback period—key differentiator not being communicated 💰 [SharePoint] [Teams].

• **Regional Feedback**: "French energy consultants need local case studies and technical validation before engaging. Generic content doesn't resonate" - Pierre Dubois, Sales Director 🇫🇷 [Teams].

**📊 High-Potential Segment Summary**
Total Qualified Leads Identified: **3,847** meeting both engagement and fit criteria

**Revenue Potential by Segment:**

| Segment | Lead Count | Est. Pipeline Value | Recommended Strategy |
|---------|------------|-------------------|---------------------|
| Energy Efficiency Consultants | 847 | €12.3M | Technical workshops + ROI tools 🔧 |
| Industrial Automation Engineers | 1,234 | €8.7M | Integration demos + success stories 🏭 |
| Building Management Specialists | 1,123 | €6.4M | Virtual tours + case studies 🏢 |
| Sustainability Officers | 643 | €3.8M | Executive briefings + ESG reports 🌱 |

**Total Estimated Pipeline Impact: €31.2M** 💼

**🚀 Immediate Action Plan**

1. **Launch Personalized Sequences**: 4 persona-specific email campaigns ready for deployment within 48 hours. Each sequence includes 6 touchpoints over 21 days with dynamic content based on engagement 📧 [Marketing Cloud].

2. **Technical Workshop Series**: Schedule 12 workshops across EMEA Q1 2025. Focus on hands-on EcoStruxure™ integration addressing the #1 sales objection 🛠️ [Teams] [SharePoint].

3. **ABM Activation**: Target top 500 accounts with LinkedIn campaigns. Budget allocation: €75K for Q1 with expected 23% engagement rate based on similar campaigns 🎯 [Marketing Cloud].

4. **Sales Enablement**: Deliver persona-specific battle cards and local case studies to address regional nuances identified in research 📋 [SharePoint] [Teams].

---
*Research completed in 8 minutes 47 seconds | 4 enterprise systems analyzed | 127,492 data points processed*`;

  useEffect(() => {
    if (currentStep < researchSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (!isAnalysisComplete) {
      const timer = setTimeout(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
          if (index < finalAnalysis.length) {
            setTypingText(finalAnalysis.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typeInterval);
            setIsAnalysisComplete(true);
          }
        }, 20);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, finalAnalysis.length, isAnalysisComplete]);

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

                    {currentStep >= researchSteps.length && (
                      <AnalysisDisplay 
                        typingText={typingText}
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
