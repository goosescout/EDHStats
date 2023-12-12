import React, { useRef } from "react"

import { ViewportList, ViewportListRef } from "react-viewport-list"
import styled from "styled-components"

import SortOrderSelector from "@/components/Table/SortOrderSelector"
import { IColumn } from "@/components/Table/types"
import colors from "@/utils/colors"
import { header12Medium } from "@/utils/fonts"

interface ITableProps {
  columns: IColumn[]
  showHeader?: boolean
  className?: string
  children: React.ReactNode[]
}

export default function Table({
  columns,
  showHeader = true,
  className = "",
  children,
}: ITableProps) {
  const listRef = useRef<ViewportListRef>(null)

  return (
    <Wrapper className={className}>
      {showHeader && (
        <Header $columns={columns}>
          {columns.map(({ name, sort }) => (
            <SortOrderSelector
              key={name}
              state={sort}
              name={name}
              onClick={() => {}}
            />
          ))}
        </Header>
      )}

      <ListWrapper>
        <ViewportList
          items={children}
          itemMargin={10}
          overscan={25}
          ref={listRef}
        >
          {item => item}
        </ViewportList>
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

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

  > span {
    opacity: 0.75;
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
