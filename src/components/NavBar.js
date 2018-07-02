import React, { Component } from "react"
import { Navbar, Nav, NavItem, Image, Row, Grid } from "react-bootstrap"
import logo from "../assets/logo/logo.svg"
import { drizzleConnect } from "drizzle-react"
import Notifications from "./Notifications"
import { withRouter, Link } from "react-router-dom"

class NavBar extends Component {
  render() {
    const { account, balance, location: { pathname } } = this.props
    return (
      <Navbar className = { pathname.split("/")[1] }>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to = { "/user" }>
              <object data = { logo } type="image/svg+xml" />
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem className = { "user-info" }>
            <span>Address: { account }</span>
            <span>Balance: { balance }</span>
          </NavItem>
          <Notifications />
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  if (state.drizzleStatus.initialized) {
    const [account, balance] = Object.entries(state.accountBalances)[0]
    return {
      account,
      balance
    }
  }
  return {}
}

export default withRouter(drizzleConnect(NavBar, mapStateToProps))
