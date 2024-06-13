'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type FundStore, createFundStore, initFundStore } from '@/stores/funds';

export const FundStoreContext = createContext<StoreApi<FundStore> | null>(null);

export interface FundStoreProviderProps {
  children: ReactNode;
}

export const FundStoreProvider = ({ children }: FundStoreProviderProps) => {
  const storeRef = useRef<StoreApi<FundStore>>();
  if (!storeRef.current) {
    storeRef.current = createFundStore(initFundStore());
  }

  return <FundStoreContext.Provider value={storeRef.current}>{children}</FundStoreContext.Provider>;
};

export const useFundStore = <T,>(selector: (store: FundStore) => T): T => {
  const fundStoreContext = useContext(FundStoreContext);

  if (!fundStoreContext) {
    throw new Error(`useFundStore must be use within FundStoreProvider`);
  }

  return useStore(fundStoreContext, selector);
};
