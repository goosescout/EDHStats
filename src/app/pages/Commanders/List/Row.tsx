import styled from "styled-components"

import { IColumn } from "@/components/Table/types"
import colors, { colorsRGB } from "@/utils/colors"
import { header16Medium } from "@/utils/fonts"

const Row = styled.div<{ $columns: IColumn[] }>`
  background-color: ${colors.white};
  border-radius: 20px;
  border: 2px solid ${colors.gray};

  height: 60px;
  box-sizing: border-box;
  padding: 0 18px;

  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns
      .map(({ width }) => (width === "fill" ? "1fr" : `${width}px`))
      .join(" ")};
  align-items: center;
  gap: 8px;

  ${header16Medium};
  color: ${colors.black};
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px 0px rgba(${colorsRGB.black}, 0.1);
  }
`

export default Row
