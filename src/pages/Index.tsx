
import React from 'react';
import OrderDetailsDialog from '@/components/orders/OrderDetailsDialog';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import OrderStatistics from '@/components/dashboard/OrderStatistics';
import DashboardSearch from '@/components/dashboard/DashboardSearch';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import OrderAssignments from '@/components/dashboard/OrderAssignments';
import { useDashboard } from '@/hooks/useDashboard';

const Index = () => {
  const {
    currentOrders,
    isStudioActive,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    dialogOpen,
    setDialogOpen,
    selectedOrderId,
    driverAssignments,
    handleViewOrderDetails,
    handleStudioStatusChange,
    handleFilterChange,
    handleSearchSubmit,
    filteredOrders,
    getActionButton
  } = useDashboard();

  return (
    <div className="container mx-auto p-3 md:p-6">
      <DashboardHeader 
        isStudioActive={isStudioActive} 
        handleStudioStatusChange={handleStudioStatusChange} 
      />

      <OrderStatistics handleFilterChange={handleFilterChange} />
      
      <DashboardSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
      />
      
      <DashboardTabs 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredOrders={filteredOrders}
        currentOrders={currentOrders}
        getActionButton={(order) => getActionButton(order) as React.ReactElement}
        handleViewOrderDetails={handleViewOrderDetails}
      />
      
      <OrderAssignments driverAssignments={driverAssignments} />
      
      <OrderDetailsDialog 
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        orderId={selectedOrderId}
      />
    </div>
  );
};

export default Index;
