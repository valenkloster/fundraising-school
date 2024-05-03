import Link from 'next/link';
import Image from 'next/image';

import { AppLink } from '@/data/enums';

const logo_src = `${AppLink.CDN}/logo.png`;

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src={logo_src}
        alt="Logo of Fundraising School"
        priority
        height={40}
        width={80}
        style={{ width: '100%', height: '100%' }}
      />
    </Link>
  );
}
