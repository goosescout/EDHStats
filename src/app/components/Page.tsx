import styled from "styled-components"

import { colorsRGB } from "@/utils/colors"

const Page = styled.main`
  padding: 32px;
  margin: 0 20px;
  border-radius: 24px;
  background: rgba(${colorsRGB.white}, 0.75);

  box-shadow: 0px 8px 20px 0px rgba(${colorsRGB.black}, 0.15);
  backdrop-filter: blur(16px);
`

export default Page
