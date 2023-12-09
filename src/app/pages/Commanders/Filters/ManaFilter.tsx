import { useCallback, useEffect, useState } from "react"

import styled from "styled-components"

import ManaSymbol from "@/components/ManaSymbol"
import { DEBOUNCE_DELAY } from "@/pages/Commanders/Filters"
import { useAppDispatch, useAppSelector } from "@/store"
import { setMana } from "@/store/slices/filters"
import { basicTransition } from "@/utils/colors"
import useDebounce from "@/utils/hooks/useDebounce"
import { ManaT } from "@/utils/types"

const manaSymbols: ManaT[] = ["W", "U", "B", "R", "G", "C"]

export default function ManaFilter() {
  const dispatch = useAppDispatch()

  const { mana } = useAppSelector(({ filters }) => filters)

  const [currentMana, setCurrentMana] = useState<ManaT[]>(mana)

  const getManaToggle = useCallback(
    (mana: ManaT) => {
      return () => {
        if (currentMana.includes(mana)) {
          setCurrentMana(currentMana.filter(symbol => symbol !== mana))
        } else {
          setCurrentMana([...currentMana, mana])
        }
      }
    },
    [currentMana]
  )

  const debouncedMana = useDebounce(currentMana, DEBOUNCE_DELAY)

  useEffect(() => {
    dispatch(setMana(debouncedMana))
  }, [debouncedMana, dispatch])

  useEffect(() => {
    setCurrentMana(mana)
  }, [mana])

  return (
    <Wrapper>
      {manaSymbols.map(symbol => (
        <button
          key={symbol}
          data-active={currentMana.includes(symbol)}
          onClick={getManaToggle(symbol)}
        >
          <ManaSymbol symbol={symbol} size={40} />
        </button>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > button {
    cursor: pointer;
    background-color: transparent;
    border: none;

    padding: 0;
    width: 40px;
    height: 40px;

    transition: opacity ${basicTransition};

    &[data-active="false"] {
      opacity: 0.5;
    }
  }
`
