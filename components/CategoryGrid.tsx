import Link from 'next/link';
import { categories, getMachinesByCategory } from '@/data/inventory';

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-7">
      {categories.map((category) => {
        const count = getMachinesByCategory(category.slug).length;

        return (
          <Link
            key={category.slug}
            href={`/inventory/${category.slug}`}
            className="rounded-none border border-[#333] bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
          >
            <div className="mb-4 text-4xl">{category.icon}</div>
            <div className="font-oswald text-sm uppercase tracking-wider text-text-primary">
              {category.name}
            </div>
            <div className="mt-2 font-inter text-xs text-steel">{count} units</div>
          </Link>
        );
      })}
    </div>
  );
}
