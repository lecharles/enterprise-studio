
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectViewProps {
  projectId: string;
}

export function ProjectView({ projectId }: ProjectViewProps) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Project: {projectId}</h1>
        <p className="text-gray-400 mt-1">Project configuration and management</p>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Project details for {projectId}</p>
        </CardContent>
      </Card>
    </div>
  );
}
