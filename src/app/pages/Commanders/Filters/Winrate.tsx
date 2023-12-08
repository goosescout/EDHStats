import { useCallback, useEffect, useState } from "react"

import RangeFilter from "@/components/RangeFilter"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setWinrate } from "@/store/slices/filters"
import useDebounce from "@/utils/hooks/useDebounce"

export default function Winrate() {
  const dispatch = useAppDispatch()

  const [left, right] = useAppSelector(({ filters }) => filters.winrate)

  const [currentLeft, setCurrentLeft] = useState(String(left))
  const [currentRight, setCurrentRight] = useState(String(right))

  const handleChange = useCallback((left: string, right: string) => {
    if (
      Number(left) >= 0 &&
      Number(left) <= 100 &&
      Number(right) >= 0 &&
      Number(right) <= 100
    ) {
      setCurrentLeft(left)
      setCurrentRight(right)
    }
  }, [])

  const debouncedLeft = useDebounce(currentLeft, DEBOUNCE_DELAY)
  const debouncedRight = useDebounce(currentRight, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(setWinrate([Number(debouncedLeft), Number(debouncedRight)]))
  }, [debouncedLeft, debouncedRight, dispatch])

  useEffect(() => {
    setCurrentLeft(String(left))
    setCurrentRight(String(right))
  }, [left, right])

  return (
    <RangeFilter
      label="Winrate"
      onChange={handleChange}
      left={currentLeft}
      right={currentRight}
      leftPlaceholder="0"
      rightPlaceholder="0"
    />
  )
}
