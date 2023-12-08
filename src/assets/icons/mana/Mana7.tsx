import { IManaIconProps } from "~/assets/icons/mana/types"

export default function Mana7({
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
        d="M53.494 90.002H41.851V88.764C41.851 81.368 44.179 72.105 48.831 60.956C55.866 44.157 62.351 31.283 68.284 22.332L69.106 21.1H41.85C37.92 21.1 34.93 21.919 32.875 23.563C30.816 25.208 29.293 27.95 28.289 31.785H23.769L28.695 10.003H31.576C33.31 10.917 36.318 11.374 40.617 11.374H76.226V17.539C74.951 19.368 73.308 22.289 71.3 26.307C67.462 33.792 63.948 42.515 60.747 52.47C56.004 67.172 53.584 79.679 53.494 90.002Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}
