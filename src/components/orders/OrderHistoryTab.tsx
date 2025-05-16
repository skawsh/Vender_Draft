
import React from 'react';
import HistoryOrderCard from '@/components/orders/HistoryOrderCard';
import OrderHistoryTable from '@/components/orders/OrderHistoryTable';

interface OrderHistoryTabProps {
  filteredOrderHistory: any[];
  viewOrderDetails: (orderId: string) => void;
}

const OrderHistoryTab: React.FC<OrderHistoryTabProps> = ({ filteredOrderHistory, viewOrderDetails }) => {
  return (
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
  );
};

export default OrderHistoryTab;
