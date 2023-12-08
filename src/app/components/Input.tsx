import styled from "styled-components"

import colors, { basicTransition } from "@/utils/colors"
import { text16Medium } from "@/utils/fonts"

const Input = styled.input`
  appearance: textfield;
  border-radius: 16px;
  border: 2px solid ${colors.gray};
  background: ${colors.white};
  outline: none;
  transition: border-color ${basicTransition};

  width: 150px;
  padding: 10px 14px;
  box-sizing: border-box;

  ${text16Medium};
  color: ${colors.black};

  &:focus {
    border-color: ${colors.purple};
  }

  &::placeholder {
    opacity: 0.5;
  }

  &::selection {
    background-color: ${colors.purple};
    color: ${colors.white};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`

Input.defaultProps = {
  spellCheck: false,
  type: "text",
}

export default Input
