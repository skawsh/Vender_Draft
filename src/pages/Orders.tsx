
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TabsContent } from "@/components/ui/tabs";
import OrderFilterDropdown from "@/components/OrderFilterDropdown";
import { dateFilterOptions, statusOptions } from '@/data/orders';
import OrderSearch from '@/components/orders/OrderSearch';
import DateFilterPopover from '@/components/orders/DateFilterPopover';
import OrderTabs from '@/components/orders/OrderTabs';
import { useOrderActions } from '@/hooks/useOrderActions';
import { useOrderFilters } from '@/hooks/useOrderFilters';
import OrderDetailsDialog from '@/components/orders/OrderDetailsDialog';
import CurrentOrdersTab from '@/components/orders/CurrentOrdersTab';
import OrderHistoryTab from '@/components/orders/OrderHistoryTab';
import CancelledOrdersTab from '@/components/orders/CancelledOrdersTab';
import { useCancelledOrders } from '@/hooks/useCancelledOrders';

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("current");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  
  // Custom hooks
  const { orders, getActionButton } = useOrderActions();
  const { 
    dateRange, 
    setDateRange,
    searchQuery, 
    setSearchQuery,
    statusFilter, 
    setStatusFilter,
    dateFilter, 
    setDateFilter,
    datePopoverOpen, 
    setDatePopoverOpen,
    isFilterSectionOpen, 
    setIsFilterSectionOpen,
    filterOrders,
    filterOrderHistory,
    resetDateFilters,
    applyDateFilters
  } = useOrderFilters();
  
  const { filteredCancelledOrders } = useCancelledOrders(searchQuery);

  // Apply filters to orders
  const filteredOrders = filterOrders(orders);
  const filteredOrderHistory = filterOrderHistory();
  
  // Navigate to order details
  const viewOrderDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    setDialogOpen(true);
  };

  // Render action button with tooltip
  const renderActionButton = (order) => {
    const actionConfig = getActionButton(order);
    if (!actionConfig) return null;
    
    return (
      <Button 
        variant="success"
        className="bg-[#D1FFCE] text-black font-medium text-xs sm:text-sm py-1 px-2 sm:px-3 h-auto"
        onClick={actionConfig.action}
      >
        {actionConfig.label}
      </Button>
    );
  };

  return (
    <div className="container mx-auto p-3 md:p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Order management</h1>
          <p className="text-gray-600">Manage all your studio order in one place</p>
        </div>
        <div>
          <OrderFilterDropdown onFilterChange={(filterType, value) => {
            console.log("Filter selected:", filterType, value);
            if (filterType === 'appliedDateRange' || filterType === 'appliedDateTimeRange') {
              setDateRange(value);
              toast.success(`Date filter applied`, {
                description: "Orders filtered by selected date range"
              });
            } else {
              toast.success(`Filter applied: ${filterType}`, {
                description: "Orders filtered successfully"
              });
            }
          }} />
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 mb-6">
        <OrderSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex items-center justify-between">
          <span className="font-medium">Filter</span>
          <DateFilterPopover 
            dateFilter={dateFilter}
            setDateFilter={setDateFilter}
            dateRange={dateRange}
            setDateRange={setDateRange}
            dateFilterOptions={dateFilterOptions}
            datePopoverOpen={datePopoverOpen}
            setDatePopoverOpen={setDatePopoverOpen}
            resetDateFilters={resetDateFilters}
            applyDateFilters={applyDateFilters}
          />
        </div>
      </div>
      
      <OrderTabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <TabsContent value="current">
          <CurrentOrdersTab 
            filteredOrders={filteredOrders}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            statusOptions={statusOptions}
            isFilterSectionOpen={isFilterSectionOpen}
            setIsFilterSectionOpen={setIsFilterSectionOpen}
            renderActionButton={renderActionButton}
            viewOrderDetails={viewOrderDetails}
          />
        </TabsContent>
        
        <TabsContent value="history">
          <OrderHistoryTab 
            filteredOrderHistory={filteredOrderHistory}
            viewOrderDetails={viewOrderDetails}
          />
        </TabsContent>

        <TabsContent value="cancelled">
          <CancelledOrdersTab 
            filteredCancelledOrders={filteredCancelledOrders}
            viewOrderDetails={viewOrderDetails}
          />
        </TabsContent>
      </OrderTabs>

      {/* Order Details Dialog */}
      <OrderDetailsDialog 
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        orderId={selectedOrderId}
      />
    </div>
  );
};

export default Orders;
