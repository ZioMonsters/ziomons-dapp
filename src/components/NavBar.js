import React, { Component } from "react"
import { Navbar, Nav, NavItem, Image, Row, Grid } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { drizzleConnect } from "drizzle-react"
import { withRouter } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

class NavBar extends Component {
  render() {
    const { account, balance, location: { pathname }, isLoaded } = this.props
    return (
      <Navbar className = { pathname.split("/")[1] }>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to = { "/" }>
              <img src = { logo } />
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        {
          isLoaded &&
          <Nav pullRight>
            <NavItem className = { "user-info" }>
              <span style = {{ "padding-top": "5px" }}><strong>Address:</strong> { account }</span>
              <span><strong>Balance:</strong> { balance }</span>
            </NavItem>
          </Nav>
        }
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
  return {
    isLoaded: state.drizzleStatus.initialized
  }
}

export default withRouter(drizzleConnect(NavBar, mapStateToProps))
