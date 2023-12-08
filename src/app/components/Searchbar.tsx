import { HTMLAttributes, useCallback, useRef } from "react"

import styled from "styled-components"

import Input from "@/components/Input"
import colors from "@/utils/colors"
import MagnifyingGlass from "~/assets/icons/MagnifyingGlass"

interface ISearchbarProps extends HTMLAttributes<HTMLInputElement> {
  value: string
}

export default function Searchbar(props: ISearchbarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <SearchWrapper onClick={handleClick}>
      <MagnifyingGlass />
      <StyledInput
        ref={inputRef}
        type="search"
        placeholder="Search..."
        {...props}
      />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;

  > svg {
    cursor: text;
    position: absolute;
    left: 16px;

    path {
      fill: ${colors.black};
    }
  }
`

const StyledInput = styled(Input)`
  padding-left: 48px;
  width: 300px;
`
