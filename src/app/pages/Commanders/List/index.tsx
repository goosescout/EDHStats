import { useMemo } from "react"

import styled from "styled-components"

import Table from "@/components/Table"
import ManaRow from "@/pages/Commanders/List/ManaRow"
import colors from "@/utils/colors"

const columns: {
  name: string
  width: number | "fill"
  sort: "asc" | "desc" | "none" | null
}[] = [
  { name: "#", width: 40, sort: null },
  { name: "Commander", width: "fill", sort: null },
  { name: "Colors", width: 124, sort: null },
  { name: "Winrate", width: 68, sort: "desc" },
  { name: "Decks", width: 52, sort: "none" },
  { name: "Autoincludes", width: 84, sort: "none" },
  { name: "Unique", width: 60, sort: "none" },
  { name: "Price", width: 108, sort: "none" },
]

const commanders = [
  "Tymna, the Weaver // Kraum, Ludevic’s Opus",
  "Tevesh Szat, Doom of Fools // Kraum, Ludevic’s Opus",
  "Godo, Bandit Warlord",
  "Kinnan, Bonder’s Prodigy",
]

const MANA_SYMBOLS = ["W", "U", "B", "R", "G"]
const AVG_WINRATE = 50

function getRandomManaSymbols() {
  const manaSymbols = MANA_SYMBOLS.slice()
  const manaSymbolsCount = Math.floor(Math.random() * 5) + 1

  return manaSymbols
    .sort(() => Math.random() - 0.5)
    .slice(0, manaSymbolsCount)
    .sort((a, b) => MANA_SYMBOLS.indexOf(a) - MANA_SYMBOLS.indexOf(b))
    .join("")
}

export default function List() {
  const rows = useMemo(
    () =>
      [...commanders, ...commanders, ...commanders].map((commander, index) => {
        const winrate = Number((Math.random() * 100).toFixed(2))

        return [
          <span key={`${columns[0].name}_${index}`}>{index + 1}</span>,
          <NameColumn key={`${columns[1].name}_${index}`}>
            {commander}
          </NameColumn>,
          <ManaRow key={`${columns[2].name}_${index}`}>
            {getRandomManaSymbols()}
          </ManaRow>,
          <WinrateColumn
            key={`${columns[3].name}_${index}`}
            data-positive={winrate > AVG_WINRATE}
          >
            {winrate}%
          </WinrateColumn>,
          <span key={`${columns[4].name}_${index}`}>
            {(Math.random() * 1000).toFixed(0)}
          </span>,
          <span key={`${columns[5].name}_${index}`}>
            {(Math.random() * 100).toFixed(0)}
          </span>,
          <span key={`${columns[6].name}_${index}`}>
            {(Math.random() * 1000).toFixed(0)}
          </span>,
          <span key={`${columns[7].name}_${index}`}>
            ${(Math.random() * 1000).toFixed(2)}
          </span>,
        ]
      }),
    []
  )

  return <Table columns={columns} rows={rows} />
}

const NameColumn = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const WinrateColumn = styled.span`
  &[data-positive="true"] {
    color: ${colors.green};
  }

  &[data-positive="false"] {
    color: ${colors.red};
  }
`
