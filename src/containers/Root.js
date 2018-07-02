import React, { Component } from "react"
import { DrizzleProvider } from "drizzle-react"
import App from "../containers/App.js"
import CryptoMon from "../contracts/CryptoMon.json"
import { BrowserRouter as Router } from "react-router-dom"
import history from "../helpers/history.js"
import NotificationsContext from "../components/NotificationsContext"

const options = {
  events: {
    CryptoMon: [
      "Transfer",
      "Unboxed"
    ]
  },
  contracts: [
    CryptoMon
  ],
  syncAlways: true
}

class Root extends Component {
  state = {
    list: []
  }
  updateList = list => this.setState({ list })
  render() {
    const { updateList, state: { list } } = this
    return (
      <DrizzleProvider options = { options }>
        <Router history = { history }>
          <NotificationsContext.Provider value = {{
            updateList,
            list
          }}>
            <App />
          </NotificationsContext.Provider>
        </Router>
      </DrizzleProvider>
    )
  }
}

export default Root
