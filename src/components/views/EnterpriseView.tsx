
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Zap, 
  Settings,
  Building2,
  Plus,
  Mic,
  Send
} from "lucide-react";

export function EnterpriseView() {
  const projectTypes = [
    { 
      id: "agent", 
      name: "Agent", 
      icon: Bot, 
      color: "bg-gray-800", 
      description: "AI-powered customer service and technical support"
    },
    { 
      id: "app", 
      name: "App", 
      icon: Zap, 
      color: "bg-gray-700",
      description: "Custom applications for specific workflows"
    },
    { 
      id: "automation", 
      name: "Automation", 
      icon: Settings, 
      color: "bg-gray-600",
      description: "Automated processes and workflows"
    },
    { 
      id: "campaign", 
      name: "Campaign", 
      icon: Building2, 
      color: "bg-gray-800",
      description: "Marketing and engagement campaigns"
    },
    { 
      id: "leads", 
      name: "Leads", 
      icon: Bot, 
      color: "bg-gray-700",
      description: "Lead generation and qualification"
    },
    { 
      id: "assets", 
      name: "Assets", 
      icon: Building2, 
      color: "bg-gray-600",
      description: "Asset management and tracking"
    }
  ];

  const recommendedProjects = [
    {
      id: "solar",
      title: "Solar Energy Solutions",
      description: "Solar panel efficiency optimization and monitoring",
      image: "/lovable-uploads/photo-1509316975850-ff9c5deb0cd9.jpg",
      type: "Agent",
      category: "Renewable Energy"
    },
    {
      id: "hotel",
      title: "Hotel Energy Management",
      description: "Smart building energy optimization for hospitality",
      image: "/lovable-uploads/photo-1465146344425-f00d5f5c8f07.jpg",
      type: "App",
      category: "Building Management"
    },
    {
      id: "renewal",
      title: "Infrastructure Renewal",
      description: "Predictive maintenance for aging infrastructure",  
      image: "/lovable-uploads/photo-1500673922987-e212871fec22.jpg",
      type: "Automation",
      category: "Maintenance"
    },
    {
      id: "installations",
      title: "Smart Grid Technology",
      description: "Advanced grid management and monitoring solutions",
      image: "/lovable-uploads/photo-1433086966358-54859d0ed716.jpg", 
      type: "Agent",
      category: "Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Schneider Electric</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium">
                SE
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-normal text-gray-900 mb-8">
              What can I help with?
            </h1>
            
            {/* ChatGPT Style Input */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center px-4 py-4">
                  <div className="flex items-center gap-3 mr-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Settings className="w-4 h-4" />
                      <span className="text-sm">Tools</span>
                    </div>
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
              <Bot className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Agents</span>
          </div>
          <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <Building2 className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Assets</span>
          </div>
          <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">Campaigns</span>
          </div>
          <div className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg cursor-pointer">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">Leads</span>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white border border-gray-200">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
