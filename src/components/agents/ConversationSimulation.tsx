
import { useState, useEffect } from "react";

interface Message {
  id: number;
  sender: "agent" | "customer";
  content: string;
  timestamp: string;
}

const conversationMessages: Message[] = [
  {
    id: 1,
    sender: "agent",
    content: "💬 Schneider Electric (+49-171-5553333)\nHi Thomas! Quick one—are you ready for the new EU energy rules in 2025? Your 12 Stuttgart buildings could need upgrades. We helped RWE cut compliance costs 41%. Worth a chat? —Sarah",
    timestamp: "2:14 PM"
  },
  {
    id: 2,
    sender: "customer", 
    content: "Yes we're concerned! How did you get 41% savings for RWE? Our buildings are similar.",
    timestamp: "2:16 PM"
  },
  {
    id: 3,
    sender: "agent",
    content: "Great question! RWE used our EcoStruxure platform for real-time monitoring—just that cut waste by 30%. For your Stuttgart site, we estimate ~€3.2M/year savings. Should I send their case study or set up a quick call?",
    timestamp: "2:17 PM"
  },
  {
    id: 4,
    sender: "customer",
    content: "€3.2M is impressive! Send the case study. Out of curiosity, how did you run those numbers for us?",
    timestamp: "2:19 PM"
  },
  {
    id: 5,
    sender: "agent",
    content: "We used public energy usage plus your sustainability reports 😊 Your portfolio's a great match for our tech. I'll send you the RWE study and a custom ROI model for your 12 buildings. Want to chat tomorrow—2pm or 4pm?",
    timestamp: "2:20 PM"
  },
  {
    id: 6,
    sender: "customer",
    content: "Thomas Mueller 📱...",
    timestamp: "2:22 PM"
  }
];

interface ConversationSimulationProps {
  isVisible: boolean;
}

export function ConversationSimulation({ isVisible }: ConversationSimulationProps) {
  if (!isVisible) return null;

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      {/* Content with proper padding */}
      <div className="pt-16 pb-6 px-6">
        <div className="max-w-xl mx-auto space-y-4">
          {/* Conversation header */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Outreach Automation Agent
            </h3>
          </div>

          {/* Messages - styled to match reference exactly */}
          {conversationMessages.map((message) => (
            <div key={message.id} className="mb-4">
              {message.sender === 'agent' ? (
                <div>
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {message.content}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-sm text-gray-700 leading-relaxed flex items-start gap-1">
                    {message.id === 6 ? (
                      // Special case for the last message which shows typing indicator
                      <span className="text-gray-700">{message.content}</span>
                    ) : (
                      <>
                        <span className="font-medium">Thomas Mueller 📱</span>
                        <div className="flex-1 ml-2">{message.content}</div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
