
import { Button } from "@/components/ui/button";
import { BookOpen, MoreHorizontal } from "lucide-react";

export function AgentsView() {
  return (
    <div className="h-full bg-white">
      {/* Sub-header */}
      <div className="px-6 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-gray-600 border-gray-300 hover:bg-gray-50 h-8 px-2 text-xs">
              <BookOpen className="w-3 h-3" />
              <span>Learn more</span>
            </Button>
            <Button variant="outline" size="sm" className="px-1.5 border-gray-300 hover:bg-gray-50 h-8 w-8">
              <MoreHorizontal className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
