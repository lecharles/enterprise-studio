
import { useState } from "react";
import { TopNavbar } from "@/components/TopNavbar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { DashboardView } from "@/components/views/DashboardView";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export function HomePageFinale() {
  const [currentView, setCurrentView] = useState("chat");
  const [businessToggle, setBusinessToggle] = useState(true);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const [campaignLaunched, setCampaignLaunched] = useState(false);

  const renderMainContent = () => {
    switch (currentView) {
      case "chat":
        return <ChatInterface builderToggle={builderToggle} onCampaignLaunch={setCampaignLaunched} />;
      case "dashboard":
        return <DashboardView />;
      default:
        return <ChatInterface builderToggle={builderToggle} onCampaignLaunch={setCampaignLaunched} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar 
          currentView={currentView} 
          onViewChange={setCurrentView}
          builderToggle={builderToggle}
          campaignLaunched={campaignLaunched}
        />
        <SidebarInset className="flex-1">
          <TopNavbar 
            businessToggle={businessToggle}
            builderToggle={builderToggle}
            onBusinessToggle={setBusinessToggle}
            onBuilderToggle={setBuilderToggle}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          {renderMainContent()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
