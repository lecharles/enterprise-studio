
import { Plus, Search, Code, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlatformSidebar() {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/767aed11-ad2d-4763-b5d1-76d73bc1c047.png" 
              alt="Schneider Studio"
              className="w-6 h-6"
            />
            <span className="font-medium text-gray-900">Schneider Studio</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>ChatGPT</span>
          <span className="text-gray-400">o3</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <Button className="w-full justify-start gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
          <Plus className="w-4 h-4" />
          New chat
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-2">
        <div className="space-y-1 mb-4">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <Search className="w-4 h-4" />
            Search chats
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Library
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
            </svg>
            Platform
          </button>
        </div>

        <div className="space-y-1 mb-4">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <Code className="w-4 h-4 text-green-600" />
            Agents
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </button>
        </div>

        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
          <Plus className="w-4 h-4" />
          New project
        </button>

        {/* Chat History */}
        <div className="mt-6">
          <div className="text-xs text-gray-500 px-3 py-1 mb-2">Chats</div>
          <div className="space-y-1">
            {[
              "Schneider Electric Energy So...",
              "Building Automation Systems",
              "Solar Panel Optimization",
              "Industrial IoT Implementation",
              "Smart Grid Technology",
              "Energy Efficiency Analysis",
              "Electrical Safety Protocols",
              "Renewable Energy Integration",
              "Power Management Systems",
              "Sustainability Reporting"
            ].map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg truncate"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
