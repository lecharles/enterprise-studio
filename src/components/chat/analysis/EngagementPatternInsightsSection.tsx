
interface EngagementPatternInsightsSectionProps {
  isVisible: boolean;
}

export function EngagementPatternInsightsSection({ isVisible }: EngagementPatternInsightsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6">2. Engagement Pattern Insights</h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-gray-900">
            <span className="font-bold">Content Performance Analysis:</span> EcoStruxure™ Power campaign achieved 42% open rates but only 2.3% CTR. Deep dive shows technical specification PDFs get 5x more downloads than product brochures among engineer personas <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
          </p>
          
          <p className="text-gray-900">
            <span className="font-bold">Geographic Intelligence:</span> Nordic countries show 61% higher engagement with ESG content. German market specifically requires ISO 50001 compliance messaging based on 89% correlation with successful conversions <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
          </p>
          
          <p className="text-gray-900">
            <span className="font-bold">Optimal Timing Discovered:</span> Machine learning analysis identifies Tuesday 10:00 CET as peak engagement for DACH region (37% higher open rates), while Southern Europe responds best Thursday 14:00 CET <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">3. Sales Intelligence Mining</h3>
          
          <div className="space-y-4">
            <p className="text-gray-900">
              <span className="font-bold">Win/Loss Patterns:</span> Analysis of 1,247 sales conversations reveals "integration complexity" as primary objection in 34% of lost deals. Successful deals included technical workshop attendance (4.7x higher close rate) <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
            </p>
            
            <p className="text-gray-900">
              <span className="font-bold">Competitive Positioning:</span> Schneider solutions show 15-20% lower TCO vs. Siemens for mid-size installations. ROI calculator demonstrates 18-month average payback period—key differentiator not being communicated <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
            </p>
            
            <p className="text-gray-900">
              <span className="font-bold">Regional Feedback:</span> "French energy consultants need local case studies and technical validation before engaging. Generic content doesn't resonate" - Pierre Dubois, Sales Director <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
