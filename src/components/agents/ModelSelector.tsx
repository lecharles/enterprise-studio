
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export function ModelSelector({ selectedModel, onModelChange }: ModelSelectorProps) {
  const [openModelCombobox, setOpenModelCombobox] = useState(false);

  const models = [
    { value: "gpt-4.1", label: "gpt-4.1" },
    { value: "gpt-4.1-mini", label: "gpt-4.1-mini" },
    { value: "gpt-4.1-nano", label: "gpt-4.1-nano" },
    { value: "gpt-4o", label: "gpt-4o" },
    { value: "gpt-4o-mini", label: "gpt-4o-mini" },
    { value: "o3-mini-2025-01-31", label: "o3-mini-2025-01-31" },
    { value: "o3-mini", label: "o3-mini" },
    { value: "o1-2024-12-17", label: "o1-2024-12-17" },
    { value: "o1", label: "o1" },
    { value: "gpt-4o-mini-2024-07-18", label: "gpt-4o-mini-2024-07-18" },
    { value: "gpt-4o-2024-11-20", label: "gpt-4o-2024-11-20" }
  ];

  return (
    <div className="space-y-2">
      <Label htmlFor="model-select" className="text-sm font-medium text-gray-700">
        Model
      </Label>
      <Popover open={openModelCombobox} onOpenChange={setOpenModelCombobox}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openModelCombobox}
            className="w-full justify-between"
          >
            {selectedModel
              ? models.find((model) => model.value === selectedModel)?.label
              : "Select a model..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Select a model..." />
            <CommandList>
              <CommandEmpty>No model found.</CommandEmpty>
              <CommandGroup>
                {models.map((model) => (
                  <CommandItem
                    key={model.value}
                    value={model.value}
                    onSelect={(currentValue) => {
                      onModelChange(currentValue === selectedModel ? "" : currentValue);
                      setOpenModelCombobox(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedModel === model.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {model.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
