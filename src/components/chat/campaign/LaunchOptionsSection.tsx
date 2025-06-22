
interface LaunchOptionsSectionProps {
  isVisible: boolean;
}

export function LaunchOptionsSection({ isVisible }: LaunchOptionsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🚀 Launch Options
      </h2>
      
      <p className="font-medium text-gray-900 mb-4">Quick Actions:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            📧 Launch Email Campaign
          </h4>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>2,410 contacts queued</li>
            <li>A/B test configured</li>
            <li>Suppression list applied</li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            [Launch Now →]
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            💬 Activate WhatsApp
          </h4>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>1,847 opted-in numbers</li>
            <li>Business API connected</li>
            <li>GDPR compliant</li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            [Launch Now →]
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            💼 Deploy LinkedIn
          </h4>
          <ul className="text-sm text-gray-700 space-y-1 mb-3">
            <li>1,623 InMails ready</li>
            <li>Sales Nav integrated</li>
            <li>SDR assignments complete</li>
          </ul>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            [Launch Now →]
          </button>
        </div>
      </div>

      <div className="text-center mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
          🎬 [LAUNCH ALL CAMPAIGNS]
        </button>
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
            <li className="text-gray-900"><strong>HubSpot:</strong> Email performance, lead scoring updates</li>
            <li className="text-gray-900"><strong>Salesforce:</strong> Pipeline tracking, SDR activity</li>
            <li className="text-gray-900"><strong>LinkedIn Sales Nav:</strong> Social selling scores, InMail responses</li>
            <li className="text-gray-900"><strong>Custom Dashboard:</strong> Unified view across all platforms</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-gray-900 mb-3 flex items-center gap-2">
            🔔 Smart Alerts Configured
          </p>
          <ul className="space-y-2 ml-4">
            <li className="text-gray-900"><strong>Hot lead notification:</strong> Response within 5 minutes → Slack alert to SDR</li>
            <li className="text-gray-900"><strong>Meeting booked:</strong> Auto-sync to Salesforce + prep packet sent</li>
            <li className="text-gray-900"><strong>High-value engagement:</strong> Score &gt; 85 → Account Executive notified</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
          🎉 Campaign Status: READY FOR LAUNCH
        </h3>
        <p className="text-gray-700 mb-4">
          All content approved by compliance. GDPR consent verified. Technical integrations tested.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            ▶️ LAUNCH ALL CAMPAIGNS NOW
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            📊 Preview Analytics
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            ⚙️ Advanced Settings
          </button>
        </div>
      </div>
    </div>
  );
}
