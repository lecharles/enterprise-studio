
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    navigator.clipboard.writeText(".../schneider-studio/");
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleInvite = () => {
    console.log("Inviting:", inviteEmail);
    setInviteEmail("");
  };

  const collaborators = [
    { 
      initials: "AB", 
      name: "Alice Brown",
      image: "/lovable-uploads/0c8812a2-3ff4-49aa-9cbb-8ef6ba612dc6.png"
    },
    { 
      initials: "CD", 
      name: "Chris Davis",
      image: "/lovable-uploads/0d0fa1f4-acb8-43da-8e5f-7c372cad06b4.png"
    },
    { 
      initials: "EF", 
      name: "Emma Ford",
      image: "/lovable-uploads/2e9775f1-6b91-4290-989a-5da009149a44.png"
    },
    { 
      initials: "GH", 
      name: "Grace Hall",
      image: "/lovable-uploads/94230642-bf45-42c6-9017-14f4836e61f8.png"
    },
    { 
      initials: "IJ", 
      name: "Isabella Johnson",
      image: "/lovable-uploads/82bc7af6-4c10-44c5-83d8-eeefaad28f42.png"
    },
    { 
      initials: "KL", 
      name: "Kevin Lee",
      image: "/lovable-uploads/5bbbb70d-6c87-419c-b83b-fa7675f09445.png"
    },
    { 
      initials: "MN", 
      name: "Maya Nelson",
      image: "/lovable-uploads/2ec50989-517e-4844-a83b-57030f6cecac.png"
    }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-96 bg-white border border-gray-200 shadow-lg p-0" align="end">
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
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Link className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">Anyone with the link</p>
                      <p className="text-xs text-gray-500 truncate">.../schneider-studio/</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-xs text-gray-600 hover:bg-gray-200 px-2 py-1 h-auto">
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
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-sm font-medium text-gray-900">Collaborators</h4>
                <span className="text-xs text-gray-500">{collaborators.length}</span>
                <div className="ml-auto flex items-center">
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
                    <AvatarImage 
                      src={collaborator.image} 
                      alt={collaborator.name}
                      className="object-cover"
                    />
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
