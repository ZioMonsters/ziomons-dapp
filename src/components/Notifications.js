import React, { Component } from "react"
import { NavDropdown, MenuItem, Glyphicon } from "react-bootstrap"
import NotificationsContext from "./NotificationsContext.js"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"
import {getAddress} from "../selectors"
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

class Notifications extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon;
    this.contract.methods.totalSupply().call()
      .then(totalSupply => {
        for (let i = 0; i < totalSupply; i++) {
          this.contract.methods.monsters.cacheCall(i);
        }
      })
  }

  render() {
    return (
      <NavDropdown title = {
        <div style = {{ display: 'inline-block'}}>Notifications <Glyphicon glyph="bell" /></div>
      }>
        <NotificationsContext.Consumer>
          {
            ({ list }) => (
              list.map((item, index) => [
                <MenuItem>{ item.void && "" }</MenuItem>,
                <MenuItem divider />
              ])
            )
          }
        </NotificationsContext.Consumer>
      </NavDropdown>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
}

export default drizzleConnect(Notifications, mapStateToProps)
