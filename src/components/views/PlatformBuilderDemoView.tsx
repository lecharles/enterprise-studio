
import { PlatformSidebar } from "@/components/platform/PlatformSidebar";
import { AgentConfigPanel } from "@/components/platform/AgentConfigPanel";

export function PlatformBuilderDemoView() {
  return (
    <div className="h-screen bg-white flex">
      <PlatformSidebar />
      <div className="flex-1">
        <AgentConfigPanel />
      </div>
    </div>
  );
}
