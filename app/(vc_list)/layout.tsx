import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import Navbar from '@/components/vc_list/navbar';
import Logo from '@/components/ui/logo';
import defaultImageProfile from '@/public/images/default-profile.jpg';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function VcListLayout({ children }: { children: React.ReactNode }) {
  const data = await getServerSession(authOptions);

  let imageProfile: string | StaticImport;

  if (data?.user?.image) {
    imageProfile = data?.user?.image;
  } else {
    imageProfile = defaultImageProfile;
  }

  return (
    <div className="flex">
      <nav className="flex h-screen w-[256px] flex-col justify-between">
        <div className="w-full">
          <div className="w-3/4 pl-10 pt-12">
            <Logo />
          </div>
          <nav className="flex flex-col p-4">
            <Navbar />
          </nav>
        </div>
        <div className="mb-10 mt-auto flex flex-col items-center">
          <Image
            src={imageProfile}
            className="rounded-full"
            width={90}
            height={100}
            quality={80}
            alt={`Linkedin Profile Picture of ${data?.user?.name}`}
          />
          <h3 className="text-base">{data?.user?.name}</h3>
          <a href="#" className="text-fsGray text-sm">
            Cerrar Sesión
          </a>
        </div>
      </nav>
      <main className="grow">{children}</main>
    </div>
  );
}
