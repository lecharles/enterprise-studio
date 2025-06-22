
import { useState } from "react";
import { TopNavbar } from "@/components/TopNavbar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { DashboardView } from "@/components/views/DashboardView";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [businessToggle, setBusinessToggle] = useState(true);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");

  const renderMainContent = () => {
    switch (currentView) {
      case "chat":
        return <ChatInterface builderToggle={builderToggle} />;
      case "dashboard":
        return <DashboardView />;
      default:
        return <ChatInterface builderToggle={builderToggle} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar 
          currentView={currentView} 
          onViewChange={setCurrentView}
          builderToggle={builderToggle}
        />
        <SidebarInset className="flex-1 flex flex-col">
          {/* Fixed TopNavbar with dynamic width */}
          <div className="fixed top-0 z-50 bg-white border-b border-gray-100 left-0 right-0 peer-data-[state=expanded]:left-64 peer-data-[state=collapsed]:left-12 transition-[left] duration-200 ease-linear">
            <TopNavbar 
              businessToggle={businessToggle}
              builderToggle={builderToggle}
              onBusinessToggle={setBusinessToggle}
              onBuilderToggle={setBuilderToggle}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
            />
          </div>
          {/* Main content with top padding */}
          <div className="flex-1 pt-16 overflow-hidden">
            {renderMainContent()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
