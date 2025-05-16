import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OngoingOrders from './OngoingOrders';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface DashboardTabsProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filteredOrders: any[];
  currentOrders: any[];
  getActionButton: (order: any) => React.ReactElement | null;
  handleViewOrderDetails: (orderId: string) => void;
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  activeFilter,
  setActiveFilter,
  filteredOrders,
  currentOrders,
  getActionButton,
  handleViewOrderDetails
}) => {
  return (
    <div className="bg-white dark:bg-card rounded-xl border shadow-sm overflow-hidden mb-6">
      <Tabs defaultValue={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <div className="flex border-b overflow-x-auto">
          <TabsList className="h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="current-orders" 
              className="data-[state=active]:bg-[#0F7EA3] data-[state=active]:text-white rounded-none px-4 sm:px-8 py-4 font-medium text-sm sm:text-base whitespace-nowrap"
            >
              Current orders
            </TabsTrigger>
            <TabsTrigger 
              value="orders-history" 
              className="data-[state=active]:bg-[#0F7EA3] data-[state=active]:text-white rounded-none px-4 sm:px-8 py-4 font-medium text-sm sm:text-base whitespace-nowrap"
            >
              Orders history
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="current-orders" className="m-0">
          <div className="p-2 sm:p-4 bg-white dark:bg-card">
            <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3] mb-4">
              <div className="flex flex-wrap p-2 bg-[#0F7EA3] rounded-t-lg overflow-x-auto">
                <Button 
                  onClick={() => setActiveFilter("all")}
                  className={`
                    ${activeFilter === "all" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  All
                </Button>
                <Button 
                  onClick={() => setActiveFilter("new")}
                  className={`
                    ${activeFilter === "new" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  New Orders
                </Button>
                <Button 
                  onClick={() => setActiveFilter("received")}
                  className={`
                    ${activeFilter === "received" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  Order Received
                </Button>
                <Button 
                  onClick={() => setActiveFilter("progress")}
                  className={`
                    ${activeFilter === "progress" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  Orders In Progress
                </Button>
                <Button 
                  onClick={() => setActiveFilter("ready")}
                  className={`
                    ${activeFilter === "ready" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  Ready for collect
                </Button>
                <Button 
                  onClick={() => setActiveFilter("collected")}
                  className={`
                    ${activeFilter === "collected" 
                      ? 'bg-[#0F7EA3] text-white border-2 border-white' 
                      : 'bg-white text-black border-2 border-white'} 
                    rounded-md px-4 py-2 m-1
                  `}
                >
                  Order collected
                </Button>
              </div>
            
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
                    {filteredOrders.length > 0 ? (
                      filteredOrders.map((order, index) => (
                        <TableRow key={order.id} className={index % 2 === 0 ? 'bg-[#E6EFF2]' : 'bg-[#F8FBFC]'}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-medium">
                            {order.orderId}
                          </TableCell>
                          <TableCell>{order.orderDate}</TableCell>
                          <TableCell>{order.weightQuantity}</TableCell>
                          <TableCell>{order.washType}</TableCell>
                          <TableCell
                            quickWash={order.serviceType === "Quick"}
                            standardWash={order.serviceType === "Standard"}
                          >
                            {order.serviceType}
                          </TableCell>
                          <TableCell>₹{order.price}</TableCell>
                          <TableCell>
                            <span className={cn(
                              "px-2 py-1 rounded-full text-xs font-medium",
                              order.status === "New Orders"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Order Received"
                                  ? "bg-purple-100 text-purple-700"
                                  : order.status === "Orders In Progress"
                                    ? "bg-amber-100 text-amber-700" 
                                    : order.status === "Ready for collect"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : order.status === "Order collected"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-100 text-gray-700"
                            )}>
                              {order.status}
                            </span>
                          </TableCell>
                          <TableCell className="flex items-center gap-2">
                            {getActionButton(order)}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button 
                                    variant="outline" 
                                    className="rounded-full bg-black text-white w-8 h-8 p-0"
                                    onClick={() => handleViewOrderDetails(order.orderId)}
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
                        <TableCell colSpan={9} className="text-center py-4">
                          No orders found matching your criteria
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="p-4 text-center">
              <Link to="/orders">
                <Button variant="outline" className="text-blue-600 hover:text-blue-700">
                  View All Orders
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="orders-history" className="m-0">
          <div className="p-2 sm:p-4 bg-white dark:bg-card">
            <div className="rounded-lg overflow-hidden border-2 border-[#0F7EA3] bg-[#0F7EA3]">
              <div className="flex flex-wrap p-2 bg-[#0F7EA3] rounded-t-lg overflow-x-auto">
                <h3 className="text-white font-semibold px-4 py-2">Order History - Completed Orders</h3>
              </div>
              
              <div className="overflow-x-auto bg-white">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#0F7EA3] border-none">
                      <TableHead className="text-white font-bold">S.No</TableHead>
                      <TableHead className="text-white font-bold">Order ID</TableHead>
                      <TableHead className="text-white font-bold">Order date</TableHead>
                      <TableHead className="text-white font-bold">Weight/ Quantity</TableHead>
                      <TableHead className="text-white font-bold">Wash Type</TableHead>
                      <TableHead className="text-white font-bold">Service Type</TableHead>
                      <TableHead className="text-white font-bold">Price (₹)</TableHead>
                      <TableHead className="text-white font-bold">Status</TableHead>
                      <TableHead className="text-white font-bold">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentOrders.filter(order => order.status === "Order collected").length > 0 ? (
                      currentOrders
                        .filter(order => order.status === "Order collected")
                        .map((order, index) => (
                          <TableRow key={order.id} className={index % 2 === 0 ? 'bg-[#E6EFF2]' : 'bg-[#F8FBFC]'}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium">
                              {order.orderId}
                            </TableCell>
                            <TableCell>{order.orderDate}</TableCell>
                            <TableCell>{order.weightQuantity}</TableCell>
                            <TableCell>{order.washType}</TableCell>
                            <TableCell
                              quickWash={order.serviceType === "Quick"}
                              standardWash={order.serviceType === "Standard"}
                            >
                              {order.serviceType}
                            </TableCell>
                            <TableCell>₹{order.price}</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                {order.status}
                              </span>
                            </TableCell>
                            <TableCell>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="outline" 
                                      className="rounded-full bg-black text-white w-8 h-8 p-0"
                                      onClick={() => handleViewOrderDetails(order.orderId)}
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
                        <TableCell colSpan={9} className="text-center py-4">
                          No orders found in history
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
