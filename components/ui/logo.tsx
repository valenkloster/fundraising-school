import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/makers.png'

export default function Logo() {
  return (
    <Link href="/" className="block translate-y-6" aria-label="Cruip">
      <Image src={logo} alt='Logo of Fundraising School' height={116}  />
    </Link>
  )
}
