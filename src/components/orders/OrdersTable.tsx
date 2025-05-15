
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import OrderViewDialog from './OrderViewDialog';

interface OrdersTableProps {
  orders: any[];
  getActionButton: (order: any) => React.ReactNode;
  viewOrderDetails: (orderId: string) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, getActionButton, viewOrderDetails }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  
  const handleViewDetails = (orderId: string) => {
    setSelectedOrderId(orderId);
    setDialogOpen(true);
    // Still call the original function for any side effects it might have
    viewOrderDetails(orderId);
  };

  return (
    <div className="hidden md:block">
      <div className="overflow-x-auto bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0F7EA3] border-none">
              <TableHead className="text-white font-bold">Sl No</TableHead>
              <TableHead className="text-white font-bold">Order ID</TableHead>
              <TableHead className="text-white font-bold">Order date</TableHead>
              <TableHead className="text-white font-bold">Weight/ Quantity</TableHead>
              <TableHead className="text-white font-bold">Wash Type</TableHead>
              <TableHead className="text-white font-bold">Service Type</TableHead>
              <TableHead className="text-white font-bold">Price</TableHead>
              <TableHead className="text-white font-bold">Status</TableHead>
              <TableHead className="text-white font-bold">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <TableRow key={order.id} className={index % 2 === 0 ? 'bg-[#E6EFF2]' : 'bg-[#F8FBFC]'}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.weightQuantity}</TableCell>
                  <TableCell>{order.washType}</TableCell>
                  <TableCell>{order.serviceType}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell className="flex items-center space-x-2">
                    {getActionButton(order)}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="rounded-full bg-black text-white w-8 h-8 p-0"
                            onClick={() => handleViewDetails(order.orderId)}
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View order details</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  <p className="text-gray-500">No orders found</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <OrderViewDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
      />
    </div>
  );
};

export default OrdersTable;
