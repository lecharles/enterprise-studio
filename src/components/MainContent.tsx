
import { DashboardView } from "@/components/views/DashboardView";
import { AgentsView } from "@/components/views/AgentsView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { ProjectView } from "@/components/views/ProjectView";
import { NewProjectView } from "@/components/views/NewProjectView";

interface MainContentProps {
  currentView: string;
}

export function MainContent({ currentView }: MainContentProps) {
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
    <main className="flex-1 bg-[#0f0f0f] overflow-auto">
      {renderView()}
    </main>
  );
}
