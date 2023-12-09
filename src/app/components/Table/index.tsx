import styled from "styled-components"

import Separator from "@/components/Separator"
import SortOrderSelector from "@/components/Table/SortOrderSelector"
import colors from "@/utils/colors"
import { header12Medium, header16Medium } from "@/utils/fonts"

interface IColumn {
  name: string
  width: number | "fill"
  sort: "asc" | "desc" | "none" | null
}

interface ITableProps {
  columns: IColumn[]
  rows: React.ReactNode[][]
  showHeader?: boolean
  className?: string
}

export default function Table({
  columns,
  rows,
  showHeader = true,
  className = "",
}: ITableProps) {
  return (
    <Wrapper className={className}>
      {showHeader && (
        <Header $columns={columns}>
          {columns.map(({ name, sort }) => (
            <SortOrderSelector key={name} state={sort} name={name} />
          ))}
        </Header>
      )}

      {rows.map((row, index) => (
        <Row key={index} $columns={columns}>
          {row.map((node, nodeIndex) =>
            nodeIndex === 0 ? (
              node
            ) : (
              <WithTableDivider key={nodeIndex}>{node}</WithTableDivider>
            )
          )}
        </Row>
      ))}
    </Wrapper>
  )
}

function WithTableDivider({ children }: { children: React.ReactNode }) {
  return (
    <SeparatorWrapper>
      <Separator />
      {children}
    </SeparatorWrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Header = styled.div<{ $columns: IColumn[] }>`
  display: grid;
  grid-template-columns: ${({ $columns }) =>
    $columns
      .map(({ width }) => (width === "fill" ? "1fr" : `${width}px`))
      .join(" ")};
  gap: 8px;
  padding: 0 20px;

  ${header12Medium};
  color: ${colors.black};
`

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
`

const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  > ${Separator} {
    height: 32px;
    align-self: unset;
  }
`
