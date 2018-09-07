import React, { Component } from "react"
import { Grid, Col, Row } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import MarketList from "../components/MarketList.js"
import { getAddress } from "../selectors"

class Market extends Component {

  render() {
    return (
      <Grid className = { "market" }>
        <h1><strong>Market</strong></h1>
        <Row>
          <MarketList />
          <Col md = { 4 } className = { "filters" } >FILTERS</Col>
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
