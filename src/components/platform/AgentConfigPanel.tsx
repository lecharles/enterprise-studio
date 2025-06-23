
import { useState } from "react";
import { Settings, Play, RotateCcw, Share, MoreHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export function AgentConfigPanel() {
  const [agentName, setAgentName] = useState("Building Testing Campaign/Outreach Agent");
  const [description, setDescription] = useState("I help create and optimize building testing campaigns and outreach strategies for data center cooling solutions.");
  const [instructions, setInstructions] = useState(`You are a specialized marketing and outreach agent focused on building testing campaigns for data center cooling solutions. Your expertise includes:

1. Lead qualification and segmentation for building automation prospects
2. Multi-channel outreach strategy development (email, LinkedIn, WhatsApp)
3. Content personalization based on building type and cooling requirements
4. Campaign performance optimization and A/B testing
5. Integration with CRM systems (HubSpot, Salesforce) and sales tools

Always maintain a professional, consultative tone and focus on providing value through educational content about energy efficiency and sustainability benefits.`);

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{agentName}</h1>
              <p className="text-sm text-gray-500">By Schneider Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Configuration Panel */}
        <div className="w-1/2 border-r border-gray-200">
          <Tabs defaultValue="configure" className="h-full">
            <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent rounded-none p-0">
              <TabsTrigger 
                value="configure" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
              >
                Configure
              </TabsTrigger>
              <TabsTrigger 
                value="test" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
              >
                Test
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="configure" className="p-6 space-y-6 h-full overflow-y-auto">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Name</label>
                <Input
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-20 resize-none"
                />
              </div>

              {/* Instructions */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Instructions</label>
                <Textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full h-48 resize-none font-mono text-sm"
                />
              </div>

              {/* Capabilities */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-900">Capabilities</label>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Code Interpreter</div>
                    <div className="text-sm text-gray-500">Lets the assistant write and run Python code</div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">File Search</div>
                    <div className="text-sm text-gray-500">The assistant can search through files you upload</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Function Calling</div>
                    <div className="text-sm text-gray-500">Define custom functions for the assistant to call</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              {/* Functions */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Functions</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">lead_qualification</Badge>
                  <Badge variant="secondary">content_generator</Badge>
                  <Badge variant="secondary">campaign_optimizer</Badge>
                  <Badge variant="secondary">crm_integration</Badge>
                </div>
                <Button variant="outline" size="sm">
                  <span className="text-sm">+ Add Function</span>
                </Button>
              </div>

              {/* Model */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Model</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>gpt-4o</option>
                  <option>gpt-4</option>
                  <option>gpt-3.5-turbo</option>
                </select>
              </div>
            </TabsContent>

            <TabsContent value="test" className="p-6">
              <div className="flex items-center justify-center h-64 text-gray-500">
                <div className="text-center">
                  <Play className="w-8 h-8 mx-auto mb-2" />
                  <p>Test your agent configuration here</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Chat/Preview Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Preview</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Test
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 bg-gray-50">
            <div className="bg-white rounded-lg border border-gray-200 h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.52-.36c-.433-.12-.884-.21-1.344-.21-1.337 0-2.573.35-3.64.99C5.177 20.684 4.348 21 3.5 21c-.828 0-1.5-.448-1.5-1v-1.5c0-.828.448-1.5 1-1.5s1-.672 1-1.5v-.5c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                </div>
                <p className="text-sm">Start testing your agent</p>
                <p className="text-xs text-gray-400 mt-1">Ask questions to see how it responds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
