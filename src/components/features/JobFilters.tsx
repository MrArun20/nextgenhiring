import { Search } from 'lucide-react';
import { FormInput } from '../ui/FormInput';
import { Select } from '../ui/Select';

interface JobFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  selectedShift: string;
  onShiftChange: (value: string) => void;
  cities: string[];
  shifts: string[];
}

export function JobFilters({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedShift,
  onShiftChange,
  cities,
  shifts,
}: JobFiltersProps) {
  const cityOptions = [
    { value: '', label: 'All Cities' },
    ...cities.map((city) => ({ value: city, label: city })),
  ];

  const shiftOptions = [
    { value: '', label: 'All Shifts' },
    ...shifts.map((shift) => ({ value: shift, label: shift })),
  ];

  return (
    <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-background/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
        </div>

        <Select
          options={cityOptions}
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
        />

        <Select
          options={shiftOptions}
          value={selectedShift}
          onChange={(e) => onShiftChange(e.target.value)}
        />
      </div>
    </div>
  );
}
