
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkle, ChevronDown, ChevronUp, Expand } from "lucide-react";

interface SystemInstructionsFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function SystemInstructionsField({ value, onChange }: SystemInstructionsFieldProps) {
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="system-instructions" className="text-sm font-medium text-gray-700">
          System instructions
        </Label>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <Sparkle className="w-4 h-4 text-gray-900" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowFullInstructions(!showFullInstructions)}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            {showFullInstructions ? (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </Button>
        </div>
      </div>
      <div className="relative">
        <Textarea
          id="system-instructions"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full resize-none transition-all duration-200 pr-8 ${
            showFullInstructions ? 'min-h-[200px]' : 'min-h-[80px]'
          }`}
          placeholder="Enter system instructions..."
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFullInstructions(!showFullInstructions)}
          className="absolute bottom-2 right-2 h-6 w-6 p-0 hover:bg-gray-100"
        >
          {showFullInstructions ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <Expand className="w-4 h-4 text-gray-600" />
          )}
        </Button>
      </div>
    </div>
  );
}
