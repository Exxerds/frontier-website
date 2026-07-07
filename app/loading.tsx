export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-shell py-12">
        <div className="mb-8 h-6 w-40 animate-pulse bg-[#2a2a2a]" />
        <div className="mb-10 h-14 w-80 animate-pulse bg-[#242424]" />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="aspect-video animate-pulse bg-[#242424]" />
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-16 animate-pulse bg-[#242424]" />
              ))}
            </div>
            <div className="h-10 w-2/3 animate-pulse bg-[#242424]" />
            <div className="h-8 w-40 animate-pulse bg-[#242424]" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="h-12 animate-pulse bg-[#242424]" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-[520px] animate-pulse bg-[#242424]" />
          </div>
        </div>
      </div>
    </div>
  );
}
