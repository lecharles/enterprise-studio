
import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { PlatformBuilderSidebar } from "@/components/platform/PlatformBuilderSidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { AgentsView } from "@/components/views/AgentsView";

export function PlatformBuilderDemoView() {
  const [businessToggle, setBusinessToggle] = useState(false);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const [currentView, setCurrentView] = useState("agents");
  const [evaluationsCounter, setEvaluationsCounter] = useState(0);
  const [isCounterRunning, setIsCounterRunning] = useState(false);

  const handleStartBatchTest = () => {
    console.log("Starting batch test counter...");
    setIsCounterRunning(true);
    setEvaluationsCounter(0);
    
    // Start counter after 2-3 seconds delay
    setTimeout(() => {
      const counterValues = [3, 10, 21, 47, 78, 99, 100];
      let currentIndex = 0;
      
      const updateCounter = () => {
        if (currentIndex < counterValues.length) {
          setEvaluationsCounter(counterValues[currentIndex]);
          currentIndex++;
          
          if (currentIndex < counterValues.length) {
            // Random interval between updates (500ms to 1500ms)
            const delay = Math.random() * 1000 + 500;
            setTimeout(updateCounter, delay);
          } else {
            setIsCounterRunning(false);
          }
        }
      };
      
      updateCounter();
    }, 2500); // 2.5 second initial delay
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "agents":
        return <AgentsView onStartBatchTest={handleStartBatchTest} />;
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">{currentView}</h1>
            <p className="text-gray-600 mt-2">Content for {currentView} will be implemented here.</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <PlatformBuilderSidebar 
          currentView={currentView}
          onViewChange={setCurrentView}
          evaluationsCounter={evaluationsCounter}
        />
        <div className="flex-1 flex flex-col">
          <TopNavbar 
            businessToggle={businessToggle}
            builderToggle={builderToggle}
            onBusinessToggle={setBusinessToggle}
            onBuilderToggle={setBuilderToggle}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          <main className="flex-1">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
