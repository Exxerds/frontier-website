import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Frontier Heavy Equipment and our commitment to dependable used agricultural machinery.',
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="flex min-h-[40vh] items-center bg-forest">
        <div className="container-shell py-20">
          <h1 className="max-w-4xl font-oswald text-4xl uppercase tracking-wider text-white md:text-6xl">
            About Frontier Heavy Equipment
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-12 md:grid-cols-2">
          <div className="space-y-6 font-inter leading-relaxed text-steel">
            <p>
              Frontier Heavy Equipment was built to serve farmers, contractors, and operators who need dependable machinery without the guesswork. Our focus is straightforward: source quality used agricultural equipment, present it honestly, and help buyers move quickly with confidence.
            </p>
            <p>
              Based in Ponca City, Oklahoma, we work with customers across the American West and beyond. From late-model combines and high-horsepower tractors to sprayers, grain carts, headers, and hay equipment, every unit in our inventory is chosen for real-world usefulness in the field.
            </p>
            <p>
              We understand that buying heavy equipment is rarely an impulse decision. It is an investment in uptime, efficiency, and acreage covered. That is why we emphasize clear specs, responsive communication, and a serious dealer-style experience that respects your time.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Our Mission',
                copy: 'Deliver honest listings, clear information, and practical support so buyers can find the right machine fast.',
              },
              {
                title: 'Our Inventory',
                copy: 'We stock a focused mix of agricultural machinery across major categories, with equipment selected for value and work-readiness.',
              },
              {
                title: 'Our Service',
                copy: 'Whether you need availability details, specs clarification, financing guidance, or direct communication, we keep the process straightforward.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-accent bg-surface p-6">
                <h2 className="font-oswald text-2xl uppercase tracking-wider text-text-primary">
                  {item.title}
                </h2>
                <p className="mt-3 font-inter leading-relaxed text-steel">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="container-shell flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-oswald text-3xl uppercase tracking-wider text-[#1a1a1a] md:text-4xl">
              Browse Our Inventory
            </h2>
            <p className="mt-2 max-w-2xl font-inter text-[#2f2313]">
              Explore current machines in stock and request information on the units that fit your operation.
            </p>
          </div>
          <Link href="/inventory" className="inline-flex items-center justify-center bg-[#1a1a1a] px-6 py-3 font-oswald uppercase tracking-wider text-white transition-colors hover:bg-black">
            Browse Our Inventory
          </Link>
        </div>
      </section>
    </div>
  );
}
