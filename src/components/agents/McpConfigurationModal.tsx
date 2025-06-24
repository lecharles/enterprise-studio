
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkle, ChevronDown, Info, Trash2 } from "lucide-react";

interface McpConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: any;
}

export function McpConfigurationModal({ isOpen, onClose, config }: McpConfigurationModalProps) {
  const renderJsonWithSyntaxHighlighting = (obj: any) => {
    const jsonString = JSON.stringify(obj, null, 2);
    
    // Simple regex-based syntax highlighting for light theme
    return jsonString
      .replace(/"([^"]+)":/g, '<span class="text-blue-600">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-green-600">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-purple-600">$1</span>')
      .replace(/\[/g, '<span class="text-gray-600">[</span>')
      .replace(/\]/g, '<span class="text-gray-600">]</span>')
      .replace(/{/g, '<span class="text-gray-600">{</span>')
      .replace(/}/g, '<span class="text-gray-600">}</span>');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Edit function</DialogTitle>
          <p className="text-sm text-gray-600 mt-2">
            The model will intelligently decide to call functions based on input it receives from the user.{" "}
            <a href="#" className="text-blue-600 hover:underline">Learn more.</a>
          </p>
        </DialogHeader>
        <div className="mt-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Definition</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-sm">
                  <Sparkle className="w-4 h-4" />
                  Generate
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-sm">
                  Examples
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
              <pre 
                className="text-sm font-mono text-gray-900 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: config ? renderJsonWithSyntaxHighlighting(config) : ''
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 mb-4">
            <Info className="w-4 h-4 text-gray-500" />
            <span>Add</span>
            <code className="bg-white px-1 rounded">"strict": true</code>
            <span>to ensure the model's response always follows this schema.</span>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <Trash2 className="w-4 h-4 mr-1" />
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Save
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
