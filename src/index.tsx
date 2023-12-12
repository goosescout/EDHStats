import React from "react"

import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "@/App"
import routes from "@/pages"
import ReduxProvider from "@/pages/Commanders/Filters/ReduxProvider"

const router = createBrowserRouter([{ Component: App, children: routes }], {
  basename: import.meta.env.BASE_URL,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
)
