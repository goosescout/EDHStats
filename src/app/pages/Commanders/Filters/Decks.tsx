import { useCallback, useEffect, useState } from "react"

import RangeFilter from "@/components/RangeFilter"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setDecks } from "@/store/slices/filters"
import useDebounce from "@/utils/hooks/useDebounce"

export default function Decks() {
  const dispatch = useAppDispatch()

  const [left, right] = useAppSelector(({ filters }) => filters.decks)

  const [currentLeft, setCurrentLeft] = useState(String(left))
  const [currentRight, setCurrentRight] = useState(String(right ?? ""))

  const handleChange = useCallback((left: string, right: string) => {
    if (
      (Number(left) >= 1 || left === "") &&
      (Number(right) >= 1 || right === "")
    ) {
      setCurrentLeft(left)
      setCurrentRight(right)
    }
  }, [])

  const debouncedLeft = useDebounce(currentLeft, DEBOUNCE_DELAY)
  const debouncedRight = useDebounce(currentRight, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(
      setDecks([
        debouncedLeft === "" ? 1 : Number(debouncedLeft),
        debouncedRight === "" ? undefined : Number(debouncedRight),
      ])
    )
  }, [debouncedLeft, debouncedRight, dispatch])

  useEffect(() => {
    setCurrentLeft(String(left))
    setCurrentRight(String(right ?? ""))
  }, [left, right])

  return (
    <RangeFilter
      label="Decks"
      onChange={handleChange}
      left={currentLeft}
      right={currentRight}
      leftPlaceholder="1"
      rightPlaceholder="Infinity"
    />
  )
}
