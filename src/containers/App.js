import React, { Component } from "react"
import logo from "../assets/logo/logo.svg"
import { drizzleConnect } from "drizzle-react"

const mapStateToProps = state => {
  return {
    state
  }
}

class App extends Component {
  render() {
    console.log("props", this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default drizzleConnect(App, mapStateToProps)
