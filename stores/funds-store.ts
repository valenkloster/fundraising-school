import { createStore } from 'zustand/vanilla';
import { VCProfile } from '@/models/vc_list';
import { produce } from 'immer';

export type FilterOptions = {
  rounds: string[];
  check_size: string[];
  sectors: string[];
  locations: string[];
};

export type SelectedFilterOptions = {
  round: string | null;
  check_size: string | null;
  sector: string | null;
  location: string | null;
};

export type FundState = {
  funds: VCProfile[];
  filter_options: FilterOptions;
  selected_filter_options: SelectedFilterOptions;
  total: number;
  page: number;
};

export type FundActions = {
  setFunds: (funds: VCProfile[]) => void;
  addFunds: (funds: VCProfile[]) => void;
  setPage: (page: number) => void;
  setTotal: (total: number) => void;
  setFilterOptions: (filter_options: FilterOptions) => void;
  setSelectedFilterOptions: (selected_filter_options: SelectedFilterOptions) => void;
};

export type FundStore = FundState & FundActions;

export const initFundStore = (): FundState => {
  return {
    total: 0,
    funds: [],
    page: 1,
    filter_options: { rounds: [], check_size: [], sectors: [], locations: [] },
    selected_filter_options: { round: null, check_size: null, sector: null, location: null },
  };
};

export const defaultInitState: FundState = initFundStore();

export const createFundStore = (initState: FundState = defaultInitState) => {
  return createStore<FundStore>((set) => ({
    ...initState,

    setPage: (page) =>
      set(
        produce((state: FundState) => {
          state.page = page;
        }),
      ),

    setTotal: (total) =>
      set(
        produce((state: FundState) => {
          state.total = total;
        }),
      ),

    setFunds: (funds) =>
      set(
        produce((state: FundState) => {
          state.funds = funds;
        }),
      ),

    addFunds: (funds) =>
      set(
        produce((state: FundState) => {
          state.funds.push(...funds);
        }),
      ),

    setFilterOptions: (filter_options) =>
      set(
        produce((state: FundState) => {
          state.filter_options = filter_options;
        }),
      ),

    setSelectedFilterOptions: (selected_filter_options) =>
      set(
        produce((state: FundState) => {
          state.selected_filter_options = selected_filter_options;
          state.funds = [];
          state.page = 1;
          state.total = 0;
        }),
      ),
  }));
};
