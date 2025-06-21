
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Share, User, ChevronRight } from "lucide-react";

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

  const researchSteps: ResearchStep[] = [
    {
      source: "HubSpot",
      message: "Found 48,327 dormant MQLs, segmenting by engagement patterns...",
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      completed: false
    },
    {
      source: "Marketing Cloud",
      message: "Analyzing email performance and persona data...",
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
      completed: false
    },
    {
      source: "SharePoint",
      message: "Reviewing product documentation and pricing sheets...",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      completed: false
    },
    {
      source: "Teams",
      message: "Extracting sales feedback on lead quality...",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      completed: false
    }
  ];

  const citations: CitationSource[] = [
    {
      id: "hubspot-1",
      title: "MQL Engagement Analysis",
      source: "HubSpot",
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      excerpt: "48,327 contacts marked as Marketing Qualified Leads with last engagement >180 days. Segmentation shows 79% facility managers, 12% C-suite executives..."
    },
    {
      id: "salesforce-1",
      title: "Email Campaign Performance",
      source: "Salesforce Marketing Cloud",
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
      excerpt: "Data Center Cooling campaign metrics: 23.4% open rate, 3.2% click-through. Persona-based segmentation increased engagement by 67%..."
    },
    {
      id: "sharepoint-1",
      title: "Product Documentation",
      source: "SharePoint",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      excerpt: "EcoStruxure™ Data Center Cooling solutions pricing matrix and ROI calculators. Average deal size: €847K for enterprise implementations..."
    },
    {
      id: "teams-1",
      title: "Sales Team Feedback",
      source: "Teams",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      excerpt: "Sales conversation analysis: 'Facility managers respond best to energy efficiency messaging. CFOs need concrete ROI projections within 18 months...'"
    }
  ];

  const finalAnalysis = `Here's a summary of AGICorp's Q2 2025 marketing and product strategy, along with a breakdown of the top revenue-driving features:

**Product & Marketing Strategy – Q2 2025**

**1. Core Product Focus Areas**

• **Bark2Text v2**: Improved voice transcription in noisy environments. This was the top-performing feature in Q2, with $92K in revenue and 48% 30-day retention—both the highest among tracked features 🟡.

• **Mood Dashboard**: Provided daily and weekly summaries of pets' emotional states. Estimated to contribute $87.5K in Q2 revenue with 41% D30 retention 🟢.

• **Referral Program**: Encouraged viral growth through incentives; especially effective with "petfluencers." It delivered $39K in estimated Q2 revenue and 28% D30 retention 🟢.

**2. Strategic Initiatives**

• **PetAGI Distribution Partnership**: Signed an exclusive mobile distribution deal for North America. This is seen as foundational for Q3 go-to-market acceleration 🟢.

• **Marketing Campaigns**: Ran a successful user-generated content (UGC) challenge, driving 15M social impressions and expanding brand awareness 🟡.

• **Customer Funnel Optimizations**: Focused on improving translation accuracy and daily utility, with metrics like 5.2 translations/session and a 32% DAU/WAU ratio 🟡.

**3. Audience & Positioning**

• Targeted urban Millennial and Gen Z pet parents—tech-forward, emotionally invested, and active on social media 🟡.

Let me know if you'd like visualizations of the feature impact data or a breakdown by user metrics.`;

  useEffect(() => {
    if (currentStep < researchSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (!isAnalysisComplete) {
      // Start typing the final analysis
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Share button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-medium">ChatGPT 4o</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Share className="w-4 h-4" />
            Share
          </Button>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex">
        {/* Main Chat Area */}
        <div className={`${showCitations ? 'w-2/3' : 'w-full'} flex flex-col`}>
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            {/* User Message */}
            <div className="mb-8">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">
                    I need to revive dormant leads for our Data Center Cooling line. Which MQLs from the last 6 months have the highest potential for conversion, and what personalized outreach should we create?
                  </p>
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="mb-8">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">AI</span>
                </div>
                <div className="flex-1">
                  {/* Research Progress */}
                  {currentStep <= researchSteps.length && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">
                          Analyzing {Math.min(currentStep + 1, researchSteps.length)} sources • {currentStep < 4 ? currentStep + 1 : 4} searches
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
                      
                      {isAnalysisComplete && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h3 className="font-medium text-blue-900 mb-2">Research Summary</h3>
                          <p className="text-sm text-blue-800 mb-3">
                            • Identified 3,847 high-potential leads across 4 key personas<br/>
                            • Generated personalized campaigns for each segment<br/>
                            • Estimated pipeline impact: €31.2M
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sources Button */}
          {isAnalysisComplete && (
            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCitations(!showCitations)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <span className="text-sm">🔍 Sources</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${showCitations ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          )}
        </div>

        {/* Citations Panel */}
        {showCitations && (
          <Card className="w-1/3 m-4 h-fit">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-900 mb-4">Citations</h3>
              <div className="space-y-3">
                {citations.map((citation) => (
                  <div
                    key={citation.id}
                    className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedCitation(citation.id === selectedCitation ? null : citation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <img src={citation.icon} alt={citation.source} className="w-5 h-5 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-900">{citation.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{citation.source}</p>
                        {selectedCitation === citation.id && (
                          <p className="text-xs text-gray-700 leading-relaxed">
                            {citation.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
