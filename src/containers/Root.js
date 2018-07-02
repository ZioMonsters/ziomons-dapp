import React from "react"
import { DrizzleProvider } from "drizzle-react"
import App from "../containers/App.js"
import CryptoMon from "../contracts/CryptoMon.json"

const options = {
  contracts: [
    CryptoMon
  ],
  syncAlways: true
}

const Root = () =>
  <DrizzleProvider options = { options }>
    <App />
  </DrizzleProvider>

export default Root
