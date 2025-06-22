
interface LeadAnalysisSectionProps {
  isVisible: boolean;
}

export function LeadAnalysisSection({ isVisible }: LeadAnalysisSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🎯 Lead Analysis & Segmentation
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">1. Dormant MQL Assessment</h3>
          
          <div className="space-y-4">
            <p className="text-gray-900">
              <span className="font-bold">Energy Efficiency Segment:</span> Identified 12,847 leads with strong engagement indicators. These contacts showed 73% email open rates on sustainability content but haven't converted in 90+ days—indicating high interest but missing activation trigger <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
            </p>
            
            <p className="text-gray-900">
              <span className="font-bold">Industrial Automation Prospects:</span> Discovered 8,432 leads who downloaded 3+ technical whitepapers on EcoStruxure™ automation. Analysis shows 67% work at companies with 500+ employees and have budget authority indicators <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
            </p>
            
            <p className="text-gray-900">
              <span className="font-bold">Building Management Specialists:</span> Found 15,234 webinar attendees from DACH and Nordic regions. Cross-reference with CRM data reveals 82% have active building renovation projects but haven't engaged with sales <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" />.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
