import { IManaIconProps } from "~/assets/icons/mana/types"

export default function ManaWP({
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
        d="M50 100.002C77.6142 100.002 100 77.6162 100 50.002C100 22.3878 77.6142 0.00201416 50 0.00201416C22.3858 0.00201416 0 22.3878 0 50.002C0 77.6162 22.3858 100.002 50 100.002Z"
        fill="#F8F6D8"
      />
      <path
        d="M77.563 49.927C77.621 44.583 75.923 39.188 72.596 34.999C70.988 33.228 69.666 31.212 67.963 29.538C64.209 25.812 58.588 25.564 54.066 23.217C53.803 20.86 52.941 18.502 53.463 16.124C53.622 15.333 53.855 14.531 53.434 13.775C52.248 11.043 53.267 8.077 53.056 5.228C52.898 3.74 52.999 1.919 51.582 1C51.252 4.097 50.113 6.979 49.19 9.918C48.764 12.208 48.764 14.594 47.777 16.754C48.403 18.942 47.163 20.784 45.821 22.4C42.855 23.92 39.325 24.281 36.744 26.51C34.903 28.072 32.916 29.441 30.856 30.712C29.311 32.646 27.6 34.509 26.912 36.952C24.15 40.287 23.824 44.763 22.258 48.669C22.229 54.468 23.404 60.712 27.108 65.36C29.758 67.548 31.61 70.491 34.256 72.68C36.796 74.196 39.507 75.442 42.13 76.807C43.84 77.205 45.605 77.401 47.306 77.866C48.686 84.975 49.628 92.257 52.398 98.999C53.317 96.231 53.206 93.265 53.999 90.468C55.117 86.332 52.823 82.027 54.116 77.967C56.054 76.234 59.286 77.359 61.436 75.872C65.528 73.349 69.858 70.892 72.826 67.032C73.931 64.813 76.252 63.155 76.252 60.493C76.271 56.908 78.362 53.551 77.563 49.927ZM47.19 71.857C44.225 71.136 41.463 69.718 38.976 67.986C36.3 66.203 35.302 62.876 32.662 61.052C30.19 58.101 30.725 54.07 29.712 50.576C30.118 48.138 30.597 45.72 30.85 43.251C32.056 41.295 33.917 39.735 34.433 37.381C36.2 34.849 38.891 33.097 41.052 30.902C42.624 29.089 45.126 29.853 47.191 29.783C46.986 31.783 46.823 33.851 47.324 35.824C47.568 37.036 48.115 38.23 47.928 39.5C47.514 42.199 48.527 44.906 47.811 47.574C46.368 53.152 47.942 58.783 48.079 64.406C47.873 66.897 47.757 69.406 47.19 71.857ZM69.667 61.287C67.703 62.683 66.03 64.398 64.316 66.072C61.337 68.132 58.393 70.312 54.847 71.342C55.167 68.813 55.479 66.211 54.673 63.735C52.695 58.141 55.119 52.29 55.528 46.633C55.167 43.27 55.512 39.682 53.97 36.584C53.768 34.257 54.774 32.01 55.456 29.82C57.798 30.755 60.003 32.017 61.952 33.64C64.306 35.404 67.912 36.548 68.439 39.838C68.708 41.999 71.073 43.306 71.004 45.517C70.856 50.773 71.581 56.27 69.667 61.287Z"
        fill="#111212"
      />
    </svg>
  )
}
