
interface LeadAnalysisSectionProps {
  isVisible: boolean;
}

export function LeadAnalysisSection({ isVisible }: LeadAnalysisSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🔍 Lead Analysis & Segmentation
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-900">
          <span className="font-bold">Dormant Lead Profile Analysis:</span> Of the 48,327 MQLs analyzed, <span className="font-bold">3,847 (8.0%)</span> demonstrate both high engagement potential and strong product-market fit indicators.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold text-gray-900 mb-3">Key Segmentation Criteria Applied:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-900">
            <li><span className="font-medium">Engagement Recency:</span> Last meaningful interaction within 90-180 days</li>
            <li><span className="font-medium">Company Size & Budget:</span> Mid-market to enterprise (500+ employees, €50K+ tech budget)</li>
            <li><span className="font-medium">Industry Vertical:</span> Manufacturing, data centers, commercial buildings</li>
            <li><span className="font-medium">Geographic Focus:</span> EMEA markets with active sales coverage</li>
          </ul>
        </div>

        <p className="text-gray-900">
          <span className="font-bold">Behavioral Insights:</span> Analysis reveals 4 distinct persona clusters based on content engagement patterns, webinar attendance, and sales interaction history 📊 <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
        </p>
      </div>
    </div>
  );
}
