import { ButtonHTMLAttributes } from "react"

import styled from "styled-components"

import colors, { basicTransition } from "@/utils/colors"
import { text16Medium } from "@/utils/fonts"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "data-type"?: "primary" | "secondary"
}

const Button = styled.button<IButtonProps>`
  cursor: pointer;

  &[data-type="secondary"] {
    background-color: transparent;
    border: none;

    padding: 4px 8px;
    width: fit-content;
    margin-top: -4px;
    margin-left: -8px;

    ${text16Medium};
    color: ${colors.purple};
    text-decoration: underline;
    transition: color ${basicTransition};

    &:hover {
      color: ${colors.magenta};
    }
  }
`

Button.defaultProps = {
  "data-type": "primary",
}

export default Button
