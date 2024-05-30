'use client';

export default function FilterBar() {
  return (
    <div className="mt-4 flex gap-6">
      <label className="flex flex-col gap-1 text-xs font-bold">
        Rounds They invest In
        <select className="h-5 w-36 rounded-lg border-0 bg-lightFsPurple py-0 text-[11px] font-normal outline-0 ring-0 focus:border-0 focus:ring-0">
          <option>All</option>
          <option>Option 2</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-xs font-bold">
        Check Size Ranges
        <select className="h-5 w-36 rounded-lg border-0 bg-lightFsPurple py-0 text-[11px] font-normal outline-0 ring-0 focus:border-0 focus:ring-0">
          <option>All</option>
          <option>Option 2</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-xs font-bold">
        Sector Specialty
        <select className="h-5 w-36 rounded-lg border-0 bg-lightFsPurple py-0 text-[11px] font-normal outline-0 ring-0 focus:border-0 focus:ring-0">
          <option>All</option>
          <option>Option 2</option>
        </select>
      </label>
      <label className="flex flex-col gap-1 text-xs font-bold">
        Geographic Focus
        <select className="h-5 w-36 rounded-lg border-0 bg-lightFsPurple py-0 text-[11px] font-normal outline-0 ring-0 focus:border-0 focus:ring-0">
          <option>All</option>
          <option>Option 2</option>
        </select>
      </label>
    </div>
  );
}
