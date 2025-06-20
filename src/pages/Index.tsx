
import { useState } from "react";
import { DashboardView } from "@/components/views/DashboardView";
import { AgentsView } from "@/components/views/AgentsView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { ProjectView } from "@/components/views/ProjectView";
import { NewProjectView } from "@/components/views/NewProjectView";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />;
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
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderView()}
    </div>
  );
};

export default Index;
