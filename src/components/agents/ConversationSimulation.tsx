
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ConversationSimulationProps {
  onClose: () => void;
}

export function ConversationSimulation({ onClose }: ConversationSimulationProps) {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      type: "user-input",
      content: `Customer: Thomas Mueller
Company EnBW 
Persona: Building Manager 
Solutions: Energy Monitoring & Building Automation 
Preferred Channels: SMS & WhatsApp 
Segment: Enterprise`
    },
    {
      type: "agent-label",
      content: "Outreach Automation Agent"
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      phone: "(+49-171-5553333)",
      content: "Hi Thomas! Quick one—are you ready for the new EU energy rules in 2025? Your 12 Stuttgart buildings could need upgrades. We helped RWE cut compliance costs 41%. Worth a chat? —Schneider Agent"
    },
    {
      type: "sms",
      sender: "Thomas Mueller",
      emoji: "📱",
      content: "Yes we're concerned! How did you get 41% savings for RWE? Our buildings are similar."
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      content: "Great question! RWE used our EcoStruxure platform for real-time monitoring—just that cut waste by 30%. For your Stuttgart site, we estimate ~€3.2M/year savings. Should I send their case study or set up a quick call?"
    },
    {
      type: "sms",
      sender: "Thomas Mueller",
      emoji: "📱",
      content: "€3.2M is impressive! Send the case study. Out of curiosity, how did you run those numbers for us?"
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      content: "We used public energy usage plus your sustainability reports 😊 Your portfolio's a great match for our tech. I'll send you the RWE study and a custom ROI model for your 12 buildings. Want to chat tomorrow—2pm or 4pm?"
    },
    {
      type: "sms",
      sender: "Thomas Mueller",
      emoji: "📱",
      content: "Got the email—very compelling! 4pm tomorrow is good. What should I prepare? Who joins from your side?"
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      content: "Perfect! You'll meet Maria Weber, our Energy Solutions Expert. Just bring: your latest energy bills (if easy), and main pain points with your current tools. Having Q1 budget info helps. Sending a cal invite now! 👍"
    },
    {
      type: "sms",
      sender: "Thomas Mueller",
      emoji: "📱",
      content: "Sounds good, see you tomorrow. Do you have references from other energy sector clients?"
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      content: "Absolutely! We work with E.ON, Vattenfall, & 20+ energy leaders. Maria will share 3 relevant case studies on the call. Anything else you'd like to cover?"
    },
    {
      type: "sms",
      sender: "Thomas Mueller",
      emoji: "📱",
      content: "No, that's it. Thanks Sarah, very helpful."
    },
    {
      type: "sms",
      sender: "Schneider Electric",
      content: "Fantastic! Talk at 4pm tomorrow. I'll send a quick reminder in the morning. Have a great evening, Thomas! 🌟"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleMessages < messages.length) {
        setIsTyping(true);
        setTimeout(() => {
          setVisibleMessages(prev => prev + 1);
          setIsTyping(false);
        }, 1000);
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [visibleMessages, messages.length]);

  const renderMessage = (message: any, index: number) => {
    if (message.type === "user-input") {
      return (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg border">
          <div className="text-sm font-medium text-gray-700 mb-2">User</div>
          <div className="text-sm text-gray-900 whitespace-pre-line">{message.content}</div>
        </div>
      );
    }

    if (message.type === "agent-label") {
      return (
        <div key={index} className="mb-4">
          <div className="text-sm font-semibold text-gray-900">{message.content}</div>
        </div>
      );
    }

    if (message.type === "sms") {
      const isSchneider = message.sender === "Schneider Electric";
      return (
        <div key={index} className={`mb-4 flex ${isSchneider ? 'justify-start' : 'justify-end'}`}>
          <div className={`max-w-[70%] p-3 rounded-lg ${
            isSchneider 
              ? 'bg-white border border-gray-200 text-gray-900' 
              : 'bg-blue-500 text-white'
          }`}>
            <div className="text-xs font-medium mb-1 opacity-80">
              {isSchneider ? (
                <>💬 {message.sender} {message.phone}</>
              ) : (
                <>{message.sender} {message.emoji}</>
              )}
            </div>
            <div className="text-sm leading-relaxed">{message.content}</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="absolute inset-0 bg-white z-30">
      <ScrollArea className="h-full">
        <div className="p-6 pb-32">
          <div className="max-w-2xl mx-auto">
            {messages.slice(0, visibleMessages).map(renderMessage)}
            
            {isTyping && visibleMessages < messages.length && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-[70%] p-3 rounded-lg bg-white border border-gray-200">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
