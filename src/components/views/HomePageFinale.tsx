
import { useState, useEffect } from "react";
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
  const [campaignLaunched, setCampaignLaunched] = useState(true); // Always show green indicator
  const [showAnalyticsBadge, setShowAnalyticsBadge] = useState(false);

  useEffect(() => {
    // Show analytics badge after 5 seconds from page load
    const timer = setTimeout(() => {
      console.log("Showing analytics badge after 5 seconds on home-page-finale");
      setShowAnalyticsBadge(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCampaignLaunch = () => {
    // This is just for maintaining the interface, no specific action needed
    console.log("Campaign launch interaction on home-page-finale");
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
