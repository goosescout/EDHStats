import { ChangeEventHandler, useCallback, useEffect, useState } from "react"

import { DateTime } from "luxon"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import Input from "@/components/Input"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppSelector } from "@/store"
import { setTournamentDateAfter } from "@/store/slices/filters"
import { text16Medium } from "@/utils/fonts"
import useDebounce from "@/utils/hooks/useDebounce"

export default function TournamentDateAfter() {
  const dispatch = useDispatch()

  const timestamp = useAppSelector(({ filters }) => filters.dateAfter)

  const [currentDate, setCurrentDate] = useState(
    DateTime.fromSeconds(timestamp)
  )

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => {
      const date = DateTime.fromJSDate(target.valueAsDate ?? new Date())
      if (date.isValid) setCurrentDate(date)
    },
    []
  )

  const debouncedTimestamp = useDebounce(
    currentDate.toSeconds(),
    DEBOUNCE_DELAY
  )

  useEffect(() => {
    dispatch(setTournamentDateAfter(debouncedTimestamp))
  }, [debouncedTimestamp, dispatch])

  useEffect(() => {
    setCurrentDate(DateTime.fromSeconds(timestamp))
  }, [timestamp])

  return (
    <Wrapper>
      Tournament date after:
      <Input
        type="date"
        value={currentDate.toFormat("yyyy-MM-dd")}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${text16Medium};

  > ${Input} {
    width: 132px;
  }
`
