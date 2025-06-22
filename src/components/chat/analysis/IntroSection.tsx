
interface IntroSectionProps {
  isVisible: boolean;
}

export function IntroSection({ isVisible }: IntroSectionProps) {
  if (!isVisible) return null;

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <p className="text-gray-900 mb-6">
        Here's a comprehensive analysis of Schneider Electric's dormant lead opportunities, with actionable insights for immediate nurture campaign activation:
      </p>
    </div>
  );
}
