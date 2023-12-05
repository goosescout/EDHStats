import { RouteObject } from "react-router-dom"

import NotFound from "@/pages/NotFound"

const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => <>Home</>,
  },
  {
    path: "/commanders",
    Component: () => <>Commanders</>,
  },
  {
    path: "/commanders/test",
    Component: () => <>Test 2</>,
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
