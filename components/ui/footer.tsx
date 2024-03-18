import Link from 'next/link'
import Logo from './logo'
import { Links } from "@/data/enums"


export default function Footer() {
  return (
    <footer className=' bg-[#f5f5f5]'>
      <div className="py-6 max-w-6xl w-full mx-auto px-4 sm:px-6 min-h-24 flex flex-col sm:flex-row justify-between sm:items-center">
        <Logo height={38} />
        <Link className='my-5 mx-6' href={"/data_sharing"}>All rights reserved Fundraising School l Designed and built with love - Copyright© 2024</Link>
        <a className="rounded-xl btn text-[#637ee0] bg-white border-[#637ee0] border hover:bg-[#637ee0] hover:text-white duration-150 mb-4 sm:w-36 sm:mb-0" href={Links.JoinLink} target="_blank" rel="noopener">Join us</a>
      </div>
    </footer>
  )
}
