
interface ActionPlanSectionProps {
  isVisible: boolean;
}

export function ActionPlanSection({ isVisible }: ActionPlanSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`mb-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        🚀 Immediate Action Plan
      </h2>
      
      <ul className="space-y-4 ml-4">
        <li className="text-gray-900">
          <span className="font-bold">Launch Personalized Sequences:</span> 4 persona-specific email campaigns ready for deployment within 48 hours. Each sequence includes 6 touchpoints over 21 days with dynamic content based on engagement 📧 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
        </li>
        <li className="text-gray-900">
          <span className="font-bold">Technical Workshop Series:</span> Schedule 12 workshops across EMEA Q1 2025. Focus on hands-on EcoStruxure™ integration addressing the #1 sales objection 🛠️ <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" />.
        </li>
        <li className="text-gray-900">
          <span className="font-bold">ABM Activation:</span> Target top 500 accounts with LinkedIn campaigns. Budget allocation: €75K for Q1 with expected 23% engagement rate based on similar campaigns 🎯 <img src="/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png" alt="Marketing Cloud" className="inline-block w-4 h-4 mx-1" />.
        </li>
        <li className="text-gray-900">
          <span className="font-bold">Sales Enablement:</span> Deliver persona-specific battle cards and local case studies to address regional nuances identified in research 📋 <img src="/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png" alt="SharePoint" className="inline-block w-4 h-4 mx-1" /> <img src="/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png" alt="Teams" className="inline-block w-4 h-4 mx-1" />.
        </li>
      </ul>
    </div>
  );
}
