import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DateTime } from "luxon"

import { IFiltersSlice } from "@/store/slices/filters/types"
import { ManaT } from "@/utils/types"

const initialState: IFiltersSlice = {
  search: "",
  mana: [],
  winrate: [0, 100],
  decks: [1, undefined],
  autoincludes: [0, undefined],
  uniqueCards: [0, undefined],
  dateAfter: DateTime.local().minus({ years: 1 }).toSeconds(),
  size: [64, undefined],
  topCut: undefined,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },

    setMana: (state, { payload }: PayloadAction<ManaT[]>) => {
      state.mana = payload
    },

    setWinrate: (state, { payload }: PayloadAction<[number, number]>) => {
      state.winrate = payload
    },

    setDecks: (
      state,
      { payload }: PayloadAction<[number, number | undefined]>
    ) => {
      state.decks = payload
    },

    setAutoincludes: (
      state,
      { payload }: PayloadAction<[number, number | undefined]>
    ) => {
      state.autoincludes = payload
    },

    setUniqueCards: (
      state,
      { payload }: PayloadAction<[number, number | undefined]>
    ) => {
      state.uniqueCards = payload
    },

    setTournamentDateAfter: (state, { payload }: PayloadAction<number>) => {
      state.dateAfter = payload
    },

    setTournamentSize: (
      state,
      { payload }: PayloadAction<[number, number | undefined]>
    ) => {
      state.size = payload
    },

    setTopCut: (state, { payload }: PayloadAction<number | undefined>) => {
      state.topCut = payload
    },

    clearFilters: () => initialState,
  },
})

export const {
  setSearch,
  setMana,
  setWinrate,
  setDecks,
  setAutoincludes,
  setUniqueCards,
  setTournamentDateAfter,
  setTournamentSize,
  setTopCut,
  clearFilters,
} = filtersSlice.actions

export default filtersSlice.reducer
