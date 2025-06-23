
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CampaignAgentView } from "@/components/platform/CampaignAgentView";

const Platform = () => {
  const { agentType } = useParams();

  const renderAgentView = () => {
    switch (agentType) {
      case "campaign-agent":
        return <CampaignAgentView />;
      case "builder":
        return <CampaignAgentView />;
      default:
        return <CampaignAgentView />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderAgentView()}
    </div>
  );
};

export default Platform;
