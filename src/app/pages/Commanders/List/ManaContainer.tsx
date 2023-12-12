import styled from "styled-components"

import ManaSymbol from "@/components/ManaSymbol"
import { ManaT } from "@/utils/types"

interface IManaRowProps {
  children: string
}

export default function ManaContainer({ children: mana }: IManaRowProps) {
  return (
    <Wrapper>
      {mana.split("").map(symbol => (
        <ManaSymbol key={symbol} size={20} symbol={symbol as ManaT} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  width: 100%;
`
