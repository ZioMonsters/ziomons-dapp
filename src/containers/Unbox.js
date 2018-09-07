import React, { Component } from "react"
import { Row, Col, Image, Grid } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"
import maxi from "../assets/packs/maxi.jpg"
import plus from "../assets/packs/plus.jpg"
import standard from "../assets/packs/standard.jpg"

// Web3 initializion -- ONLY FOR TESTING 
import Web3 from 'web3'
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

const values = {
  standard: 2,
  plus: 5,
  maxi: 8
}

class Unbox extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon
    console.log('contract',this.contract)
  }

  unbox = pack => {
    const { address } = this.props
    // todo perche non funziona
    this.contract.methods.unbox.cacheSend({ from: address, value: values[pack], gas: 1055638*5 })
  }

  render() {
    return (
      <Grid className = { "unbox" }>
        <h1>Unbox</h1>
        <Row>
          <Col md = { 4 }>
            <Image
              src = { standard }
              responsive
              onClick = { () => this.unbox("standard") }
            />
          </Col>
          <Col md = { 4 }>
            <Image
              src = { plus }
              responsive
              onClick = { () => this.unbox("plus") }
            />
          </Col>
          <Col md = { 4 }>
            <Image
              src = { maxi }
              responsive
              onClick = { () => this.unbox("maxi") }
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  const [account, balance] = Object.entries(state.accountBalances)[0]
  return {
    ...state,
    account,
    balance
  }
}

export default drizzleConnect(Unbox, mapStateToProps)
