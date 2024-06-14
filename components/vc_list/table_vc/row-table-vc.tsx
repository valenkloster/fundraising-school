'use client';

import Image from 'next/image';
import { LegacyRef } from 'react';

import { VCProfile } from '@/models/vc_list';
import VCLinks from '@/components/vc_list/table_vc/vc_links';
import CountriesVC from '@/components/vc_list/table_vc/countries-vc';
import FavVC from '@/components/vc_list/table_vc/fav-vc';
import CheckSizeVC from './check_size_vc';

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
      <FavVC fund_id={vc_profile.id} />

      <CountriesVC countries={vc_profile.countries} />
      <CheckSizeVC check_size={vc_profile.check_size} />
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
      <tr ref={refProp} className="my-4 ">
        <InnerRowTableVC vc_profile={vc_profile} />
      </tr>
    );
  }

  return (
    <tr className="my-4 ">
      <InnerRowTableVC vc_profile={vc_profile} />
    </tr>
  );
}
