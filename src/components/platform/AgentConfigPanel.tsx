
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Plus, 
  Trash2, 
  Copy,
  Eye,
  FileText,
  Zap
} from "lucide-react";

export function AgentConfigPanel() {
  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">OA</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Outreach Automation Agent</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">THREAD</span>
                  <Badge variant="secondary" className="text-xs">
                    thread_c3EtCMGpxiT7cpoCAjKIEAu
                  </Badge>
                  <span className="text-sm text-gray-500">841 tokens</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Learn more
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Configuration Panel */}
        <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System instructions
              </label>
              <div className="relative">
                <Textarea
                  placeholder="You are Campaign Orchestrator, an AI agent specialized in creating and managing multi-channel campaigns for Schneider Electrics enterprise solutions, with a special focus on personalized conversations."
                  className="min-h-[120px] text-sm"
                  defaultValue="You are Campaign Orchestrator, an AI agent specialized in creating and managing multi-channel campaigns for Schneider Electrics enterprise solutions, with a special focus on personalized conversations.

Use advanced psycholinguistic..."
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Model
              </label>
              <Select defaultValue="gpt-4.1">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4.1">gpt-4.1</SelectItem>
                  <SelectItem value="gpt-4">gpt-4</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">TOOLS</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">File Search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Plus className="w-4 h-4" />
                      Files
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Connectors</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                    Connectors
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">Functions (api, mcp, a2a)</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Plus className="w-4 h-4" />
                    Functions
                  </Button>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <span className="text-sm text-gray-700">twilio-sms-campaigns</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">MODEL CONFIGURATION</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Response format
                  </label>
                  <Select defaultValue="text">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">text</SelectItem>
                      <SelectItem value="json">json</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Temperature
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      defaultValue="1.0"
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-700 min-w-[3rem]">1.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Copy className="w-4 h-4 mr-2" />
                Clone
              </Button>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              Updated 6/22, 7:22 PM
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">U</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-medium">User</p>
                      <p className="text-sm text-gray-700 mt-1">Go</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">OA</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">Outreach Automation Agent</p>
                      <div className="mt-2 text-sm text-gray-700">
                        <p className="font-medium">Thank you! Before launching, please specify:</p>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                          <li>Which persona(s) to target (Building Managers, Sustainability Officers, or both)?</li>
                          <li>The solution focus (energy monitoring, building automation, retrofits, or full suite)?</li>
                          <li>Preferred channels (SMS only or include email/LinkedIn/WhatsApp)?</li>
                          <li>Any specific companies or segments to prioritize?</li>
                        </ol>
                        <p className="mt-3">
                          Once I have these details, I'll verify compliance, segment the audience, 
                          generate personalized messages, set up tracking, and schedule the 
                          campaign for optimal engagement. Shall we proceed with default 
                          settings or do you have preferences?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <Input 
                  placeholder="Enter your message..." 
                  className="flex-1"
                />
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Zap className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Run
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Playground messages can be viewed by anyone at your organization using the API.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Logs */}
        <div className="w-80 bg-white border-l border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">LOGS</h3>
              <Button variant="ghost" size="sm" className="text-xs">
                Hide logs
              </Button>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">▷</span>
                <span className="text-blue-600">Create a thread</span>
              </div>
              <div className="text-gray-500 ml-4">
                POST /v1/threads
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <span className="text-gray-500">▷</span>
                <span className="text-blue-600">Add a message</span>
              </div>
              <div className="text-gray-500 ml-4">
                POST /v1/threads/thread_c3EtCMGpxiT7cpoCAjKIEAu/messages
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <span className="text-gray-500">▷</span>
                <span className="text-blue-600">Run the thread</span>
                <span className="text-xs text-gray-500">126 events</span>
              </div>
              <div className="text-gray-500 ml-4">
                POST /v1/threads/thread_c3EtCMGpxiT7cpoCAjKIEAu/runs
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded p-2 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-800 font-medium">Run completed</span>
                <span className="text-xs text-gray-500">841 tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
