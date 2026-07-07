import Link from 'next/link';
import CategoryGrid from '@/components/CategoryGrid';
import MachineCard from '@/components/MachineCard';
import { categories, machines } from '@/data/inventory';

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#2d4a3e]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="container-shell relative z-10 grid items-center gap-16 py-24 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-4 font-oswald text-sm uppercase tracking-[0.35em] text-accent">
              Frontier Heavy Equipment
            </p>
            <h1 className="text-5xl font-bold uppercase leading-none tracking-wider font-oswald text-[#f5f5f0] md:text-6xl lg:text-8xl">
              <span className="block">Quality Heavy Equipment.</span>
              <span className="mt-3 block text-accent">Built for the Frontier.</span>
            </h1>
            <p className="mt-8 max-w-2xl font-inter text-lg text-steel">
              {machines.length} machines in stock across {categories.length} categories. Combines, tractors, sprayers and more — ready to work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/inventory" className="primary-button">
                Browse Inventory
              </Link>
              <Link href="/contact" className="secondary-button">
                Get in Touch
              </Link>
            </div>
            <div className="mt-8 max-w-xs border-t-2 border-accent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
  { value: String(machines.length), label: 'Units' },
  { value: String(categories.length), label: 'Categories' },
  { value: '2010', label: 'Est.' },
].map((stat) => (
              <div key={stat.label} className="border border-[#2f3a35] bg-black/20 p-6 backdrop-blur-sm">
                <div className="font-oswald text-4xl uppercase text-text-primary">{stat.value}</div>
                <div className="mt-2 font-inter text-sm uppercase tracking-[0.2em] text-steel">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="mb-10 border-l-4 border-accent pl-4">
            <h2 className="font-oswald text-3xl uppercase tracking-wider text-text-primary md:text-4xl">
              Browse by Category
            </h2>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="border-y border-[#2a2a2a] bg-[#171717] py-20">
        <div className="container-shell">
          <div className="mb-10">
            <h2 className="font-oswald text-3xl uppercase tracking-wider text-text-primary md:text-4xl">
              Available Inventory
            </h2>
            <p className="mt-3 font-inter text-steel">
  {machines.length} units currently in stock
</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {machines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20">
        <div className="container-shell">
          <h2 className="mb-10 font-oswald text-3xl uppercase tracking-wider text-white md:text-4xl">
            Why Choose Frontier
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: '🔧',
                title: 'Field-Tested Machines',
                copy: 'Every unit thoroughly inspected',
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                copy: 'Fair market value on every machine',
              },
              {
                icon: '📋',
                title: 'Financing Available',
                copy: 'Flexible options for qualified buyers',
              },
              {
                icon: '🤝',
                title: 'Expert Knowledge',
                copy: 'We know this equipment inside and out',
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 bg-black/10 p-6">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="font-oswald text-xl uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-inter text-sm text-white/75">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-oswald text-3xl uppercase tracking-wider text-[#1a1a1a] md:text-4xl">
              Financing Available
            </h2>
            <p className="mt-3 max-w-2xl font-inter text-[#2f2313]">
              Ask us about flexible payment options for qualified buyers.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#1a1a1a] px-6 py-3 font-oswald uppercase tracking-wider text-white transition-colors hover:bg-black">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
