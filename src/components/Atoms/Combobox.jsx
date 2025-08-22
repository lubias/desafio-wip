import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem } from "@/components/ui/command";
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';

function Combobox({ label, options, value, onChange }) {
    const selectedText = value ? options.find(opt => opt.value === value)?.label : label || "";

    return (
        <div className="w-full">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center">
                        <span className="flex-1 text-left">{selectedText}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder={`Search ${label}...`} />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            {options.map((opt, index) => (
                                <CommandItem
                                    key={opt.key || `${opt.value}-${index}`}
                                    onSelect={() => onChange(opt.value)}
                                >
                                    {opt.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default Combobox;
