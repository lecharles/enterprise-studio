
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";

interface ModelConfigurationProps {
  responseFormat: string;
  onResponseFormatChange: (format: string) => void;
}

export function ModelConfiguration({ responseFormat, onResponseFormatChange }: ModelConfigurationProps) {
  const responseFormats = [
    { value: "text", label: "text" },
    { value: "json_object", label: "json_object" },
    { value: "json_schema", label: "json_schema" }
  ];

  return (
    <div className="space-y-3 border-t border-gray-200 pt-4">
      <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">MODEL CONFIGURATION</h3>
      
      {/* Response format */}
      <div className="space-y-2">
        <Label htmlFor="response-format" className="text-sm font-medium text-gray-700">
          Response format
        </Label>
        <Select value={responseFormat} onValueChange={onResponseFormatChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select response format" />
          </SelectTrigger>
          <SelectContent>
            {responseFormats.map((format) => (
              <SelectItem key={format.value} value={format.value}>
                {format.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Bottom section with buttons and timestamp */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-100 text-gray-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2 hover:bg-gray-100 text-gray-600 text-xs"
          >
            Clone
          </Button>
        </div>
        <div className="text-xs text-gray-500">
          Updated 6/22,<br />7:22 PM
        </div>
      </div>
    </div>
  );
}
