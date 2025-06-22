
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SourcesButtonProps {
  showCitations: boolean;
  onToggle: () => void;
}

export function SourcesButton({ showCitations, onToggle }: SourcesButtonProps) {
  return (
    <div className="px-6 py-4 max-w-4xl mx-auto w-full">
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <span className="flex items-center gap-1">
          <img src="/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png" alt="HubSpot" className="w-4 h-4" />
          <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="w-4 h-4" />
          <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="w-4 h-4" />
          <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="w-4 h-4" />
          <span className="text-sm ml-1">Sources</span>
        </span>
        <ChevronRight className={`w-4 h-4 transition-transform ${showCitations ? 'rotate-90' : ''}`} />
      </Button>
    </div>
  );
}
