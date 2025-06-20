
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Settings, 
  Mic, 
  Send, 
  Search,
  Globe,
  Image,
  Code,
  FileText,
  ChevronDown,
  Check
} from "lucide-react";

export function ChatInterface() {
  const [showTools, setShowTools] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const [selectedSources, setSelectedSources] = useState<string[]>(['web-search']);

  const tools = [
    { id: 'search-connectors', name: 'Search connectors', icon: Search, badge: 'NEW' },
    { id: 'create-image', name: 'Create an image', icon: Image },
    { id: 'search-web', name: 'Search the web', icon: Globe },
    { id: 'write-code', name: 'Write or code', icon: Code },
    { id: 'deep-research', name: 'Run deep research', icon: FileText },
  ];

  const sources = [
    { id: 'web-search', name: 'Web search', icon: Globe },
    { id: 'schneider-docs', name: 'Schneider Documentation', icon: FileText },
    { id: 'energy-management', name: 'Energy Management System', icon: Settings },
    { id: 'automation-platform', name: 'Automation Platform', icon: Code },
    { id: 'building-management', name: 'Building Management', icon: FileText },
    { id: 'solar-systems', name: 'Solar Systems Data', icon: FileText },
  ];

  const toggleSource = (sourceId: string) => {
    setSelectedSources(prev => 
      prev.includes(sourceId) 
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-normal text-gray-900 mb-8">
          What can I help with?
        </h1>
        
        {/* Main Chat Input */}
        <div className="relative bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow mb-6">
          <div className="flex items-center px-4 py-4">
            <div className="flex items-center gap-3 mr-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-2"
                onClick={() => setShowTools(!showTools)}
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm">Tools</span>
              </Button>
            </div>
            <Input
              placeholder="Ask anything"
              className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <div className="flex items-center gap-2 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white bg-black hover:bg-gray-800 rounded-full p-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Tools Dropdown */}
        {showTools && (
          <div className="mb-6 bg-white border border-gray-200 rounded-2xl shadow-lg p-4 max-w-md mx-auto">
            <div className="space-y-2">
              {tools.map((tool) => (
                <Button
                  key={tool.id}
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:bg-gray-50 rounded-lg p-3"
                >
                  <tool.icon className="w-4 h-4 mr-3" />
                  <span>{tool.name}</span>
                  {tool.badge && (
                    <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      {tool.badge}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Research Input */}
        <div className="relative bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow mb-6">
          <div className="flex items-center px-4 py-4">
            <div className="flex items-center gap-3 mr-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
              >
                <Settings className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                <FileText className="w-4 h-4" />
                <span>Research</span>
                <button className="text-blue-600 hover:text-blue-800">×</button>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-2"
                onClick={() => setShowSources(!showSources)}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Sources</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
            </div>
            <Input
              placeholder="Get a detailed report"
              className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <div className="flex items-center gap-2 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white bg-black hover:bg-gray-800 rounded-full p-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sources Dropdown */}
        {showSources && (
          <div className="mb-6 bg-white border border-gray-200 rounded-2xl shadow-lg p-4 max-w-md mx-auto">
            <div className="space-y-3">
              {sources.map((source) => (
                <div key={source.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <source.icon className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{source.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-10 h-6 rounded-full p-0 ${
                      selectedSources.includes(source.id)
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    onClick={() => toggleSource(source.id)}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      selectedSources.includes(source.id) ? 'translate-x-2' : '-translate-x-2'
                    }`} />
                  </Button>
                </div>
              ))}
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-600 hover:bg-gray-50 rounded-lg p-3 mt-2"
              >
                <Plus className="w-4 h-4 mr-2" />
                Connect more
              </Button>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Schneider Studio can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
}
