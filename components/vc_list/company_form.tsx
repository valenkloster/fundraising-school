'use client';

import { useEffect, useRef } from 'react';
import { StarIcon, LinkIcon } from '@heroicons/react/24/outline';

interface InfoVCProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyForm({ isOpen, onClose }: InfoVCProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog) {
      dialog.showModal();
    } else if (dialog) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 overflow-y-auto rounded-lg bg-white p-5 shadow-lg md:inset-y-0 md:right-0 md:h-full md:w-1/2 md:p-20"
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 p-2 text-3xl text-gray-400 hover:text-gray-600 md:p-4 md:text-4xl"
      >
        &times;
      </button>
      <div className="flex h-full flex-col">
        <div className="mb-4 flex flex-row justify-between">
          <h3 className="mb-2 text-lg font-bold text-fsGray md:mb-0 md:mr-10">Company Inf</h3>
          <p className="text-sm text-fsPurple">Edit Profile</p>
        </div>
        <div className="mb-10 mt-auto">
          <div className="mb-10 ml-5 flex flex-col md:w-9/12 md:flex-row md:items-center">
            <img
              src="https://asset.brandfetch.io/ids2-Is_Nd/idhMTRDVSo.jpeg"
              alt="Profile"
              className="size-40 rounded-lg"
            />
            <div className="ml-10">
              <h1 className="text-3xl font-bold">Rappi</h1>
              <p className="text-md font-semibold text-gray-600">Colombia</p>
              <div className="mt-1 flex justify-between align-middle">
                <div className="m-1 size-8">
                  <LinkIcon />
                </div>
                <img
                  src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                  alt="linkedIn"
                  className="m-1 size-10"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=102925&format=png&color=000000"
                  alt="twitter"
                  className="m-1 size-9"
                />
                <img
                  src="https://www.svgrepo.com/show/305916/crunchbase.svg"
                  alt="crunchbase"
                  className="m-1 size-8"
                />
                <img
                  src="https://img.icons8.com/?size=100&id=KXzTBiS7GrHf&format=png&color=000000"
                  alt="arroba"
                  className="m-1 size-8"
                />
              </div>
            </div>
            <div className="ml-36 size-7 text-gray-600">
              <StarIcon />
            </div>
          </div>
          <div className="felx-row flex justify-between">
            <button
              type="submit"
              className="m-1 h-9 w-full rounded-lg border border-fsPurple bg-white px-3 text-base font-extrabold text-fsPurple  focus:outline-none focus:ring-0 "
            >
              My Calendly Link
            </button>
            <button
              type="submit"
              className="m-1 h-9 w-full rounded-lg border border-fsPurple bg-white px-3 text-base font-extrabold text-fsPurple  focus:outline-none focus:ring-0 "
            >
              My deck
            </button>
          </div>
          <p className="mb-4 mt-4 text-base">
            Rappi is an on-demand delivery platform that connects users with a wide products and
            services.
          </p>
          <h3 className="mb-2 text-base font-bold md:mb-0 md:mr-10">Description</h3>
          <p className="mb-4 text-base">
            Rappi is an on-demand delivery platform that connects users with a wide variety of
            products and services. Through its app, users can order food, drinks, medications,
            grocery items, technology and much more. Additionally, it offers additional services
            such as cash withdrawal, bill payments, and package shipping. Rappi stands out for its
            speed, convenience and its network of delivery people who deliver in minutes.
          </p>
        </div>
        <div className="mt-auto flex flex-col justify-between">
          <div className="mb-4 flex flex-col justify-between md:flex-row">
            <h3 className="mb-2 text-lg font-bold text-fsGray md:mb-0 md:mr-10">
              Invesment and traccion
            </h3>
            <p className="text-sm text-fsPurple">Edit Profile</p>
          </div>
          <div className="mb-10 flex flex-col md:flex-row">
            <img src="/images/vc_info/handshake.png" alt="handshake" className="size-10" />
            <h3 className="ml-3 w-full text-lg font-bold md:w-1/2">Looking For</h3>
            <p className="text-base text-fsPurple">Pre-Seed, Seed, Series A, Series B</p>
          </div>
          <div className="mb-10 flex flex-col md:flex-row">
            <img src="/images/vc_info/dollar.png" alt="dollar" className="size-10" />
            <h3 className="ml-3 w-full text-lg font-bold md:w-1/2">Traccion en USD</h3>
            <p className="text-base text-fsPurple">$3M - $10M</p>
          </div>
          <div className="mb-10 flex flex-col md:flex-row">
            <img src="/images/vc_info/magnifier.png" alt="magnifier" className="size-10" />
            <h3 className="ml-3 w-full text-lg font-bold md:w-1/2">Main Industry</h3>
            <p className="text-base text-fsPurple">
              Logistics, B2C/E-Commerce, Future of Work, Web3
            </p>
          </div>
        </div>
        <div className="mb-4 flex flex-col justify-between md:flex-row">
          <h3 className="mb-2 text-lg font-bold text-fsGray md:mb-0 md:mr-10">Founders</h3>
          <p className="text-sm text-fsPurple">Edit Profile</p>
        </div>
        <div className="mt-auto flex flex-col justify-around space-y-2 p-2 md:flex-row md:space-x-4 md:space-y-0">
          <div className="border-rounded flex flex-col items-center rounded-lg border p-6">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Profile"
              className="mb-2 size-28 rounded-full"
            />
            <p className="font-bold text-gray-800">Matthew Jackson</p>
            <p className="text-sm text-gray-600">Head of Products</p>
            <p className="text-xs text-fsPurple">View profile</p>
            <div className="mt-1 flex w-full justify-around pl-5 pr-5">
              <img
                src="https://img.icons8.com/?size=100&id=KXzTBiS7GrHf&format=png&color=000000"
                alt="crunchbase"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                alt="linkedIn"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=85088&format=png&color=000000"
                alt="twitter"
                className="size-4"
              />
            </div>
          </div>
          <div className="border-rounded flex flex-col items-center rounded-lg border p-6">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Profile"
              className="mb-2 size-28 rounded-full"
            />
            <p className="font-bold text-gray-800">Matthew Jackson</p>
            <p className="text-sm text-gray-600">Head of Products</p>
            <p className="text-xs text-fsPurple">View profile</p>
            <div className="mt-1 flex w-full justify-around pl-5 pr-5">
              <img
                src="https://img.icons8.com/?size=100&id=KXzTBiS7GrHf&format=png&color=000000"
                alt="crunchbase"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                alt="linkedIn"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=85088&format=png&color=000000"
                alt="twitter"
                className="size-4"
              />
            </div>
          </div>
          <div className="border-rounded flex flex-col items-center rounded-lg border p-6">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Profile"
              className="mb-2 size-28 rounded-full"
            />
            <p className="font-bold text-gray-800">Matthew Jackson</p>
            <p className="text-sm text-gray-600">Head of Products</p>
            <p className="text-xs text-fsPurple">View profile</p>
            <div className="mt-1 flex w-full justify-around pl-5 pr-5">
              <img
                src="https://img.icons8.com/?size=100&id=KXzTBiS7GrHf&format=png&color=000000"
                alt="crunchbase"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                alt="linkedIn"
                className="size-4"
              />
              <img
                src="https://img.icons8.com/?size=100&id=85088&format=png&color=000000"
                alt="twitter"
                className="size-4"
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
