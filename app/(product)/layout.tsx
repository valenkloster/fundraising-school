import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import Navbar from '@/components/vc_list/navbar';
import Logo from '@/components/ui/logo';
import defaultImageProfile from '@/public/images/default-profile.jpg';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignOutButton from '@/components/auth/sign-out-button';

export default async function VcListLayout({ children }: { children: React.ReactNode }) {
  const data = await getServerSession(authOptions);

  let imageProfile: string | StaticImport;

  if (data?.user?.image) {
    imageProfile = data?.user?.image;
  } else {
    imageProfile = defaultImageProfile;
  }

  return (
    <div className="flex h-screen w-full gap-1 overflow-y-hidden bg-gray-100">
      <header className="flex h-screen w-full max-w-64 flex-col justify-between bg-white py-8">
        <div>
          <Logo className="mx-auto mb-6 mt-4 w-3/5" />
          <Navbar />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={imageProfile}
            className="rounded-full"
            width={86}
            height={86}
            quality={100}
            alt={`Linkedin Profile Picture of ${data?.user?.name}`}
          />
          <p className="my-2 text-center text-base font-semibold">{data?.user?.name}</p>
          <SignOutButton className="text-sm text-fsGray" text="Sign Out" />
        </div>
      </header>
      <main className="flex w-full flex-col gap-1">{children}</main>
    </div>
  );
}
