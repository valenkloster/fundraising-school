'use client'

import { Disclosure } from '@headlessui/react';

export default function Questions() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <section className='flex flex-col items-center justify-center border border-gray-200 bg-gray-200 w-96 rounded-xl p-6'>
        <Disclosure>
          <Disclosure.Button className="font-bold">
            <p>Is the Fundraising School for me?</p>
          </Disclosure.Button>
          
          <Disclosure.Panel className="text-gray-800 mt-2">
            If you are an early-stage startup looking for guidance on fundraising school fundamentals, practical insights, curated content, a community of founders in a similar stage, and support, this is an opportunity you don't want to miss out on.
          </Disclosure.Panel> 
        </Disclosure>

        <hr className="my-4 w-full border-gray-300"/>

        <Disclosure>
          <Disclosure.Button className="font-bold">
            Will I need to pay a fee to enter the Fundraising School?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-800 mt-2">
            We will not be charging any fees for the fundraising school. You can join our community and attend our classes and events. We aim to make our program as inclusive as possible.
          </Disclosure.Panel>
        </Disclosure>

        <hr className="my-4 w-full border-gray-300"/>

        <Disclosure>
          <Disclosure.Button className="font-bold">
            Why do I need to be from LATAM?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-800 mt-2">
            We are empowering the top talent of LATAM, creating a program that entrepreneurs wished they had earlier for guidance to empower their own businesses.
          </Disclosure.Panel>
        </Disclosure>

        <hr className="my-4 w-full border-gray-300"/>

        <Disclosure>
          <Disclosure.Button className="font-bold">
            Is the program in English?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-800 mt-2">
            While we're based in Latin America, from Mexico to Brazil, we don't want to exclude anyone. Therefore, most of our program is conducted in English. However, if you only speak Spanish or Portuguese, you can still apply, as we will have sessions primarily in English and Spanish.
          </Disclosure.Panel>
        </Disclosure>

        <hr className="my-4 w-full border-gray-300"/>

        <Disclosure>
          <Disclosure.Button className="font-bold">
            How can I get in touch with you?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-800 mt-2">
            Feel free to email us at fundraisingschool@gmail.com.
          </Disclosure.Panel>
        </Disclosure>
      </section>
      <section className='mt-20'>
        <h1 className='text-xl text-black'>Still have more questions? Contact us <span className='text-cyan-400'>fundraisingschool@gmail.com</span> </h1>
      </section>
</div>
    
  )
}