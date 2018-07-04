import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import { getAddress } from "../selectors"

//Components
import MonstersSelector from "../components/MonstersSelector.js"
import Team from "../components/Team.js"
import TeamPresets from "../components/TeamPresets.js"

// Web3 initializion -- ONLY FOR TESTING 
import Web3 from 'web3'
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

class Fight extends Component {
  render() {
    return (
      <Grid className = { "fight" } fluid>
        <h1><strong>Fight</strong></h1>
        <Row>
          <Col lg = { 4 } className = { "monsters-selector" } ><MonstersSelector /></Col>
          <Col lg = { 4 }><Team /></Col>
          <Col lg = { 4 }>3</Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
}

export default drizzleConnect(Fight, mapStateToProps)
