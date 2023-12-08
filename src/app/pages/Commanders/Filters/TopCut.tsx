import { ChangeEventHandler, useCallback, useEffect, useState } from "react"

import styled from "styled-components"

import Input from "@/components/Input"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setTopCut } from "@/store/slices/filters"
import colors from "@/utils/colors"
import { text16Medium } from "@/utils/fonts"
import useDebounce from "@/utils/hooks/useDebounce"

export default function TopCut() {
  const dispatch = useAppDispatch()

  const topCut = useAppSelector(({ filters }) => filters.topCut)

  const [currentTopCut, setCurrentTopCut] = useState(String(topCut ?? ""))

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => {
      if (Number(target.value) || target.value === "")
        setCurrentTopCut(target.value)
    },
    []
  )

  const debouncedTopCut = useDebounce(currentTopCut, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(
      setTopCut(debouncedTopCut === "" ? undefined : Number(debouncedTopCut))
    )
  }, [debouncedTopCut, dispatch])

  useEffect(() => {
    setCurrentTopCut(String(topCut ?? ""))
  }, [topCut])

  return (
    <Wrapper>
      Decks from top
      <Input
        type="number"
        placeholder="Infinity"
        value={currentTopCut}
        onChange={handleChange}
      />
      only
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  ${text16Medium};
  color: ${colors.black};

  > ${Input} {
    width: 100px;
  }
`
