import React from "react"

import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import App from "@/App"
import { makeReduxStore } from "@/store/store"

const store = makeReduxStore()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Web">
      <HelmetProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
)
