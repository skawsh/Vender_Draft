
import React from 'react';
import { Button } from "@/components/ui/button";

interface CancelledOrdersCardsProps {
  orders: any[];
  viewOrderDetails: (orderId: string) => void;
}

const CancelledOrdersCards: React.FC<CancelledOrdersCardsProps> = ({ orders, viewOrderDetails }) => {
  return (
    <div className="md:hidden bg-white p-3">
      {orders.length > 0 ? (
        orders.map((order) => (
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
  );
};

export default CancelledOrdersCards;
