
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SegmentSummarySectionProps {
  isVisible: boolean;
}

export function SegmentSummarySection({ isVisible }: SegmentSummarySectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
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
  );
}
