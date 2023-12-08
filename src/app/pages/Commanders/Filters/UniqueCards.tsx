import { useCallback, useEffect, useState } from "react"

import RangeFilter from "@/components/RangeFilter"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setUniqueCards } from "@/store/slices/filters"
import useDebounce from "@/utils/hooks/useDebounce"

export default function UniqueCards() {
  const dispatch = useAppDispatch()

  const [left, right] = useAppSelector(({ filters }) => filters.uniqueCards)

  const [currentLeft, setCurrentLeft] = useState(String(left))
  const [currentRight, setCurrentRight] = useState(String(right ?? ""))

  const handleChange = useCallback((left: string, right: string) => {
    if (
      (Number(left) >= 0 || left === "") &&
      (Number(right) >= 0 || right === "")
    ) {
      setCurrentLeft(left)
      setCurrentRight(right)
    }
  }, [])

  const debouncedLeft = useDebounce(currentLeft, DEBOUNCE_DELAY)
  const debouncedRight = useDebounce(currentRight, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(
      setUniqueCards([
        Number(debouncedLeft),
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
      label="Unique Cards"
      onChange={handleChange}
      left={currentLeft}
      right={currentRight}
      leftPlaceholder="0"
      rightPlaceholder="Infinity"
    />
  )
}
