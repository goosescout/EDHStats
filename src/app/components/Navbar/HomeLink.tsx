import { Link } from "react-router-dom"
import styled from "styled-components"

import Logo from "~/assets/icons/Logo"

export default function HomeLink() {
  return (
    <StyledLink to="/">
      <Logo />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  height: 50px;
  margin-right: 6px;
`
