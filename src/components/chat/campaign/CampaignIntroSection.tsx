
import { HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface CampaignIntroSectionProps {
  isVisible: boolean;
}

export function CampaignIntroSection({ isVisible }: CampaignIntroSectionProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [showFinalParagraph, setShowFinalParagraph] = useState(false);

  const bulletPoints = [
    "📋 Generate persona-specific content for each of your 3 key segments with tailored messaging angles",
    "✍️ Create ready-to-deploy copy for Email, WhatsApp, and LinkedIn with A/B testing variants",
    "📊 Calculate performance projections based on your industry benchmarks and historical data",
    "💰 Show pipeline impact estimates with detailed ROI calculations and conversion forecasts",
    "🚀 Provide instant launch options with full platform integrations ready to execute"
  ];

  useEffect(() => {
    if (!isVisible) {
      setVisibleItems([]);
      setShowFinalParagraph(false);
      return;
    }

    // Show bullet points progressively
    bulletPoints.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, (index + 1) * 800); // 800ms delay between each bullet point
    });

    // Show final paragraph after all bullet points
    setTimeout(() => {
      setShowFinalParagraph(true);
    }, bulletPoints.length * 800 + 800);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🤖 Campaign Preparation Agent Activation
      </h2>
      
      <p className="text-gray-900 mb-6">
        I'll now prepare your multi-channel campaign based on the analysis we just completed. Here's what I'll do for you:
      </p>

      <ul className="space-y-3 ml-4 mb-6">
        {bulletPoints.map((bullet, index) => (
          <li 
            key={index}
            className={`text-gray-900 transition-opacity duration-300 ${
              visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {bullet}
          </li>
        ))}
      </ul>

      {showFinalParagraph && (
        <p className="text-gray-900 mb-6 transition-opacity duration-300">
          💡 At any point, you can click the (?) icon to see how calculations were made, which data sources were used, or why specific recommendations were chosen.
        </p>
      )}

      <div className="border-t border-gray-200 my-6"></div>
    </div>
  );
}
