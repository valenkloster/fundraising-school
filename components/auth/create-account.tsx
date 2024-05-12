'use client';

import { redirect } from 'next/navigation';
import React from 'react';

export default function CreateAccount() {
  return (
    <button
      onClick={() => redirect('/')}
      className={
        'btn flex h-11 w-full max-w-[335px] items-center gap-[6px] rounded-3xl bg-fsPurple px-4 text-white'
      }
    >
      Continue with LinkedIn
    </button>
  );
}
