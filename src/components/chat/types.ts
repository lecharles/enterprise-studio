
export interface ResearchStep {
  source: string;
  message: string;
  icon: string;
  completed: boolean;
}

export interface CitationSource {
  id: string;
  title: string;
  source: string;
  icon: string;
  excerpt: string;
  description: string;
  sourceType: string;
  lastUpdated: string;
}

export interface DeepResearchChatProps {
  onComplete?: () => void;
}
