
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Share, User, ChevronRight, PanelLeft, PanelRight, X } from "lucide-react";

interface ResearchStep {
  source: string;
  message: string;
  icon: string;
  completed: boolean;
}

interface CitationSource {
  id: string;
  title: string;
  source: string;
  icon: string;
  excerpt: string;
  description: string;
  sourceType: string;
  lastUpdated: string;
}

interface DeepResearchChatProps {
  onComplete?: () => void;
}

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
      {/* Left Sidebar - Collapsed by default */}
      {showLeftSidebar && (
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
          <div className="flex-1 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start p-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              📝 New chat
            </Button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Single Top Bar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowLeftSidebar(!showLeftSidebar)}
              className="p-2"
            >
              {showLeftSidebar ? <PanelLeft className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
            </Button>
            <img 
              src="/lovable-uploads/767aed11-ad2d-4763-b5d1-76d73bc1c047.png" 
              alt="Schneider Studio"
              className="w-6 h-6"
            />
            <span className="font-medium text-gray-900">Schneider Studio</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/3d9dae14-5b23-4399-9919-ecf50ed251ee.png" 
                alt="Audrey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex">
          {/* Chat Messages */}
          <div className={`${showCitations ? 'flex-1' : 'w-full'} flex flex-col`}>
            <div className="flex-1 px-6 py-8 overflow-y-auto max-w-4xl mx-auto w-full">
              {/* User Message - Clean ChatGPT style */}
              <div className="mb-8">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-900 leading-relaxed">
                      I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Response - Clean ChatGPT style */}
              <div className="mb-8">
                <div className="flex gap-4">
                  <div className="flex-1">
                    {/* Research Progress */}
                    {currentStep <= researchSteps.length && (
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
                    )}

                    {/* Final Analysis */}
                    {currentStep >= researchSteps.length && (
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-wrap text-gray-900 leading-relaxed">
                          {typingText}
                          {!isAnalysisComplete && <span className="animate-pulse">|</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sources Button */}
            {isAnalysisComplete && (
              <div className="px-6 py-4 border-t border-gray-200 max-w-4xl mx-auto w-full">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCitations(!showCitations)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                >
                  <span className="flex items-center gap-1">
                    🔵 🟣 🟢 🟠 <span className="text-sm ml-1">Sources</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${showCitations ? 'rotate-90' : ''}`} />
                </Button>
              </div>
            )}
          </div>

          {/* Citations Panel */}
          {showCitations && (
            <div className="w-96 border-l border-gray-200 flex flex-col h-full bg-white">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Citations</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCitations(false)}
                  className="p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {citations.map((citation) => (
                    <div
                      key={citation.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <img src={citation.icon} alt={citation.source} className="w-6 h-6 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 mb-1">{citation.source}</h4>
                            <p className="text-sm font-medium text-gray-800 mb-2">{citation.title}</p>
                            <p className="text-xs text-gray-600 mb-2">{citation.lastUpdated} — {citation.sourceType}</p>
                            <p className="text-xs text-gray-700 whitespace-pre-line">{citation.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                            📄 Tell me more about this.
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                            📋 Summarize this.
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-sm text-gray-900 mb-3">Search Results</h4>
                  <div className="space-y-3">
                    {citations.map((citation) => (
                      <div key={`search-${citation.id}`} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <img src={citation.icon} alt={citation.source} className="w-4 h-4 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-gray-900">{citation.source}</p>
                            <p className="text-xs text-gray-800 font-medium mt-1">{citation.title}</p>
                            <p className="text-xs text-gray-600 mt-1">{citation.lastUpdated} — {citation.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
