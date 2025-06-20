
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NewProjectView() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Create New Project</h1>
        <p className="text-gray-400 mt-1">Start building your next AI solution</p>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Project creation wizard coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
