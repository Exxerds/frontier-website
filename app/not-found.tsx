import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-background">
      <div className="container-shell text-center">
        <p className="mb-4 font-oswald text-sm uppercase tracking-[0.3em] text-accent">
          404 — Unit Not Found
        </p>
        <h1 className="mb-6 font-oswald text-4xl uppercase tracking-wider text-text-primary md:text-6xl">
          The equipment you requested is no longer available.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl font-inter text-steel">
          Browse current inventory to find available combines, tractors, sprayers, balers, and more.
        </p>
        <Link href="/inventory" className="primary-button">
          Back to Inventory
        </Link>
      </div>
    </div>
  );
}
