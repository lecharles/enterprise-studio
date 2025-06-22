
import { CitationSource } from "../types";

export const citations: CitationSource[] = [
  {
    id: "hubspot-1",
    title: "Schneider Electric CRM - Lead Database Analysis",
    source: "HubSpot",
    icon: "/lovable-uploads/6bee7530-ab07-4ee8-8ae5-8653bb0b5301.png",
    sourceType: "HubSpot CRM Export - EMEA MQL Report Q4 2024",
    description: "Dataset: 48,327 dormant MQLs analyzed\nKey Metrics: Lead scoring, engagement rates, persona classification",
    lastUpdated: "January 15, 2025",
    excerpt: "Lead Database Export showing 48,327 dormant MQLs with engagement scores. Persona mapping identifies 4 key segments. Energy Efficiency Consultants show highest engagement (73% open rate) but lowest conversion..."
  },
  {
    id: "marketing-cloud-1",
    title: "Campaign Performance Dashboard - Q4 2024",
    source: "Marketing Cloud",
    icon: "/lovable-uploads/0bb6b1e8-2df1-4dbb-9108-725e56f45682.png",
    sourceType: "Salesforce Marketing Cloud Analytics",
    description: "Campaigns Analyzed: 47 email campaigns, 15 nurture flows\nMetrics: Open rates, CTR, geographic engagement patterns\nTime Period: October - December 2024",
    lastUpdated: "Today",
    excerpt: "The \"EcoStruxure™ Power Launch\" campaign achieved 42% open rate across EMEA but only 2.3% CTR. Analysis reveals technical PDFs get 5x more engagement than product brochures. Nordic countries show 61% higher engagement with sustainability content..."
  },
  {
    id: "sharepoint-1",
    title: "EcoStruxure™ Product Documentation Library",
    source: "SharePoint",
    icon: "/lovable-uploads/2ef48d52-614e-4444-914c-3507c1217888.png",
    sourceType: "Product Management Team shared:",
    description: "EcoStruxure™ Power 3.0 Technical Specifications\nCompetitive Analysis: Schneider vs. Siemens TCO Study\nROI Calculator Template v2.3\nSuccess Story Repository (47 case studies)",
    lastUpdated: "Yesterday",
    excerpt: "TCO Analysis: Schneider solutions demonstrate 15-20% cost advantage. Average ROI: 18 months for mid-size installations. Integration complexity addressed in v3.0 release. 47 verified customer success stories available..."
  },
  {
    id: "teams-1",
    title: "Sales Team Conversations - EMEA Region",
    source: "Teams",
    icon: "/lovable-uploads/0e655971-0ee4-4575-9f2d-3d419372b950.png",
    sourceType: "Regional Sales Insights:",
    description: "Thread: \"Q4 Win/Loss Analysis\" (1,247 messages)\nParticipants: Pierre Dubois (FR), Klaus Mueller (DE), Sofia Andersson (SE)\nKey Topics: Integration objections, regional requirements, workshop effectiveness",
    lastUpdated: "Today",
    excerpt: "Klaus Mueller: \"German market requires ISO 50001 messaging - it's non-negotiable.\" Sofia Andersson: \"Technical workshops in Stockholm converted 4.7x better than digital.\" Pierre Dubois: \"Integration complexity stops 34% of deals...\""
  }
];
