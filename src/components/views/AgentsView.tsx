
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Plus, Settings, BarChart3, Users, BookOpen, MoreHorizontal } from "lucide-react";

export function AgentsView() {
  const agents = [
    {
      id: 1,
      name: "Schneider Concierge Agent",
      description: "Customer service and technical support for electrical products",
      status: "Active",
      interactions: 2341,
      successRate: 94.2,
      category: "Customer Service"
    },
    {
      id: 2,
      name: "Energy Efficiency Advisor",
      description: "Provides energy optimization recommendations and insights",
      status: "Active", 
      interactions: 1892,
      successRate: 91.8,
      category: "Energy Management"
    },
    {
      id: 3,
      name: "Maintenance Assistant",
      description: "Predictive maintenance and equipment health monitoring",
      status: "Testing",
      interactions: 456,
      successRate: 87.3,
      category: "Maintenance"
    }
  ];

  return (
    <div className="h-full bg-white">
      {/* Sub-header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-50">
              <BookOpen className="w-4 h-4" />
              <span>Learn more</span>
            </Button>
            <Button variant="outline" size="sm" className="px-2 border-gray-300 hover:bg-gray-50">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 mt-1">Manage and monitor your AI agents</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create New Agent
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <Badge 
                    variant={agent.status === "Active" ? "default" : "secondary"}
                    className={agent.status === "Active" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"}
                  >
                    {agent.status}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{agent.name}</CardTitle>
                <p className="text-gray-400 text-sm">{agent.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Category</span>
                  <span className="text-white">{agent.category}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Interactions</span>
                  <span className="text-white">{agent.interactions.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400">{agent.successRate}%</span>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                    <Settings className="w-3 h-3 mr-1" />
                    Configure
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
