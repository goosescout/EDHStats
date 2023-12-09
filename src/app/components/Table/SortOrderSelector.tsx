import { MouseEventHandler, useCallback } from "react"

import styled from "styled-components"

import colors, { basicTransition } from "@/utils/colors"
import ArrowDown from "~/assets/icons/ArrowDown"

interface ISortOrderSelectorProps {
  state: "asc" | "desc" | "none" | null
  name: string
  onClick: (state: "asc" | "desc" | "none") => void
}

export default function SortOrderSelector({
  state,
  name,
  onClick,
}: ISortOrderSelectorProps) {
  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
    () => onClick(state!),
    [onClick, state]
  )

  if (state === null) return <span>{name}</span>

  if (state === "none")
    return (
      <Wrapper data-state={state} onClick={handleClick}>
        <span>{name}</span>
        <ArrowDown />
        <ArrowDown />
      </Wrapper>
    )

  return (
    <Wrapper data-state={state}>
      <span>{name}</span>
      <ArrowDown />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: start;
  column-gap: 6px;

  opacity: 0.75;
  transition: color ${basicTransition};

  > svg path {
    fill: ${colors.black};
    transition: fill ${basicTransition};
  }

  &[data-state="none"] {
    cursor: pointer;

    row-gap: 4px;
    grid-template-areas:
      "name up"
      "name down";

    > span {
      grid-area: name;
    }

    > svg:first-of-type {
      transform: rotate(180deg);
      grid-area: up;
    }

    > svg:last-of-type {
      grid-area: down;
    }
  }

  &[data-state="asc"],
  &[data-state="desc"] {
    cursor: pointer;
    opacity: 1;
    color: ${colors.purple};

    grid-template-areas: "name icon";

    > span {
      grid-area: name;
    }

    > svg {
      grid-area: icon;

      path {
        fill: ${colors.purple};
      }
    }
  }

  &[data-state="asc"] {
    > svg {
      transform: rotate(180deg);
    }
  }
`
