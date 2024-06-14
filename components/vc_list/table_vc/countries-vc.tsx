import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { nanoid } from 'nanoid';

import { Country } from '@/models/vc_list';

const countryShortName: { [key: string]: string } = {
  USA: 'US',
  Canada: 'CA',
  Europe: 'EU',
};

export default function CountriesVC({ countries }: { countries: Country[] }) {
  if (countries.length === 0) {
    return (
      <td className="grid w-1/5 place-content-center">
        <div className="w-20 rounded-sm bg-secondLightFsPurple px-2 py-1 text-center text-xs font-semibold text-fsPurple">
          <span>😔</span>
        </div>
      </td>
    );
  }

  return (
    <td className="grid w-1/5 place-content-center">
      <div className="tooltip rounded-sm bg-secondLightFsPurple px-2 py-1 text-xs font-semibold text-fsPurple">
        {countries.slice(0, 6).map((country, index) => {
          const countryName = countryShortName[country.name] || country.name;

          if (index === 3) {
            return (
              <span key={nanoid()}>
                <br />
                {countryName + ' '}
              </span>
            );
          }

          return <span key={nanoid()}>{countryName + ' '}</span>;
        })}

        {countries.length > 6 && (
          <span className="text-black" key={nanoid()}>
            +{countries.length - 6}
          </span>
        )}

        <InformationCircleIcon className="mx-1 mb-0.5 inline-block size-4" key={nanoid()} />
        <span className="tooltiptext">{countries.map((country) => country.name).join(', ')}</span>
      </div>
    </td>
  );
}
