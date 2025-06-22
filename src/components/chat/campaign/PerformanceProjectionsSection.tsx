
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Separator } from "@/components/ui/separator";

interface PerformanceProjectionsSectionProps {
  isVisible: boolean;
}

const personaData = [
  { name: "Building Managers", value: 45, color: "#3b82f6" },
  { name: "Sustainability Officers", value: 35, color: "#10b981" },
  { name: "Executive Sponsors", value: 20, color: "#f59e0b" }
];

const chartConfig = {
  buildingManagers: {
    label: "Building Managers",
    color: "#3b82f6",
  },
  sustainabilityOfficers: {
    label: "Sustainability Officers", 
    color: "#10b981",
  },
  executiveSponsors: {
    label: "Executive Sponsors",
    color: "#f59e0b",
  },
};

export function PerformanceProjectionsSection({ isVisible }: PerformanceProjectionsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Separator className="my-6" />
      
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        📈 Campaign Performance Projections
      </h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Engagement Forecast by Channel</h3>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="font-mono text-sm">
            <div className="grid grid-cols-4 gap-4 mb-2 font-bold">
              <div>Channel</div>
              <div>Open Rate</div>
              <div>Click Rate</div>
              <div>Meeting Book Rate</div>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="grid grid-cols-4 gap-4 mb-1">
              <div>Email</div>
              <div>42%</div>
              <div>18%</div>
              <div>8.3%</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-1">
              <div>LinkedIn</div>
              <div>67%</div>
              <div>31%</div>
              <div>12.1%</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-1">
              <div>WhatsApp</div>
              <div>89%</div>
              <div>43%</div>
              <div>15.7%</div>
            </div>
            <div className="grid grid-cols-4 gap-4 font-bold">
              <div>Combined Impact</div>
              <div>━━━</div>
              <div>━━━</div>
              <div>11.2% avg</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          🎯 Projected Pipeline Impact
        </h3>
        <p className="font-medium text-gray-900 mb-4">Week 1-2 Results:</p>

        <ul className="space-y-3 ml-4 mb-6">
          <li className="text-gray-900">
            🏢 <span className="font-bold">143 Meetings Booked</span> (auto-scheduled via Calendly integration)
          </li>
          <li className="text-gray-900">
            💰 <span className="font-bold">€31.2M Pipeline Generated</span>
          </li>
          <li className="text-gray-900">
            📊 <span className="font-bold">847% Campaign ROI</span> (€75K investment → €635K in closed-won within 90 days)
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          📊 Persona Response Distribution
        </h3>
        
        <div className="flex flex-col items-center mb-4">
          <div className="w-72 h-72 mb-4">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={personaData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {personaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          
          <div className="flex flex-col space-y-3 items-center">
            <div className="text-gray-900 flex items-center gap-3 text-sm">
              <div className="w-4 h-4 bg-blue-500 rounded flex-shrink-0"></div>
              <div>
                <strong>Building Managers:</strong> 45% of responses
              </div>
            </div>
            <div className="text-gray-900 flex items-center gap-3 text-sm">
              <div className="w-4 h-4 bg-green-500 rounded flex-shrink-0"></div>
              <div>
                <strong>Sustainability Officers:</strong> 35% of responses
              </div>
            </div>
            <div className="text-gray-900 flex items-center gap-3 text-sm">
              <div className="w-4 h-4 bg-yellow-500 rounded flex-shrink-0"></div>
              <div>
                <strong>Executive Sponsors:</strong> 20% of responses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
