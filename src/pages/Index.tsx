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
  const [campaignLaunched, setCampaignLaunched] = useState(false);
  const [showAnalyticsBadge, setShowAnalyticsBadge] = useState(false);

  const handleCampaignLaunch = (launched: boolean) => {
    console.log("Campaign launch triggered, setting launched state and analytics badge timer");
    setCampaignLaunched(launched);
    
    if (launched) {
      // Show analytics badge after 3 seconds
      setTimeout(() => {
        console.log("Showing analytics badge after 3 seconds");
        setShowAnalyticsBadge(true);
      }, 3000);
    }
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "chat":
        return <ChatInterface builderToggle={builderToggle} onCampaignLaunch={handleCampaignLaunch} />;
      case "dashboard":
        return <DashboardView />;
      default:
        return <ChatInterface builderToggle={builderToggle} onCampaignLaunch={handleCampaignLaunch} />;
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
          showAnalyticsBadge={showAnalyticsBadge}
          analyticsBadgeNumber={3}
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
};

export default Index;
