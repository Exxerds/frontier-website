'use client';

import { useMemo, useState } from 'react';
import { ArrowUpDown, Filter, Search } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import MachineCardClient from '@/components/MachineCardClient';
import { categories, machines } from '@/data/inventory';

const sortOptions = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price Low→High' },
  { value: 'price-desc', label: 'Price High→Low' },
  { value: 'year-desc', label: 'Year Newest' },
  { value: 'year-asc', label: 'Year Oldest' },
  { value: 'hours-asc', label: 'Hours Low→High' },
] as const;

export default function InventoryPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sort, setSort] = useState<(typeof sortOptions)[number]['value']>('default');

  const hasActiveFilters = search !== '' || selectedCategory !== 'all' || sort !== 'default';

  const filteredMachines = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = machines.filter((machine) => {
      const matchesCategory =
        selectedCategory === 'all' || machine.categorySlug === selectedCategory;

      const haystack = [
        machine.title,
        machine.make,
        machine.model,
        machine.category,
        machine.year.toString(),
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 || haystack.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        case 'hours-asc': {
          const aHours = a.hours ?? Number.MAX_SAFE_INTEGER;
          const bHours = b.hours ?? Number.MAX_SAFE_INTEGER;
          return aHours - bHours;
        }
        default:
          return 0;
      }
    });
  }, [search, selectedCategory, sort]);

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory('all');
    setSort('default');
  };

  return (
    <div className="bg-background py-12">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Inventory' }]} />

        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-oswald text-4xl uppercase tracking-wider text-text-primary md:text-5xl">
              All Inventory
            </h1>
            <p className="mt-2 font-inter text-steel">
              Showing {filteredMachines.length} of {machines.length} units
            </p>
          </div>
        </div>

        <div className="sticky top-[73px] z-30 mb-10 border border-[#333] bg-[#161616] p-4 shadow-panel">
          <div className="mb-4 inline-flex items-center gap-2 font-oswald text-sm uppercase tracking-wider text-accent">
            <Filter size={16} />
            Inventory Filters
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
            <div>
              <label className="mb-2 block font-inter text-xs uppercase tracking-[0.2em] text-steel">
                Search
              </label>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by make, model..."
                  className="h-[46px] w-full border border-[#444] bg-[#1a1a1a] py-3 pl-10 pr-4 font-inter text-sm text-[#f5f5f0] placeholder:text-steel focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-inter text-xs uppercase tracking-[0.2em] text-steel">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="h-[46px] w-full border border-[#444] bg-[#1a1a1a] px-4 py-3 font-inter text-sm text-[#f5f5f0] focus:border-accent focus:outline-none"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-inter text-xs uppercase tracking-[0.2em] text-steel">
                Sort
              </label>
              <div className="relative">
                <ArrowUpDown size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel" />
                <select
                  value={sort}
                  onChange={(event) =>
                    setSort(event.target.value as (typeof sortOptions)[number]['value'])
                  }
                  className="h-[46px] w-full border border-[#444] bg-[#1a1a1a] py-3 pl-10 pr-4 font-inter text-sm text-[#f5f5f0] focus:border-accent focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-end">
              {hasActiveFilters ? (
                <button type="button" onClick={resetFilters} className="secondary-button w-full lg:w-auto">
                  Reset Filters
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {filteredMachines.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMachines.map((machine) => (
              <MachineCardClient key={machine.slug} machine={machine} />
            ))}
          </div>
        ) : (
          <div className="border border-[#333] bg-surface p-10 text-center">
            <h2 className="font-oswald text-2xl uppercase tracking-wider text-text-primary">
              No units match your search.
            </h2>
            <button type="button" onClick={resetFilters} className="primary-button mt-6">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
