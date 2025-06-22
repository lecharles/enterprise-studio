
interface CampaignIntroSectionProps {
  isVisible: boolean;
}

export function CampaignIntroSection({ isVisible }: CampaignIntroSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🤖 AI Campaign Preparation Assistant Activated
      </h2>
      
      <p className="text-gray-900 mb-6">
        I'll now prepare your multi-channel campaign based on the analysis we just completed. Here's what I'll do for you:
      </p>

      <ul className="space-y-3 ml-4 mb-6">
        <li className="text-gray-900">
          📋 <span className="font-bold">Generate persona-specific content</span> for each of your 3 key segments with tailored messaging angles
        </li>
        <li className="text-gray-900">
          ✍️ <span className="font-bold">Create ready-to-deploy copy</span> for Email, WhatsApp, and LinkedIn with A/B testing variants
        </li>
        <li className="text-gray-900">
          📊 <span className="font-bold">Calculate performance projections</span> based on your industry benchmarks and historical data
        </li>
        <li className="text-gray-900">
          💰 <span className="font-bold">Show pipeline impact estimates</span> with detailed ROI calculations and conversion forecasts
        </li>
        <li className="text-gray-900">
          🚀 <span className="font-bold">Provide instant launch options</span> with full platform integrations ready to execute
        </li>
      </ul>

      <p className="text-gray-900 mb-4">
        💡 At any point, you can click the [?] icons to see how calculations were made, which data sources were used, or why specific recommendations were chosen.
      </p>

      <p className="text-gray-900 font-medium">
        Let me build your campaign now...
      </p>
    </div>
  );
}
