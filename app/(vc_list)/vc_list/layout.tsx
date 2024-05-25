/* eslint-disable tailwindcss/classnames-order */
import React from 'react';
import Navbar from '@/components/vc_list/navbar';
import Logo from '@/components/ui/logo';
import Image from 'next/image';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { Session, getServerSession } from 'next-auth';

function existsUser(data: Session | null): boolean {
  if (data && data.user && data.user.name && data.user.image) {
    return true;
  }

  return false;
}

export default async function VcListLayout({ children }: { children: React.ReactNode }) {
  const data = await getServerSession(authOptions);

  if (!existsUser(data)) {
    redirect('/signin');
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
            src={data?.user?.image as string}
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
