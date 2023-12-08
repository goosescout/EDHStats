import { useCallback, ChangeEventHandler, useState, useEffect } from "react"

import styled from "styled-components"

import Searchbar from "@/components/Searchbar"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setSearch } from "@/store/slices/filters"
import useDebounce from "@/utils/hooks/useDebounce"

export default function Search() {
  const dispatch = useAppDispatch()

  const { search } = useAppSelector(({ filters }) => filters)

  const [currentSearch, setCurrentSearch] = useState(search)

  const handleSearchChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setCurrentSearch(target.value),
    []
  )

  const debouncedSearch = useDebounce(currentSearch, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(setSearch(debouncedSearch))
  }, [debouncedSearch, dispatch])

  useEffect(() => {
    setCurrentSearch(search)
  }, [search])

  return (
    <StyledSearchbar
      value={currentSearch}
      onChange={handleSearchChange}
      placeholder="Search..."
    />
  )
}

const StyledSearchbar = styled(Searchbar)`
  width: 320px;
`
