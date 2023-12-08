import styled from "styled-components"

import Filters from "@/pages/Commanders/Filters"

export default function FilteredList() {
  return (
    <Wrapper>
      <Filters />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 32px;

  margin-top: 48px;
`
