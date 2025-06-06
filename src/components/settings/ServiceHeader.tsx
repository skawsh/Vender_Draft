
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Edit, Trash2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ServiceHeaderProps {
  service: {
    id: string;
    name: string;
    isOpen: boolean;
    active: boolean;
    subServices: any[];
  };
  toggleService: (serviceId: string) => void;
  toggleEditService: (serviceId: string) => void;
  deleteService: (serviceId: string) => void;
  toggleServiceActive: (serviceId: string) => void;
}

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  service,
  toggleService,
  toggleEditService,
  deleteService,
  toggleServiceActive
}) => {
  return (
    <div 
      className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50" 
      onClick={() => toggleService(service.id)}
    >
      <div className="flex items-center gap-2">
        {service.isOpen ? 
          <ChevronDown className="h-5 w-5 text-gray-500" /> : 
          <ChevronRight className="h-5 w-5 text-gray-500" />
        }
        <div>
          <h3 className="font-medium">{service.name}</h3>
          <p className="text-xs text-gray-500">
            {service.subServices.length} subservice{service.subServices.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div 
          className="flex items-center gap-2 mr-2" 
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-sm text-gray-500">{service.active ? 'Active' : 'Inactive'}</span>
          <Switch 
            checked={service.active} 
            onCheckedChange={() => toggleServiceActive(service.id)}
          />
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={e => {
            e.stopPropagation();
            toggleEditService(service.id);
          }}
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-red-500" 
          onClick={e => {
            e.stopPropagation();
            deleteService(service.id);
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
