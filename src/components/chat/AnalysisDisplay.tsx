
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface AnalysisDisplayProps {
  typingText: string;
  isAnalysisComplete: boolean;
}

export function AnalysisDisplay({ typingText, isAnalysisComplete }: AnalysisDisplayProps) {
  const formatAnalysisText = (text: string) => {
    // Split the text into sections and format appropriately
    const sections = text.split(/(?=(?:🎯|📊|🚀))/);
    
    return sections.map((section, index) => {
      if (section.includes('🎯 **Lead Analysis & Segmentation**')) {
        return (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🎯 Lead Analysis & Segmentation
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">1. Dormant MQL Assessment</h3>
                <ul className="space-y-4 ml-4">
                  <li className="text-gray-900">
                    <span className="font-bold">Energy Efficiency Segment:</span> Identified 12,847 leads with strong engagement indicators. These contacts showed 73% email open rates on sustainability content but haven't converted in 90+ days—indicating high interest but missing activation trigger 📊 [HubSpot].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Industrial Automation Prospects:</span> Discovered 8,432 leads who downloaded 3+ technical whitepapers on EcoStruxure™ automation. Analysis shows 67% work at companies with 500+ employees and have budget authority indicators 🏭 [HubSpot] [Marketing Cloud].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Building Management Specialists:</span> Found 15,234 webinar attendees from DACH and Nordic regions. Cross-reference with CRM data reveals 82% have active building renovation projects but haven't engaged with sales 🏢 [HubSpot].
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">2. Engagement Pattern Insights</h3>
                <ul className="space-y-4 ml-4">
                  <li className="text-gray-900">
                    <span className="font-bold">Content Performance Analysis:</span> EcoStruxure™ Power campaign achieved 42% open rates but only 2.3% CTR. Deep dive shows technical specification PDFs get 5x more downloads than product brochures among engineer personas 📈 [Marketing Cloud].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Geographic Intelligence:</span> Nordic countries show 61% higher engagement with ESG content. German market specifically requires ISO 50001 compliance messaging based on 89% correlation with successful conversions 🌍 [Marketing Cloud] [Teams].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Optimal Timing Discovered:</span> Machine learning analysis identifies Tuesday 10:00 CET as peak engagement for DACH region (37% higher open rates), while Southern Europe responds best Thursday 14:00 CET 🕐 [Marketing Cloud].
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">3. Sales Intelligence Mining</h3>
                <ul className="space-y-4 ml-4">
                  <li className="text-gray-900">
                    <span className="font-bold">Win/Loss Patterns:</span> Analysis of 1,247 sales conversations reveals "integration complexity" as primary objection in 34% of lost deals. Successful deals included technical workshop attendance (4.7x higher close rate) 💬 [Teams].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Competitive Positioning:</span> Schneider solutions show 15-20% lower TCO vs. Siemens for mid-size installations. ROI calculator demonstrates 18-month average payback period—key differentiator not being communicated 💰 [SharePoint] [Teams].
                  </li>
                  <li className="text-gray-900">
                    <span className="font-bold">Regional Feedback:</span> "French energy consultants need local case studies and technical validation before engaging. Generic content doesn't resonate" - Pierre Dubois, Sales Director 🇫🇷 [Teams].
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      }

      if (section.includes('📊 High-Potential Segment Summary')) {
        return (
          <div key={index} className="mb-8">
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
                  <TableCell>Technical workshops + ROI tools 🔧 [HubSpot] [SharePoint]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Industrial Automation Engineers</TableCell>
                  <TableCell>1,234</TableCell>
                  <TableCell>€8.7M</TableCell>
                  <TableCell>Integration demos + success stories 🏭 [HubSpot] [Marketing Cloud]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Building Management Specialists</TableCell>
                  <TableCell>1,123</TableCell>
                  <TableCell>€6.4M</TableCell>
                  <TableCell>Virtual tours + case studies 🏢 [HubSpot] [SharePoint]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sustainability Officers</TableCell>
                  <TableCell>643</TableCell>
                  <TableCell>€3.8M</TableCell>
                  <TableCell>Executive briefings + ESG reports 🌱 [HubSpot] [Teams]</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <p className="text-xl font-bold text-gray-900 mb-6">
              Total Estimated Pipeline Impact: €31.2M 💼
            </p>
          </div>
        );
      }

      if (section.includes('🚀 Immediate Action Plan')) {
        return (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              🚀 Immediate Action Plan
            </h2>
            
            <ul className="space-y-4 ml-4">
              <li className="text-gray-900">
                <span className="font-bold">Launch Personalized Sequences:</span> 4 persona-specific email campaigns ready for deployment within 48 hours. Each sequence includes 6 touchpoints over 21 days with dynamic content based on engagement 📧 [Marketing Cloud].
              </li>
              <li className="text-gray-900">
                <span className="font-bold">Technical Workshop Series:</span> Schedule 12 workshops across EMEA Q1 2025. Focus on hands-on EcoStruxure™ integration addressing the #1 sales objection 🛠️ [Teams] [SharePoint].
              </li>
              <li className="text-gray-900">
                <span className="font-bold">ABM Activation:</span> Target top 500 accounts with LinkedIn campaigns. Budget allocation: €75K for Q1 with expected 23% engagement rate based on similar campaigns 🎯 [Marketing Cloud].
              </li>
              <li className="text-gray-900">
                <span className="font-bold">Sales Enablement:</span> Deliver persona-specific battle cards and local case studies to address regional nuances identified in research 📋 [SharePoint] [Teams].
              </li>
            </ul>

            <div className="mt-8 pt-4 border-t border-gray-300">
              <p className="text-sm text-gray-600 italic">
                Research completed in 8 minutes 47 seconds | 4 enterprise systems analyzed | 127,492 data points processed
              </p>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  if (!typingText) {
    return null;
  }

  return (
    <div className="prose max-w-none">
      <div className="text-gray-900 leading-relaxed">
        <p className="text-gray-900 mb-6">
          Here's a comprehensive analysis of Schneider Electric's dormant lead opportunities, with actionable insights for immediate nurture campaign activation:
        </p>
        {formatAnalysisText(typingText)}
        {!isAnalysisComplete && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
}
