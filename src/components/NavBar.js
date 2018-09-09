import React, { Component } from "react"
import { Navbar, Nav, NavItem, Image, Row, Grid } from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import { drizzleConnect } from "drizzle-react"
import { withRouter } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
const { apiUrl } = require("../config.json")

class NavBar extends Component {
  state = {
    newPlayer: true
  }

  UNSAFE_componentWillReceiveProps({ isLoaded, account }) {
    if (isLoaded !== this.props.isLoaded) {
      const query = {
        limit: 1,
        address: account
      }
      return fetch(`${apiUrl}/listMonsters?params=${JSON.stringify(query)}`)
        .then(res => res.json())
        .then(({ count }) => {
          if (count) {
            this.setState({ newPlayer: false })
          }
        })
    }
  }
  render() {
    const { account, balance, location: { pathname }, isLoaded } = this.props
    return (
      <Navbar className = { pathname.split("/")[1] }>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to = { this.state.newPlayer ? "/" : "/user" }>
              <img src = { logo } />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        {
          this.state.newPlayer &&
          <Nav>
            <LinkContainer to = { "/the-game" }>
              <NavItem>The Game</NavItem>
            </LinkContainer>
            <LinkContainer to = { "/about-us" }>
              <NavItem>About us</NavItem>
            </LinkContainer>
            <LinkContainer to = { "/tech" }>
              <NavItem>Tech</NavItem>
            </LinkContainer>
          </Nav>
        }
        {
          isLoaded &&
          <Nav pullRight>
            <NavItem className = { "user-info" }>
              <span style = {{ "padding-top": "5px" }}><strong>Address:</strong> { account }</span>
              <span><strong>Balance:</strong> { balance }</span>
            </NavItem>
          </Nav>
        }
        </Navbar.Collapse>
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
