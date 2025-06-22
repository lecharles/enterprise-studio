
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
          {/* Header that adjusts to sidebar state */}
          <div className="bg-white border-b border-gray-100">
            <TopNavbar 
              businessToggle={businessToggle}
              builderToggle={builderToggle}
              onBusinessToggle={setBusinessToggle}
              onBuilderToggle={setBuilderToggle}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
            />
          </div>
          {/* Main content */}
          <div className="flex-1 overflow-hidden">
            {renderMainContent()}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
