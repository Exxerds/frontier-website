import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';
import { formatPrice, type Machine } from '@/data/inventory';

type MachineCardProps = {
  machine: Machine;
};

export default function MachineCard({ machine }: MachineCardProps) {
  return (
    <Link href={`/inventory/${machine.categorySlug}/${machine.slug}`}>
      <div className="group rounded-none border border-[#333] bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent">
        <div className="relative aspect-video overflow-hidden bg-[#2a2a2a]">
          <ImageWithFallback
            src={machine.images[0]}
            alt={machine.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 bg-accent px-2 py-1 font-oswald text-xs uppercase text-white">
            {machine.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="mb-2 font-oswald text-lg uppercase leading-tight text-text-primary">
            {machine.title}
          </h3>

          <div className="mb-3 font-oswald text-2xl text-accent">
            {formatPrice(machine.price)}
          </div>

          <div className="mb-4 flex flex-wrap gap-4 font-inter text-xs text-steel">
            {machine.hours ? <span>⏱ {machine.hours.toLocaleString()} hrs</span> : null}
            {machine.year ? <span>📅 {machine.year}</span> : null}
            {machine.serialNumber ? <span>S/N: {machine.serialNumber}</span> : null}
          </div>

          <div className="border border-accent py-2 text-center font-oswald text-sm uppercase tracking-wider text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
}
