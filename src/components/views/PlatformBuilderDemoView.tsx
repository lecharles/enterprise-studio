
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNavbar } from "@/components/TopNavbar";

export function PlatformBuilderDemoView() {
  const [businessToggle, setBusinessToggle] = useState(false);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const [currentView, setCurrentView] = useState("platform");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar 
          currentView={currentView}
          onViewChange={setCurrentView}
          builderToggle={builderToggle}
        />
        <div className="flex-1 flex flex-col">
          <div className="bg-gray-50">
            <TopNavbar 
              businessToggle={businessToggle}
              builderToggle={builderToggle}
              onBusinessToggle={setBusinessToggle}
              onBuilderToggle={setBuilderToggle}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
            />
          </div>
          <main className="flex-1 bg-white">
            {/* Empty main content area - will be populated later */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
