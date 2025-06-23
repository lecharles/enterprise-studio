
import { PlatformSidebar } from "./PlatformSidebar";
import { AgentConfigPanel } from "./AgentConfigPanel";

export function CampaignAgentView() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PlatformSidebar />
      <AgentConfigPanel />
    </div>
  );
}
