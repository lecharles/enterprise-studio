
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Zap, 
  Settings,
  Building2,
  Plus,
  Search,
  Filter
} from "lucide-react";

export function DashboardView() {
  const projectTypes = [
    { 
      id: "agent", 
      name: "Agent", 
      icon: Bot, 
      color: "bg-blue-500", 
      description: "AI-powered customer service and technical support"
    },
    { 
      id: "app", 
      name: "App", 
      icon: Zap, 
      color: "bg-purple-500",
      description: "Custom applications for specific workflows"
    },
    { 
      id: "automation", 
      name: "Automation", 
      icon: Settings, 
      color: "bg-cyan-500",
      description: "Automated processes and workflows"
    },
    { 
      id: "campaign", 
      name: "Campaign", 
      icon: Building2, 
      color: "bg-orange-500",
      description: "Marketing and engagement campaigns"
    },
    { 
      id: "leads", 
      name: "Leads", 
      icon: Bot, 
      color: "bg-green-500",
      description: "Lead generation and qualification"
    },
    { 
      id: "assets", 
      name: "Assets", 
      icon: Building2, 
      color: "bg-gray-500",
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
      title: "Electrical Installations",
      description: "Installation planning and compliance checking",
      image: "/lovable-uploads/photo-1433086966358-54859d0ed716.jpg", 
      type: "Agent",
      category: "Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
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
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                SE
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-normal text-gray-900 mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium">
                schneider studio
              </span>
            </h1>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  placeholder="Share your ideas or issues"
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* My Projects Section */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">My Projects</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <Zap className="w-8 h-8 text-purple-600" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Start your first project</h3>
              <p className="text-gray-600 mb-6">It's lonely in here. Build your first project below. Learn more</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Add a project
              </Button>
            </div>
          </div>
        </div>

        {/* Create a New Project Section */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Create a New Project</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-md transition-shadow cursor-pointer bg-white border border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{type.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recommended Projects to build for Schneider Electric</h2>
            <Button variant="outline" size="sm" className="text-gray-600 border-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
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
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
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
