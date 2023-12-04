import { Link } from "react-router-dom"

import Logo from "~/assets/icons/Logo"

export default function HomeLink() {
  return (
    <Link to="/">
      <Logo />
    </Link>
  )
}
