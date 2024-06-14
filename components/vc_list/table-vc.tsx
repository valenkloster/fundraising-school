'use client';

import { useEffect } from 'react';
import RowTableVC from '@/components/vc_list/table_vc/row-table-vc';
import { useFundStore } from '@/providers/funds-store-providers';
import useLazyLoad from '@/hooks/useLazyLoad';

export default function TableVC() {
  const { total, page, setPage, funds, setFunds, setTotal, selected_filter_options } = useFundStore(
    (state) => state,
  );

  const { showNext } = useLazyLoad();

  useEffect(() => {
    if (funds.length !== 0) {
      return;
    }

    const url_params = new URLSearchParams({ page: page.toString(), limit: '25' });

    if (selected_filter_options.round) {
      url_params.append('round', selected_filter_options.round);
    }
    if (selected_filter_options.check_size) {
      url_params.append('check_size', selected_filter_options.check_size);
    }
    if (selected_filter_options.sector) {
      url_params.append('sector', selected_filter_options.sector);
    }
    if (selected_filter_options.location) {
      url_params.append('location', selected_filter_options.location);
    }

    fetch(`/api/funds?` + url_params, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setFunds(data.data);
        setTotal(data.total);
        setPage(data.page);
      })
      .catch((error) => console.error('Error:', error));
  }, [funds.length, page, selected_filter_options, setFunds, setPage, setTotal]);

  return (
    <table className="mt-6 size-full ">
      <thead className="h-14 border-b border-neutral-200">
        <tr className="mr-16 flex items-center justify-between  [&>th]:text-left [&>th]:text-neutral-500">
          <th className="w-72">
            {total} <br />
            Investors
          </th>
          <th>Fav</th>
          <th className="w-1/5">
            <p className="text-center">Geography</p>
          </th>
          <th>Checks</th>
          <th>Stages</th>
        </tr>
      </thead>
      <tbody className="mt-6 block h-[calc(100%-11.9rem)] overflow-y-scroll [&>tr]:mr-12 [&>tr]:flex [&>tr]:justify-between">
        {funds.map((fund, index) => {
          if (index === funds.length - 1) {
            return <RowTableVC refProp={showNext} vc_profile={fund} key={fund.id} />;
          }

          return <RowTableVC vc_profile={fund} key={fund.id} />;
        })}
      </tbody>
    </table>
  );
}
