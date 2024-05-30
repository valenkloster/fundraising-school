import {
  IdentificationIcon,
  BookmarkIcon,
  RectangleGroupIcon,
  InboxArrowDownIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex flex-col p-4">
      <Link
        href=""
        className="flex h-10 items-center gap-2 rounded-3xl px-6 text-sm text-fsGray hover:bg-lightFsPurple hover:text-fsPurple"
      >
        <IdentificationIcon className="size-5" />
        VC List
      </Link>
      <Link
        href=""
        className="flex h-10 items-center gap-2 rounded-3xl px-6 text-sm text-fsGray hover:bg-lightFsPurple hover:text-fsPurple"
      >
        <BookmarkIcon className="size-5" />
        Favoritos
      </Link>
      <Link
        href=""
        className="flex h-10 items-center gap-2 rounded-3xl px-6 text-sm text-fsGray hover:bg-lightFsPurple hover:text-fsPurple"
      >
        <RectangleGroupIcon className="size-5" />
        CRM
      </Link>
      <Link
        href=""
        className="flex h-10 items-center gap-2 rounded-3xl px-6 text-sm text-fsGray hover:bg-lightFsPurple hover:text-fsPurple"
      >
        <InboxArrowDownIcon className="size-5" />
        Pitch
      </Link>
      <Link
        href=""
        className="flex h-10 items-center gap-2 rounded-3xl px-6 text-sm text-fsGray hover:bg-lightFsPurple hover:text-fsPurple"
      >
        <ScaleIcon className="size-5" />
        Fundable
      </Link>
      <hr className="mt-2" />
    </nav>
  );
};

export default Navbar;
