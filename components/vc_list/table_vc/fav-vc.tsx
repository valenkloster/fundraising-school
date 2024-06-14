'use client';

import { StarIcon } from '@heroicons/react/24/outline';

export default function FavVC({ fund_id }: { fund_id: number }) {
  const handleClick = async () => {
    console.log({ fund_id });
  };

  return (
    <td className="grid place-content-center">
      <button onClick={handleClick}>
        <StarIcon className="size-5 text-black hover:fill-fsPurple hover:text-fsPurple" />
      </button>
    </td>
  );
}
