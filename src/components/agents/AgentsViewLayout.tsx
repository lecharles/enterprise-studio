
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, MoreHorizontal, Logs } from "lucide-react";
import { Database, Trash2 } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { PlatformBuilderChatbox } from "@/components/agents/PlatformBuilderChatbox";
import { ConversationSimulation } from "@/components/agents/ConversationSimulation";
import { LogsPanel } from "@/components/agents/LogsPanel";
import { BatchTestModal } from "@/components/agents/BatchTestModal";

interface AgentsViewLayoutProps {
  leftPanelContent: React.ReactNode;
  middlePanelContent?: React.ReactNode;
  rightPanelContent?: React.ReactNode;
  onTriggerEvaluations?: () => void;
}

export function AgentsViewLayout({ leftPanelContent, middlePanelContent, rightPanelContent, onTriggerEvaluations }: AgentsViewLayoutProps) {
  const [showLogs, setShowLogs] = useState(false);
  const [showBatchTestModal, setShowBatchTestModal] = useState(false);

  const onSendMessage = (message: string) => {
    console.log("Sending message:", message);
  };

  const onShowBatchTest = () => {
    setShowBatchTestModal(true);
  };

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
            {leftPanelContent}
          </ResizablePanel>

          <ResizableHandle withHandle />

          {!showLogs ? (
            /* 2-panel state: Right panel with buttons and thread info */
            <ResizablePanel defaultSize={67}>
              <div className="h-full bg-white relative flex flex-col">
                {/* Thread info in top left for 2-panel view - aligned with buttons */}
                <div className="absolute top-4 left-4 z-10 flex items-center h-8">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-black font-bold uppercase tracking-wide">THREAD</span>
                    <span className="text-gray-400 font-mono">thread_c3ElCM6pvIl7cpoDCAjKIEeU</span>
                  </div>
                </div>
                {/* Buttons in top right */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-black font-bold">1975</span>
                    <span className="text-gray-500">tokens</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-2 text-xs border-0 bg-transparent"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-2 text-xs border-0 bg-transparent"
                  >
                    <Database className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowLogs(true)}
                    className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-3 text-xs border-0 bg-transparent"
                  >
                    <Logs className="w-3 h-3" />
                    <span>Logs</span>
                  </Button>
                </div>
                
                {/* Content area that fills space above chatbox */}
                <div className="flex-1 overflow-hidden pt-16 pb-44">
                  <ConversationSimulation isVisible={true} />
                </div>
                
                {/* Chatbox positioned 81px lower than Functions level (21px + 60px) */}
                <div className="absolute left-6 right-6 z-20 bg-white" style={{ top: 'calc(65% + 81px)' }}>
                  <PlatformBuilderChatbox onSendMessage={onSendMessage} onShowBatchTest={onShowBatchTest} />
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Platform messages can be viewed by anyone at your organization using the API.
                  </p>
                </div>
              </div>
            </ResizablePanel>
          ) : (
            /* 3-panel state: Middle and Right panels */
            <>
              {/* Middle Panel */}
              <ResizablePanel defaultSize={37} minSize={25} maxSize={50}>
                <div className="h-full bg-white relative flex flex-col">
                  {/* Thread info and buttons in middle panel when logs are shown */}
                  <div className="flex-shrink-0 p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-black font-bold uppercase tracking-wide">THREAD</span>
                        <span className="text-gray-400 font-mono">thread_c3ElCM6pvIl7cpoDCAjKIEeU</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs">
                          <span className="text-black font-bold">1975</span>
                          <span className="text-gray-500">tokens</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-2 text-xs border-0 bg-transparent"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-2 text-xs border-0 bg-transparent"
                        >
                          <Database className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content area that fills space above chatbox */}
                  <div className="flex-1 overflow-hidden pb-44">
                    <ConversationSimulation isVisible={true} />
                  </div>
                  
                  {/* Chatbox positioned 81px lower than Functions level (21px + 60px) */}
                  <div className="absolute left-6 right-6 z-20 bg-white" style={{ top: 'calc(65% + 81px)' }}>
                    <PlatformBuilderChatbox onSendMessage={onSendMessage} onShowBatchTest={onShowBatchTest} />
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Platform messages can be viewed by anyone at your organization using the API.
                    </p>
                  </div>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* Right Panel (Logs) */}
              <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
                <div className="h-full bg-white relative">
                  {/* Hide logs button in top right */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowLogs(false)}
                      className="flex items-center gap-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 h-8 px-3 text-xs border-0 bg-transparent"
                    >
                      <Logs className="w-3 h-3" />
                      <span>Hide logs</span>
                    </Button>
                  </div>
                  {/* Logs panel content */}
                  <LogsPanel />
                </div>
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>

      <BatchTestModal
        isOpen={showBatchTestModal}
        onClose={() => setShowBatchTestModal(false)}
        onTriggerEvaluations={onTriggerEvaluations}
      />
    </div>
  );
}
