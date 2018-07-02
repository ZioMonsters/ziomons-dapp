import React, { Component } from "react"
import {drizzleConnect} from "drizzle-react"

class Home extends Component {
  componentWillReceiveProps({ account }) {
    if (account) {
      // redirect a pagina utente
    }
  }

  render() {
    return (
      <div className = { "home" }>
        <h1>Home</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts[0]
  }
}

export default drizzleConnect(Home, mapStateToProps)
