
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PaymentHistory {
  id: number;
  orderId: string;
  customerName: string;
  paymentDate: string;
  service: string;
  washType: string;
  amount: number;
}

interface PaymentHistoryTableProps {
  payments: PaymentHistory[];
  onViewDetails: (orderId: string) => void;
}

const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({ payments, onViewDetails }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-[#F2FCE2]">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#0F7EA3] border-none">
            <TableHead className="text-white font-bold">S.No</TableHead>
            <TableHead className="text-white font-bold">Order ID</TableHead>
            <TableHead className="text-white font-bold">Customer</TableHead>
            <TableHead className="text-white font-bold">Payment Date</TableHead>
            <TableHead className="text-white font-bold">Wash Type</TableHead>
            <TableHead className="text-white font-bold">Service</TableHead>
            <TableHead className="text-white font-bold">Amount</TableHead>
            <TableHead className="text-white font-bold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <TableRow key={payment.id} className={index % 2 === 0 ? 'bg-[#E6EFF2]' : 'bg-[#F8FBFC]'}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{payment.orderId}</TableCell>
                <TableCell>{payment.customerName}</TableCell>
                <TableCell>{payment.paymentDate}</TableCell>
                <TableCell>{payment.service}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    payment.washType.includes("Quick") ? "bg-amber-50 text-amber-600" : 
                    payment.washType.includes("Standard") ? "bg-blue-50 text-blue-600" : 
                    "bg-purple-50 text-purple-600"
                  }`}>
                    {payment.washType}
                  </span>
                </TableCell>
                <TableCell>₹{payment.amount}</TableCell>
                <TableCell className="text-right">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => onViewDetails(payment.orderId)}
                          className="bg-[#D3E4FD] border-[#A3C4FD] text-[#0F7EA3] hover:bg-[#8B5CF6] hover:text-white"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Order Detail
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
              <TableCell colSpan={8} className="text-center py-8">
                <p className="text-gray-500">No payment history found</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentHistoryTable;
