
import React from 'react';
import { NotificationsDropdown } from '@/components/NotificationsDropdown';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Switch } from '@/components/ui/switch';
import { toast } from "sonner";

interface DashboardHeaderProps {
  isStudioActive: boolean;
  handleStudioStatusChange: (newStatus: boolean) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isStudioActive, handleStudioStatusChange }) => {
  return (
    <header className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">Skawsh Laundry Studio Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your laundry management system</p>
      </div>
      <div className="flex items-center gap-3">
        <NotificationsDropdown />
        <span className={`text-sm font-medium ${isStudioActive ? 'text-green-600' : 'text-red-600'}`}>
          Studio {isStudioActive ? 'Active' : 'Inactive'}
        </span>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">{isStudioActive ? "On" : "Off"}</span>
              <Switch 
                checked={isStudioActive} 
                className={isStudioActive ? "bg-green-500" : "bg-red-500"}
              />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-[90vw] w-[450px]">
            <AlertDialogHeader>
              <AlertDialogTitle>
                {isStudioActive ? "Deactivate Studio?" : "Activate Studio?"}
              </AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to {isStudioActive ? "deactivate" : "activate"} studio? 
                {isStudioActive ? " This will temporarily stop accepting new orders." : " This will allow new orders to come in."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-col sm:flex-row gap-2">
              <AlertDialogCancel className="mt-0">Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={() => handleStudioStatusChange(!isStudioActive)}
                className={isStudioActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
              >
                Yes
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  );
};

export default DashboardHeader;
