import { ManaT } from "@/utils/types"

export interface IFiltersSlice {
  // Commander-specific filters
  search: string
  mana: ManaT[]
  winrate: [number, number]
  decks: [number, number | undefined]
  autoincludes: [number, number | undefined]
  uniqueCards: [number, number | undefined]

  // Tournament-specific filters
  dateAfter: number // timestamp
  size: [number, number | undefined]
  topCut?: number
}
