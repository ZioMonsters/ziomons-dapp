import React, { Component } from "react"
import { drizzleConnect } from "drizzle-react"
import NavBar from "../components/NavBar"

class App extends Component {
  render() {
    console.log("props", this.props)
    return (
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default drizzleConnect(App, mapStateToProps)
