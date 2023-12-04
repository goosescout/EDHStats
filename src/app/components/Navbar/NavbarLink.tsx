import { NavLink } from "react-router-dom"
import styled from "styled-components"

import colors, { basicTransition } from "@/utils/colors"
import { header28 } from "@/utils/fonts"

const NavbarLink = styled(NavLink)`
  ${header28};
  color: ${colors.black};
  text-decoration: none;

  transition: color ${basicTransition};

  &:hover {
    color: ${colors.lightPurple};
  }

  &.active {
    color: ${colors.lightPurple};
  }
`

export default NavbarLink
