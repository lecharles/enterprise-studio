
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PlatformBuilderSidebar } from "@/components/platform/PlatformBuilderSidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { AgentsView } from "@/components/views/AgentsView";

export function PlatformBuilderDemoView() {
  const [businessToggle, setBusinessToggle] = useState(false);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const [currentView, setCurrentView] = useState("agents");

  const renderMainContent = () => {
    switch (currentView) {
      case "agents":
        return <AgentsView />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">{currentView}</h1>
            <p className="text-gray-600 mt-2">Content for {currentView} will be implemented here.</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <PlatformBuilderSidebar 
          currentView={currentView}
          onViewChange={setCurrentView}
        />
        <div className="flex-1 flex flex-col">
          <TopNavbar 
            businessToggle={businessToggle}
            builderToggle={builderToggle}
            onBusinessToggle={setBusinessToggle}
            onBuilderToggle={setBuilderToggle}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          <main className="flex-1">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
