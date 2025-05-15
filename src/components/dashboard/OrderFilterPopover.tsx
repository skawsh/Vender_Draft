
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from 'lucide-react';

interface OrderFilterPopoverProps {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

const OrderFilterPopover: React.FC<OrderFilterPopoverProps> = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[180px] justify-between">
          {selectedFilter}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <div className="flex flex-col">
          <Button 
            variant="ghost" 
            className="justify-start h-10 px-4 py-2 text-left border-b"
            onClick={() => setSelectedFilter("All Orders")}
          >
            All Orders
          </Button>
          <div className="border-b">
            <Button 
              variant="ghost" 
              className="justify-between w-full h-10 px-4 py-2 text-left"
              onClick={() => setSelectedFilter("Relative Time")}
            >
              Relative Time
              <ChevronDown className="h-4 w-4 rotate-270" />
            </Button>
          </div>
          <div className="border-b">
            <Button 
              variant="ghost" 
              className="justify-between w-full h-10 px-4 py-2 text-left"
              onClick={() => setSelectedFilter("Relative Date")}
            >
              Relative Date
              <ChevronDown className="h-4 w-4 rotate-270" />
            </Button>
          </div>
          <div className="border-b">
            <Button 
              variant="ghost" 
              className="justify-between w-full h-10 px-4 py-2 text-left"
              onClick={() => setSelectedFilter("Date Range")}
            >
              Date Range
              <ChevronDown className="h-4 w-4 rotate-270" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            className="justify-between w-full h-10 px-4 py-2 text-left"
            onClick={() => setSelectedFilter("Date & Time Range")}
          >
            Date & Time Range
            <ChevronDown className="h-4 w-4 rotate-270" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OrderFilterPopover;
