'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type UserStore, createUserStore, initCounterStore } from '@/stores/user-store';

export const UserStoreContext = createContext<StoreApi<UserStore> | null>(null);

export interface UserStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
  const storeRef = useRef<StoreApi<UserStore>>();
  if (!storeRef.current) {
    storeRef.current = createUserStore(initCounterStore());
  }

  return <UserStoreContext.Provider value={storeRef.current}>{children}</UserStoreContext.Provider>;
};

export const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
  const counterStoreContext = useContext(UserStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useUserStore must be use within UserStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
