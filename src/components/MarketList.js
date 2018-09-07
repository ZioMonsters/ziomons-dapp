import React, { Component } from "react"
import { Row, Col, Button, Image } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"
import { getAddress } from "../selectors"

// Assets importing
import placeholderImg from "../assets/placeholder/placeholder.svg"

const placeholder = <Image src = { placeholderImg } />

class MarketList extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  state = {
    ids: [],
    prices: []
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon;
  }

  componentDidMount() {
    this.contract.methods.totalSupply().call()
      .then(totalSupply => {
        for (let i = 0; i < totalSupply; i++) {
          this.contract.methods.inSale(i).call()
            .then(price => {
              if (+price) {
                this.setState({
                  ids: [...this.state.ids, +i],
                  prices: [...this.state.prices, +price]
                })
              }
            })
        }
      })
  }

  buyMonster(index, price) {
    this.contract.methods.buyMonster.cacheSend(this.state.ids[index], {value: price})
  }

  render() {
    const prices = this.state.prices, monstersPerRow = 4, rows = []
    for (let i = 0; i < prices.length; i += monstersPerRow) {
      rows.push(prices.slice(i, i + monstersPerRow))
    }
    return (
      <Col md = { 8 } className = { "marketList" }>
        {
          rows.map((prices, row) => 
            [
              <Row>
              {
                prices.map(() => 
                  <Col md = { 3 }>{ placeholder }</Col>
                )
              }
              </Row>,
              <Row>
              {
                prices.map((price, index) => 
                  <Col md = { 3 }><Button onClick = { () => this.buyMonster(index + row*4, prices[index]) }>{ price } WEI</Button></Col>
                )
              }
              </Row>
            ]
          )
        }
      </Col>
    )
  }
}

export default MarketList