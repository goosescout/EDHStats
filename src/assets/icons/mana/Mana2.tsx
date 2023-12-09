import { IManaIconProps } from "~/assets/icons/mana/types"

export default function Mana2({
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
        d="M77.442 70.105L71.546 90.003H22.5549V85.749C24.9349 83.097 30.1499 77.748 38.2009 69.696C43.0499 64.844 47.8499 59.724 52.6079 54.325C54.9859 51.674 56.8179 49.383 58.0949 47.463C60.9309 43.349 62.3499 39.143 62.3499 34.839C62.3499 30.635 61.049 26.927 58.442 23.727C55.835 20.523 52.4719 18.919 48.3519 18.919C39.4809 18.919 32.5289 24.917 27.4979 36.899L23.103 35.252C29.05 18.423 38.4239 10.003 51.2339 10.003C57.5469 10.003 62.9209 12.152 67.3579 16.451C71.7969 20.751 74.0139 26.055 74.0139 32.371C74.0139 40.423 69.3969 48.289 60.1559 55.972L50.5519 63.928C44.4209 69.055 39.3399 73.857 35.3209 78.34C35.0409 78.613 34.495 79.256 33.674 80.261H59.1949C63.1269 80.261 66.1019 79.485 68.1129 77.926C69.8479 76.554 71.5469 73.946 73.1929 70.105H77.442Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}