import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" >
      <Image src={logo} alt='Logo of Fundraising School' height={54}  />
    </Link>
  )
}
