'use client';

import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/outline';

import { VCProfile } from '@/models/vc_list';
import VCLinks from './vc_links';
import { LegacyRef } from 'react';

function InnerRowTableVC({ vc_profile }: { vc_profile: VCProfile }) {
  return (
    <>
      <td className="flex w-72 justify-between">
        <Image
          className="rounded-md"
          alt={`image of ${vc_profile.name}`}
          src={vc_profile.photo}
          width={60}
          height={60}
        />
        <div className="w-1/2">
          <p className="text-base font-semibold">{vc_profile.name}</p>
          <VCLinks vc_profile={vc_profile} />
        </div>
      </td>
      <td>
        <button onClick={() => console.log('Add to fav')}>
          <StarIcon className="size-5 text-black hover:fill-fsPurple hover:text-fsPurple" />
        </button>
      </td>
      <td>Check Size 1</td>
      <td>Investment Focus 1</td>
      <td>Stages</td>
    </>
  );
}

export default function RowTableVC({
  vc_profile,
  refProp,
}: {
  vc_profile: VCProfile;
  refProp?: LegacyRef<HTMLTableRowElement> | undefined;
}) {
  if (refProp) {
    return (
      <tr ref={refProp} className="my-4">
        <InnerRowTableVC vc_profile={vc_profile} />
      </tr>
    );
  }

  return (
    <tr className="my-4">
      <InnerRowTableVC vc_profile={vc_profile} />
    </tr>
  );
}
