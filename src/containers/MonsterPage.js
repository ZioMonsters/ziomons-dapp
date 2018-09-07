import React, { Component } from "react"
import { Grid, Col, Image } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import { getAddress } from "../selectors"

import placeholder from "../assets/placeholder/placeholder.svg"

class MonsterPage extends Component {
  render() {
    return(
      <Grid fluid>
        <Col md = { 4 }>
          <Image src = { placeholder } />
          <div> { this.props.location.pathname } </div>
        </Col>
      </Grid>
    )
  } 
}

/*
const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
} 
*/

export default MonsterPage 