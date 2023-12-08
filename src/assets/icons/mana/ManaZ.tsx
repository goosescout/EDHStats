import { IManaIconProps } from "~/assets/icons/mana/types"

export default function ManaZ({
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
        d="M100 50C100 77.615 77.616 100.002 50 100.002C22.387 100.002 0 77.615 0 50C0 22.387 22.387 0.0019989 50 0.0019989C77.616 0.0019989 100 22.387 100 50Z"
        fill="#C9C4BE"
      />
      <path
        d="M74.355 80.001H20.595V77.29L63.23 20.07H44.251C41.133 20.133 38.734 20.461 37.051 21.051C35.368 21.645 33.809 22.781 32.376 24.464C32.251 24.59 32.143 24.714 32.049 24.838C31.956 24.964 31.846 25.088 31.722 25.211C31.472 25.586 31.239 25.913 31.02 26.193C30.801 26.473 30.6 26.77 30.413 27.082C30.35 27.27 30.257 27.456 30.133 27.643C30.008 27.831 29.883 28.018 29.759 28.205C29.633 28.579 29.478 28.97 29.292 29.373C29.104 29.779 28.885 30.262 28.638 30.822L25.271 30.728V16.237H76.32V18.761L33.313 76.167H51.918C54.723 76.23 56.951 76.167 58.603 75.979C60.253 75.792 61.796 75.389 63.231 74.766C63.418 74.703 63.589 74.641 63.745 74.578C63.901 74.515 64.04 74.454 64.166 74.39C65.039 73.954 65.88 73.455 66.69 72.894C67.499 72.333 68.31 71.679 69.121 70.931C69.682 70.369 70.243 69.763 70.804 69.109C71.365 68.454 71.957 67.721 72.581 66.912L75.012 63.451H78.564L74.355 80.001Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}
