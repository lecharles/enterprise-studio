
interface AnalysisDisplayProps {
  typingText: string;
  isAnalysisComplete: boolean;
}

export function AnalysisDisplay({ typingText, isAnalysisComplete }: AnalysisDisplayProps) {
  return (
    <div className="prose max-w-none">
      <div className="whitespace-pre-wrap text-gray-900 leading-relaxed">
        {typingText}
        {!isAnalysisComplete && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
}
