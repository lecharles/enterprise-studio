
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SourcesButtonProps {
  showCitations: boolean;
  onToggle: () => void;
}

export function SourcesButton({ showCitations, onToggle }: SourcesButtonProps) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 max-w-4xl mx-auto w-full">
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <span className="flex items-center gap-1">
          🔵 🟣 🟢 🟠 <span className="text-sm ml-1">Sources</span>
        </span>
        <ChevronRight className={`w-4 h-4 transition-transform ${showCitations ? 'rotate-90' : ''}`} />
      </Button>
    </div>
  );
}
