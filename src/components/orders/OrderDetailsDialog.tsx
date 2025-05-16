
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { X } from "lucide-react";

interface OrderDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
}

const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({ 
  isOpen, 
  onClose,
  orderId 
}) => {
  const navigate = useNavigate();

  const handleNavigateToRevenue = () => {
    navigate("/revenue");
    toast.info("Opening Order Details", {
      description: "Taking you to the revenue section with order details"
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-lg p-6 bg-white">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle className="text-xl font-semibold text-left">Order Details</DialogTitle>
          <Button variant="ghost" className="h-8 w-8 p-0 rounded-full" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="py-4">
          <p className="text-center mb-6 text-gray-700">
            Please refer to the Admin Revenue section for order details.
          </p>
          <div className="flex justify-center gap-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="px-8 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-100"
            >
              Close
            </Button>
            <Button 
              onClick={handleNavigateToRevenue} 
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              Go to Revenue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsDialog;
