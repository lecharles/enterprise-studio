
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CitationSource } from "./types";

interface CitationsPanelProps {
  citations: CitationSource[];
  onClose: () => void;
}

export function CitationsPanel({ citations, onClose }: CitationsPanelProps) {
  const getBorderColor = (source: string) => {
    switch (source.toLowerCase()) {
      case 'hubspot':
        return 'border-orange-400';
      case 'marketing cloud':
        return 'border-blue-400';
      case 'sharepoint':
        return 'border-teal-500';
      case 'teams':
        return 'border-purple-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <div className="w-80 border-l border-gray-200 flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
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
          {citations.map((citation) => (
            <div
              key={citation.id}
              className={`space-y-3 border-l-4 ${getBorderColor(citation.source)} pl-3`}
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
              {citations.slice(0, 3).map((citation) => (
                <div key={`more-${citation.id}`} className={`flex items-start gap-3 border-l-4 ${getBorderColor(citation.source)} pl-3`}>
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-900 leading-tight">{citation.source}</p>
                    <p className="text-xs text-gray-700 mt-1 leading-tight">{citation.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{citation.lastUpdated} — {citation.excerpt}</p>
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
