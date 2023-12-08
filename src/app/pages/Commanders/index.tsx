import styled from "styled-components"

import Page from "@/components/Page"
import FilteredList from "@/pages/Commanders/FilteredList"
import colors from "@/utils/colors"
import { header52, text16Medium } from "@/utils/fonts"

export default function Commanders() {
  return (
    <StyledPage>
      <h1>Commanders</h1>
      <p>
        Find the best commander that suits your needs. Cheap, consistent,
        flexible - we have it all. Click on a commander to see more detailed
        information and investigate its card choices.
      </p>

      <FilteredList />
    </StyledPage>
  )
}

const StyledPage = styled(Page)`
  color: ${colors.black};

  > h1 {
    ${header52};
    margin: 0 0 16px 0;
  }

  > p {
    max-width: 700px;
    ${text16Medium};
    margin: 0;
  }
`
