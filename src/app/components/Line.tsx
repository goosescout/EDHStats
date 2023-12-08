import styled from "styled-components"

import colors from "@/utils/colors"

interface ILineProps {
  top?: number
  bottom?: number
}

const Line = styled.hr<ILineProps>`
  width: 100%;
  height: 1px;

  background-color: ${colors.gray};

  margin-top: ${({ top }) => top ?? 0}px;
  margin-bottom: ${({ bottom }) => bottom ?? 0}px;

  margin-left: 0px;
  margin-right: 0px;

  border: none;
`

export default Line
