import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import defaultImageProfile from '@/public/images/default-profile.jpg';
import RoundForm from '@/components/auth/round-form';

export default async function Page() {
  const data = await getServerSession(authOptions);

  let imageProfile: string | StaticImport;

  if (data?.user?.image) {
    imageProfile = data?.user?.image;
  } else {
    imageProfile = defaultImageProfile;
  }

  return (
    <div className="flex h-full flex-col items-center justify-around px-8 py-6 lg:p-0">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={imageProfile}
          className="rounded-full"
          width={150}
          height={150}
          quality={100}
          alt={`Linkedin Profile Picture of ${data?.user?.name}`}
        />
        <h3 className="h3 text-center">{data?.user?.name}</h3>
      </div>
      <RoundForm />
    </div>
  );
}
