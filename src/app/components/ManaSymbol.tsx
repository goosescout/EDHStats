import { ManaT } from "@/utils/types"
import Mana0 from "~/assets/icons/mana/Mana0"
import Mana1 from "~/assets/icons/mana/Mana1"
import Mana10 from "~/assets/icons/mana/Mana10"
import Mana11 from "~/assets/icons/mana/Mana11"
import Mana12 from "~/assets/icons/mana/Mana12"
import Mana13 from "~/assets/icons/mana/Mana13"
import Mana14 from "~/assets/icons/mana/Mana14"
import Mana15 from "~/assets/icons/mana/Mana15"
import Mana16 from "~/assets/icons/mana/Mana16"
import Mana17 from "~/assets/icons/mana/Mana17"
import Mana18 from "~/assets/icons/mana/Mana18"
import Mana19 from "~/assets/icons/mana/Mana19"
import Mana2 from "~/assets/icons/mana/Mana2"
import Mana20 from "~/assets/icons/mana/Mana20"
import Mana2B from "~/assets/icons/mana/Mana2B"
import Mana2G from "~/assets/icons/mana/Mana2G"
import Mana2R from "~/assets/icons/mana/Mana2R"
import Mana2U from "~/assets/icons/mana/Mana2U"
import Mana2W from "~/assets/icons/mana/Mana2W"
import Mana3 from "~/assets/icons/mana/Mana3"
import Mana4 from "~/assets/icons/mana/Mana4"
import Mana5 from "~/assets/icons/mana/Mana5"
import Mana6 from "~/assets/icons/mana/Mana6"
import Mana7 from "~/assets/icons/mana/Mana7"
import Mana8 from "~/assets/icons/mana/Mana8"
import Mana9 from "~/assets/icons/mana/Mana9"
import ManaB from "~/assets/icons/mana/ManaB"
import ManaBG from "~/assets/icons/mana/ManaBG"
import ManaBP from "~/assets/icons/mana/ManaBP"
import ManaBR from "~/assets/icons/mana/ManaBR"
import ManaC from "~/assets/icons/mana/ManaC"
import ManaG from "~/assets/icons/mana/ManaG"
import ManaGP from "~/assets/icons/mana/ManaGP"
import ManaGU from "~/assets/icons/mana/ManaGU"
import ManaGW from "~/assets/icons/mana/ManaGW"
import ManaR from "~/assets/icons/mana/ManaR"
import ManaRG from "~/assets/icons/mana/ManaRG"
import ManaRP from "~/assets/icons/mana/ManaRP"
import ManaRW from "~/assets/icons/mana/ManaRW"
import ManaS from "~/assets/icons/mana/ManaS"
import ManaU from "~/assets/icons/mana/ManaU"
import ManaUB from "~/assets/icons/mana/ManaUB"
import ManaUP from "~/assets/icons/mana/ManaUP"
import ManaUR from "~/assets/icons/mana/ManaUR"
import ManaW from "~/assets/icons/mana/ManaW"
import ManaWB from "~/assets/icons/mana/ManaWB"
import ManaWP from "~/assets/icons/mana/ManaWP"
import ManaWU from "~/assets/icons/mana/ManaWU"
import ManaX from "~/assets/icons/mana/ManaX"
import ManaY from "~/assets/icons/mana/ManaY"
import ManaZ from "~/assets/icons/mana/ManaZ"

const StringToComponent: Record<
  string,
  React.FC<{ width?: number; height?: number; className?: string }>
> = {
  "W": ManaW,
  "U": ManaU,
  "B": ManaB,
  "R": ManaR,
  "G": ManaG,
  "C": ManaC,
  "W/P": ManaWP,
  "U/P": ManaUP,
  "B/P": ManaBP,
  "R/P": ManaRP,
  "G/P": ManaGP,
  "2/W": Mana2W,
  "2/U": Mana2U,
  "2/B": Mana2B,
  "2/R": Mana2R,
  "2/G": Mana2G,
  "W/U": ManaWU,
  "W/B": ManaWB,
  "U/B": ManaUB,
  "U/R": ManaUR,
  "B/R": ManaBR,
  "B/G": ManaBG,
  "R/G": ManaRG,
  "R/W": ManaRW,
  "G/W": ManaGW,
  "G/U": ManaGU,
  "S": ManaS,
  "X": ManaX,
  "Y": ManaY,
  "Z": ManaZ,
  "0": Mana0,
  "1": Mana1,
  "2": Mana2,
  "3": Mana3,
  "4": Mana4,
  "5": Mana5,
  "6": Mana6,
  "7": Mana7,
  "8": Mana8,
  "9": Mana9,
  "10": Mana10,
  "11": Mana11,
  "12": Mana12,
  "13": Mana13,
  "14": Mana14,
  "15": Mana15,
  "16": Mana16,
  "17": Mana17,
  "18": Mana18,
  "19": Mana19,
  "20": Mana20,
}

interface IManaSymbolProps {
  symbol: ManaT
  size?: number
  className?: string
}

export default function ManaSymbol({
  symbol,
  size = 100,
  className = "",
}: IManaSymbolProps) {
  const Component = StringToComponent[symbol]

  return <Component width={size} height={size} className={className} />
}
