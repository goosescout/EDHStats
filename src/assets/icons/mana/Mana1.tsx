import { IManaIconProps } from "~/assets/icons/mana/types"

export default function Mana1({
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
        d="M55.6851 10.003V74.111C55.6851 81.782 58.9111 85.615 65.3721 85.615H67.0561V90.003H32.9451V85.615H35.0861C41.3331 85.615 44.4551 81.782 44.4551 74.111V32.057C44.4551 24.299 41.7581 20.414 36.3741 20.414H32.9451V16.167H34.1821C40.8421 16.167 46.8731 14.11 52.2621 10.002L55.6851 10.003Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}
