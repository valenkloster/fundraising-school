import { useFundStore } from '@/providers/funds-store-providers';
import { useCallback, useRef } from 'react';

function useLazyLoad() {
  const { page, setPage, addFunds } = useFundStore((state) => state);

  const lastItem = useRef<IntersectionObserver | null>(null);

  const showNext = useCallback(
    (element: HTMLTableRowElement | null) => {
      if (!element) return;

      if (lastItem.current) {
        lastItem.current.disconnect();
      }

      const intersection = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          const newPage = page + 1;

          fetch(`/api/funds?` + new URLSearchParams({ page: newPage.toString(), limit: '25' }), {
            method: 'GET',
          })
            .then((response) => response.json())
            .then((data) => {
              addFunds(data.data);
              setPage(newPage);
            })
            .catch((error) => console.error('Error:', error));
        }
      };

      lastItem.current = new IntersectionObserver(intersection, {
        rootMargin: '500px',
      });

      lastItem.current.observe(element);
    },
    [addFunds, page, setPage],
  );

  return { showNext };
}

export default useLazyLoad;
