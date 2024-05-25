import Search from '@/components/vc_list/search';
import Deck from '@/components/vc_list/upload_deck';

export default function Page() {
  return (
    <>
      <div className="size-full bg-gray-100 pl-2 pt-2">
        <div className="text-darkFsGray flex h-20 items-center bg-white pl-6 text-2xl font-black">
          VC List
        </div>
        <div className="mt-2 flex h-full scroll-pb-96 bg-white pl-10 pt-10 text-lg">
          <div>
            <p className="text-darkFsGray text-sm font-bold">Search</p>
            <Search />
          </div>
          <div className="ml-32">
            <p className="text-darkFsGray text-sm font-bold">Upload your Deck</p>
            <Deck />
          </div>
        </div>
      </div>
    </>
  );
}
