import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, Hash, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import InquiryForm from '@/components/InquiryForm';
import MachineGallery from '@/components/MachineGallery';
import QuickSpecs from '@/components/QuickSpecs';
import {
  categories,
  getCategoryBySlug,
  getMachineBySlug,
  machines,
  formatPrice,
} from '@/data/inventory';

type MachinePageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return machines.map((machine) => ({
    category: machine.categorySlug,
    slug: machine.slug,
  }));
}

export function generateMetadata({ params }: MachinePageProps): Metadata {
  const machine = getMachineBySlug(params.slug);

  if (!machine) {
    return {
      title: 'Unit Not Found',
    };
  }

  return {
    title: `${machine.title} For Sale`,
    description: machine.description.replace(/\s+/g, ' ').slice(0, 160),
  };
}

export default function MachinePage({ params }: MachinePageProps) {
  const machine = getMachineBySlug(params.slug);
  const category = getCategoryBySlug(params.category);

  if (!machine || !category || machine.categorySlug !== category.slug) {
    notFound();
  }

  return (
    <div className="bg-background py-10">
      <div className="container-shell">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Inventory', href: '/inventory' },
            { label: category.name, href: `/inventory/${category.slug}` },
            { label: machine.title },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <MachineGallery images={machine.images} title={machine.title} />

            <section>
              <div className="flex flex-col gap-4 border-b border-[#2a2a2a] pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h1 className="font-oswald text-3xl uppercase tracking-wider text-[#f5f5f0] md:text-4xl">
                    {machine.title}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-oswald text-3xl text-accent">
                    {formatPrice(machine.price)}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-6 font-inter text-sm text-steel">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-accent" />
                  Year: {machine.year}
                </span>
                {machine.hours ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} className="text-accent" />
                    Hours: {machine.hours.toLocaleString()}
                  </span>
                ) : null}
                {machine.separatorHours ? (
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} className="text-accent" />
                    Sep. Hours: {machine.separatorHours.toLocaleString()}
                  </span>
                ) : null}
                {machine.serialNumber ? (
                  <span className="inline-flex items-center gap-2">
                    <Hash size={16} className="text-accent" />
                    S/N: {machine.serialNumber}
                  </span>
                ) : null}
              </div>
            </section>

            <section>
              <div className="mb-4 border-l-4 border-accent pl-4">
                <h2 className="font-oswald text-2xl uppercase tracking-wider text-text-primary">
                  Quick Specs
                </h2>
              </div>
              <QuickSpecs specs={machine.specs} />
            </section>

            <section>
              <div className="mb-4 border-l-4 border-accent pl-4">
                <h2 className="font-oswald text-2xl uppercase tracking-wider text-text-primary">
                  Description
                </h2>
              </div>
              <div className="space-y-4 font-inter leading-relaxed text-steel">
                {machine.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <div className="shadow-panel">
                <div className="bg-accent px-6 py-4">
                  <div className="font-oswald text-white uppercase tracking-wider">
                    Request Info on This Unit
                  </div>
                  <div className="mt-1 font-inter text-sm text-white/80">{machine.title}</div>
                </div>
                <div className="bg-surface p-6">
                  <InquiryForm machineTitle={machine.title} />
                </div>
              </div>

              <div className="border-t-2 border-accent bg-forest p-4">
                <div className="font-oswald text-sm uppercase text-white">
                  💰 Financing Available
                </div>
                <p className="mt-2 font-inter text-xs text-white/70">
                  Ask us about flexible payment options for qualified buyers.
                </p>
              </div>

              <div className="border border-[#333] bg-[#1e1e1e] p-4">
                <div className="mb-2 font-oswald text-sm uppercase text-accent">
                  Call Us Directly
                </div>
                <a
                  href="tel:14052938154"
                  className="inline-flex items-center gap-2 font-oswald text-xl text-white transition-colors hover:text-accent"
                >
                  <Phone size={18} className="text-accent" />
                  (405) 293-8154
                </a>
                <p className="mt-3 font-inter text-sm text-steel">
                  6151 E 0250 Rd, Ponca City, OK 74604
                </p>
              </div>

              <div className="border border-[#333] bg-surface p-4">
                <h3 className="mb-3 font-oswald text-sm uppercase tracking-wider text-text-primary">
                  Browse More Categories
                </h3>
                <div className="space-y-2">
                  {categories
                    .filter((item) => item.slug !== category.slug)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/inventory/${item.slug}`}
                        className="block border border-[#333] bg-[#1a1a1a] px-3 py-2 font-inter text-sm text-steel transition-colors hover:border-accent hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
