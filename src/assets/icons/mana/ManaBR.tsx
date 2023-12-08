import { IManaIconProps } from "~/assets/icons/mana/types"

export default function ManaBR({
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
        d="M85.349 14.639C94.401 23.69 100 36.19 100 49.999C100 77.615 77.613 100.002 50 100.002C36.193 100.002 23.695 94.406 14.646 85.356"
        fill="#E49977"
      />
      <path
        d="M14.646 85.356C5.597 76.309 0 63.807 0 50C0 22.387 22.387 0.00299072 50 0.00299072C63.802 0.00299072 76.301 5.59699 85.349 14.64"
        fill="#BAB1AB"
      />
      <path
        d="M88.2999 74.441C86.5819 78.541 83.1699 80.587 78.0599 80.587C77.1229 80.587 76.1079 80.702 75.0159 80.937C73.3769 81.29 72.558 81.777 72.558 82.402C72.558 82.597 72.6939 82.82 72.9679 83.076C73.2389 83.329 73.4759 83.457 73.6709 83.457C72.6939 83.457 73.3569 83.486 75.6579 83.542C77.9609 83.602 79.4049 83.631 79.9909 83.631C76.5969 85.62 70.9209 86.537 62.9619 86.381C60.3479 86.344 58.1049 85.193 56.2329 82.93C54.3979 80.784 53.4819 78.385 53.4819 75.733C53.4819 72.923 54.428 70.535 56.321 68.563C58.211 66.595 60.5629 65.61 63.3719 65.61C63.9949 65.61 64.8249 65.747 65.8579 66.018C66.8919 66.291 67.5849 66.428 67.9349 66.428C69.3789 66.428 71.1739 65.831 73.3199 64.643C75.4659 63.454 76.4799 62.858 76.3629 62.858C75.9719 66.955 74.6069 69.707 72.2659 71.108C70.5879 72.086 69.7499 73.042 69.7499 73.975C69.7499 74.561 70.0999 75.03 70.8019 75.381C71.3479 75.652 71.9529 75.789 72.6169 75.789C73.6309 75.789 74.625 75.166 75.601 73.917C76.575 72.67 77.0039 71.538 76.8869 70.523C76.7709 69.351 76.8499 67.947 77.1219 66.31C77.1989 65.84 77.4829 65.265 77.9699 64.583C78.4579 63.899 78.8979 63.479 79.2869 63.321C79.2869 63.675 79.16 64.26 78.907 65.077C78.653 65.897 78.5269 66.504 78.5269 66.891C78.5269 67.751 78.761 68.414 79.2299 68.881C79.931 68.61 80.5539 67.731 81.1019 66.247C81.5699 65.117 81.8419 64.023 81.9219 62.973C80.2819 62.895 78.7109 62.153 77.2109 60.746C75.7099 59.342 74.959 57.821 74.959 56.183C74.959 55.912 74.9959 55.636 75.0759 55.364C75.3079 55.717 75.6589 56.263 76.1289 57.004C76.7909 57.979 77.2989 58.467 77.6499 58.467C78.1179 58.467 78.3519 57.979 78.3519 57.004C78.3519 55.755 78.0199 54.624 77.3569 53.609C76.6139 52.398 75.6579 51.795 74.4899 51.795C73.9419 51.795 73.124 52.087 72.032 52.673C70.939 53.257 69.944 53.551 69.049 53.551C68.776 53.551 67.565 53.198 65.42 52.497C69.203 51.872 71.0959 51.307 71.0959 50.798C71.0959 49.473 68.5019 48.575 63.3129 48.11C62.8049 48.071 61.8699 47.993 60.5039 47.875C60.6589 47.681 61.7719 47.468 63.8399 47.231C65.5949 47.039 66.8229 46.938 67.5249 46.938C76.8099 46.938 82.6999 51.444 85.1979 60.459C85.6289 60.101 85.8439 59.509 85.8439 58.679C85.8439 57.611 85.5309 56.267 84.9059 54.646C84.6709 54.011 84.2989 53.062 83.7929 51.797C86.9909 55.872 88.5929 59.735 88.5929 63.38C88.5929 65.302 88.1419 67.047 87.2449 68.612C86.6619 69.671 85.5669 71.022 83.9689 72.671C82.3689 74.316 81.2779 75.59 80.6919 76.492C82.8379 75.906 84.2429 75.457 84.9059 75.145C86.3869 74.481 87.7339 73.485 88.9429 72.16C88.9429 72.67 88.7279 73.432 88.2999 74.441ZM62.7859 51.445C62.7859 52.146 62.3949 52.597 61.6159 52.793L60.0949 53.025C59.5479 53.297 58.7479 54.373 57.6969 56.244C57.5779 55.66 57.4039 54.841 57.1689 53.787C56.8179 53.824 56.2339 54.139 55.4139 54.723C55.0629 54.996 54.4969 55.407 53.7149 55.952C53.9499 54.549 54.7319 53.126 56.0569 51.681C57.4609 50.083 58.827 49.285 60.153 49.285C61.908 49.283 62.7859 50.004 62.7859 51.445ZM72.9679 56.83C72.9679 57.492 72.6069 58.05 71.8849 58.498C71.1629 58.945 70.4509 59.171 69.7499 59.171C68.8119 59.171 67.9729 58.647 67.2329 57.59C66.3349 56.305 65.4189 55.465 64.4829 55.074C64.6769 54.879 64.912 54.781 65.187 54.781C65.536 54.781 66.1309 55.052 66.9699 55.599C67.8069 56.148 68.3449 56.419 68.5799 56.419C68.7749 56.419 69.0959 56.148 69.5439 55.599C69.9919 55.052 70.4899 54.781 71.0369 54.781C72.3249 54.781 72.9679 55.465 72.9679 56.83Z"
        fill="#0D0F0F"
      />
      <path
        d="M53.257 28.113C53.257 30.814 52.275 32.656 50.309 33.638C49.735 33.925 47.936 34.316 44.906 34.804C42.942 35.133 41.96 35.892 41.96 37.075V42.048C41.96 42.257 42.023 42.89 42.144 43.954L42.329 45.919C42.329 46.532 42.185 47.536 41.898 48.927C41.121 49.09 40.22 49.275 39.198 49.482C38.869 48.253 38.707 47.413 38.707 46.962C38.707 46.759 38.757 46.45 38.859 46.041C38.961 45.633 39.013 45.325 39.013 45.12C39.013 44.836 38.76 44.036 38.251 42.727H37.298C37.172 42.93 37.131 43.196 37.171 43.522C37.336 44.218 37.396 44.811 37.356 45.303C36.659 45.794 35.699 46.449 34.471 47.268C34.182 47.186 34.082 47.145 34.163 47.145V42.786C34.081 42.584 33.877 42.501 33.549 42.541H32.812L32.075 48.312C31.502 48.353 30.807 48.353 29.989 48.312C29.702 46.962 29.19 44.958 28.455 42.297H27.962C27.512 43.73 27.266 44.507 27.225 44.63C27.225 44.793 27.277 45.11 27.38 45.581C27.481 46.052 27.532 46.368 27.532 46.532C27.532 46.653 27.49 46.962 27.407 47.453L27.224 48.927C27.141 49.007 27.04 49.048 26.917 49.048C25.689 49.048 24.869 48.742 24.462 48.129C24.051 47.515 23.886 46.653 23.969 45.549L24.462 38.183C24.462 38.062 24.501 37.898 24.583 37.691C24.665 37.488 24.706 37.343 24.706 37.263C24.706 36.935 24.358 36.279 23.663 35.296C23.54 35.257 22.905 35.112 21.759 34.866C21.063 34.703 19.692 34.416 17.647 34.008C14.823 33.478 13.41 31.205 13.41 27.193C13.41 21.216 15.866 16.245 20.777 12.275C20.981 13.38 21.33 14.851 21.821 16.693C22.189 16.779 22.988 16.963 24.215 17.248C24.462 17.329 25.71 17.781 27.96 18.6C26.814 17.905 25.32 16.78 23.48 15.223C22.783 14.405 22.434 13.034 22.434 11.11C22.434 10.66 23.212 10.129 24.769 9.51101C26.16 8.94001 27.203 8.61401 27.9 8.53201C30.109 8.24601 31.808 8.10001 32.996 8.10001C38.111 8.10001 42.245 9.41201 45.397 12.032C44.375 13.22 42.614 14.485 40.118 15.839C41.1 15.88 42.533 15.491 44.416 14.671C46.298 13.855 47.096 13.444 46.81 13.444C47.137 13.444 47.792 14.098 48.775 15.407C49.51 16.389 50.104 17.272 50.555 18.048C51.865 20.381 52.745 22.9 53.196 25.601C53.196 26.542 53.216 27.217 53.257 27.625V28.113ZM29.741 29.221C29.741 27.46 28.974 25.792 27.44 24.215C25.904 22.639 24.256 21.852 22.497 21.852C20.942 21.852 19.572 22.512 18.383 23.83C17.196 25.149 16.603 26.612 16.603 28.219C16.603 29.62 17.278 30.529 18.63 30.939C19.489 31.187 20.695 31.331 22.251 31.373H25.627C28.369 31.409 29.741 30.691 29.741 29.221ZM36.433 36.833V34.932C36.147 34.399 35.86 33.845 35.575 33.272C35.329 32.455 34.878 31.309 34.224 29.833L33.548 37.019C33.548 37.593 33.427 37.878 33.18 37.878C33.017 37.878 32.893 37.838 32.811 37.756C32.524 33.417 32.382 31.532 32.382 32.109V29.961C32.299 29.835 32.197 29.773 32.074 29.773C30.683 31.21 29.988 33.521 29.988 36.711C29.988 38.472 30.151 39.556 30.478 39.968C30.807 39.885 31.173 39.742 31.585 39.537C31.748 39.454 32.218 39.414 32.997 39.414C33.772 39.414 34.716 39.66 35.82 40.149C36.229 40.148 36.433 39.044 36.433 36.833ZM50.309 28.277C50.309 26.631 49.695 25.159 48.467 23.859C47.238 22.562 45.827 21.914 44.232 21.914C42.513 21.914 40.904 22.701 39.411 24.277C37.917 25.851 37.169 27.5 37.169 29.219C37.169 30.652 37.866 31.367 39.257 31.367H46.317C48.979 31.327 50.309 30.299 50.309 28.277Z"
        fill="#0D0F0F"
      />
    </svg>
  )
}
