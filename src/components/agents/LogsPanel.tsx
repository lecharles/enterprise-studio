
import { ChevronRight } from "lucide-react";

export function LogsPanel() {
  return (
    <div className="p-4 pt-16 h-full overflow-y-auto">
      <div className="space-y-4">
        {/* Create a thread */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <ChevronRight className="w-4 h-4" />
            <span>Create a thread</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 font-medium text-sm">POST</span>
            <span className="text-gray-500 text-sm ml-2">/v1/threads</span>
          </div>
        </div>

        {/* Add a message */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <ChevronRight className="w-4 h-4" />
            <span>Add a message</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 font-medium text-sm">POST</span>
            <span className="text-gray-500 text-sm ml-2">/v1/threads/thread_E1b5WaQM4hg2xosbEFUvQv4U/messages</span>
          </div>
        </div>

        {/* Run the thread */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <ChevronRight className="w-4 h-4" />
            <span>Run the thread</span>
            <span className="text-gray-600 font-medium">439 events</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 font-medium text-sm">POST</span>
            <span className="text-gray-500 text-sm ml-2">/v1/threads/thread_E1b5WaQM4hg2xosbEFUvQv4U/runs</span>
          </div>
        </div>

        {/* Run completed */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-800">Run completed</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-900">1818</span>
              <span className="text-sm text-gray-500">tokens</span>
              <div className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center ml-1">
                <span className="text-xs text-gray-600">i</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
