
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Settings, 
  Mic, 
  Send, 
  BarChart3,
  Code,
  Film,
  Zap,
  Users,
  Bot
} from "lucide-react";

export function ChatInterface() {
  const quickAccessItems = [
    { id: "agents", title: "Agents", icon: Code, color: "text-green-600" },
    { id: "analytics", title: "Analytics", icon: BarChart3, color: "text-blue-600" },
    { id: "automation", title: "Automation", icon: Zap, color: "text-yellow-600" },
    { id: "campaigns", title: "Campaigns", icon: Users, color: "text-purple-600" },
    { id: "leads", title: "Leads", icon: Bot, color: "text-gray-600" },
  ];

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

  return (
    <div className="flex-1 flex flex-col bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600">Schneider Studio o3</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <BarChart3 className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">SE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Centered Chat Interface */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          {/* Centered Main Title and Input */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-normal text-gray-900 mb-8">
              What's on the agenda today?
            </h1>
            
            {/* ChatGPT Style Input */}
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-white border border-gray-300 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center px-4 py-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full p-2 mr-2"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full px-3 py-1 mr-3"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">Tools</span>
                  </Button>
                  
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
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Section */}
          <div className="mb-16">
            <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
              {quickAccessItems.map((item) => (
                <button
                  key={item.id}
                  className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  <item.icon className={`w-6 h-6 mb-2 ${item.color}`} />
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section - Bottom of page */}
      <div className="border-t border-gray-100 bg-gray-50/50 px-6 py-8 mt-auto">
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
