
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CitationSource } from "./types";

interface CitationsPanelProps {
  citations: CitationSource[];
  onClose: () => void;
}

export function CitationsPanel({ citations, onClose }: CitationsPanelProps) {
  // Create extended citations list by repeating and varying the content
  const extendedCitations = [
    ...citations,
    // Add more variations to fill the panel
    {
      id: "hubspot-2",
      title: "Lead Scoring Model Analysis - Q4 Performance",
      source: "HubSpot",
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      sourceType: "HubSpot Lead Analytics Dashboard",
      description: "Advanced lead scoring metrics across 73,000+ prospects\nConversion patterns by industry segment and geographic region",
      lastUpdated: "2 hours ago",
      excerpt: "Lead scoring accuracy improved by 34% with new persona-based weighting. HVAC decision makers show 2.8x higher engagement with technical content vs. general sustainability messaging..."
    },
    {
      id: "marketing-cloud-2",
      title: "Email Campaign Optimization Results - EMEA Focus",
      source: "Marketing Cloud", 
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
      sourceType: "Salesforce Journey Builder Analytics",
      description: "Multi-touch attribution analysis across 89 campaigns\nPersonalization impact on engagement and conversion rates",
      lastUpdated: "6 hours ago",
      excerpt: "Personalized subject lines increased open rates by 23%. Technical whitepapers as first touchpoint correlate with 47% higher deal velocity in enterprise accounts..."
    },
    {
      id: "sharepoint-2",
      title: "Competitive Intelligence: Market Position Analysis",
      source: "SharePoint",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      sourceType: "Strategic Intelligence Repository",
      description: "Competitor analysis: Schneider vs. Siemens, ABB, and Eaton\nMarket share trends and pricing positioning studies",
      lastUpdated: "Yesterday",
      excerpt: "Schneider maintains 23% market share in data center cooling. Price sensitivity analysis shows 15% premium acceptable for integration simplicity..."
    },
    {
      id: "teams-2",
      title: "Regional Sales Performance Review - Q4 Results",
      source: "Teams",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      sourceType: "Sales Team Weekly Sync",
      description: "Thread: \"Q4 Performance Deep Dive\" (2,156 messages)\nParticipants: 47 sales professionals across EMEA region",
      lastUpdated: "3 hours ago",
      excerpt: "Sarah Johnson (UK): 'Technical demonstrations converting 3.2x better than standard presentations.' Marco Rossi (IT): 'Energy efficiency ROI calculator decisive in 78% of closed deals...'"
    }
  ];

  // Create even more content by duplicating with slight variations
  const moreItems = [
    ...extendedCitations.map(citation => ({
      ...citation,
      id: `more-${citation.id}`,
      title: `${citation.title} - Extended Analysis`,
      excerpt: `${citation.excerpt.substring(0, 120)}...`
    })),
    // Additional unique entries
    {
      id: "more-hubspot-unique",
      title: "Pipeline Velocity Analysis by Lead Source",
      source: "HubSpot",  
      icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
      excerpt: "Webinar leads convert 23% faster than trade show leads. Content syndication shows highest volume but lowest quality scores..."
    },
    {
      id: "more-mc-unique",
      title: "Customer Journey Mapping - Data Center Segment",
      source: "Marketing Cloud",
      icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png", 
      excerpt: "Average 7.3 touchpoints before conversion. Technical content consumed in first 3 interactions predicts 89% likelihood of progression..."
    },
    {
      id: "more-sp-unique",
      title: "Product Roadmap Impact on Sales Conversations",
      source: "SharePoint",
      icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
      excerpt: "AI-powered cooling optimization features mentioned in 67% of winning deals. Edge computing integration capabilities differentiator..."
    },
    {
      id: "more-teams-unique", 
      title: "Customer Success Stories - Implementation Best Practices",
      source: "Teams",
      icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
      excerpt: "Implementation team: 'Phased deployment approach reduces risk by 45%. Customer training program critical for adoption success...'"
    }
  ];

  return (
    <div className="w-full h-full border-l border-gray-200 flex flex-col bg-white">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <h3 className="font-semibold text-gray-900">Citations</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-1 h-auto"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          {extendedCitations.map((citation) => (
            <div
              key={citation.id}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 mt-1 flex-shrink-0">
                  <img src={citation.icon} alt={citation.source} className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-600 mb-1">{citation.source}</div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2 leading-tight">{citation.title}</h4>
                  <div className="text-xs text-gray-500 mb-2">{citation.lastUpdated} — {citation.sourceType}</div>
                  <p className="text-xs text-gray-700 leading-relaxed">{citation.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 pb-4">
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium text-sm text-gray-900 mb-3">More</h4>
            <div className="space-y-3">
              {moreItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                    <img src={item.icon} alt={item.source} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 leading-tight">{item.source}</p>
                    <p className="text-xs text-gray-700 mt-1 leading-tight">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional repeated content to ensure panel is always filled */}
        <div className="px-4 pb-4">
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium text-sm text-gray-900 mb-3">Related Sources</h4>
            <div className="space-y-3">
              {citations.slice(0, 4).map((citation, index) => (
                <div key={`related-${citation.id}-${index}`} className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                    <img src={citation.icon} alt={citation.source} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 leading-tight">{citation.source}</p>
                    <p className="text-xs text-gray-700 mt-1 leading-tight">Related: {citation.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{citation.lastUpdated} — Additional context available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
