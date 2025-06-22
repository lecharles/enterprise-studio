
interface UserMessageProps {
  message: string;
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <div className="flex-1">
          <p className="text-gray-900 leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
