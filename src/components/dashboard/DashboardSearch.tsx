
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface DashboardSearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearchSubmit: (e: React.FormEvent) => void;
}

const DashboardSearch: React.FC<DashboardSearchProps> = ({ searchQuery, setSearchQuery, handleSearchSubmit }) => {
  return (
    <div className="relative mb-6">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
          <div className="pl-4">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search for orders, services, status..."
            className="border-0 py-3 px-4 w-full focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="ghost" className="px-4">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DashboardSearch;
