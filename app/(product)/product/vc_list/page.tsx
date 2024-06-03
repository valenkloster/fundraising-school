import DownloadVC from '@/components/vc_list/download-vc';
import FilterBar from '@/components/vc_list/filter-bar';
import SearchInput from '@/components/vc_list/search-input';
import TableVC from '@/components/vc_list/table-vc';
import TitleSection from '@/components/vc_list/title-section';

export default function Page() {
  return (
    <>
      <TitleSection nameSection="VC List" />
      <div className="size-full bg-white px-7">
        <div className="flex items-end justify-between pt-4">
          <SearchInput />
          <DownloadVC />
        </div>
        <FilterBar />
        <TableVC />
      </div>
    </>
  );
}
