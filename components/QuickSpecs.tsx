type QuickSpecsProps = {
  specs: Record<string, string>;
};

export default function QuickSpecs({ specs }: QuickSpecsProps) {
  return (
    <div className="border border-[#333]">
      <div className="border-l-4 border-accent bg-[#1e1e1e] px-4 py-3">
        <h3 className="font-oswald uppercase tracking-wider text-text-primary">
          Quick Specs
        </h3>
      </div>
      {Object.entries(specs).map(([key, value], index) => (
        <div
          key={key}
          className={`flex px-4 py-3 ${index % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#242424]'}`}
        >
          <span className="w-1/3 flex-shrink-0 font-inter text-xs font-medium uppercase text-accent">
            {key}
          </span>
          <span className="w-2/3 font-inter text-sm text-text-primary">{value}</span>
        </div>
      ))}
    </div>
  );
}
