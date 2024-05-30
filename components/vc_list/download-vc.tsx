'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function DownloadVC() {
  return (
    <button
      onClick={() => console.log('Download...')}
      className="flex h-9 items-center gap-2 rounded-e-lg bg-fsPurple px-3 text-white"
    >
      <StarIcon className="size-5" />
      <span className="text-xs font-semibold">Download your favorites VCs</span>
      <ArrowDownTrayIcon className="size-5" />
    </button>
  );
}
