
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface OrderViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderViewDialog: React.FC<OrderViewDialogProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigateToRevenue = () => {
    // Navigate to the revenue section with order details
    navigate("/revenue");
    toast({
      title: "Opening Order Details",
      description: "Taking you to the revenue section with order details"
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-center mb-4">Please refer to the Admin Revenue section for order details.</p>
          <div className="flex justify-center space-x-2">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button onClick={handleNavigateToRevenue} className="bg-blue-500 hover:bg-blue-600">Go to Revenue</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderViewDialog;
