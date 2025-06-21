
import { Code, Building2, Users, Briefcase } from "lucide-react";

interface QuickAccessButtonsProps {
  builderToggle: boolean;
}

export function QuickAccessButtons({ builderToggle }: QuickAccessButtonsProps) {
  const quickAccessItems = [
    ...(builderToggle ? [{ id: 'agents', label: 'Agents', icon: Code, color: 'text-green-600' }] : []),
    { id: 'assets', label: 'Assets', icon: Building2, color: 'text-orange-600' },
    { id: 'campaigns', label: 'Campaigns', icon: Users, color: 'text-purple-600' },
    { id: 'leads', label: 'Leads', icon: Briefcase, color: 'text-red-600' },
  ];

  return (
    <div className={`flex justify-center gap-4 mt-6 ${quickAccessItems.length === 3 ? 'max-w-md mx-auto' : ''}`}>
      {quickAccessItems.map((item) => (
        <button
          key={item.id}
          className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white min-w-[100px]"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <item.icon className={`w-6 h-6 ${item.color}`} />
          </div>
          <span className="text-sm font-medium text-gray-900">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
