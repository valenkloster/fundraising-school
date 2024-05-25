'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useCallback, useState, useEffect } from 'react';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import ClipLoader from 'react-spinners/ClipLoader';

import SignOutButton from '@/components/auth/sign-out-button';
import { AppLink } from '@/data/enums';

const validateNewUser = async (user: Session, router: AppRouterInstance) => {
  if (user.user?.name === '' || user.user?.name === null || !user.user?.name) {
    console.error('User name is empty');
    return;
  }

  let response;
  try {
    response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log('message', data.message);
      if (data.message === 'User exists') {
        router.replace(AppLink.Home);
        return;
      }

      if (data.message === 'User created') {
        router.replace(AppLink.Activation.Home);
        return;
      }

      console.error('Error creating user');
      return;
    }
  } catch (error) {
    console.error('Error validating user', error);

    if (!response) {
      console.error('Error validating user');
      return;
    }

    const data = await response.json();
    console.log('error', data.message);
    if (response.status === 400) {
      signOut({ callbackUrl: AppLink.Auth.SignIn });
      return;
    }
  }
};

export default function ValidateUser({ user }: { user: Session | null }) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleButton = useCallback(async () => {
    setLoading(true);

    if (!user) {
      signOut({ callbackUrl: AppLink.Auth.SignIn });
      return;
    }

    await validateNewUser(user, router);
  }, [user, router]);

  if (loading) {
    return (
      <div className="grid h-28 w-full place-content-center">
        <ClipLoader color="#637EE0" size={55} />
        <p className="pt-4 font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex h-28 w-full flex-col items-center gap-4 lg:gap-2">
      <button
        onClick={handleButton}
        className="btn flex h-11 w-full max-w-[335px] items-center rounded-3xl bg-fsPurple px-4 text-white"
      >
        Continue
      </button>
      <SignOutButton text="Use a different account" />
    </div>
  );
}
