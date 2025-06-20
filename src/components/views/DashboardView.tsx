
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Users, 
  BarChart3, 
  Clock,
  TrendingUp,
  Zap,
  Plus,
  ArrowRight
} from "lucide-react";

export function DashboardView() {
  const stats = [
    { 
      title: "Active AI Agents", 
      value: "12", 
      change: "+3 this month", 
      icon: Bot,
      color: "text-blue-400"
    },
    { 
      title: "Total Interactions", 
      value: "8,424", 
      change: "+12% from last week", 
      icon: Users,
      color: "text-green-400"
    },
    { 
      title: "Resolution Rate", 
      value: "94.2%", 
      change: "+2.1% improvement", 
      icon: TrendingUp,
      color: "text-purple-400"
    },
    { 
      title: "Avg Response Time", 
      value: "2.3s", 
      change: "-0.5s faster", 
      icon: Clock,
      color: "text-orange-400"
    }
  ];

  const recentProjects = [
    {
      name: "Schneider Concierge Agent",
      type: "AI Agent",
      status: "Active",
      interactions: "2,341",
      lastUpdated: "2 hours ago"
    },
    {
      name: "Energy Efficiency Advisor",
      type: "AI Agent", 
      status: "Active",
      interactions: "1,892",
      lastUpdated: "5 hours ago"
    },
    {
      name: "Maintenance Assistant",
      type: "Application",
      status: "Testing",
      interactions: "456",
      lastUpdated: "1 day ago"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back to Schneider AI Studio</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create New Project
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-800 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <Card className="lg:col-span-2 bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Projects</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{project.name}</h4>
                      <p className="text-gray-400 text-sm">{project.type} • {project.interactions} interactions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "Active" 
                        ? "bg-green-900 text-green-300" 
                        : "bg-yellow-900 text-yellow-300"
                    }`}>
                      {project.status}
                    </span>
                    <p className="text-gray-400 text-xs mt-1">{project.lastUpdated}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
              <Bot className="w-4 h-4 mr-3" />
              Create AI Agent
            </Button>
            <Button variant="outline" className="w-full justify-start border-gray-700 text-white hover:bg-gray-800">
              <BarChart3 className="w-4 h-4 mr-3" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start border-gray-700 text-white hover:bg-gray-800">
              <Users className="w-4 h-4 mr-3" />
              Manage Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
