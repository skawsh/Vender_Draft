
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import OrderViewDialog from "@/components/orders/OrderViewDialog";
import RevenueSummaryTiles from '@/components/revenue/RevenueSummaryTiles';
import PendingPaymentsTable from '@/components/revenue/PendingPaymentsTable';
import PaymentHistoryTable from '@/components/revenue/PaymentHistoryTable';
import RevenueFilters from '@/components/revenue/RevenueFilters';
import { useRevenueData } from '@/components/revenue/useRevenueData';
import { Search } from 'lucide-react';

const Revenue = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedOrderId, setSelectedOrderId] = React.useState<string | null>(null);

  const {
    dateRange,
    setDateRange,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    dateFilter,
    setDateFilter,
    washTypeFilter,
    setWashTypeFilter,
    revenueSummary,
    getFilteredPendingPayments,
    getFilteredPaymentHistory
  } = useRevenueData();

  const handleViewOrderDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    setDialogOpen(true);
    toast.info(`Viewing details for order ${orderId}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <RevenueFilters
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          dateRange={dateRange}
          setDateRange={setDateRange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          washTypeFilter={washTypeFilter}
          setWashTypeFilter={setWashTypeFilter}
        />

        <RevenueSummaryTiles revenueSummary={revenueSummary} />
        
        <Tabs value={activeTab} className="mb-6">
          <TabsContent value="pending">
            <PendingPaymentsTable 
              payments={getFilteredPendingPayments()} 
              onViewDetails={handleViewOrderDetails}
            />
          </TabsContent>
          
          <TabsContent value="history">
            <PaymentHistoryTable 
              payments={getFilteredPaymentHistory()} 
              onViewDetails={handleViewOrderDetails}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      {selectedOrderId && (
        <OrderViewDialog 
          isOpen={dialogOpen} 
          onClose={() => setDialogOpen(false)} 
        />
      )}
    </div>
  );
};

export default Revenue;
