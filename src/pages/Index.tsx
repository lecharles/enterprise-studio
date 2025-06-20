
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardView } from "@/components/views/DashboardView";
import { AgentsView } from "@/components/views/AgentsView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { ProjectView } from "@/components/views/ProjectView";
import { NewProjectView } from "@/components/views/NewProjectView";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [currentView, setCurrentView] = useState("chat");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />;
      case "chat":
        return <ChatInterface />;
      case "agents":
        return <AgentsView />;
      case "analytics":
        return <AnalyticsView />;
      case "new-project":
        return <NewProjectView />;
      default:
        if (currentView.startsWith("project-")) {
          const projectId = currentView.replace("project-", "");
          return <ProjectView projectId={projectId} />;
        }
        return <ChatInterface />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1 bg-white">
          {renderView()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
