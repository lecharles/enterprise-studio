
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PerformanceProjectionsSectionProps {
  isVisible: boolean;
}

const personaData = [
  { name: "Building Managers", value: 45, fill: "#3b82f6" },
  { name: "Sustainability Officers", value: 35, fill: "#10b981" },
  { name: "Executive Sponsors", value: 20, fill: "#f59e0b" },
];

const chartConfig = {
  "Building Managers": {
    label: "Building Managers",
    color: "#3b82f6",
  },
  "Sustainability Officers": {
    label: "Sustainability Officers", 
    color: "#10b981",
  },
  "Executive Sponsors": {
    label: "Executive Sponsors",
    color: "#f59e0b",
  },
};

export function PerformanceProjectionsSection({ isVisible }: PerformanceProjectionsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Separator className="my-8" />
      
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
        
        <div className="flex items-center gap-8">
          <div className="w-64 h-64">
            <ChartContainer config={chartConfig}>
              <PieChart>
                <Pie
                  data={personaData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {personaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </div>
          
          <div className="flex-1">
            <ul className="space-y-2">
              <li className="text-gray-900 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <strong>Building Managers:</strong> 45% of responses
              </li>
              <li className="text-gray-900 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <strong>Sustainability Officers:</strong> 35% of responses
              </li>
              <li className="text-gray-900 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <strong>Executive Sponsors:</strong> 20% of responses
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
