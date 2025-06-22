
import { Button } from "@/components/ui/button";

interface LeftSidebarProps {
  show: boolean;
}

export function LeftSidebar({ show }: LeftSidebarProps) {
  if (!show) return null;

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="flex-1 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start p-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          📝 New chat
        </Button>
      </div>
    </div>
  );
}
