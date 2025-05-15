
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Calendar, X, FileDown, Printer, FileText } from "lucide-react";
import { toast } from "sonner";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RevenueFiltersProps {
  dateFilter: string;
  setDateFilter: (filter: string) => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  washTypeFilter: string;
  setWashTypeFilter: (filter: string) => void;
}

const dateFilterOptions = [
  { id: "all", label: "All Dates" },
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "thisWeek", label: "This Week" },
  { id: "thisMonth", label: "This Month" },
  { id: "customRange", label: "Custom Range" },
];

const washTypeOptions = [
  { id: "all", label: "All Wash Types" },
  { id: "express", label: "Express Wash" },
  { id: "standard", label: "Standard Wash" },
  { id: "both", label: "Both" },
];

const RevenueFilters: React.FC<RevenueFiltersProps> = ({
  dateFilter,
  setDateFilter,
  dateRange,
  setDateRange,
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  washTypeFilter,
  setWashTypeFilter
}) => {
  const [datePopoverOpen, setDatePopoverOpen] = useState(false);
  
  const handleExport = (format: string) => {
    toast.success(`Payment history exported as ${format.toUpperCase()}`);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Revenue Management</h1>
          <p className="text-gray-500">Track and manage all revenue data</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <Popover open={datePopoverOpen} onOpenChange={setDatePopoverOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center bg-[#D3E4FD] border-[#A3C4FD] text-[#0F7EA3]">
                <Calendar className="h-4 w-4 mr-2" />
                {dateFilter === "all" && "All Dates"}
                {dateFilter === "today" && "Today"}
                {dateFilter === "yesterday" && "Yesterday"}
                {dateFilter === "thisWeek" && "This Week"}
                {dateFilter === "thisMonth" && "This Month"}
                {dateFilter === "customRange" && "Custom Range"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-4 bg-[#F1F0FB]" align="end">
              <div className="space-y-4">
                <h4 className="font-medium">Filter by date</h4>
                <RadioGroup
                  defaultValue={dateFilter}
                  onValueChange={(value) => {
                    setDateFilter(value);
                    if (value !== "customRange") {
                      setDatePopoverOpen(false);
                    }
                  }}
                >
                  {dateFilterOptions.map((option) => (
                    <div className="flex items-center space-x-2" key={option.id}>
                      <RadioGroupItem value={option.id} id={option.id} className="border-[#8B5CF6] text-[#8B5CF6]" />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {dateFilter === "customRange" && (
                  <div className="pt-4">
                    <DateRangePicker
                      date={dateRange}
                      onDateChange={(range) => {
                        setDateRange(range);
                        if (range?.from && range?.to) {
                          setDatePopoverOpen(false);
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by order ID or customer name"
            className="pl-10 w-full max-w-xs bg-[#D3E4FD] border-[#A3C4FD] placeholder-[#6B7A99]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setSearchQuery("")}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="w-full sm:w-[400px] bg-[#D3E4FD] border border-[#A3C4FD]">
          <TabsTrigger value="pending" className="flex-1 data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">Unpaid Payments</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white">Payment History</TabsTrigger>
        </TabsList>
      
        <div className="mt-4 mb-4">
          <ToggleGroup 
            type="single" 
            value={washTypeFilter} 
            onValueChange={(value) => value && setWashTypeFilter(value)}
            className="bg-[#D3E4FD] border-[#A3C4FD]"
          >
            {washTypeOptions.map((option) => (
              <ToggleGroupItem 
                key={option.id} 
                value={option.id}
                className="data-[state=on]:bg-[#8B5CF6] data-[state=on]:text-white"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {activeTab === 'history' && (
          <div className="flex justify-end mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-[#D3E4FD] border-[#A3C4FD] text-[#0F7EA3]">
                  <FileDown className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#F1F0FB]">
                <DropdownMenuItem onClick={() => handleExport('pdf')}>
                  <FileText className="h-4 w-4 mr-2" />
                  Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('excel')}>
                  <FileText className="h-4 w-4 mr-2" />
                  Export as Excel
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('csv')}>
                  <FileText className="h-4 w-4 mr-2" />
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  toast.success('Print layout prepared');
                  window.print();
                }}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default RevenueFilters;
