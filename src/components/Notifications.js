import React, { Component } from "react"
import { NavDropdown, MenuItem } from "react-bootstrap"
import NotificationsContext from "./NotificationsContext.js"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"
import {getAddress} from "../selectors"


class Notifications extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  constructor(props, context) {
    super(props)
    context.drizzle.contracts.CryptoMon.methods.monsters.cacheCall(props.account)
    // console.log("context.drizzle.contracts.CryptoMon.methods", context.drizzle.contracts.CryptoMon.methods)
  }

  render() {
    return (
      <NavDropdown title="Notifications">
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
