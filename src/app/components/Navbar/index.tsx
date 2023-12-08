import styled from "styled-components"

import HomeLink from "@/components/Navbar/HomeLink"
import NavbarLink from "@/components/Navbar/NavbarLink"
import { colorsRGB } from "@/utils/colors"

interface ILinkDetails {
  text: string
  to: string
}

const links: ILinkDetails[] = [
  {
    text: "Card choices",
    to: "/card-choices",
  },
  {
    text: "Commanders",
    to: "/commanders",
  },
]

export default function Navbar() {
  return (
    <NavWrapper>
      <Content>
        <HomeLink />
        {links.map(({ text, to }) => (
          <NavbarLink key={text} to={to}>
            {text}
          </NavbarLink>
        ))}
      </Content>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: rgba(${colorsRGB.white}, 0.75);
  box-shadow: 0px 8px 20px 0px rgba(${colorsRGB.black}, 0.15);
  backdrop-filter: blur(16px);

  width: 100%;
  height: 74px;

  position: fixed;
  z-index: 100;
`

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px 24px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 28px;
`
