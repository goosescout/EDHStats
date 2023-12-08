import { RouteObject } from "react-router-dom"

import Commanders from "@/pages/Commanders"
import NotFound from "@/pages/NotFound"

const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => <>Home</>,
  },
  {
    path: "/commanders",
    Component: Commanders,
  },
  {
    path: "/card-choices",
    Component: () => <>Card choices</>,
  },
  {
    path: "*",
    Component: NotFound,
  },
]

export default routes
