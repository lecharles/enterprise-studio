
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, MoreHorizontal, Logs } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export function AgentsView() {
  const [showLogs, setShowLogs] = useState(false);

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Sub-header */}
      <div className="px-6 py-2 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2 text-gray-600 hover:bg-gray-50 h-8 px-2 text-xs border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
              <BookOpen className="w-3 h-3" />
              <span>Learn more</span>
            </Button>
            <Button variant="outline" size="sm" className="px-1.5 hover:bg-gray-50 h-8 w-8 border-0" style={{ backgroundColor: 'rgba(236,236,241,255)' }}>
              <MoreHorizontal className="w-3 h-3 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content area with resizable panels */}
      <div className="flex-1 relative">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel */}
          <ResizablePanel defaultSize={33} minSize={20} maxSize={50}>
            <div className="h-full bg-gray-50 p-4">
              {/* Left panel content placeholder */}
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {!showLogs ? (
            /* 2-panel state: Right panel with Logs button */
            <ResizablePanel defaultSize={67}>
              <div className="h-full bg-white relative">
                {/* Logs button in top right */}
                <div className="absolute top-4 right-4 z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLogs(true)}
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 h-8 px-3 text-xs border-0"
                    style={{ backgroundColor: 'rgba(236,236,241,255)' }}
                  >
                    <Logs className="w-3 h-3" />
                    <span>Logs</span>
                  </Button>
                </div>
                {/* Right panel content placeholder */}
                <div className="h-full p-4">
                </div>
              </div>
            </ResizablePanel>
          ) : (
            /* 3-panel state: Middle and Right panels */
            <>
              {/* Middle Panel */}
              <ResizablePanel defaultSize={37} minSize={25} maxSize={50}>
                <div className="h-full bg-white border-r border-gray-200 p-4">
                  {/* Middle panel content placeholder */}
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Right Panel (Logs) */}
              <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
                <div className="h-full bg-gray-50 relative">
                  {/* Hide logs button in top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowLogs(false)}
                      className="flex items-center gap-2 text-gray-600 hover:bg-gray-200 h-8 px-3 text-xs border-0"
                      style={{ backgroundColor: 'rgba(200,200,205,255)' }}
                    >
                      <Logs className="w-3 h-3" />
                      <span>Hide logs</span>
                    </Button>
                  </div>
                  {/* Logs panel content placeholder */}
                  <div className="h-full p-4">
                  </div>
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
