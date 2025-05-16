
import React from 'react';
import StatusFilter from '@/components/orders/StatusFilter';
import OrderCard from '@/components/orders/OrderCard';
import OrdersTable from '@/components/orders/OrdersTable';

interface CurrentOrdersTabProps {
  filteredOrders: any[];
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  statusOptions: string[];
  isFilterSectionOpen: boolean;
  setIsFilterSectionOpen: (isOpen: boolean) => void;
  renderActionButton: (order: any) => React.ReactNode;
  viewOrderDetails: (orderId: string) => void;
}

const CurrentOrdersTab: React.FC<CurrentOrdersTabProps> = ({
  filteredOrders,
  statusFilter,
  setStatusFilter,
  statusOptions,
  isFilterSectionOpen,
  setIsFilterSectionOpen,
  renderActionButton,
  viewOrderDetails,
}) => {
  return (
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
  );
};

export default CurrentOrdersTab;
