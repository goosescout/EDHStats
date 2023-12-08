import styled from "styled-components"

import Page from "@/components/Page"
import { text20Medium } from "@/utils/fonts"
import OneWithNoting from "~/assets/images/OneWithNothing.png"

export default function NotFound() {
  return (
    <StyledPage>
      <img src={OneWithNoting} alt="One with Nothing" />
      <p>The page you have requested does not exist.</p>
    </StyledPage>
  )
}

const StyledPage = styled(Page)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 520px;
  }

  > p {
    margin: 0;
    ${text20Medium};
  }
`
