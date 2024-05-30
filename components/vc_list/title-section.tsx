import { IdentificationIcon } from '@heroicons/react/24/outline';

export default function TitleSection({ nameSection }: { nameSection: string }) {
  return (
    <header className="flex h-24 w-full flex-col justify-center bg-white pl-7">
      <div className="flex items-center">
        <IdentificationIcon className="mr-2 size-8" />
        <h2 className="text-2xl font-black text-darkFsGray ">{nameSection}</h2>
      </div>
      <p className="block font-normal ">Browse all funds</p>
    </header>
  );
}
