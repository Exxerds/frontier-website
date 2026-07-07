import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import MachineCard from '@/components/MachineCard';
import {
  categories,
  getCategoryBySlug,
  getMachinesByCategory,
} from '@/data/inventory';

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return {
      title: 'Inventory',
    };
  }

  return {
    title: `${category.name} For Sale`,
    description: `Browse ${category.name.toLowerCase()} currently available at Frontier Heavy Equipment.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const categoryMachines = getMachinesByCategory(category.slug);
  const otherCategories = categories.filter((item) => item.slug !== category.slug);

  return (
    <div className="bg-background py-12">
      <div className="container-shell">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Inventory', href: '/inventory' },
            { label: category.name },
          ]}
        />

        <div className="mb-10">
          <h1 className="font-oswald text-4xl uppercase tracking-wider text-text-primary md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-2 font-inter text-steel">
            {categoryMachines.length} units available
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categoryMachines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>

          <aside className="h-fit border border-[#333] bg-surface p-6">
            <h2 className="mb-4 font-oswald text-xl uppercase tracking-wider text-text-primary">
              Other Categories
            </h2>
            <div className="space-y-3">
              {otherCategories.map((item) => {
                const count = getMachinesByCategory(item.slug).length;

                return (
                  <Link
                    key={item.slug}
                    href={`/inventory/${item.slug}`}
                    className="flex items-center justify-between border border-[#333] bg-[#1e1e1e] px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="font-inter text-sm text-text-primary">{item.name}</span>
                    <span className="font-oswald text-sm text-accent">{count}</span>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
