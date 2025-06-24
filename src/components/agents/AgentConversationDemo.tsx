
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Image, Link, Plus } from "lucide-react";

export function AgentConversationDemo() {
  const [inputMessage, setInputMessage] = useState("");

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-500">THREAD</span>
          <span className="text-sm text-gray-400">thread_c3ElCM6pvil7cpoDCAjKIEeU</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">1975 tokens</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14C4.69 14 2 11.31 2 8s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                <path d="M7 4h2v5H7zM7 10h2v2H7z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 2h16v2H0V2zm0 4h16v2H0V6zm0 4h16v2H0v-2z"/>
              </svg>
            </Button>
            <span className="text-sm font-medium text-gray-900">Logs</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 0h16v16H0V0zm1 1v14h14V1H1z"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Agent Message */}
        <div className="space-y-4">
          <div className="font-semibold text-gray-900">Outreach Automation Agent</div>
          <div className="text-gray-900 space-y-4">
            <p>Thank you! Before launching, please specify:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Which persona(s) to target (Building Managers, Sustainability Officers, or both)?</li>
              <li>The solution focus (energy monitoring, building automation, retrofits, or full suite)?</li>
              <li>Preferred channels (SMS only or include email/LinkedIn/WhatsApp)?</li>
              <li>Any specific companies or segments to prioritize?</li>
            </ol>
            <p>
              Once I have these details, I'll verify compliance, segment the audience, generate personalized 
              messages, set up tracking, and schedule the campaign for optimal engagement. Shall we proceed 
              with default settings or do you have preferences?
            </p>
          </div>
        </div>

        {/* User Message */}
        <div className="space-y-4">
          <div className="font-semibold text-gray-900">User</div>
          <div className="text-gray-900">
            <p>Got it. Same audience as last time.</p>
          </div>
        </div>

        {/* Agent Response */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="font-semibold text-gray-900">Outreach Automation Agent</div>
            <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
              <Paperclip className="w-3 h-3 text-gray-400" />
            </Button>
          </div>
          <div className="text-gray-900 space-y-4">
            <p>
              Understood! I'll use the same audience segments as last campaign: Building Managers and 
              Sustainability Officers from your enterprise target list.
            </p>
            <div>
              <p className="font-medium">Next steps:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                <li>
                  Verifying integration connections and compliance (GDPR, opt-in, suppression list)—no 
                  messages sent until all checks are green.
                </li>
                <li>Persona-based personalization for each channel (SMS, email, LinkedIn).</li>
                <li>
                  Replicating previous campaign's content architecture—do you want new solution 
                  focus/messages, or keep similar value proposition and hooks?
                </li>
                <li>Setting up tracking and lead scoring for immediate follow-up.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="relative">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Enter your message..."
            className="pr-20 py-3"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-100">
              <Paperclip className="w-4 h-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-100">
              <Image className="w-4 h-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-100">
              <Link className="w-4 h-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-gray-100">
              <Plus className="w-4 h-4 text-gray-500" />
            </Button>
            <Button 
              size="sm" 
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs ml-2"
            >
              Run ⌘↵
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Playground messages can be viewed by anyone at your organization using the API.
        </p>
      </div>
    </div>
  );
}
