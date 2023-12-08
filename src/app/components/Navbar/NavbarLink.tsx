import { NavLink } from "react-router-dom"
import styled from "styled-components"

import colors, { basicTransition } from "@/utils/colors"
import { header28 } from "@/utils/fonts"

const NavbarLink = styled(NavLink)`
  padding: 6px 8px;

  ${header28};
  color: ${colors.black};
  text-decoration: none;

  transition: color ${basicTransition};

  &:hover {
    color: ${colors.purple};
  }

  &.active {
    color: ${colors.purple};
  }
`

export default NavbarLink
