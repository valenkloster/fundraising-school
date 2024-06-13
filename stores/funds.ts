import { createStore } from 'zustand/vanilla';
import { VCProfile } from '@/models/vc_list';

export type FundState = {
  funds: VCProfile[];
  total: number;
  page: number;
};

export type FundActions = {
  setFunds: (funds: VCProfile[]) => void;
  addFunds: (funds: VCProfile[]) => void;
  setPage: (page: number) => void;
  setTotal: (total: number) => void;
};

export type FundStore = FundState & FundActions;

export const initFundStore = (): FundState => {
  return { total: 0, funds: [], page: 1 };
};

export const defaultInitState: FundState = {
  total: 0,
  funds: [],
  page: 1,
};

export const createFundStore = (initState: FundState = defaultInitState) => {
  return createStore<FundStore>()((set) => ({
    ...initState,

    setPage: (page) => set((state) => ({ ...state, page: page })),
    setTotal: (total) => set((state) => ({ ...state, total: total })),

    setFunds: (funds) => set((state) => ({ ...state, funds })),
    addFunds: (funds) => set((state) => ({ ...state, funds: [...state.funds, ...funds] })),
  }));
};
