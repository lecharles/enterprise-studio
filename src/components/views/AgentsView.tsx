
import { Button } from "@/components/ui/button";
import { BookOpen, MoreHorizontal } from "lucide-react";

export function AgentsView() {
  return (
    <div className="h-full bg-white">
      {/* Sub-header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-50">
              <BookOpen className="w-4 h-4" />
              <span>Learn more</span>
            </Button>
            <Button variant="outline" size="sm" className="px-2 border-gray-300 hover:bg-gray-50">
              <MoreHorizontal className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
