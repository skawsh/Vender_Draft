import { useState, useEffect } from 'react';
import { toast } from "sonner";
import React from 'react';

// Initial orders data
const initialCurrentOrders = [
  {
    id: 1,
    orderId: "ORD-1001",
    orderDate: "01/02/25",
    weightQuantity: "5Kg",
    washType: "Wash & Fold",
    serviceType: "Standard",
    price: 395,
    status: "New Orders"
  },
  {
    id: 2,
    orderId: "ORD-1002",
    orderDate: "01/02/25",
    weightQuantity: "2 pcs",
    washType: "Dry clean",
    serviceType: "Quick",
    price: 300,
    status: "New Orders"
  },
  {
    id: 3,
    orderId: "ORD-1003",
    orderDate: "01/02/25",
    weightQuantity: "2.3Kg",
    washType: "Wash & Iron",
    serviceType: "Both",
    price: 182,
    status: "New Orders"
  },
  {
    id: 4,
    orderId: "ORD-1004",
    orderDate: "02/02/25",
    weightQuantity: "3.5Kg",
    washType: "Wash & Fold",
    serviceType: "Express",
    price: 450,
    status: "Order Received"
  },
  {
    id: 5,
    orderId: "ORD-1005",
    orderDate: "02/02/25",
    weightQuantity: "4Kg",
    washType: "Wash & Iron",
    serviceType: "Standard",
    price: 320,
    status: "Order Received"
  },
  {
    id: 6,
    orderId: "ORD-1006",
    orderDate: "03/02/25",
    weightQuantity: "3Kg",
    washType: "Wash & Fold",
    serviceType: "Express",
    price: 380,
    status: "Orders In Progress"
  },
  {
    id: 7,
    orderId: "ORD-1007",
    orderDate: "03/02/25",
    weightQuantity: "2Kg",
    washType: "Wash & Iron",
    serviceType: "Standard",
    price: 150,
    status: "Orders In Progress"
  },
  {
    id: 8,
    orderId: "ORD-1008",
    orderDate: "04/02/25",
    weightQuantity: "2.7Kg",
    washType: "Wash & Iron",
    serviceType: "Standard",
    price: 215,
    status: "Order collected"
  },
  {
    id: 9,
    orderId: "ORD-1009",
    orderDate: "04/02/25",
    weightQuantity: "3 pcs",
    washType: "Dry clean",
    serviceType: "Premium",
    price: 410,
    status: "Order collected"
  },
  {
    id: 10,
    orderId: "ORD-1010",
    orderDate: "05/02/25",
    weightQuantity: "4.2Kg",
    washType: "Wash & Fold",
    serviceType: "Express",
    price: 480,
    status: "Order collected"
  }
];

const initialDriverAssignments = [
  {
    id: 1,
    driverName: "Deepak",
    orderId: "ORD-001",
    action: "drop",
    location: "your studio",
    time: "10:30 AM",
    address: "123 Main St"
  },
  {
    id: 2,
    driverName: "Saiteja",
    orderId: "ORD-005",
    action: "collect",
    location: "your studio",
    time: "11:45 AM",
    address: "456 Oak Ave"
  }
];

export const useDashboard = () => {
  const [currentOrders, setCurrentOrders] = useState(initialCurrentOrders);
  const [isStudioActive, setIsStudioActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("new");
  const [selectedDateFilter, setSelectedDateFilter] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [driverAssignments, setDriverAssignments] = useState(initialDriverAssignments);

  useEffect(() => {
    setActiveFilter("new");
    
    const handleNewOrder = (event: CustomEvent) => {
      if (event.detail?.orderData) {
        const newOrder = event.detail.orderData;
        setCurrentOrders(prevOrders => [
          {
            id: prevOrders.length + 1,
            ...newOrder
          },
          ...prevOrders
        ]);
        
        toast.success(`New Order ${newOrder.orderId} Received`, {
          description: `${newOrder.washType} - ${newOrder.serviceType} service`
        });
      }
    };
    
    window.addEventListener('newOrder', handleNewOrder as EventListener);
    
    return () => {
      window.removeEventListener('newOrder', handleNewOrder as EventListener);
    };
  }, []);

  const handleViewOrderDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    setDialogOpen(true);
  };

  const handleMarkReceived = (orderId: string) => {
    toast.success(`Order ${orderId} marked as received`, {
      description: "Order status updated successfully."
    });
    
    setCurrentOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId
          ? { ...order, status: "Order Received" }
          : order
      )
    );
  };

  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    toast.success(`Order ${orderId} status updated to ${newStatus}`, {
      description: "Order status updated successfully."
    });
    
    setCurrentOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  const handleStudioStatusChange = (newStatus: boolean) => {
    setIsStudioActive(newStatus);
    toast.success(`Studio ${newStatus ? 'activated' : 'deactivated'} successfully`, {
      description: `Your laundry studio is now ${newStatus ? 'active' : 'inactive'}.`
    });
  };

  const handleFilterChange = (filterType: string, value?: any) => {
    setSelectedDateFilter(filterType);
    
    toast.success(`Filter applied: ${filterType}`, {
      description: "Orders filtered by selected criteria."
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery === "08081997") {
      setDriverAssignments(prev => prev.filter(assignment => assignment.driverName !== "Deepak"));
    } else if (searchQuery === "08081998") {
      setDriverAssignments(prev => prev.filter(assignment => assignment.driverName !== "Saiteja"));
    } else if (searchQuery === "08081999") {
      const kavyaExists = driverAssignments.some(
        assignment => assignment.driverName === "Kavya" && assignment.orderId === "ORD-008"
      );
      
      if (!kavyaExists) {
        setDriverAssignments(prev => [...prev, {
          id: prev.length + 1,
          driverName: "Kavya",
          orderId: "ORD-008",
          action: "collect",
          location: "your studio",
          time: "1:30 PM",
          address: "789 Pine St"
        }]);
      }
    } else if (searchQuery === "08082000") {
      const eswariExists = driverAssignments.some(
        assignment => assignment.driverName === "Eswari" && assignment.orderId === "OED-012"
      );
      
      if (!eswariExists) {
        setDriverAssignments(prev => [...prev, {
          id: prev.length + 1,
          driverName: "Eswari",
          orderId: "OED-012",
          action: "drop",
          location: "your studio",
          time: "2:15 PM",
          address: "321 Elm St"
        }]);
      }
    }
    
    setSearchQuery("");
  };

  const filteredBySearch = currentOrders.filter(order => 
    order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.washType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.price.toString().includes(searchQuery)
  );

  const filteredOrders = activeFilter === "all" 
    ? filteredBySearch 
    : filteredBySearch.filter(order => {
        if (activeFilter === "new") return order.status === "New Orders";
        if (activeFilter === "received") return order.status === "Order Received";
        if (activeFilter === "progress") return order.status === "Orders In Progress";
        if (activeFilter === "ready") return order.status === "Ready for collect";
        if (activeFilter === "collected") return order.status === "Order collected";
        return true;
      });

  const getActionButton = (order: any): React.ReactNode => {
    switch(order.status) {
      case "New Orders":
        return (
          <button 
            className="bg-[#D1FFCE] text-black font-medium text-xs sm:text-sm py-1 px-2 sm:px-3 h-auto mr-2 rounded"
            onClick={() => handleUpdateStatus(order.orderId, "Order Received")}
          >
            Mark Received
          </button>
        );
      case "Order Received":
        return (
          <button 
            className="bg-[#D1FFCE] text-black font-medium text-xs sm:text-sm py-1 px-2 sm:px-3 h-auto mr-2 rounded"
            onClick={() => handleUpdateStatus(order.orderId, "Orders In Progress")}
          >
            Mark InProgress
          </button>
        );
      case "Orders In Progress":
        return (
          <button 
            className="bg-[#D1FFCE] text-black font-medium text-xs sm:text-sm py-1 px-2 sm:px-3 h-auto mr-2 rounded"
            onClick={() => handleUpdateStatus(order.orderId, "Ready for collect")}
          >
            Ready For Collect
          </button>
        );
      case "Ready for collect":
        return (
          <button 
            className="bg-[#D1FFCE] text-black font-medium text-xs sm:text-sm py-1 px-2 sm:px-3 h-auto mr-2 rounded"
            onClick={() => handleUpdateStatus(order.orderId, "Order collected")}
          >
            Order collected
          </button>
        );
      case "Order collected":
        return null;
      default:
        return null;
    }
  };

  return {
    currentOrders,
    isStudioActive,
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    selectedDateFilter,
    dialogOpen,
    setDialogOpen,
    selectedOrderId,
    driverAssignments,
    handleViewOrderDetails,
    handleMarkReceived,
    handleUpdateStatus,
    handleStudioStatusChange,
    handleFilterChange,
    handleSearchSubmit,
    filteredOrders,
    getActionButton
  };
};
