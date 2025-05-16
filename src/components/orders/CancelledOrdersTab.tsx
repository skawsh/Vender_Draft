
import React from 'react';
import CancelledOrdersTable from './CancelledOrdersTable';
import CancelledOrdersCards from './CancelledOrdersCards';

interface CancelledOrdersTabProps {
  filteredCancelledOrders: any[];
  viewOrderDetails: (orderId: string) => void;
}

const CancelledOrdersTab: React.FC<CancelledOrdersTabProps> = ({ 
  filteredCancelledOrders, 
  viewOrderDetails 
}) => {
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3]">
      <div className="flex flex-wrap p-2 bg-[#0F7EA3] rounded-t-lg overflow-x-auto">
        <h3 className="text-white font-semibold px-4 py-2">Cancelled Orders</h3>
      </div>
      
      <CancelledOrdersTable 
        orders={filteredCancelledOrders} 
        viewOrderDetails={viewOrderDetails} 
      />
      
      <CancelledOrdersCards 
        orders={filteredCancelledOrders} 
        viewOrderDetails={viewOrderDetails} 
      />
    </div>
  );
};

export default CancelledOrdersTab;
