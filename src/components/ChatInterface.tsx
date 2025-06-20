

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  Settings, 
  Mic, 
  Send, 
  ChevronDown,
  X,
  Search,
  Cloud,
  Code,
  Zap,
  Users,
  Briefcase
} from "lucide-react";

export function ChatInterface() {
  const [selectedModel, setSelectedModel] = useState("o3");
  const [showResearchTool, setShowResearchTool] = useState(false);
  const [showSourcesDropdown, setShowSourcesDropdown] = useState(false);
  const [enabledSources, setEnabledSources] = useState({
    webSearch: true,
    box: false,
    dropbox: false,
    github: false,
    gmail: false,
    googleCalendar: false,
    googleDrive: false,
    hubspot: true,
    linear: false,
    outlookCalendar: true,
    outlookEmail: true,
    sharepoint: false,
    teams: false,
    salesforceMarketingCloud: false
  });

  const recentProjects = [
    { 
      title: "Solar Energy Solutions", 
      type: "Agent",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Hotel Energy Management", 
      type: "App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Infrastructure Renewal", 
      type: "Automation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Smart Grid Technology", 
      type: "Analytics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center"
    },
  ];

  const sources = [
    { id: 'webSearch', label: 'Web search', icon: '🌐', enabled: enabledSources.webSearch },
    { id: 'box', label: 'Box', icon: '📦', enabled: enabledSources.box },
    { id: 'dropbox', label: 'Dropbox', icon: '📦', enabled: enabledSources.dropbox },
    { id: 'github', label: 'GitHub', icon: '🐙', enabled: enabledSources.github },
    { id: 'gmail', label: 'Gmail', icon: '📧', enabled: enabledSources.gmail },
    { id: 'googleCalendar', label: 'Google Calendar', icon: '📅', enabled: enabledSources.googleCalendar },
    { id: 'googleDrive', label: 'Google Drive', icon: '💾', enabled: enabledSources.googleDrive },
    { id: 'hubspot', label: 'HubSpot', icon: '🟠', enabled: enabledSources.hubspot },
    { id: 'linear', label: 'Linear', icon: '📐', enabled: enabledSources.linear },
    { id: 'outlookCalendar', label: 'Outlook Calendar', icon: '📅', enabled: enabledSources.outlookCalendar },
    { id: 'outlookEmail', label: 'Outlook Email', icon: '📧', enabled: enabledSources.outlookEmail },
    { id: 'salesforceMarketingCloud', label: 'Salesforce Marketing Cloud', icon: <Cloud className="w-4 h-4 text-blue-500" />, enabled: enabledSources.salesforceMarketingCloud },
    { id: 'sharepoint', label: 'SharePoint', icon: '🟢', enabled: enabledSources.sharepoint },
    { id: 'teams', label: 'Teams', icon: '👥', enabled: enabledSources.teams },
  ];

  const toggleSource = (sourceId: string) => {
    setEnabledSources(prev => ({
      ...prev,
      [sourceId]: !prev[sourceId as keyof typeof prev]
    }));
  };

  const quickAccessItems = [
    { id: 'agents', label: 'Agents', icon: Code, color: 'text-green-600' },
    { id: 'automation', label: 'Automation', icon: Zap, color: 'text-yellow-600' },
    { id: 'campaigns', label: 'Campaigns', icon: Users, color: 'text-purple-600' },
    { id: 'leads', label: 'Leads', icon: Briefcase, color: 'text-red-600' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* OpenAI Logo */}
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            {/* Model Picker */}
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger className="w-[140px] h-8 text-sm border-none bg-transparent hover:bg-gray-100 rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">
                  <span className="font-medium">GPT-4o</span>
                  <span className="text-xs text-gray-500 ml-2">Great for most tasks</span>
                </SelectItem>
                <SelectItem value="o3">
                  <span className="font-medium">o3</span>
                  <span className="text-xs text-gray-500 ml-2">Uses advanced reasoning</span>
                </SelectItem>
                <SelectItem value="o4-mini">
                  <span className="font-medium">o4-mini</span>
                  <span className="text-xs text-gray-500 ml-2">Fastest at advanced reasoning</span>
                </SelectItem>
                <SelectItem value="o4-mini-high">
                  <span className="font-medium">o4-mini-high</span>
                  <span className="text-xs text-gray-500 ml-2">Great at coding and visual reasoning</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">SE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal text-gray-900 mb-6">
              What can I help with?
            </h1>
            
            {/* Chat Input */}
            <div className="relative">
              <div className="bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center px-4 py-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2 mr-2"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-1 mr-3"
                      >
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Tools</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 bg-white">
                      <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">🔗</div>
                        <div>
                          <div className="font-medium text-sm">Search connectors</div>
                          <div className="text-xs text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">NEW</div>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">🎨</div>
                        <span className="text-sm">Create an image</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">🌐</div>
                        <span className="text-sm">Search the web</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">💻</div>
                        <span className="text-sm">Write or code</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 cursor-pointer" onClick={() => setShowResearchTool(!showResearchTool)}>
                        <div className="w-4 h-4 flex items-center justify-center">🔍</div>
                        <span className="text-sm">Run deep research</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Research Tool */}
                  {showResearchTool && (
                    <div className="flex items-center gap-2 mr-3">
                      <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        <Search className="w-3 h-3" />
                        <span>Research</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-4 w-4 hover:bg-blue-200 rounded-full"
                          onClick={() => setShowResearchTool(false)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>

                      {/* Sources Dropdown */}
                      <DropdownMenu open={showSourcesDropdown} onOpenChange={setShowSourcesDropdown}>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-1"
                          >
                            <span className="text-sm">Sources</span>
                            <ChevronDown className="w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-64 bg-white max-h-80 overflow-y-auto">
                          {sources.map((source) => (
                            <DropdownMenuItem key={source.id} className="flex items-center justify-between p-3 cursor-pointer" onClick={(e) => e.preventDefault()}>
                              <div className="flex items-center gap-3">
                                {typeof source.icon === 'string' ? (
                                  <span>{source.icon}</span>
                                ) : (
                                  source.icon
                                )}
                                <span className="text-sm">{source.label}</span>
                              </div>
                              <Switch
                                checked={source.enabled}
                                onCheckedChange={() => toggleSource(source.id)}
                                className="scale-75"
                              />
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-3 cursor-pointer">
                            <span>🔗</span>
                            <span className="text-sm">Connect more</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                  
                  <Input
                    placeholder="Ask anything"
                    className="flex-1 border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                  
                  <div className="flex items-center gap-2 ml-3">
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
            </div>

            {/* Quick Access Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              {quickAccessItems.map((item) => (
                <button
                  key={item.id}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white min-w-[100px]"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section - Bottom */}
      <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-8 mt-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">Recent Projects</h2>
          <div className="grid grid-cols-4 gap-6">
            {recentProjects.map((project, index) => (
              <button
                key={index}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4 text-left">
                  <div className="text-sm font-medium text-gray-900 mb-1">{project.title}</div>
                  <div className="text-xs text-gray-500">{project.type}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

