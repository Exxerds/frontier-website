import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';
import { formatPrice, type Machine } from '@/data/inventory';

type MachineCardProps = {
  machine: Machine;
};

export default function MachineCard({ machine }: MachineCardProps) {
  return (
    <Link
      href={`/inventory/${machine.categorySlug}/${machine.slug}`}
      className="block h-full min-w-0"
    >
      <div className="group flex h-full min-w-0 flex-col rounded-none border border-[#333] bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent">
        <div className="relative aspect-video shrink-0 overflow-hidden bg-[#2a2a2a]">
          <ImageWithFallback
            src={machine.images[0]}
            alt={machine.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate bg-accent px-2 py-1 font-oswald text-xs uppercase text-white">
            {machine.category}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4">
          <h3 className="mb-2 min-h-[2.25rem] break-words font-oswald text-lg uppercase leading-tight text-text-primary line-clamp-2">
            {machine.title}
          </h3>

          <div className="mb-3 font-oswald text-2xl text-accent">
            {formatPrice(machine.price)}
          </div>

          <div className="mb-4 flex min-w-0 flex-wrap gap-x-4 gap-y-2 font-inter text-xs text-steel">
            {machine.hours ? (
              <span className="whitespace-nowrap">
                ⏱ {machine.hours.toLocaleString()} hrs
              </span>
            ) : null}
            {machine.year ? (
              <span className="whitespace-nowrap">📅 {machine.year}</span>
            ) : null}
            {machine.serialNumber ? (
              <span className="min-w-0 break-all">
                S/N: {machine.serialNumber}
              </span>
            ) : null}
          </div>

          <div className="mt-auto border border-accent py-2 text-center font-oswald text-sm uppercase tracking-wider text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
}