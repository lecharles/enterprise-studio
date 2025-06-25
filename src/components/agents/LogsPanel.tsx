
import React from "react";
import { Button } from "@/components/ui/button";

interface LogsPanelProps {
  onHideLogs: () => void;
}

export function LogsPanel({ onHideLogs }: LogsPanelProps) {
  return (
    <div className="h-full bg-white relative">
      {/* Header with Hide logs button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h3 className="text-sm font-bold text-black tracking-wide">LOGS</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onHideLogs}
          className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 h-8 px-3 text-xs border border-gray-300 rounded"
        >
          <span>Hide logs</span>
          <div className="w-4 h-4 border border-gray-400 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
          </div>
        </Button>
      </div>

      {/* Logs content */}
      <div className="p-4 space-y-4">
        {/* Create a thread */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <span className="text-sm mr-2">▶</span>
            <span className="text-sm font-medium">Create a thread</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 text-sm font-medium">POST</span>
            <span className="text-gray-500 text-sm ml-2 font-mono">/v1/threads</span>
          </div>
        </div>

        {/* Add a message */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <span className="text-sm mr-2">▶</span>
            <span className="text-sm font-medium">Add a message</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 text-sm font-medium">POST</span>
            <span className="text-gray-500 text-sm ml-2 font-mono">/v1/threads/thread_E1b5WaQM4hg2xosbEFUvQv4U/messages</span>
          </div>
        </div>

        {/* Run the thread */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <span className="text-sm mr-2">▶</span>
            <span className="text-sm font-medium">Run the thread</span>
            <span className="text-sm text-gray-500 ml-2">439 events</span>
          </div>
          <div className="ml-6">
            <span className="text-blue-600 text-sm font-medium">POST</span>
            <span className="text-gray-500 text-sm ml-2 font-mono">/v1/threads/thread_E1b5WaQM4hg2xosbEFUvQv4U/runs</span>
          </div>
        </div>

        {/* Run completed */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Run completed</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-black">1818</span>
              <span className="text-sm text-gray-500">tokens</span>
              <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center ml-1">
                <span className="text-xs text-gray-600">i</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
