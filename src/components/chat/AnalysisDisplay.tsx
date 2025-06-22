
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState, useEffect } from "react";

interface AnalysisDisplayProps {
  typingText: string;
  isAnalysisComplete: boolean;
}

interface ContentSection {
  id: string;
  title: string;
  content: React.ReactNode;
  delay: number;
}

export function AnalysisDisplay({ typingText, isAnalysisComplete }: AnalysisDisplayProps) {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const contentSections: ContentSection[] = [
    {
      id: "intro",
      title: "Introduction",
      delay: 0,
      content: (
        <p className="text-gray-900 mb-6">
          Here's a comprehensive analysis of Schneider Electric's dormant lead opportunities, with actionable insights for immediate nurture campaign activation:
        </p>
      )
    },
    {
      id: "lead-analysis",
      title: "Lead Analysis & Segmentation",
      delay: 1000,
      content: (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🎯 Lead Analysis & Segmentation
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Dormant MQL Assessment</h3>
              <ul className="space-y-4 ml-4">
                <li className="text-gray-900">
                  <span className="font-bold">Energy Efficiency Segment:</span> Identified 12,847 leads with strong engagement indicators. These contacts showed 73% email open rates on sustainability content but haven't converted in 90+ days—indicating high interest but missing activation trigger 📊 <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Industrial Automation Prospects:</span> Discovered 8,432 leads who downloaded 3+ technical whitepapers on EcoStruxure™ automation. Analysis shows 67% work at companies with 500+ employees and have budget authority indicators 🏭 <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Building Management Specialists:</span> Found 15,234 webinar attendees from DACH and Nordic regions. Cross-reference with CRM data reveals 82% have active building renovation projects but haven't engaged with sales 🏢 <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Engagement Pattern Insights</h3>
              <ul className="space-y-4 ml-4">
                <li className="text-gray-900">
                  <span className="font-bold">Content Performance Analysis:</span> EcoStruxure™ Power campaign achieved 42% open rates but only 2.3% CTR. Deep dive shows technical specification PDFs get 5x more downloads than product brochures among engineer personas 📈 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Geographic Intelligence:</span> Nordic countries show 61% higher engagement with ESG content. German market specifically requires ISO 50001 compliance messaging based on 89% correlation with successful conversions 🌍 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Optimal Timing Discovered:</span> Machine learning analysis identifies Tuesday 10:00 CET as peak engagement for DACH region (37% higher open rates), while Southern Europe responds best Thursday 14:00 CET 🕐 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Sales Intelligence Mining</h3>
              <ul className="space-y-4 ml-4">
                <li className="text-gray-900">
                  <span className="font-bold">Win/Loss Patterns:</span> Analysis of 1,247 sales conversations reveals "integration complexity" as primary objection in 34% of lost deals. Successful deals included technical workshop attendance (4.7x higher close rate) 💬 <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Competitive Positioning:</span> Schneider solutions show 15-20% lower TCO vs. Siemens for mid-size installations. ROI calculator demonstrates 18-month average payback period—key differentiator not being communicated 💰 <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
                </li>
                <li className="text-gray-900">
                  <span className="font-bold">Regional Feedback:</span> "French energy consultants need local case studies and technical validation before engaging. Generic content doesn't resonate" - Pierre Dubois, Sales Director 🇫🇷 <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "segment-summary",
      title: "High-Potential Segment Summary",
      delay: 2000,
      content: (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            📊 High-Potential Segment Summary
          </h2>
          <p className="text-gray-900 mb-4">
            <span className="font-bold">Total Qualified Leads Identified: 3,847</span> meeting both engagement and fit criteria
          </p>
          <p className="text-gray-900 mb-6 font-medium">
            Let me show you the revenue potential breakdown by segment with personalized nurture strategies:
          </p>
          
          <Table className="mb-6">
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead className="text-white font-bold">Segment</TableHead>
                <TableHead className="text-white font-bold">Lead Count</TableHead>
                <TableHead className="text-white font-bold">Est. Pipeline Value</TableHead>
                <TableHead className="text-white font-bold">Recommended Strategy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Energy Efficiency Consultants</TableCell>
                <TableCell>847</TableCell>
                <TableCell>€12.3M</TableCell>
                <TableCell className="flex items-center gap-1">
                  Technical workshops + ROI tools 🔧 
                  <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />
                  <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Industrial Automation Engineers</TableCell>
                <TableCell>1,234</TableCell>
                <TableCell>€8.7M</TableCell>
                <TableCell className="flex items-center gap-1">
                  Integration demos + success stories 🏭 
                  <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />
                  <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Building Management Specialists</TableCell>
                <TableCell>1,123</TableCell>
                <TableCell>€6.4M</TableCell>
                <TableCell className="flex items-center gap-1">
                  Virtual tours + case studies 🏢 
                  <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />
                  <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sustainability Officers</TableCell>
                <TableCell>643</TableCell>
                <TableCell>€3.8M</TableCell>
                <TableCell className="flex items-center gap-1">
                  Executive briefings + ESG reports 🌱 
                  <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />
                  <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-xl font-bold text-gray-900 mb-6">
            Total Estimated Pipeline Impact: €31.2M 💼
          </p>
        </div>
      )
    },
    {
      id: "action-plan",
      title: "Immediate Action Plan",
      delay: 3000,
      content: (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🚀 Immediate Action Plan
          </h2>
          
          <ul className="space-y-4 ml-4">
            <li className="text-gray-900">
              <span className="font-bold">Launch Personalized Sequences:</span> 4 persona-specific email campaigns ready for deployment within 48 hours. Each sequence includes 6 touchpoints over 21 days with dynamic content based on engagement 📧 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
            </li>
            <li className="text-gray-900">
              <span className="font-bold">Technical Workshop Series:</span> Schedule 12 workshops across EMEA Q1 2025. Focus on hands-on EcoStruxure™ integration addressing the #1 sales objection 🛠️ <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" />.
            </li>
            <li className="text-gray-900">
              <span className="font-bold">ABM Activation:</span> Target top 500 accounts with LinkedIn campaigns. Budget allocation: €75K for Q1 with expected 23% engagement rate based on similar campaigns 🎯 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
            </li>
            <li className="text-gray-900">
              <span className="font-bold">Sales Enablement:</span> Deliver persona-specific battle cards and local case studies to address regional nuances identified in research 📋 <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
            </li>
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-300">
            <p className="text-sm text-gray-600 italic">
              Research completed in 8 minutes 47 seconds | 4 enterprise systems analyzed | 127,492 data points processed
            </p>
          </div>
        </div>
      )
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
        {contentSections.map((section) => (
          <div 
            key={section.id}
            className={`transition-opacity duration-500 ${
              visibleSections.includes(section.id) ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              display: visibleSections.includes(section.id) ? 'block' : 'none'
            }}
          >
            {section.content}
          </div>
        ))}
        {!isAnalysisComplete && visibleSections.length > 0 && (
          <span className="animate-pulse">|</span>
        )}
      </div>
    </div>
  );
}
