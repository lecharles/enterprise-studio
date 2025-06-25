
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Trash2, ChevronDown } from "lucide-react";

interface BatchTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BatchTestModal({ isOpen, onClose }: BatchTestModalProps) {
  const [definition, setDefinition] = useState(`Generate {BATCH_SIZE} unique {CHANNEL} conversations for Schneider Electric campaigns.

For each conversation, randomly select from these parameters:

Companies: {COMPANY_LIST}
Segments: {SEGMENT_LIST}  
Industries: {INDUSTRY_LIST}
Pain Points: {PAIN_POINT_LIST}
Interest Levels: {INTEREST_LEVELS}
Objection Types: {OBJECTION_TYPES}
Outcomes: {OUTCOME_LIST}

Constraints:
- Each conversation: {MIN_MESSAGES}-{MAX_MESSAGES} exchanges
- Unique combination of parameters per conversation
- Vary lead scores between {MIN_SCORE}-{MAX_SCORE}
- Include {FAILURE_RATE}% negative outcomes
- Show {CHANNEL}-specific formatting

Output format:
CONVERSATION_{ID}: {Company} | {Segment} | {Outcome} | Score: {Initial}→{Final}
[Full conversation]
[Performance metrics]
---`);

  const handleRun = () => {
    console.log("Running batch tests with definition:", definition);
    // TODO: Implement batch test generation logic
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleClear = () => {
    setDefinition("");
  };

  const renderTextWithHighlighting = (text: string) => {
    // Split text by lines and process each line
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      // Replace variables in curly braces with colored spans
      const parts = line.split(/(\{[^}]+\})/g);
      return (
        <div key={lineIndex} className="leading-6">
          {parts.map((part, partIndex) => {
            if (part.match(/^\{[^}]+\}$/)) {
              return (
                <span key={partIndex} className="text-green-600 font-medium">
                  {part}
                </span>
              );
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">Create Batch Tests</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <p className="text-sm text-gray-600 mb-4 flex-shrink-0">
            The agent will run variations of these experiences which will then be evaluated for security, relevancy, quality, and more. Hydrate variables manually as well as with data fetched from connectors. <span className="text-blue-600 underline cursor-pointer">Learn more.</span>
          </p>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2 flex-shrink-0">
              <label className="text-sm font-medium text-gray-700">Definition</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 h-8 px-3 text-xs"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                  Generate
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 h-8 px-3 text-xs"
                >
                  Examples
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div 
                className="w-full h-full border border-gray-300 rounded-md overflow-auto"
                style={{ backgroundColor: 'rgba(249,250,251,255)' }}
              >
                <div className="p-4 h-full">
                  <pre className="text-sm font-mono text-gray-900 whitespace-pre-wrap leading-6 h-full overflow-auto">
                    {renderTextWithHighlighting(definition)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 h-8 px-2"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="h-9 px-4 text-sm"
            >
              Cancel
            </Button>
            <Button
              onClick={handleRun}
              className="h-9 px-4 text-sm text-white"
              style={{ backgroundColor: 'rgba(34, 139, 34, 1)' }}
              disabled={!definition.trim()}
            >
              Run
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
