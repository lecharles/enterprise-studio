
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Link, Bell, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SharePopoverProps {
  children: React.ReactNode;
}

export function SharePopover({ children }: SharePopoverProps) {
  const [inviteEmail, setInviteEmail] = useState("");
  const [accessLevel, setAccessLevel] = useState("Can View");
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("salesforce.com/create/automation...");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleInvite = () => {
    console.log("Inviting:", inviteEmail);
    setInviteEmail("");
  };

  const collaborators = [
    { initials: "AB", name: "Alice Brown" },
    { initials: "CD", name: "Chris Davis" },
    { initials: "EF", name: "Emma Ford" },
    { initials: "GH", name: "Grace Hall" }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white border border-gray-200 shadow-lg p-0" align="end">
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Share this Agent & Evals
          </h3>

          <div className="space-y-4">
            {/* Copy Link Section */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={handleCopyLink}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 p-2"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm">{linkCopied ? "Copied!" : "Copy link"}</span>
              </Button>
            </div>

            {/* Invite Section */}
            <div className="flex gap-2">
              <Input
                placeholder="Invite others by name or email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                className="flex-1 text-xs border-gray-300"
              />
              <Button
                onClick={handleInvite}
                disabled={!inviteEmail.trim()}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 text-sm"
              >
                Invite
              </Button>
            </div>

            {/* Access Card */}
            <Card className="border border-gray-300 bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Link className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Anyone with the link</p>
                      <p className="text-xs text-gray-500">salesforce.com/create/automation...</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-sm text-gray-600 hover:bg-gray-200">
                        {accessLevel}
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                      <DropdownMenuItem onClick={() => setAccessLevel("Can View")}>
                        Can View
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setAccessLevel("Can Edit")}>
                        Can Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setAccessLevel("Can Comment")}>
                        Can Comment
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>

            {/* Collaborators Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-gray-900">Collaborators</h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{collaborators.length}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-6 h-6 p-0 hover:bg-gray-100 relative"
                  >
                    <Bell className="w-3 h-3 text-gray-600" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {collaborators.map((collaborator, index) => (
                  <Avatar key={index} className="w-8 h-8">
                    <AvatarFallback className="bg-gray-200 text-gray-600 text-xs font-medium">
                      {collaborator.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
