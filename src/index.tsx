import React from "react"

import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { Provider as ReduxProvider } from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import App from "@/App"
import routes from "@/pages"
import { makeReduxStore } from "@/store/store"

const store = makeReduxStore()

const router = createBrowserRouter([{ Component: App, children: routes }], {
  basename: import.meta.env.BASE_URL,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
)
