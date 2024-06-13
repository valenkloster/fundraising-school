import { LinkIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { SiCrunchbase } from 'react-icons/si';

import { VCProfile } from '@/models/vc_list';

export default function VCLinks({ vc_profile }: { vc_profile: VCProfile }) {
  return (
    <ul className="mt-2 flex gap-1">
      {vc_profile.website && (
        <li>
          <a href={vc_profile.website} target="_blank" rel="noreferrer" className="text-black">
            <LinkIcon className="size-4" />
          </a>
        </li>
      )}
      {vc_profile.linkedin && (
        <li>
          <a href={vc_profile.linkedin} target="_blank" rel="noreferrer" className="text-black">
            <FaLinkedin className="size-4" />
          </a>
        </li>
      )}
      {vc_profile.twitter && (
        <li>
          <a href={vc_profile.twitter} target="_blank" rel="noreferrer" className="text-black">
            <FaXTwitter className="size-4" />
          </a>
        </li>
      )}
      {vc_profile.crunch_base && (
        <li>
          <a href={vc_profile.crunch_base} target="_blank" rel="noreferrer" className="text-black">
            <SiCrunchbase className="size-4" />
          </a>
        </li>
      )}
    </ul>
  );
}
