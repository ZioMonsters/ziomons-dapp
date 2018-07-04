import React, { Component } from "react"
import { Grid, Col, Row, Image, Button } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import MarketList from "../components/MarketList.js"
import { getAddress } from "../selectors"

// Web3 initializion -- ONLY FOR TESTING 
import Web3 from 'web3'
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

class Market extends Component {
  buyMonster(index, price) {
    this.contract.methods.buyMonster.cacheSend(this.state.ids[index], {value: price})
  }

  render() {
    return (
      <Grid className = { "market" }>
        <h1><strong>Market</strong></h1>
        <Row>
          <MarketList />
          <Col md = { 4 } className = { "filters" } >PORCO DIO</Col>
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

export default drizzleConnect(Market, mapStateToProps)
