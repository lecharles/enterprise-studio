
import { Users, Code, Film } from "lucide-react";

interface LaunchOptionsSectionProps {
  isVisible: boolean;
  onLaunchAllCampaigns?: () => void;
  campaignLaunched?: boolean;
}

export function LaunchOptionsSection({ isVisible, onLaunchAllCampaigns, campaignLaunched = false }: LaunchOptionsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🚀 Launch Options
      </h2>
      
      <p className="font-medium text-gray-900 mb-4">Quick Actions:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
            <img src="/lovable-uploads/869c213f-f2e5-431e-991b-134e94eb2bcf.png" alt="Outlook" className="w-5 h-5" />
            Email Campaign
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>2,410 contacts queued</li>
            <li>A/B test configured</li>
            <li>Suppression list applied</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
            <img src="/lovable-uploads/50e9c6c0-bc6f-4ca1-a5db-c32643632f8e.png" alt="WhatsApp" className="w-5 h-5" />
            Activate WhatsApp
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1,847 opted-in numbers</li>
            <li>Business API connected</li>
            <li>GDPR compliant</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-semibold text-sm text-gray-900 mb-2 flex items-center gap-2">
            <img src="/lovable-uploads/0ad025ba-2f43-4df0-ae9c-a128daac84c3.png" alt="LinkedIn" className="w-5 h-5" />
            Deploy LinkedIn
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1,623 InMails ready</li>
            <li>Sales Nav integrated</li>
            <li>SDR assignments complete</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2">
          <Users className="w-4 h-4 text-purple-500" />
          Launch Now
        </button>

        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2">
          <Users className="w-4 h-4 text-purple-500" />
          Launch Now
        </button>

        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2">
          <Users className="w-4 h-4 text-purple-500" />
          Launch Now
        </button>
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-600 text-sm mt-2">
          Synchronized multi-channel deployment with 2-hour delays between touchpoints
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          📊 Success Metrics & Tracking
        </h3>
        
        <div className="mb-6">
          <p className="font-medium text-gray-900 mb-3">Real-Time Dashboard Access</p>
          <ul className="space-y-2 ml-4">
            <li className="text-gray-900 flex items-center gap-2">
              <img src="/lovable-uploads/149398fa-2c54-4830-9d79-ee0cabe16dfe.png" alt="HubSpot" className="w-5 h-5" />
              <strong>HubSpot:</strong> Email performance, lead scoring updates
            </li>
            <li className="text-gray-900 flex items-center gap-2">
              <img src="/lovable-uploads/34fa05a0-fc32-4a6c-b0a7-a3b62c6fbd5b.png" alt="Salesforce" className="w-5 h-5" />
              <strong>Salesforce:</strong> Pipeline tracking, SDR activity
            </li>
            <li className="text-gray-900 flex items-center gap-2">
              <img src="/lovable-uploads/999d4d98-d5f4-41a8-8674-6b09f5796ed2.png" alt="LinkedIn" className="w-5 h-5" />
              <strong>LinkedIn Sales Nav:</strong> Social selling scores, InMail responses
            </li>
            <li className="text-gray-900 flex items-center gap-2">
              <span className="text-lg">📈</span>
              <strong>Custom Dashboard:</strong> Unified view across all platforms
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          🎉 Campaign Status: READY FOR LAUNCH
        </h3>
        <p className="text-gray-700 text-sm">
          All content approved by compliance. GDPR consent verified. Technical integrations tested.
        </p>
      </div>

      {/* Recommended Actions Section */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
          <Code className="w-4 h-4 text-green-600" />
          <span>Open in Platform</span>
        </button>

        <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
          <Film className="w-4 h-4 text-blue-600" />
          <span>Preview Analytics</span>
        </button>

        <button 
          onClick={onLaunchAllCampaigns}
          disabled={campaignLaunched}
          className={`font-medium py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 ${
            campaignLaunched 
              ? 'bg-gray-200 border border-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
          }`}
        >
          <Users className={`w-4 h-4 ${campaignLaunched ? 'text-gray-400' : 'text-purple-600'}`} />
          <span>Launch All Campaigns</span>
        </button>
      </div>
    </div>
  );
}
