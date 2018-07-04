import React, { Component } from "react"
import { Grid, Row, Col, Button, Image } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"
import { getAddress } from "../selectors"

//Assets importing
import placeholderImg from "../assets/placeholder.png"
const placeholder = <Image src = { placeholderImg } />

class MonstersSelector extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  state = {
    monsters: []
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon;
  }

  componentDidMount() {
    this.contract.methods.totalSupply().call()
      .then(totalSupply => {
        for (let i = 0; i < totalSupply; i++) {
          this.contract.methods.ownerOf(i).call()
            .then(owner => {
              if (owner === this.props.account) {
                return this.contract.methods.monsters(i).call()
              }
            })
            .then(monster => {
              if(monster) {
                this.setState({
                  monsters: [...this.state.monsters, monster]
                })
              }
            })
        }
      })
    setTimeout(() => console.log(this.state.monsters.length), 10000)
  }

  render() {
    return (
      <Row>
      <Col>{ placeholder }</Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
}

export default drizzleConnect(MonstersSelector, mapStateToProps)