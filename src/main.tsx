import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles/tokens.css"

import { GlobalStyle } from "./globalStyles.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
