import styled from "styled-components"

import Filters from "@/pages/Commanders/Filters"
import List from "@/pages/Commanders/List"

export default function FilteredList() {
  return (
    <Wrapper>
      <Filters />

      <List />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  margin-top: 48px;
`
