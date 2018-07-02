import React, { Component } from "react"
import { Navbar, Nav, NavItem, Image, Row, Grid } from "react-bootstrap"
import logo from "../assets/logo/logo.svg"
import {drizzleConnect} from "drizzle-react"

class NavBar extends Component {
  render() {
    const { account, balance } = this.props
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              <Image
                src = { logo }
                responsive
              />
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <span>Address: { account }</span>
            <span>Balance: { balance }</span>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  const [ account, balance ] = state.accountBalances ? Object.entries(state.accountBalances)[0] : []
  return {
    account,
    balance
  }
}

export default drizzleConnect(NavBar, mapStateToProps)
