
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { DateRange } from "react-day-picker";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import OrderFilterDropdown from "@/components/OrderFilterDropdown";
import { dateFilterOptions, statusOptions } from '@/data/orders';
import OrderSearch from '@/components/orders/OrderSearch';
import DateFilterPopover from '@/components/orders/DateFilterPopover';
import StatusFilter from '@/components/orders/StatusFilter';
import OrderCard from '@/components/orders/OrderCard';
import HistoryOrderCard from '@/components/orders/HistoryOrderCard';
import OrdersTable from '@/components/orders/OrdersTable';
import OrderHistoryTable from '@/components/orders/OrderHistoryTable';
import OrderTabs from '@/components/orders/OrderTabs';
import { useOrderActions } from '@/hooks/useOrderActions';
import { useOrderFilters } from '@/hooks/useOrderFilters';
import OrderDetailsDialog from '@/components/orders/OrderDetailsDialog';

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

  // Apply filters to orders
  const filteredOrders = filterOrders(orders);
  const filteredOrderHistory = filterOrderHistory();
  
  // Mock data for cancelled orders
  const cancelledOrders = [
    { 
      orderId: '12350', 
      customerName: 'Daniel Wilson', 
      orderDate: '2025-05-10',
      serviceType: 'Dry Cleaning',
      washType: 'Standard', 
      weightQuantity: '2 kg',
      price: '$52.00',
      cancelReason: 'Customer requested',
      cancelDate: '2025-05-10' 
    },
    { 
      orderId: '12351', 
      customerName: 'Ava Martinez', 
      orderDate: '2025-05-11',
      serviceType: 'Wash & Fold',
      washType: 'Quick', 
      weightQuantity: '3.5 kg',
      price: '$38.00',
      cancelReason: 'Duplicate order',
      cancelDate: '2025-05-12' 
    },
    { 
      orderId: '12352', 
      customerName: 'Noah Garcia', 
      orderDate: '2025-05-12',
      serviceType: 'Stain Removal',
      washType: 'Premium', 
      weightQuantity: '1 kg',
      price: '$27.00',
      cancelReason: 'Service unavailable',
      cancelDate: '2025-05-13' 
    },
  ];

  // Function to filter cancelled orders based on search query
  const filteredCancelledOrders = cancelledOrders.filter(order => 
    searchQuery === "" || 
    order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3]">
            <StatusFilter 
              statusOptions={statusOptions}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              isFilterSectionOpen={isFilterSectionOpen}
              setIsFilterSectionOpen={setIsFilterSectionOpen}
            />
            
            <div className="md:hidden bg-white p-3">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <OrderCard 
                    key={order.id} 
                    order={order} 
                    index={index} 
                    getActionButton={renderActionButton}
                    viewOrderDetails={viewOrderDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders found</p>
                </div>
              )}
            </div>
            
            <OrdersTable 
              orders={filteredOrders} 
              getActionButton={renderActionButton} 
              viewOrderDetails={viewOrderDetails} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3]">
            <div className="flex flex-wrap p-2 bg-[#0F7EA3] rounded-t-lg overflow-x-auto">
              <h3 className="text-white font-semibold px-4 py-2">Order History - Completed Orders</h3>
            </div>
            
            <div className="md:hidden bg-white p-3">
              {filteredOrderHistory.length > 0 ? (
                filteredOrderHistory.map((order) => (
                  <HistoryOrderCard 
                    key={order.orderId} 
                    order={order} 
                    viewOrderDetails={viewOrderDetails} 
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No orders in history</p>
                </div>
              )}
            </div>
            
            <OrderHistoryTable 
              orders={filteredOrderHistory} 
              viewOrderDetails={viewOrderDetails} 
            />
          </div>
        </TabsContent>

        <TabsContent value="cancelled">
          <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3]">
            <div className="flex flex-wrap p-2 bg-[#0F7EA3] rounded-t-lg overflow-x-auto">
              <h3 className="text-white font-semibold px-4 py-2">Cancelled Orders</h3>
            </div>
            
            <div className="hidden md:block">
              <div className="overflow-x-auto bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0F7EA3] border-none">
                      <th className="text-white font-bold p-3 text-left">Order ID</th>
                      <th className="text-white font-bold p-3 text-left">Customer</th>
                      <th className="text-white font-bold p-3 text-left">Order date</th>
                      <th className="text-white font-bold p-3 text-left">Weight/Quantity</th>
                      <th className="text-white font-bold p-3 text-left">Wash Type</th>
                      <th className="text-white font-bold p-3 text-left">Service Type</th>
                      <th className="text-white font-bold p-3 text-left">Price</th>
                      <th className="text-white font-bold p-3 text-left">Cancel Reason</th>
                      <th className="text-white font-bold p-3 text-left">Cancel Date</th>
                      <th className="text-white font-bold p-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCancelledOrders.length > 0 ? (
                      filteredCancelledOrders.map((order, index) => (
                        <tr key={order.orderId} className={index % 2 === 0 ? 'bg-[#E6EFF2]' : 'bg-[#F8FBFC]'}>
                          <td className="p-3">{order.orderId}</td>
                          <td className="p-3">{order.customerName}</td>
                          <td className="p-3">{order.orderDate}</td>
                          <td className="p-3">{order.weightQuantity}</td>
                          <td className="p-3">{order.washType}</td>
                          <td className="p-3">{order.serviceType}</td>
                          <td className="p-3">{order.price}</td>
                          <td className="p-3">
                            <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                              {order.cancelReason}
                            </span>
                          </td>
                          <td className="p-3">{order.cancelDate}</td>
                          <td className="p-3">
                            <Button 
                              variant="outline" 
                              className="rounded-full bg-black text-white w-8 h-8 p-0"
                              onClick={() => viewOrderDetails(order.orderId)}
                            >
                              <span className="sr-only">View details</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                              </svg>
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={10} className="text-center py-8">
                          <p className="text-gray-500">No cancelled orders found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="md:hidden bg-white p-3">
              {filteredCancelledOrders.length > 0 ? (
                filteredCancelledOrders.map((order) => (
                  <div key={order.orderId} className="mb-4 p-3 bg-white rounded-lg border shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">Order ID: {order.orderId}</span>
                      <Button 
                        variant="outline" 
                        className="h-6 w-6 p-0 rounded-full"
                        onClick={() => viewOrderDetails(order.orderId)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Customer: <span className="font-medium">{order.customerName}</span></div>
                      <div>Date: <span className="font-medium">{order.orderDate}</span></div>
                      <div>Service: <span className="font-medium">{order.serviceType}</span></div>
                      <div>Price: <span className="font-medium">{order.price}</span></div>
                      <div>Cancel Reason: 
                        <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-red-100 text-red-800">
                          {order.cancelReason}
                        </span>
                      </div>
                      <div>Cancel Date: <span className="font-medium">{order.cancelDate}</span></div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No cancelled orders found</p>
                </div>
              )}
            </div>
          </div>
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
