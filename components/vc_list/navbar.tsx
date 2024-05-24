import React from 'react';
import {
  IdentificationIcon,
  BookmarkIcon,
  RectangleGroupIcon,
  InboxArrowDownIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="flex flex-col p-[16px]">
      <button className="btn-sm text-fsGray hover:bg-lightFsPurple w-full justify-start rounded-3xl bg-white px-4 text-sm hover:font-bold hover:text-fsPurple md:px-8 lg:px-14">
        <div className="w-6 pr-2">
          <IdentificationIcon className="size-5" />
        </div>
        VC List
      </button>
      <button className="btn-sm text-fsGray hover:bg-lightFsPurple w-full justify-start rounded-3xl bg-white px-4 text-sm hover:font-bold hover:text-fsPurple md:px-8 lg:px-14">
        <div className="w-6 pr-2">
          <BookmarkIcon className="size-5" />
        </div>
        Favoritos
      </button>
      <button className="btn-sm text-fsGray hover:bg-lightFsPurple w-full justify-start rounded-3xl bg-white px-4 text-sm hover:font-bold hover:text-fsPurple md:px-8 lg:px-14">
        <div className="w-6 pr-2">
          <RectangleGroupIcon className="size-5" />
        </div>
        CRM
      </button>
      <button className="btn-sm text-fsGray hover:bg-lightFsPurple w-full justify-start rounded-3xl bg-white px-4 text-sm hover:font-bold hover:text-fsPurple md:px-8 lg:px-14">
        <div className="w-6 pr-2">
          <InboxArrowDownIcon className="size-5" />
        </div>
        Pitch
      </button>
      <button className="btn-sm text-fsGray hover:bg-lightFsPurple w-full justify-start rounded-3xl bg-white px-4 text-sm hover:font-bold hover:text-fsPurple md:px-8 lg:px-14">
        <div className="w-6 pr-2">
          <ScaleIcon className="size-5" />
        </div>
        Fundable
      </button>
    </nav>
  );
};

export default Navbar;
