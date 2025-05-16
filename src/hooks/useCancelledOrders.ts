
import { useState } from 'react';

// Mock data for cancelled orders
const cancelledOrdersData = [
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

export const useCancelledOrders = (searchQuery: string) => {
  const [cancelledOrders] = useState(cancelledOrdersData);

  // Function to filter cancelled orders based on search query
  const filteredCancelledOrders = cancelledOrders.filter(order => 
    searchQuery === "" || 
    order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    cancelledOrders,
    filteredCancelledOrders
  };
};
