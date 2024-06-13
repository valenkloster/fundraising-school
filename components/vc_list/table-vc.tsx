'use client';

import { useEffect } from 'react';
import RowTableVC from './table_vc/row-table-vc';
import { useFundStore } from '@/providers/funds-store-providers';
import useLazyLoad from '@/hooks/useLazyLoad';

export default function TableVC() {
  const { total, page, setPage, funds, setFunds, setTotal } = useFundStore((state) => state);

  const { showNext } = useLazyLoad();

  useEffect(() => {
    if (funds.length !== 0) {
      return;
    }

    fetch(`/api/funds?` + new URLSearchParams({ page: page.toString(), limit: '25' }), {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setFunds(data.data);
        setTotal(data.total);
        setPage(data.page);
      })
      .catch((error) => console.error('Error:', error));
  }, [funds.length, page, setFunds, setPage, setTotal]);

  return (
    <table className="mt-6 size-full ">
      <thead className="h-14 border-b border-neutral-200">
        <tr className="mr-16 flex items-center justify-between [&>th]:text-left [&>th]:text-neutral-500">
          <th className="w-72">
            {total} <br />
            Investors
          </th>
          <th>Fav</th>
          <th>Geography</th>
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
