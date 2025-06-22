
import { useState } from "react";
import { TopNavbar } from "@/components/TopNavbar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChatInterface } from "@/components/ChatInterface";
import { DashboardView } from "@/components/views/DashboardView";
import { SidebarProvider, SidebarInset, useSidebar } from "@/components/ui/sidebar";

const MainLayout = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [businessToggle, setBusinessToggle] = useState(true);
  const [builderToggle, setBuilderToggle] = useState(true);
  const [selectedModel, setSelectedModel] = useState("o3");
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const renderMainContent = () => {
    switch (currentView) {
      case "chat":
        return <ChatInterface builderToggle={builderToggle} />;
      case "dashboard":
        return <DashboardView />;
      default:
        return <ChatInterface builderToggle={builderToggle} />;
    }
  };

  // Calculate dynamic styles based on sidebar state
  const sidebarWidth = isCollapsed ? '3rem' : '16rem';
  const headerStyle = {
    left: sidebarWidth,
    width: `calc(100% - ${sidebarWidth})`,
  };

  return (
    <div className="min-h-screen flex w-full relative">
      <AppSidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        builderToggle={builderToggle}
      />
      
      {/* Fixed Header */}
      <div 
        className="fixed top-0 z-30 bg-white border-b border-gray-200 transition-all duration-200"
        style={headerStyle}
      >
        <TopNavbar 
          businessToggle={businessToggle}
          builderToggle={builderToggle}
          onBusinessToggle={setBusinessToggle}
          onBuilderToggle={setBuilderToggle}
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />
      </div>

      {/* Main Content Area with padding for fixed elements */}
      <div 
        className="flex-1 transition-all duration-200"
        style={{ 
          marginLeft: sidebarWidth,
          paddingTop: '4rem', // Space for fixed header
          paddingBottom: '5rem' // Space for fixed chat input
        }}
      >
        <div className="h-full overflow-y-auto">
          {renderMainContent()}
        </div>
      </div>

      {/* Fixed Chat Input at Bottom */}
      <div 
        className="fixed bottom-0 z-30 bg-white border-t border-gray-200 transition-all duration-200"
        style={headerStyle}
      >
        <div className="px-6 py-4">
          {/* Chat input will be rendered by ChatInterface when needed */}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <SidebarProvider>
      <MainLayout />
    </SidebarProvider>
  );
};

export default Index;
