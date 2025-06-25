
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
    content: "💬 Schneider Electric (+49-171-5553333)\nHello Mr. Thomas Mueller! Quick question—are you ready for the new EU energy rules in 2025? Your 12 Stuttgart buildings could need upgrades. We helped RWE cut compliance costs 41%. Worth a chat? —Schneider Agent",
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
    content: "Got the email—very compelling! 4pm tomorrow is good. What should I prepare? Who joins from your side?",
    timestamp: "2:22 PM"
  },
  {
    id: 7,
    sender: "agent",
    content: "Perfect! You'll meet Maria Weber, our Energy Solutions Expert. Just bring: your latest energy bills (if easy), and main pain points with your current tools. Having Q1 budget info helps. Sending a cal invite now! 👍",
    timestamp: "2:23 PM"
  },
  {
    id: 8,
    sender: "customer",
    content: "Sounds good, see you tomorrow. Do you have references from other energy sector clients?",
    timestamp: "2:25 PM"
  },
  {
    id: 9,
    sender: "agent",
    content: "Absolutely! We work with E.ON, Vattenfall, & 20+ energy leaders. Maria will share 3 relevant case studies on the call. Anything else you'd like to cover?",
    timestamp: "2:26 PM"
  },
  {
    id: 10,
    sender: "customer",
    content: "No, that's it. Thanks Schneider Agent, very helpful.",
    timestamp: "2:27 PM"
  },
  {
    id: 11,
    sender: "agent",
    content: "Fantastic! Talk at 4pm tomorrow. I'll send a quick reminder in the morning. Have a great evening, Mr. Mueller!",
    timestamp: "2:28 PM"
  }
];

interface ConversationSimulationProps {
  isVisible: boolean;
}

export function ConversationSimulation({ isVisible }: ConversationSimulationProps) {
  if (!isVisible) return null;

  return (
    <div className="h-full w-full overflow-y-auto bg-white">
      {/* Content that scrolls behind header and chatbox */}
      <div className="pt-16 pb-32 px-6">
        <div className="max-w-md mx-auto space-y-4">
          {/* Conversation header */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Outreach Automation Agent
            </h3>
            <p className="text-sm text-gray-600">
              Live conversation simulation with Thomas Mueller (EnBW)
            </p>
          </div>

          {/* Messages - all visible immediately */}
          {conversationMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'agent' ? 'justify-start' : 'justify-end'} mb-4`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'agent'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {message.sender === 'agent' && (
                  <div className="font-semibold text-sm mb-1">
                    Schneider Electric
                  </div>
                )}
                {message.sender === 'customer' && (
                  <div className="font-semibold text-sm mb-1 flex items-center">
                    Thomas Mueller 📱
                  </div>
                )}
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp}
                </div>
              </div>
            </div>
          ))}

          {/* Success message */}
          <div className="text-center mt-8 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700 font-medium">
              ✅ Meeting scheduled for tomorrow at 4pm
            </p>
            <p className="text-xs text-green-600 mt-1">
              Lead qualification: High interest, enterprise segment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
