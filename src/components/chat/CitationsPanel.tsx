
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CitationSource } from "./types";

interface CitationsPanelProps {
  citations: CitationSource[];
  onClose: () => void;
}

export function CitationsPanel({ citations, onClose }: CitationsPanelProps) {
  return (
    <div className="w-96 border-l border-gray-200 flex flex-col h-full bg-white">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-medium text-gray-900">Citations</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="p-1"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {citations.map((citation) => (
            <div
              key={citation.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <img src={citation.icon} alt={citation.source} className="w-6 h-6 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-gray-900 mb-1">{citation.source}</h4>
                    <p className="text-sm font-medium text-gray-800 mb-2">{citation.title}</p>
                    <p className="text-xs text-gray-600 mb-2">{citation.lastUpdated} — {citation.sourceType}</p>
                    <p className="text-xs text-gray-700 whitespace-pre-line">{citation.description}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                    📄 Tell me more about this.
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs p-1 h-auto">
                    📋 Summarize this.
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="font-medium text-sm text-gray-900 mb-3">Search Results</h4>
          <div className="space-y-3">
            {citations.map((citation) => (
              <div key={`search-${citation.id}`} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <img src={citation.icon} alt={citation.source} className="w-4 h-4 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">{citation.source}</p>
                    <p className="text-xs text-gray-800 font-medium mt-1">{citation.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{citation.lastUpdated} — {citation.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
