import { ChangeEventHandler, useCallback } from "react"

import styled from "styled-components"

import Input from "@/components/Input"
import colors from "@/utils/colors"
import { code24, text16Medium } from "@/utils/fonts"

interface IRangeFilterProps {
  left: string
  right: string
  label: string
  leftPlaceholder?: string
  rightPlaceholder?: string
  max?: number
  onChange: (left: string, right: string) => void
}

export default function RangeFilter({
  left,
  right,
  label,
  leftPlaceholder,
  rightPlaceholder,
  onChange,
}: IRangeFilterProps) {
  const handleLeftChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => onChange(target.value, right),
    [onChange, right]
  )

  const handleRightChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => onChange(left, target.value),
    [onChange, left]
  )

  return (
    <Wrapper>
      <Input
        type="number"
        value={left}
        onChange={handleLeftChange}
        placeholder={leftPlaceholder}
      />
      <span>≤</span>
      <label>{label}</label>
      <span>≤</span>
      <Input
        type="number"
        value={right}
        onChange={handleRightChange}
        placeholder={rightPlaceholder}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;

  color: ${colors.black};

  > ${Input} {
    width: 80px;
  }

  > span {
    ${code24};
  }

  > label {
    ${text16Medium};
    flex-grow: 1;
    text-align: center;
  }
`
