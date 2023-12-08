import { MouseEventHandler, useCallback } from "react"

import styled from "styled-components"

import Button from "@/components/Button"
import Line from "@/components/Line"
import Autoincludes from "@/pages/Commanders/Filters/Autoincludes"
import Decks from "@/pages/Commanders/Filters/Decks"
import ManaFilter from "@/pages/Commanders/Filters/ManaFilter"
import Search from "@/pages/Commanders/Filters/Search"
import TopCut from "@/pages/Commanders/Filters/TopCut"
import TournamentDateAfter from "@/pages/Commanders/Filters/TournamentDateAfter"
import TournamentSize from "@/pages/Commanders/Filters/TournamentSize"
import UniqueCards from "@/pages/Commanders/Filters/UniqueCards"
import Winrate from "@/pages/Commanders/Filters/Winrate"
import { useAppDispatch } from "@/store"
import { clearFilters } from "@/store/slices/filters"

export const DEBOUNCE_DELAY = 1000

export default function Filters() {
  const dispatch = useAppDispatch()

  const handleClear = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    dispatch(clearFilters())
  }, [dispatch])

  return (
    <Wrapper>
      <Search />
      <ManaFilter />

      <Line />

      <Winrate />
      <Decks />
      <Autoincludes />
      <UniqueCards />

      <Line />

      <TournamentDateAfter />
      <TournamentSize />
      <TopCut />

      <Line />

      <Button data-type="secondary" onClick={handleClear}>
        Clear filters
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
