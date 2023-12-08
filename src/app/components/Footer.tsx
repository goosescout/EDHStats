import { useEffect, useState } from "react"

import styled from "styled-components"

import Separator from "@/components/Separator"
import colors, { colorsRGB } from "@/utils/colors"
import { text14, text14Medium } from "@/utils/fonts"
import Discord from "~/assets/icons/Discord"
import Github from "~/assets/icons/Github"
import Telegram from "~/assets/icons/Telegram"

export default function Footer() {
  const [loadTime, setLoadTime] = useState("")

  useEffect(() => {
    const loadTime = (performance.mark("pageEnd").startTime / 1000).toFixed(3)
    setLoadTime(loadTime)
  }, [])

  return (
    <FooterWrapper>
      <Content>
        <WizardsLegalInfo>
          Portions of EDHStats are unofficial Fan Content permitted under the
          Wizards of the Coast Fan Content Policy. The literal and graphical
          information presented on this site about Magic: The Gathering,
          including card images and mana symbols, is copyright Wizards of the
          Coast, LLC. EDHStats is not produced by or endorsed by Wizards of the
          Coast.
        </WizardsLegalInfo>
        <Links>
          EDHStats uses data gathered from outer recourses or APIs:{" "}
          <a href="https://scryfall.com/" target="_blank" rel="noreferrer">
            Scryfall
          </a>
          ,{" "}
          <a href="https://eminence.events/" target="_blank" rel="noreferrer">
            Eminence Gaming
          </a>
          ,{" "}
          <a href="https://www.moxfield.com" target="_blank" rel="noreferrer">
            Moxfield
          </a>
          .
        </Links>
        <LoadTime>Page loaded in {loadTime} seconds.</LoadTime>

        <Contacts>
          <p>Michael Gurevich © 2023</p>
          <Separator />
          <a
            href="http://discordapp.com/users/363270817318174720"
            target="_blank"
            rel="noreferrer"
          >
            <Discord />
          </a>
          <a href="https://t.me/goosescout" target="_blank" rel="noreferrer">
            <Telegram />
          </a>
          <a
            href="https://github.com/goosescout/Web"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </Contacts>
      </Content>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${colors.gray};
  box-shadow: 0px 8px 20px 0px rgba(${colorsRGB.gray}, 0.15);

  width: 100%;
  margin-top: auto;
`

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 24px;

  p {
    margin: 0;
    ${text14};
    color: ${colors.black};
    opacity: 0.6;
  }
`

const WizardsLegalInfo = styled.p`
  max-width: 800px;
`

const Links = styled.p`
  > a {
    color: ${colors.purple};
    text-decoration: underline;
  }
`

const LoadTime = styled.p``

const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg path {
    fill: ${colors.black};
  }

  > p {
    ${text14Medium};
    opacity: 1;
  }

  > a {
    height: 18px;
  }

  > ${Separator} {
    background-color: ${colors.black};
  }
`
