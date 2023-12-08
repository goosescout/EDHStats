import { IManaIconProps } from "~/assets/icons/mana/types"

export default function Mana4({
  width = 100,
  height = 100,
  className = "",
}: IManaIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
        fill="#CAC5C0"
      />
      <path
        d="M64.27 67.361V74.084C64.27 81.768 66.965 85.609 72.364 85.609H74.694V90.003H42.036V85.609H44.643C49.946 85.609 52.604 81.811 52.604 74.217V67.361H19.809V60.5L54.387 10.003H64.27V61.595H65.09C68.473 61.595 70.942 58.987 72.498 53.779H76.613L74.693 67.362L64.27 67.361ZM52.604 61.595V20.137L24.711 61.595H52.604Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}
