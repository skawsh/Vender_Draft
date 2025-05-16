import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  return <Dialog open={isOpen} onOpenChange={onClose}>
      
    </Dialog>;
};
export default OrderDetailsDialog;