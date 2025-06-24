
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PlatformBuilderSidebar } from "@/components/platform/PlatformBuilderSidebar";
import { TopNavbar } from "@/components/TopNavbar";

export function PlatformBuilderDemoView() {
  const [businessToggle, setBusinessToggle] = useState(false);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const [currentView, setCurrentView] = useState("platform");

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
          <main className="flex-1 bg-white">
            {/* Empty main content area - will be populated later */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
