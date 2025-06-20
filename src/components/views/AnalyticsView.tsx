
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AnalyticsView() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-gray-400 mt-1">Performance insights and metrics</p>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Analytics dashboard coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}
