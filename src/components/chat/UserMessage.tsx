
interface UserMessageProps {
  message: string;
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 font-medium text-sm">You</span>
        </div>
        <div className="bg-gray-50 rounded-lg px-4 py-3 max-w-2xl">
          <p className="text-gray-900">{message}</p>
        </div>
      </div>
    </div>
  );
}
