import { IManaIconProps } from "~/assets/icons/mana/types"

export default function ManaG({
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
        d="M100 50C100 77.615 77.615 100.002 49.998 100.002C22.385 100.002 0 77.615 0 50C0 22.387 22.385 0.0019989 49.998 0.0019989C77.615 0.0019989 100 22.387 100 50Z"
        fill="#A3C095"
      />
      <path
        d="M93.762 56.227C93.762 57.895 93.117 59.391 91.826 60.725C90.537 62.057 89.056 62.723 87.39 62.723C84.728 62.723 82.767 61.473 81.521 58.975L75.65 58.725C74.398 58.725 71.941 59.268 68.279 60.35C64.365 61.432 62.115 62.307 61.533 62.973C60.617 63.971 59.869 66.305 59.285 69.969C58.783 72.967 58.537 75.174 58.537 76.59C58.537 78.836 58.889 80.483 59.598 81.524C60.307 82.565 61.764 83.44 63.969 84.147C66.174 84.854 67.53 85.251 68.03 85.334C68.362 85.334 68.903 85.293 69.655 85.209H71.153C72.233 85.209 73.358 85.379 74.526 85.709C76.192 86.209 76.901 86.875 76.651 87.709C75.483 87.543 73.444 87.793 70.53 88.459L74.026 90.207C74.026 91.207 72.61 91.705 69.78 91.705C69.028 91.705 68.009 91.539 66.717 91.207C65.426 90.871 64.572 90.707 64.158 90.707H62.533C62.451 91.539 62.199 92.787 61.783 94.453C60.365 94.369 58.703 93.535 56.787 91.955C54.869 90.375 53.664 89.582 53.166 89.582C52.664 89.582 51.955 90.375 51.041 91.955C50.123 93.535 49.666 94.619 49.666 95.203C48.584 94.619 47.67 93.535 46.916 91.955C46.584 90.871 46.209 89.789 45.795 88.707C44.963 88.791 43.42 90.541 41.174 93.955H40.547C40.381 93.703 39.752 91.955 38.674 88.707C36.092 87.875 33.678 87.459 31.428 87.459C30.346 87.459 28.68 87.709 26.432 88.207L22.936 87.959C23.434 87.459 24.891 86.502 27.307 85.086C30.137 83.42 32.303 82.586 33.803 82.586C34.049 82.586 34.381 82.629 34.803 82.711C35.217 82.797 35.553 82.836 35.803 82.836C36.381 82.836 37.321 82.524 38.612 81.898C39.903 81.275 40.651 80.712 40.858 80.214C41.069 79.71 41.174 78.421 41.174 76.339C41.174 71.593 39.924 68.054 37.424 65.722C35.256 63.64 31.678 62.142 26.68 61.224C25.348 65.97 21.6 68.347 15.44 68.347C13.44 68.347 11.442 67.14 9.444 64.724C7.448 62.308 6.448 60.101 6.448 58.103C6.448 55.021 7.735 52.482 10.317 50.48C8.237 48.318 7.196 46.111 7.196 43.863C7.196 41.779 7.839 39.949 9.132 38.363C10.423 36.785 12.109 35.867 14.191 35.615C14.025 32.953 14.898 31.119 16.814 30.119C15.898 29.205 15.441 27.582 15.441 25.25C15.441 22.502 16.357 20.211 18.189 18.379C20.019 16.547 22.31 15.629 25.058 15.629C28.058 15.629 30.515 16.674 32.429 18.754C34.845 10.51 40.05 6.38699 48.042 6.38699C52.206 6.38699 55.87 8.05299 59.036 11.385C60.202 12.633 60.784 13.301 60.784 13.381C59.784 13.381 60.286 13.193 62.284 12.82C64.28 12.445 65.737 12.257 66.657 12.257C69.903 12.257 72.776 13.464 75.276 15.88C77.44 18.046 78.94 20.792 79.774 24.124C80.354 24.208 81.272 24.456 82.522 24.872C84.352 25.792 85.27 27.37 85.27 29.62C85.27 30.038 84.934 30.829 84.27 31.993C89.598 34.991 92.264 39.155 92.264 44.485C92.264 45.983 91.682 48.069 90.516 50.732C92.682 51.979 93.762 53.813 93.762 56.227ZM42.295 61.723V60.1C42.295 58.186 41.359 56.436 39.486 54.854C37.611 53.272 35.716 52.481 33.802 52.481C31.468 52.481 29.306 53.022 27.306 54.102C31.719 53.854 36.717 56.395 42.295 61.723ZM40.049 46.234C38.799 44.816 37.717 43.359 36.799 41.861C33.301 42.777 31.553 43.818 31.553 44.982C32.553 44.902 34.01 45.087 35.924 45.546C37.838 46.005 39.215 46.234 40.049 46.234ZM47.67 42.361V36.865C45.67 36.533 44.459 36.365 44.047 36.365V38.238L47.67 42.361ZM63.908 38.863C62.908 38.447 61.033 37.613 58.287 36.365V47.107C62.199 44.857 64.072 42.109 63.908 38.863ZM70.775 53.604L68.029 50.231C66.365 51.398 64.677 52.585 62.968 53.792C61.259 54.999 59.782 56.355 58.536 57.852C62.283 55.85 66.365 54.438 70.775 53.604Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}