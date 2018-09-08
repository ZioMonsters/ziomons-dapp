import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import ReactSVG from "react-svg"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

let monsterImage
const Home = ({ isLoaded }) => {
  if (typeof monsterImage === "undefined") {
    monsterImage = require(`../assets/monsters/${new Date().getTime() % 18}.svg`)
  }
  return (
    <Grid fluid className = { "home margin" }>
      <h1>Welcome to Ziomons</h1>
      <Row>
        <ReactSVG src = { monsterImage } />
      </Row>
      <Row className = { "quote" }>
        <blockquote>
          <p>"Ziomons is a ETH blockchain based game which uses ERC721 (NFT) tokens that allows you to fight other Ziomons trainer worldwide. Bet your ETH on your fights and grow your ETH pfolio!"</p>
          <footer><cite>A game made by <Link to = { "/about-us" }>kids</Link> but NOT for kids</cite></footer>
        </blockquote>
      </Row>
      <Row>
        {
          isLoaded ?
            <LinkContainer to = {"/unbox" }>
              <Button className = { "cryptomon-button" }>Unbox your first monsters</Button>
            </LinkContainer> : <Button className = { "cryptomon-button fixed" }>Login with Metamask on Rinkeby blockchain</Button>
        }
      </Row>
      <Row className = { "features" }>
        <h3>How does it work</h3>
        <ul>
          <li>Purchase a Ziomons blister and unpack your ZM to setup a team</li>
          <li>Look for a challenger: place your bet and match with another trainer! Your ZM will fight and the winner recieves a prize propotioned to the bet made.</li>
          <li>Train your ZM to make them stronger on the battlefield</li>
          <li>Arrange your team to be able to win all battles!</li>
        </ul>
      </Row>
      <Row className = {"info"}>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/the-game"}>
            <Button className = { "cryptomon-button" }>
              The Game
            </Button>
          </LinkContainer>
        </Col>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/about-us"}>
            <Button className = { "cryptomon-button" }>
              About us
            </Button>
          </LinkContainer>
        </Col>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/tech"}>
            <Button className = { "cryptomon-button" }>
              Tech
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    account: state.accounts[0],
    isLoaded: state.drizzleStatus.initialized
  }
}

export default drizzleConnect(Home, mapStateToProps)
