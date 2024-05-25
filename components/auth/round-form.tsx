'use client';

import { useState, useCallback, FormEvent } from 'react';
import { Session } from 'next-auth';
import { Rounds } from '@/data/enums';

export default function RoundForm({ data }: { data: Session | null }) {
  const [seekingCapital, setSeekingCapital] = useState<boolean>(false);
  const [agreeTermsAndConditions, setAgreeTermsAndConditions] = useState<boolean>(true);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-1/2 min-h-64 w-full max-w-[335px] flex-col justify-between gap-2 "
    >
      <div className="flex flex-col gap-2">
        <label className="block font-semibold" htmlFor="seeking-capital">
          Seeking capital?
        </label>
        <label className="flex h-11 w-full max-w-[335px] items-center gap-2 rounded-md bg-neutral-200 px-4">
          <input
            checked={seekingCapital}
            onChange={() => setSeekingCapital((e) => !e)}
            id="seeking-capital"
            type="checkbox"
          />
          <span>Yes</span>
        </label>
        {seekingCapital && (
          <>
            <label className="block font-semibold" htmlFor="round">
              Which round?
            </label>
            <select id="round" className="rounded-md focus:border-fsPurple">
              {Rounds.map(({ Name }, i) => (
                <option key={i}>{Name}</option>
              ))}
            </select>
          </>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            checked={agreeTermsAndConditions}
            onChange={() => setAgreeTermsAndConditions((e) => !e)}
            type="checkbox"
          />
          I agree with Terms & Conditions
        </label>
        <button
          type="submit"
          className="btn flex h-11 w-full max-w-[335px] items-center gap-[6px] rounded-3xl bg-fsPurple px-4 text-white"
        >
          Create
        </button>
      </div>
    </form>
  );
}
