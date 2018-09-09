//Node modules
import React, { Component } from "react"
import { Row, Col, Image, Grid } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"

//Assets
import maxi from "../assets/packs/maxi.jpg"
import plus from "../assets/packs/plus.jpg"
import standard from "../assets/packs/standard.jpg"

//Pack prices
const values = {
  standard: 2500,
  plus: 12500,
  maxi: 37500
}

class Unbox extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon
  }

  unbox = pack => {
<<<<<<< HEAD
    const { account } = this.props
    this.contract.methods.unbox.cacheSend({ from: account, value: values[pack], gas: 1055638*5 })
=======
    const { address } = this.props
    this.contract.methods.unbox.cacheSend({ from: address, value: values[pack] * (10**12), gas: 1055638*5 })
>>>>>>> 5661e5d00eb719c47a4069b2d56a8bf194198f9c
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
