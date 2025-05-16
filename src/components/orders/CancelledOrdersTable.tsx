
import React from 'react';
import { Button } from "@/components/ui/button";

interface CancelledOrdersTableProps {
  orders: any[];
  viewOrderDetails: (orderId: string) => void;
}

const CancelledOrdersTable: React.FC<CancelledOrdersTableProps> = ({ orders, viewOrderDetails }) => {
  return (
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
            {orders.length > 0 ? (
              orders.map((order, index) => (
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
  );
};

export default CancelledOrdersTable;
