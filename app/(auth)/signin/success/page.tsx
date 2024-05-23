import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Image from 'next/image';

function existsUser(data: Session | null): boolean {
  if (data && data.user && data.user.name && data.user.image) {
    return true;
  }

  return false;
}

export default async function Page() {
  const data = await getServerSession(authOptions);

  if (!existsUser(data)) {
    redirect('/signin');
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={data?.user?.image as string}
          className="rounded-full"
          width={187}
          height={197}
          quality={100}
          alt={`Linkedin Profile Picture of ${data?.user?.name}`}
        />
        <h3 className="h3 pb-24">{data?.user?.name}</h3>
        <button className="btn flex h-11 w-full max-w-[335px] items-center gap-[6px] rounded-3xl bg-fsPurple px-4 text-white">
          Continue
        </button>
        <button className="btn mb-64 flex h-11 w-full max-w-[335px] items-center gap-[6px] rounded-3xl border-fsPurple bg-white px-4 text-fsPurple">
          Use a different account
        </button>
      </div>
      <div className=""></div>
    </div>
  );
}
