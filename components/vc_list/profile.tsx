'use client';

import Image from 'next/image';
import SignOutButton from '@/components/auth/sign-out-button';
import useUserInfo from '@/utils/validations';
import { Session } from 'next-auth';

export default function Profile({ data }: { data: Session }) {
  const { imageProfile, name } = useUserInfo({ data });

  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageProfile}
        className="rounded-full"
        width={86}
        height={86}
        quality={100}
        alt={`Linkedin Profile Picture of ${name}`}
      />
      <p className="my-2 text-center text-base font-semibold">{name}</p>
      <SignOutButton className="text-sm text-fsGray" text="Sign Out" />
    </div>
  );
}
