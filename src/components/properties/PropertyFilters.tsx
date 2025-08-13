'use client';

import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import { HAIFA_NEIGHBORHOODS, PROPERTY_TYPES } from '@/lib/constants';
import { Filter, Grid3x3, List, RotateCcw, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface PropertyFiltersProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedNeighborhood: string;
  setSelectedNeighborhood: (neighborhood: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  resultsCount: number;
}

const PropertyFilters = ({
  selectedType,
  setSelectedType,
  selectedNeighborhood,
  setSelectedNeighborhood,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  resultsCount
}: PropertyFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sortOptions = [
    { value: 'date', label: 'תאריך - חדש לישן' },
    { value: 'price', label: 'מחיר - גבוה לנמוך' },
    { value: 'days', label: 'זמן למכירה - קצר לארוך' }
  ];

  const handleReset = () => {
    setSelectedType('all');
    setSelectedNeighborhood('all');
    setSortBy('date');
  };

  const hasActiveFilters = selectedType !== 'all' || selectedNeighborhood !== 'all' || sortBy !== 'date';

  // Create dropdown items for filters
  const typeDropdownItems = PROPERTY_TYPES.map(type => ({
    id: type.value,
    label: type.label,
    onClick: () => setSelectedType(type.value)
  }));

  const neighborhoodDropdownItems = HAIFA_NEIGHBORHOODS.map(n => ({
    id: n.value,
    label: n.label,
    onClick: () => setSelectedNeighborhood(n.value)
  }));

  const sortDropdownItems = sortOptions.map(option => ({
    id: option.value,
    label: option.label,
    onClick: () => setSortBy(option.value)
  }));

  return (
    <section className="sticky top-0 z-30 bg-white shadow-lg py-4">
      <div className="container">
        <Card variant="default" className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Results Count */}
              <Badge variant="primary" size="lg">
                {resultsCount} נכסים נמצאו
              </Badge>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="ghost"
                size="sm"
                icon={SlidersHorizontal}
                onClick={() => setIsExpanded(!isExpanded)}
                className="lg:hidden"
              >
                סינון
                {hasActiveFilters && (
                  <Badge variant="danger" size="xs" className="mr-2">
                    {[selectedType !== 'all', selectedNeighborhood !== 'all', sortBy !== 'date'].filter(Boolean).length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                size="sm"
                icon={Grid3x3}
                onClick={() => setViewMode('grid')}
              />
              <Button
                variant={viewMode === 'list' ? 'primary' : 'ghost'}
                size="sm"
                icon={List}
                onClick={() => setViewMode('list')}
              />
            </div>
          </div>

          {/* Filters (Desktop always visible, Mobile collapsible) */}
          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Property Type Dropdown */}
              <div className="flex-1">
                <Dropdown
                  trigger={
                    <Button variant="outline" fullWidth className="justify-between">
                      <span className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        {PROPERTY_TYPES.find(t => t.value === selectedType)?.label || 'סוג נכס'}
                      </span>
                    </Button>
                  }
                  items={typeDropdownItems}
                />
              </div>

              {/* Neighborhood Dropdown */}
              <div className="flex-1">
                <Dropdown
                  trigger={
                    <Button variant="outline" fullWidth className="justify-between">
                      <span className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        {HAIFA_NEIGHBORHOODS.find(n => n.value === selectedNeighborhood)?.label || 'שכונה'}
                      </span>
                    </Button>
                  }
                  items={neighborhoodDropdownItems}
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex-1">
                <Dropdown
                  trigger={
                    <Button variant="outline" fullWidth className="justify-between">
                      <span className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        {sortOptions.find(s => s.value === sortBy)?.label || 'מיון'}
                      </span>
                    </Button>
                  }
                  items={sortDropdownItems}
                />
              </div>

              {/* Reset Button */}
              {hasActiveFilters && (
                <Button
                  variant="danger"
                  icon={RotateCcw}
                  onClick={handleReset}
                >
                  נקה הכל
                </Button>
              )}
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedType !== 'all' && (
                  <Badge variant="primary" icon={X} onClick={() => setSelectedType('all')}>
                    {PROPERTY_TYPES.find(t => t.value === selectedType)?.label}
                  </Badge>
                )}
                {selectedNeighborhood !== 'all' && (
                  <Badge variant="primary" icon={X} onClick={() => setSelectedNeighborhood('all')}>
                    {HAIFA_NEIGHBORHOODS.find(n => n.value === selectedNeighborhood)?.label}
                  </Badge>
                )}
                {sortBy !== 'date' && (
                  <Badge variant="primary" icon={X} onClick={() => setSortBy('date')}>
                    {sortOptions.find(s => s.value === sortBy)?.label}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PropertyFilters;