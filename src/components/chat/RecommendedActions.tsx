
import { Code, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RecommendedActions() {
  const actions = [
    {
      id: "playground",
      label: "Open in Playground",
      icon: Code,
      color: "text-green-600"
    },
    {
      id: "campaign", 
      label: "Prepare Campaign",
      icon: Users,
      color: "text-purple-600"
    },
    {
      id: "analysis",
      label: "Finetune Lead Analysis", 
      icon: Briefcase,
      color: "text-red-600"
    }
  ];

  return (
    <div className="flex gap-3 mt-4">
      {actions.map((action) => (
        <Button
          key={action.id}
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-gray-700 hover:text-gray-900"
        >
          <action.icon className={`w-4 h-4 ${action.color}`} />
          <span className="text-sm font-medium">{action.label}</span>
        </Button>
      ))}
    </div>
  );
}
