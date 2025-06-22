
import { Separator } from "@/components/ui/separator";

interface PersonaContentSectionProps {
  isVisible: boolean;
}

export function PersonaContentSection({ isVisible }: PersonaContentSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🎯 Campaign Content Generation Complete
      </h2>
      
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        📊 Persona-Based Content Strategy
      </h3>

      {/* Segment 1: Building Management Specialists */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          Segment 1: Building Management Specialists (1,123 contacts)
        </h4>
        <p className="text-gray-600 italic mb-4">High-value segment with immediate budget authority</p>

        <div className="mb-6">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/8d108dbd-0b63-47c1-b531-cee74a2add99.png" alt="Outlook" className="w-5 h-5" />
            Email Campaign Options
          </h5>
          <p className="font-medium text-gray-900 mb-2">Subject Line A/B Testing:</p>
          
          <ul className="space-y-2 ml-4 mb-4">
            <li className="text-gray-900"><strong>A:</strong> "Cut your building's energy costs by 42% - Real client data inside 📊"</li>
            <li className="text-gray-900"><strong>B:</strong> "[First Name], see how Hamburg Tower saved €2.1M with Schneider"</li>
            <li className="text-gray-900"><strong>C:</strong> "Your Q1 energy audit revealed this opportunity..."</li>
          </ul>

          <p className="text-gray-900 mb-4">
            <strong>Winner Prediction:</strong> Option B (23% higher open rate based on personalization + social proof)
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-medium text-gray-900 mb-2">Email Body Preview:</p>
            <div className="text-gray-800 text-sm space-y-2">
              <p>Hi [First Name],</p>
              <p>I noticed [Company] manages [Building Count] properties across [City]. Hamburg Tower (similar portfolio size) just reported a 42% reduction in energy costs after implementing our EcoStruxure platform.</p>
              <p>Their facility manager said: "The ROI hit in month 4, not year 2 like we expected."</p>
              <p>Worth a quick look at your potential savings?<br/>[Custom ROI Calculator - Pre-filled with your building data]</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/c2819ce4-a316-48e1-bd6b-4cfe58df79ef.png" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp Business Message
          </h5>
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            <p className="text-gray-800 text-sm">
              Hi [First Name]! 👋 Quick question - did you see the new EU energy efficiency requirements for 2025? We helped 3 buildings in [City] get compliant + save 40% on costs. 15-min call this week?
            </p>
          </div>
          <p className="text-gray-600 italic text-sm">Tone: Urgent but helpful, compliance-driven angle</p>
        </div>

        <div className="mb-8">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/af8c2ab2-6c4e-4451-982c-ffc97c63b971.png" alt="LinkedIn" className="w-5 h-5" />
            LinkedIn InMail Template
          </h5>
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            <p className="text-gray-800 text-sm">
              Hi [First Name], I saw your post about sustainable building management challenges. We just published a case study on how [Similar Company] achieved carbon neutrality 18 months ahead of schedule.<br/><br/>
              Thought it might be relevant for [Company]'s 2025 goals. Open to connecting?
            </p>
          </div>
          <p className="text-gray-600 italic text-sm">Approach: Peer validation + sustainability focus</p>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Segment 2: Sustainability Officers */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          Segment 2: Sustainability Officers (643 contacts)
        </h4>
        <p className="text-gray-600 italic mb-4">ESG-focused, long sales cycle but high strategic value</p>

        <div className="mb-6">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/8d108dbd-0b63-47c1-b531-cee74a2add99.png" alt="Outlook" className="w-5 h-5" />
            Email Campaign Options
          </h5>
          <p className="font-medium text-gray-900 mb-2">Subject Line A/B Testing:</p>
          
          <ul className="space-y-2 ml-4 mb-4">
            <li className="text-gray-900"><strong>A:</strong> "Your ESG report + our data = 73% faster compliance ✅"</li>
            <li className="text-gray-900"><strong>B:</strong> "Re: [Company]'s 2025 carbon neutrality target"</li>
            <li className="text-gray-900"><strong>C:</strong> "[First Name], EU Taxonomy deadline approaching - are you ready?"</li>
          </ul>

          <p className="text-gray-900 mb-4">
            <strong>Winner Prediction:</strong> Option C (compliance urgency + personalization)
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-medium text-gray-900 mb-2">Email Body Preview:</p>
            <div className="text-gray-800 text-sm space-y-2">
              <p>[First Name],</p>
              <p>With EU Taxonomy reporting mandatory in 89 days, I wanted to share how [Competitor Company] automated their entire ESG data collection in just 6 weeks.</p>
              <p>They went from 3 FTEs manually collecting data to real-time dashboards that feed directly into their sustainability reports.</p>
              <p>Your dedicated ESG Integration Blueprint is ready here:<br/>[Personalized Demo - 12min video with your company's buildings]</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/c2819ce4-a316-48e1-bd6b-4cfe58df79ef.png" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp Business Message
          </h5>
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            <p className="text-gray-800 text-sm">
              Hi [First Name]! Saw [Company]'s sustainability commitment 🌱 Our platform just helped Deutsche Bank hit 45% carbon reduction. Free ESG assessment for your portfolio? Takes 20 min ⏱️
            </p>
          </div>
          <p className="text-gray-600 italic text-sm">Tone: Achievement-oriented, time-conscious</p>
        </div>

        <div className="mb-8">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/af8c2ab2-6c4e-4451-982c-ffc97c63b971.png" alt="LinkedIn" className="w-5 h-5" />
            LinkedIn InMail Template
          </h5>
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            <p className="text-gray-800 text-sm">
              [First Name], congrats on the sustainability award! 🏆<br/><br/>
              I've been following [Company]'s net-zero journey. We just launched an ESG fast-track program that might accelerate your timeline by 2 years.<br/><br/>
              Worth exploring? Several of your peers are already seeing results.
            </p>
          </div>
          <p className="text-gray-600 italic text-sm">Approach: Recognition + peer pressure</p>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Segment 3: Executive Decision Makers */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          Segment 3: Executive Decision Makers (Mixed across segments)
        </h4>
        <p className="text-gray-600 italic mb-4">C-suite oversight, strategic partnership potential</p>

        <div className="mb-6">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <img src="/lovable-uploads/8d108dbd-0b63-47c1-b531-cee74a2add99.png" alt="Outlook" className="w-5 h-5" />
            Email Campaign Options
          </h5>
          <p className="font-medium text-gray-900 mb-2">Subject Line A/B Testing:</p>
          
          <ul className="space-y-2 ml-4 mb-4">
            <li className="text-gray-900"><strong>A:</strong> "Board-ready: Your €31.2M efficiency opportunity"</li>
            <li className="text-gray-900"><strong>B:</strong> "[Company] energy strategy - competitor analysis attached"</li>
            <li className="text-gray-900"><strong>C:</strong> "CFO approved: 8-month payback on building optimization"</li>
          </ul>

          <p className="text-gray-900 mb-4">
            <strong>Winner Prediction:</strong> Option A (specific value + board-level language)
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-medium text-gray-900 mb-2">Email Body Preview:</p>
            <div className="text-gray-800 text-sm space-y-2">
              <p>[First Name],</p>
              <p>Your portfolio's energy profile suggests a €31.2M optimization opportunity over 36 months. Three of your competitors have already captured similar gains.</p>
              <p>I've prepared a 2-page executive brief showing:<br/>
              - Month-by-month cash flow impact<br/>
              - Competitive positioning analysis<br/>
              - Risk mitigation through our performance guarantee</p>
              <p>Available for a strategic discussion next week?<br/>[Executive Brief PDF - Customized for your portfolio]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
