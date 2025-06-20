
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MainContent } from "@/components/MainContent";
import { TopNavbar } from "@/components/TopNavbar";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
          <div className="flex flex-1 flex-col">
            <TopNavbar />
            <MainContent currentView={currentView} />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
