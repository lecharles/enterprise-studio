
import { AgentsViewLayout } from "@/components/agents/AgentsViewLayout";
import { AgentConfigPanel } from "@/components/platform/AgentConfigPanel";

interface AgentsViewProps {
  onStartBatchTest?: () => void;
}

export function AgentsView({ onStartBatchTest }: AgentsViewProps) {
  return (
    <AgentsViewLayout 
      leftPanelContent={<AgentConfigPanel />}
      onStartBatchTest={onStartBatchTest}
    />
  );
}
